package com.example.models.notice

import kotlinx.serialization.Serializable

@Serializable
data class TelegramNotice(val excursionId: String?, val htmlText: String, val imagePath: String?)
