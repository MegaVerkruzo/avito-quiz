package com.example.routes

import com.example.models.participants.Filter
import com.example.models.participants.ParticipantState
import com.example.models.participants.ResponseHistory
import com.example.models.participants.ResponseRow
import io.ktor.server.application.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import kotlinx.datetime.LocalDateTime
import kotlinx.datetime.LocalTime

fun Route.usersRouting() {
    route("/users") {
        get {
            val filter = call.receive<Filter>()
            call.respond(
                arrayOf(
                    ParticipantState("someid", "lexa_hacker", "avito", 120, 15, 20),
                    ParticipantState("naotherid", "tema_tedes", "avito", 120, 15, 20)
                )
            )
        }
        delete {
            call.respond("delete all")
        }
        delete("/{excursionId}") {

            call.respond("delete all ${call.parameters["excursionId"]}")
        }
        route("/{excursionId}/{userId}") {
            get {
                call.respond(
                    ResponseHistory(
                        "avito",
                        "someExcId",
                        "232424",
                        "lexa_hacer",
                        arrayOf(
                            ResponseRow(
                                "s13", "wbwb", 31,
                                LocalDateTime(
                                    kotlinx.datetime.LocalDate(2023, 10, 2),
                                    LocalTime(12, 31, 44)
                                )
                            ),
                            ResponseRow(
                                "11", "wbwb", 100,
                                LocalDateTime(
                                    kotlinx.datetime.LocalDate(2023, 10, 2),
                                    LocalTime(12, 31, 44)
                                )
                            )
                        ),
                    )
                )
            }
            delete {
                call.respond("delete ${call.parameters["userId"]} ${call.parameters["excursionId"]}")
            }
        }
    }
}