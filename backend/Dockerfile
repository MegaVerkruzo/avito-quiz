FROM gradle:7-jdk17 AS build
WORKDIR /usr/app/
COPY . ./
RUN ./gradlew buildFatJar

FROM openjdk:17
ENV ARTIFACT_NAME=backend-all.jar
EXPOSE 8080:8080
RUN mkdir /app
COPY --from=build /usr/app/build/libs/$ARTIFACT_NAME /app/backend.jar
ENTRYPOINT ["java","-jar","/app/backend.jar"]

#FROM gradle:7.5.1 AS builder
#ENV APP_HOME=/usr/app/
#WORKDIR $APP_HOME
#COPY build.gradle.kts settings.gradle.kts ./
#COPY src ./src
#RUN gradle build --no-daemon
#
#FROM openjdk:17
#ENV ARTIFACT_NAME=10ktor-0.0.1.jar
#ENV APP_HOME=/usr/app/
#COPY --from=builder $APP_HOME/build/libs/$ARTIFACT_NAME .
#EXPOSE 8080
#ENTRYPOINT exec java -jar ${ARTIFACT_NAME}
#
