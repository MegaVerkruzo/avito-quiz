package com.example.models.achievements

import kotlinx.serialization.Serializable

@Serializable
data class VisibleAchievement(val id: String, val name: String, val score: Int, val imagePath: String)

@Serializable
data class FullAchievement(val name: String, val score: Int, val imagePath: String, val shareText: String)
