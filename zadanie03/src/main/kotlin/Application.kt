package com.example

import io.ktor.client.*
import io.ktor.client.engine.cio.*
import io.ktor.client.plugins.contentnegotiation.*
import io.ktor.client.request.*
import io.ktor.http.*
import io.ktor.serialization.kotlinx.json.*
import kotlinx.coroutines.runBlocking
import kotlinx.serialization.Serializable

@Serializable
data class App (val content: String)

fun main() = runBlocking {
    val client = HttpClient(CIO) {
        install(ContentNegotiation) {
            json()
        }
    }

    val webhookUrl = System.getenv("WEBHOOK_URL")

    print("message: ")
    System.out.flush()
    val content = readlnOrNull() ?: "TEST"
    val message = App(content)

    try {
        client.post(webhookUrl) {
            contentType(ContentType.Application.Json)
            setBody(message)
        }
        println("OK")
    } catch (e: Exception) {
        println("ERROR")
    } finally {
        client.close()
    }
}
