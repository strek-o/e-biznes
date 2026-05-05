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

- [x] **3.0** Należy stworzyć kontroler do Produktów [[commit]](https://github.com/strek-o/e-biznes/tree/b1976b88c5be94aa70f7dc0794d400eab1bca52f)
- [x] **3.5** Do kontrolera należy stworzyć endpointy zgodnie z CRUD - dane pobierane z listy [[commit]](https://github.com/strek-o/e-biznes/tree/bf0ee387d41135026c02f9de13cb1d00a0ace10b)
- [ ] **4.0** Należy stworzyć kontrolery do Kategorii oraz Koszyka + endpointy zgodnie z CRUD
- [ ] **4.5** Należy aplikację uruchomić na dockerze (stworzyć obraz) oraz dodać skrypt uruchamiający aplikację via ngrok
- [ ] **5.0** Należy dodać konfigurację CORS dla dwóch hostów dla metod CRUD

Kontrolery mogą bazować na listach zamiast baz danych.  
CRUD: show all, show by id (get), update (put), delete (delete), add (post).

## Zadanie 3 `Kotlin`

- [x] **3.0** Należy stworzyć aplikację kliencką w Kotlinie we frameworku Ktor, która pozwala na przesyłanie wiadomości na platformę Discord [[commit]](https://github.com/strek-o/e-biznes/tree/ad7e1a78aaac2195abcb82955e4182e3b178321a)
- [ ] **3.5** Aplikacja jest w stanie odbierać wiadomości użytkowników z platformy Discord skierowane do aplikacji (bota)
- [ ] **4.0** Zwróci listę kategorii na określone żądanie użytkownika
- [ ] **4.5** Zwróci listę produktów wg żądanej kategorii
- [ ] **5.0** Aplikacja obsłuży dodatkowo jedną z platform: Slack lub Messenger

Aplikację należy uruchomić na dockerze.

## Zadanie 4 `Go`

Należy stworzyć projekt w echo w Go. Należy wykorzystać gorm do stworzenia kilku modeli, gdzie pomiędzy dwoma musi być relacja. Należy zaimplementować proste endpointy do dodawania oraz wyświetlania danych za pomocą modeli. Jako bazę danych można wybrać dowolną, sugerowałbym jednak pozostać przy sqlite.

- [x] **3.0** Należy stworzyć aplikację we frameworku echo w j. Go, która będzie miała kontroler Produktów zgodny z CRUD [[commit]](https://github.com/strek-o/e-biznes/tree/ee192db89b0abaecc5756655490a7099ee33cbfc)
- [x] **3.5** Należy stworzyć model Produktów wykorzystując gorm oraz wykorzystać model do obsługi produktów (CRUD) w kontrolerze (zamiast listy) [[commit]](https://github.com/strek-o/e-biznes/tree/5cf03b41f62da6ba2373e153e7483f70ad6a213d)
- [ ] **4.0** Należy dodać model Koszyka oraz dodać odpowiedni endpoint
- [ ] **4.5** Należy stworzyć model kategorii i dodać relację między kategorią, a produktem
- [ ] **5.0** Pogrupować zapytania w gorm’owe scope'y

## Zadanie 5 `Frontend`

Należy stworzyć aplikację kliencką wykorzystując bibliotekę React.js. W ramach projektu należy stworzyć trzy komponenty: Produkty, Koszyk oraz Płatności. Koszyk oraz Płatności powinny wysyłać do aplikacji serwerowej dane, a w Produktach powinniśmy pobierać dane o produktach z aplikacji serwerowej. Aplikacja serwera w jednym z trzech języków: Kotlin, Scala, Go. Dane pomiędzy wszystkimi komponentami powinny być przesyłane za pomocą React hooks.

- [x] **3.0** W ramach projektu należy stworzyć dwa komponenty: Produkty oraz Płatności; Płatności powinny wysyłać do aplikacji serwerowej dane, a w Produktach powinniśmy pobierać dane o produktach z aplikacji serwerowej [[commit]](https://github.com/strek-o/e-biznes/tree/a3f017084dc2cb056e8c4724bc83bb47d2c167fc)
- [ ] **3.5** Należy dodać Koszyk wraz z widokiem; należy wykorzystać routing
- [ ] **4.0** Dane pomiędzy wszystkimi komponentami powinny być przesyłane za pomocą React hooks
- [ ] **4.5** Należy dodać skrypt uruchamiający aplikację serwerową oraz kliencką na dockerze via docker-compose
- [ ] **5.0** Należy wykorzystać axios’a oraz dodać nagłówki pod CORS

## Zadanie 6 `Testy`

Należy stworzyć 20 przypadków testowych w jednym z rozwiązań:

- Cypress JS (JS)
- Selenium (Kotlin, Python, Java, JS, Go, Scala)

Testy mają w sumie zawierać minimum 50 asercji (3.5). Mają również uruchamiać się na platformie Browserstack (5.0).

- [x] **3.0** 3.0 Należy stworzyć 20 przypadków testowych w CypressJS lub Selenium (Kotlin, Python, Java, JS, Go, Scala)
- [ ] **3.5** Należy rozszerzyć testy funkcjonalne, aby zawierały minimum 50 asercji
- [ ] **4.0** Należy stworzyć testy jednostkowe do wybranego wcześniejszego projektu z minimum 50 asercjami
- [ ] **4.5** Należy dodać testy API, należy pokryć wszystkie endpointy z minimum jednym scenariuszem negatywnym per endpoint
- [ ] **5.0** Należy uruchomić testy funkcjonalne na Browserstacku
