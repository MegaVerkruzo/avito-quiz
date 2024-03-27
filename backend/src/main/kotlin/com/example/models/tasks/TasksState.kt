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

//@Serializable(with = FullTaskSerializer::class)
@Serializable
data class FullTask<ANSWER_TYPE>(
    val location: String,
    val imagePath: String?,
    val score: Int,
    val htmlForCorrectResponse: String,
    val htmlForIncorrectResponse: String,
    val htmlForIntroTask: String,
    val htmlForTask: String,
    val answer: ButtonAnswer
)


//class FullTaskSerializer<ANSWER_TYPE>(private val dataSerializer: KSerializer<ANSWER_TYPE>
//): KSerializer<FullTask<ANSWER_TYPE>> {
//    override val descriptor: SerialDescriptor = dataSerializer.descriptor
//    override fun deserialize(decoder: Decoder): FullTask<ANSWER_TYPE> = decoder.decodeStructure(descriptor) {
//
//        FullTask(
//            dataSerializer.
//            ,
//            dataSerializer.deserialize(decoder))
//    }
//
//    override fun serialize(encoder: Encoder, value: FullTask<ANSWER_TYPE>) {
//        TODO("Not yet implemented")
//    }
//
//
//}

@Serializable
class TextFieldAnswer(
    val type: String,
    val options: String
)

@Serializable
class ButtonAnswer(
    val type: String,
    val buttonsAmount: Int,
    val correctAnswerNumber: Int,
    val options: Array<String>
)
