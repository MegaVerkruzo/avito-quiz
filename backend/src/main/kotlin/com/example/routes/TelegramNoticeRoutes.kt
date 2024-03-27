package com.example.routes

import com.example.models.notice.TelegramNotice
import io.ktor.server.application.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*

fun Route.telegramNoticeRouting() {
    post("/notice") {
        val lol = call.receive<TelegramNotice>()
        call.respondText(lol.toString() + "notice")
    }
}