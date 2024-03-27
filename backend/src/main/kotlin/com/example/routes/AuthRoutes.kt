package com.example.routes

import com.example.models.auth.LoginForm
import com.example.models.auth.Token
import io.ktor.server.application.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*

fun Route.authRouting() {
    get("/login") {
        val form = call.receive<LoginForm>()
        call.respond(Token("?someToken ${form.mail} + ${form.password}"))
    }
    get("/check") {
        val authorization = call.request.headers.get("authorization")
        call.respond(Token("?Some token $authorization"))
    }
}