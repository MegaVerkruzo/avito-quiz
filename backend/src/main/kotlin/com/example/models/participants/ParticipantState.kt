package com.example.models.participants

import kotlinx.datetime.LocalDateTime
import kotlinx.serialization.Serializable

@Serializable
data class ParticipantState(
    val id: String, val username: String?, val excursionId: String,
    val score: Int,
    val finishedTasks: Int, val tasksAmount: Int
)

@Serializable
data class ResponseHistory(
    val excursionName: String,
    val excursionId: String,
    val userId: String,
    val username: String?,
    val tasks: Array<ResponseRow>
)

@Serializable
data class ResponseRow(val textTask: String, val answer: String, val score: Int, val time: LocalDateTime)

@Serializable
data class Filter(val finished: Boolean, val excursionId: String?)
