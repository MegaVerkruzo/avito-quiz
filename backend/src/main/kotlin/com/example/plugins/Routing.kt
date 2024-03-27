package com.example.plugins

import com.example.routes.authRouting
import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.plugins.cors.routing.*
import io.ktor.server.plugins.statuspages.*
import io.ktor.server.response.*
import io.ktor.server.routing.*

fun Application.configureRouting() {
    install(CORS) {
        anyHost()
    }
    install(StatusPages) {
        exception<IllegalArgumentException> { call, cause ->
            call.respond(HttpStatusCode.BadRequest, Exception(cause.message))
        }
    }
    routing {
        route("/admin") {
            route("/auth/v1") {
                authRouting()
            }
        }
    }
//    routing {
//        get("/") {
//            throw IllegalArgumentException("noUser")
//            call.respond(ExcursionState("abc", "abcccname", listOf(ExcursionInfo("fw", "wfw"))))
//        }
//
//        get("/test1") {
//            val text = "{\"some\":      \"Hello From ktor\"}"
//            val type = ContentType.Application.Json
//            call.respondText(text, type)
//        }
//
//        get("/test2") {
//            call.respondText("allo", ContentType.Text.Html)
//        }
//
//    }
}
