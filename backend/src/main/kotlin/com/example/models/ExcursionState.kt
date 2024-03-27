package com.example.models

import kotlinx.serialization.Serializable

@Serializable
data class ExcursionState(val id: String, val name: String, val tours: Array<ExcursionInfo>)

@Serializable
data class ExcursionInfo(val id: String, val name: String)
