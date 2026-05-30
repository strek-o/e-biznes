import ollama
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

OLLAMA_HOST = "http://localhost:11434"
MODEL = "llama3.2"

client = ollama.Client(host=OLLAMA_HOST)
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


class ChatRequest(BaseModel):
    message: str


class ChatResponse(BaseModel):
    response: str
    model: str


@app.get("/test")
def test():
    return {"status": "ok", "model": MODEL}


@app.post("/chat", response_model=ChatResponse)
def chat(req: ChatRequest):
    text = (req.message or "").strip()
    if not text:
        raise HTTPException(status_code=400, detail='"message" cannot be empty')

    try:
        result = client.chat(
            model=MODEL,
            messages=[{"role": "user", "content": text}],
        )
    except Exception as exc:
        raise HTTPException(status_code=502, detail=f"error: {exc}")

    answer = result.message.content or ""
    return ChatResponse(response=answer.strip(), model=MODEL)


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
