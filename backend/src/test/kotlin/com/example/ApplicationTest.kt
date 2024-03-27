//package com.example
//
//import io.ktor.client.request.*
//import io.ktor.client.statement.*
//import io.ktor.http.*
//import io.ktor.server.testing.*
//import junit.framework.TestCase.assertEquals
//import org.junit.Test
//
//class ApplicationTest {
//
//    @Test
//    fun testRoot() = testApplication {
//        application {
//            module()
//        }
//
//        val response = client.get("/")
//
//        assertEquals(HttpStatusCode.OK, response.status)
//        assertEquals("Hello World!", response.bodyAsText())
//    }
//
//    @Test
//    fun testNewEndpoint() = testApplication {
//        application {
//            module()
//        }
//
//        val response = client.get("/test1")
//
//        assertEquals(HttpStatusCode.OK, response.status)
//        assertEquals(response.bodyAsText(), "{\"some\":      \"Hello From ktor\"}")
//    }
//}