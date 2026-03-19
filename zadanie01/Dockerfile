FROM ubuntu:24.04

RUN apt-get update && \
    apt-get install -y openjdk-8-jdk curl unzip && \
    apt-get clean

RUN curl -s -L https://github.com/JetBrains/kotlin/releases/download/v2.3.20/kotlin-compiler-2.3.20.zip -o /tmp/kotlin.zip && \
    unzip /tmp/kotlin.zip -d /opt/ && \
    rm /tmp/kotlin.zip

ENV PATH="/opt/kotlinc/bin:${PATH}"

CMD ["bash", "-c", "java -version && kotlinc -version"]
