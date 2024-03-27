package com.example.routes

import com.example.models.auth.LoginForm
import io.ktor.server.application.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*

fun Route.adminRouting() {
    route("/admins") {
        get {
            call.respond(arrayOf("abc@avito.ru", "smth@avito.ru"))
        }
        post {
            val lol = call.receive<LoginForm>()
            call.respondText(lol.toString() + "\npost admin")
        }
        route("/{mail}") {
            get {
                call.respond(
                    LoginForm(
                        call.parameters["mail"] ?: "",
                        null
                    )
                )
            }
            put {
                val lol = call.receive<LoginForm>()
                call.respondText(lol.toString() + "\nput admin")
            }
        }
    }
}