val ktor_version: String by project
val kotlin_version: String by project
val kotlin_datetime_version: String by project
val logback_version: String by project

plugins {
    kotlin("jvm") version "1.9.23"
    kotlin("plugin.serialization") version "1.9.23"
    id("io.ktor.plugin") version "2.3.9"
}

group = "com.example"
version = "0.0.1"
project.ext.set("development", true)

application {
    mainClass.set("com.example.MainKt")

    val isDevelopment: Boolean = project.ext.has("development")
    applicationDefaultJvmArgs = listOf("-Dio.ktor.development=$isDevelopment")
}

repositories {
    mavenCentral()
}

dependencies {
    implementation(project(":gateway"))
    implementation("io.ktor:ktor-server-cors:$ktor_version") {
        because("activate cors")
    }
    implementation("io.ktor:ktor-server-status-pages:$ktor_version") {
        because("For handling java exceptions and throw 4xx status code")
    }
    implementation("io.ktor:ktor-serialization-kotlinx-json-jvm:$ktor_version") {
        because("For auto-serializing to json")
    }
    implementation("io.ktor:ktor-server-content-negotiation-jvm:$ktor_version") {
        because("For auto-serializing to json")
    }
    // https://mvnrepository.com/artifact/org.jetbrains.kotlinx/kotlinx-datetime
    implementation("org.jetbrains.kotlinx:kotlinx-datetime:$kotlin_datetime_version") {
        because("For serializing date")
    }

    implementation("io.ktor:ktor-server-core-jvm")
    implementation("io.ktor:ktor-server-netty-jvm")
    implementation("ch.qos.logback:logback-classic:$logback_version")
    testImplementation("io.ktor:ktor-server-tests-jvm")
    testImplementation("org.jetbrains.kotlin:kotlin-test-junit:$kotlin_version")
}

ktor {
    docker {
        jreVersion.set(JavaVersion.VERSION_17)
    }
}
