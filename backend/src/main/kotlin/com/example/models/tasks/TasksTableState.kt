package com.example.models.tasks

import kotlinx.serialization.Serializable

@Serializable
data class UpdatePositionRequest(val id: String, val visibility: Boolean)

@Serializable
data class NewExcursionRequest(val name: String, val copyId: String?)

@Serializable
data class NewExcursionId(val id: String)
