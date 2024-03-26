package com.example.plugins

import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.plugins.statuspages.*
import io.ktor.server.response.*
import io.ktor.server.routing.*

fun Application.configureRouting() {
    install(StatusPages) {
        exception<IllegalArgumentException> { call, cause ->
            call.respondText(
                "{\"exception\": \"${cause.message}\"}",
                ContentType.Application.Json,
                HttpStatusCode.BadGateway
            )
        }
    }
    routing {
        get("/") {
            throw IllegalArgumentException("some")
//            call.respondText("Hello World!")
        }

        get("/test1") {
            val text = "{\"some\":      \"Hello From ktor\"}"
            val type = ContentType.Application.Json
            call.respondText(text, type)
        }

        get("/test2") {
            call.respondText("allo", ContentType.Text.Html)
        }

    }
}
