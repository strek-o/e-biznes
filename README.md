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

<img width="2559" height="1393" alt="zadanie01" src="https://github.com/user-attachments/assets/e1f8fae3-a873-4d98-b58c-ad3db0e4b0e3" />

## Zadanie 2 `Scala`

Należy stworzyć aplikację na frameworku Play lub Scalatra.

- [x] **3.0** Należy stworzyć kontroler do Produktów [[commit]](https://github.com/strek-o/e-biznes/tree/b1976b88c5be94aa70f7dc0794d400eab1bca52f)
- [x] **3.5** Do kontrolera należy stworzyć endpointy zgodnie z CRUD - dane pobierane z listy [[commit]](https://github.com/strek-o/e-biznes/tree/bf0ee387d41135026c02f9de13cb1d00a0ace10b)
- [ ] **4.0** Należy stworzyć kontrolery do Kategorii oraz Koszyka + endpointy zgodnie z CRUD
- [ ] **4.5** Należy aplikację uruchomić na dockerze (stworzyć obraz) oraz dodać skrypt uruchamiający aplikację via ngrok
- [ ] **5.0** Należy dodać konfigurację CORS dla dwóch hostów dla metod CRUD

Kontrolery mogą bazować na listach zamiast baz danych.  
CRUD: show all, show by id (get), update (put), delete (delete), add (post).

https://github.com/user-attachments/assets/290eae46-1ea9-4b91-abe5-25386e54a9bc

## Zadanie 3 `Kotlin`

- [x] **3.0** Należy stworzyć aplikację kliencką w Kotlinie we frameworku Ktor, która pozwala na przesyłanie wiadomości na platformę Discord [[commit]](https://github.com/strek-o/e-biznes/tree/ad7e1a78aaac2195abcb82955e4182e3b178321a)
- [ ] **3.5** Aplikacja jest w stanie odbierać wiadomości użytkowników z platformy Discord skierowane do aplikacji (bota)
- [ ] **4.0** Zwróci listę kategorii na określone żądanie użytkownika
- [ ] **4.5** Zwróci listę produktów wg żądanej kategorii
- [ ] **5.0** Aplikacja obsłuży dodatkowo jedną z platform: Slack lub Messenger

Aplikację należy uruchomić na dockerze.

https://github.com/user-attachments/assets/b4996e59-4aa4-4fbc-ab9c-86534c815377

## Zadanie 4 `Go`

Należy stworzyć projekt w echo w Go. Należy wykorzystać gorm do stworzenia kilku modeli, gdzie pomiędzy dwoma musi być relacja. Należy zaimplementować proste endpointy do dodawania oraz wyświetlania danych za pomocą modeli. Jako bazę danych można wybrać dowolną, sugerowałbym jednak pozostać przy sqlite.

- [x] **3.0** Należy stworzyć aplikację we frameworku echo w j. Go, która będzie miała kontroler Produktów zgodny z CRUD [[commit]](https://github.com/strek-o/e-biznes/tree/ee192db89b0abaecc5756655490a7099ee33cbfc)
- [x] **3.5** Należy stworzyć model Produktów wykorzystując gorm oraz wykorzystać model do obsługi produktów (CRUD) w kontrolerze (zamiast listy) [[commit]](https://github.com/strek-o/e-biznes/tree/5cf03b41f62da6ba2373e153e7483f70ad6a213d)
- [ ] **4.0** Należy dodać model Koszyka oraz dodać odpowiedni endpoint
- [ ] **4.5** Należy stworzyć model kategorii i dodać relację między kategorią, a produktem
- [ ] **5.0** Pogrupować zapytania w gorm’owe scope'y

https://github.com/user-attachments/assets/9799b1d9-2dc1-42b0-ad65-faa2f42c8e4d

## Zadanie 5 `Frontend`

Należy stworzyć aplikację kliencką wykorzystując bibliotekę React.js. W ramach projektu należy stworzyć trzy komponenty: Produkty, Koszyk oraz Płatności. Koszyk oraz Płatności powinny wysyłać do aplikacji serwerowej dane, a w Produktach powinniśmy pobierać dane o produktach z aplikacji serwerowej. Aplikacja serwera w jednym z trzech języków: Kotlin, Scala, Go. Dane pomiędzy wszystkimi komponentami powinny być przesyłane za pomocą React hooks.

- [x] **3.0** W ramach projektu należy stworzyć dwa komponenty: Produkty oraz Płatności; Płatności powinny wysyłać do aplikacji serwerowej dane, a w Produktach powinniśmy pobierać dane o produktach z aplikacji serwerowej [[commit]](https://github.com/strek-o/e-biznes/tree/a3f017084dc2cb056e8c4724bc83bb47d2c167fc)
- [ ] **3.5** Należy dodać Koszyk wraz z widokiem; należy wykorzystać routing
- [ ] **4.0** Dane pomiędzy wszystkimi komponentami powinny być przesyłane za pomocą React hooks
- [ ] **4.5** Należy dodać skrypt uruchamiający aplikację serwerową oraz kliencką na dockerze via docker-compose
- [ ] **5.0** Należy wykorzystać axios’a oraz dodać nagłówki pod CORS

https://github.com/user-attachments/assets/e4725bfa-8c6a-4c31-bf49-c177d65dcaad

## Zadanie 6 `Testy`

Należy stworzyć 20 przypadków testowych w jednym z rozwiązań:

- Cypress JS (JS)
- Selenium (Kotlin, Python, Java, JS, Go, Scala)

Testy mają w sumie zawierać minimum 50 asercji (3.5). Mają również uruchamiać się na platformie Browserstack (5.0).

- [x] **3.0** Należy stworzyć 20 przypadków testowych w CypressJS lub Selenium (Kotlin, Python, Java, JS, Go, Scala) [[commit]](https://github.com/strek-o/e-biznes/tree/5ca2cdd07ddb1122efc2f2b76048cf5316022a54)
- [ ] **3.5** Należy rozszerzyć testy funkcjonalne, aby zawierały minimum 50 asercji
- [ ] **4.0** Należy stworzyć testy jednostkowe do wybranego wcześniejszego projektu z minimum 50 asercjami
- [ ] **4.5** Należy dodać testy API, należy pokryć wszystkie endpointy z minimum jednym scenariuszem negatywnym per endpoint
- [ ] **5.0** Należy uruchomić testy funkcjonalne na Browserstacku

https://github.com/user-attachments/assets/739967ff-e6fa-4551-b274-18697e2e1103

## Zadanie 7 `Sonar`

Należy dodać projekt aplikacji klienckiej oraz serwerowej (jeden branch, dwa repozytoria) do [Sonara w wersji chmurowej](https://sonarcloud.io/). Należy poprawić aplikacje uzyskując 0 bugów, 0 zapaszków, 0 podatności, 0 błędów bezpieczeństwa. Dodatkowo należy dodać widżety sonarowe do README w repozytorium dane projektu z wynikami.

- [x] **3.0** Należy dodać litera do odpowiedniego kodu aplikacji serwerowej w hookach gita [[commit]](https://github.com/strek-o/e-biznes/tree/7735239e5d8efc84499bf4044f0862ce4613aee6)
- [x] **3.5** Należy wyeliminować wszystkie bugi w kodzie w Sonarze (kod aplikacji serwerowej) [[commit]](https://github.com/strek-o/e-biznes/tree/aafa6a2cbf2110d4b78f5652ea2b22e2e444e3f5)
- [x] **4.0** Należy wyeliminować wszystkie zapaszki w kodzie w Sonarze (kod aplikacji serwerowej) [[commit]](https://github.com/strek-o/e-biznes/tree/aafa6a2cbf2110d4b78f5652ea2b22e2e444e3f5)
- [ ] **4.5** Należy wyeliminować wszystkie podatności oraz błędy bezpieczeństwa w kodzie w Sonarze (kod aplikacji serwerowej)
- [ ] **5.0** Należy wyeliminować wszystkie błędy oraz zapaszki w kodzie aplikacji klienckiej

https://github.com/user-attachments/assets/db3a923a-a991-41cd-8fa1-8039cc1e9dd8

## Zadanie 8 `Oauth2`

Należy skonfigurować klienta Oauth2 (4.0). Dane o użytkowniku wraz z tokenem powinny być przechowywane po stronie bazy serwera, a nowy token (inny niż ten od dostawcy) powinien zostać wysłany do klienta (React). Można zastosować mechanizm sesji lub inny dowolny (5.0). Zabronione jest tworzenie klientów bezpośrednio po stronie React'a wyłączając z komunikacji aplikację serwerową.

Prawidłowa komunikacja: react-sewer-dostawca-serwer(via return uri)-react.

- [x] **3.0** Logowanie przez aplikację serwerową (bez Oauth2) [[commit]](https://github.com/strek-o/e-biznes/tree/d602e6102fda27592f6214dbdd3cb6fe11f9c47a)
- [ ] **3.5** Rejestracja przez aplikację serwerową (bez Oauth2)
- [ ] **4.0** Logowanie via Google OAuth2
- [ ] **4.5** Logowanie via Facebook lub Github OAuth2
- [ ] **5.0** Zapisywanie danych logowania OAuth2 po stronie serwera

Klucz należy uzyskać na:

- https://console.cloud.google.com/apis/dashboard
- https://developers.facebook.com/

https://github.com/user-attachments/assets/2970bfb1-8f1d-40d6-a854-384c0d75e39c

## Zadanie 9 `GPT`

Należy rozszerzyć funkcjonalność wcześniej stworzonego bota. Do niego należy stworzyć aplikację frontendową, która połączy się z osobnym serwisem, który przeanalizuje tekst od użytkownika i prześle zapytanie do GPT, a następnie prześle odpowiedź do użytkownika. Cały projekt należy stworzyć w Pythonie.

- [x] **3.0** Należy stworzyć po stronie serwerowej osobny serwis do łącznia z chatGPT [[commit]](https://github.com/strek-o/e-biznes/tree/8fb627dbbc31653a9746a0bdd0233812ee587709)
- [ ] **3.5** Należy połączyć serwis z interfejsem frontendowym via serwis w Kotlinie (zadanie 3) - discord + JS
- [ ] **4.0** Stworzyć listę 5 różnych otwarć oraz zamknięć rozmowy
- [ ] **4.5** Filtrowanie po zagadnieniach związanych ze sklepem (np. ograniczenie się jedynie do ubrań oraz samego sklepu) do GPT
- [ ] **5.0** Filtrowanie odpowiedzi po sentymencie

Można wykorzystać lokalny model przez [ollama](https://ollama.com/).

> [!NOTE]
> Ponieważ w zadaniu z botem na platformę Discord zrobiłem jedynie webhooka, tutaj ograniczam się tylko do serwisu w Pythonie, który komunikuje się z lokalnym modelem _llama3.2_.

https://github.com/user-attachments/assets/fc517ef8-b901-4eb6-bbda-db0dfbd86148

## Zadanie 10 `Chmura`

- [x] **3.0** Należy stworzyć odpowiednie instancje po stronie chmury na dockerze
- [ ] **3.5** Stworzyć odpowiedni pipeline w Github Actions do budowania aplikacji (np. via fatjar)
- [ ] **4.0** Dodać notyfikację mailową o wynikach z sonara
- [ ] **4.5** Dodać krok z deploymentem aplikacji klienckiej na chmurę (obie ze sobą rozmawiają)
- [ ] **5.0** Dodać uruchomienie regresyjnych testów automatycznych (funkcjonalnych) jako krok w Actions w Browserstacku



https://github.com/user-attachments/assets/ba551fe0-5ffd-4df0-8a84-6dd7e42592a2


