package com.example.models.auth

import kotlinx.serialization.Serializable

@Serializable
data class LoginForm(val mail: String, val password: String?)

@Serializable
data class Token(val token: String)
