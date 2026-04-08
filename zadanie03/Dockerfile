FROM eclipse-temurin:21-jdk

WORKDIR /zadanie03

COPY . .

RUN chmod +x gradlew

ENV WEBHOOK_URL=""

CMD ["./gradlew", "run"]
