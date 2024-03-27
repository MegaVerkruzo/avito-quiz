package com.example.routes

import com.example.models.settings.Settings
import io.ktor.server.application.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*

fun Route.settingsRouting() {
    route("/settings") {
        get {
            call.respond(
                Settings(
                    "Перед началом игры нам надо убедиться, что это ты. Введи 4-x значный код, который выдал тебе организатор игры. ",
                    intArrayOf(1, 2, 3, 4),
                    "Приветствуем тебя в нашей игре. В процессе игры тебе придется отвечать на вопросы с множественным выбором ответов. Прочитав задание, ты не сможешь больше вернуться к нему, так что читай вдумчиво. Ты готов?",
                    "Поздравляем! Ты стал таким-то",
                    "Ты как-то рано зашёл сюда",
                    null,
                    null
                )
            )
        }
        put {
            val lol = call.receive<Settings>()
            call.respond("Put on ${lol.helloText}")
        }
    }
}