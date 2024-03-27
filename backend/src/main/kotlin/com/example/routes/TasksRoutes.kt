package com.example.routes

import com.example.models.tasks.*
import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*

fun Route.tasksRouting() {
    route("/tasks") {
        get {
            call.respond(HashMap<String, String>())
        }
        post {
            val lol = call.receive<NewExcursionRequest>()
            call.respond(NewExcursionId(lol.copyId + "42"))
        }
        route("/{excursionId}") {
            get {
                call.respond(
                    when (call.parameters["excursionId"]) {
                        "excId1" -> arrayOf(
                            VisibleTask("some1", true, "Какой-то вопрос", "Кухня", null),
                            VisibleTask("some2", false, "sefwefКакой-то вопрос", "Кухня", null),
                            VisibleTask("some3", true, "Какой-то вопрос", "Кухня", null)
                        )

                        else -> throw IllegalArgumentException("noExcursion")
                    }
                )
            }
            post {
                val new_task = call.receive<FullTask<Int>>()
                call.respond(HttpStatusCode.OK, HashMap<String, String>())
            }
            post("/turn_off_visible") {
                call.respondText("turn_off_visible")
            }
            post("/turn_on_visible") {
                call.respondText("turn_on_visible")
            }
            post("/update_places") {
                val lol = call.receive<Array<UpdatePositionRequest>>()
                call.respondText("update_places")
            }
            delete {
                call.respondText("delete excursion")
            }
            route("/{taskId}") {
                get {
                    call.respond(
                        when (call.parameters["taskId"]) {
                            "some1" -> FullTask<Int>(
                                "Кухня",
                                "resources/images/castle.png",
                                10,
                                "Верно! Ты получаешь <strong>+12 очков<strong>",
                                "Упс, кажется ты ошибся:(",
                                "Моя кухня всегда испокон веков была самая лучшая",
                                "Какая кухня была испокон веков самая лучшая?",
                                ButtonAnswer(
                                    "buttons",
                                    10,
                                    10,
                                    arrayOf(
                                        "1 ответ",
                                        "2 ответ",
                                        "3 ответ",
                                        "4",
                                        "5 ответ",
                                        "6 ответsdfwefhweofwefh",
                                        "7 ответ",
                                        "8 ответ",
                                        "9 ответ",
                                        "10 ответ"
                                    )
                                )
                            )

                            "some2" -> FullTask<Int>(
                                "Гостиная",
                                "resources/images/castle.png",
                                10,
                                "Верно! Ты получаешь <strong>+12 очков<strong>",
                                "Упс, кажется ты ошибся:(",
                                "Моя кухня всегда испокон веков была самая лучшая",
                                "Какая кухня была испокон веков самая лучшая?",
                                ButtonAnswer(
                                    "buttons",
                                    3,
                                    2,
                                    arrayOf(
                                        "1 ответ",
                                        "2 ответ",
                                        "3 ответ",
                                    )
                                )
                            )
//                        "some3" -> FullTask(
//                            "lwoehfo",
//                            "resources/images/castle.png",
//                            10,
//                            "Верно! Ты получаешь <strong>+12 очков<strong>",
//                            "Упс, кажется ты ошибся:(",
//                            "Моя кухня всегда испокон веков была самая лучшая",
//                            "Какая кухня была испокон веков самая лучшая?",
//                            TextFieldAnswer("textfield", "кот, котёнок, кошка")
//                        )
                            else -> throw IllegalArgumentException("noTask")
                        }
                    )
                }
                put {
                    val a = call.receive<FullTask<Int>>()
                    call.respond(HttpStatusCode.OK, HashMap<String, String>())
                }
                delete {
                    call.respond(HttpStatusCode.OK, HashMap<String, String>())
                }
            }

        }

    }
}
