# E-biznes

[Docker Hub](https://hub.docker.com/r/streko/e-biznes/tags)  
[WFAIS.IF-D208.0]

## Zadanie 1 `Docker`

- [x] **3.0** obraz ubuntu z Pythonem w wersji 3.10 [[commit]](https://github.com/strek-o/e-biznes/tree/8d0c17ba33d0c16844d809869a3c54139567be94)
- [x] **3.5** obraz ubuntu:24.02 z Javą w wersji 8 oraz Kotlinem [[commit]](https://github.com/strek-o/e-biznes/tree/f6287d0e21c33dc34bd593044ebb81150e20ed03)
- [ ] **4.0** do powyższego należy dodać najnowszego Gradle’a oraz paczkę JDBC SQLite w ramach projektu na Gradle (build.gradle)
- [ ] **4.5** stworzyć przykład typu HelloWorld oraz uruchomienie aplikacji przez CMD oraz gradle
- [ ] **5.0** dodać konfigurację docker-compose

Punkty 3.0-4.5 powinny mieć osobny obraz Dockerowy.

## Zadanie 2 `Scala`

Należy stworzyć aplikację na frameworku Play lub Scalatra.

- [x] **3.0** Należy stworzyć kontroler do Produktów
- [ ] **3.5** Do kontrolera należy stworzyć endpointy zgodnie z CRUD - dane pobierane z listy
- [ ] **4.0** Należy stworzyć kontrolery do Kategorii oraz Koszyka + endpointy zgodnie z CRUD
- [ ] **4.5** Należy aplikację uruchomić na dockerze (stworzyć obraz) oraz dodać skrypt uruchamiający aplikację via ngrok
- [ ] **5.0** Należy dodać konfigurację CORS dla dwóch hostów dla metod CRUD

Kontrolery mogą bazować na listach zamiast baz danych.  
CRUD: show all, show by id (get), update (put), delete (delete), add (post).
