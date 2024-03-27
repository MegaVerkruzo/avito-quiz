package com.example.routes

import com.example.models.achievements.FullAchievement
import com.example.models.achievements.VisibleAchievement
import io.ktor.server.application.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*

fun Route.achievementRouting() {
    route("/achievement/{excursionId}") {
        get {
            call.respond(
                arrayOf(
                    VisibleAchievement("ach1", "Проигрышитель", 10, "some"),
                    VisibleAchievement("ach2", "Победитель", 20, "some"),
                )
            )
        }
        post {
            val lol = call.receive<FullAchievement>()
            call.respondText("post in excursion ach")
        }
        delete {
            call.respondText("delete all achievemenets")
        }
        route("/{achievementId}") {
            get {
                call.respond(FullAchievement("some", 24, ", lsdf","wefwfewf"))
            }
            put {
                val lol = call.receive<FullAchievement>()
                call.respondText("put in ach excursion")
            }
            delete {
                call.respondText("Delete something")
            }
        }
    }
}