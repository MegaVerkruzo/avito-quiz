package com.example.models.tasks

import kotlinx.serialization.Serializable

@Serializable
data class VisibleTask(
    val id: String,
    val visibility: Boolean,
    val task: String,
    val location: String,
    val imagePath: String?
)

@Serializable
data class FullTask<out ANSWER_TYPE: Answer>(
    val location: String,
    val imagePath: String?,
    val score: Int,
    val htmlForCorrectResponse: String,
    val htmlForIncorrectResponse: String,
    val htmlForIntroTask: String,
    val htmlForTask: String,
    val answer: ANSWER_TYPE
)

open class Answer

@Serializable
class TextFieldAnswer(
    val type: String,
    val options: String
) : Answer()

@Serializable
class ButtonAnswer(
    val type: String,
    val buttonsAmount: Int,
    val correctAnswerNumber: Int,
    val options: Array<String>
) : Answer()
