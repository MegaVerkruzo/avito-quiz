package com.example.models.settings

import kotlinx.datetime.LocalDateTime
import kotlinx.serialization.Serializable

@Serializable
data class Settings(
    val pinCodeText: String, val pinCode: IntArray,
    val helloText: String, val shareText: String, val notFoundText: String,
    val startTime: LocalDateTime?, val endTime: LocalDateTime?
)
