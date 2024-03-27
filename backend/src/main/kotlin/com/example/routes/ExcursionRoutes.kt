package com.example.routes

import com.example.models.ExcursionInfo
import com.example.models.ExcursionState
import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*

fun Route.excursionRouting() {
    get("/excursions") {
        call.respond(
            ExcursionState(
                "excId1", "?Avito",
                arrayOf(
                    ExcursionInfo("excId1", "?Avito"),
                    ExcursionInfo("excId2", "?lol"),
                    ExcursionInfo("excId3", "?heheht")
                )
            )
        )
    }
}