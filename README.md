# TwitterTranslate-Bot
 Bot do automatycznego odpisywania na tweety w różnych językach 😎🤙

![NodeJS](https://img.shields.io/badge/NodeJS-PogChamp-lime)

<a href="https://www.buymeacoffee.com/3xanax" target="_blank"><img src="https://i.imgur.com/D4cMvm7.png" alt="Buy Me A Coffee"></a>

# 📝 Changelog 
v0.3:
- Wprowadzenie komendy `!sleep` - usypia tłumaczenie komentarzy na 10 minut
- Wprowadzenie komendy `!status` - pokazują aktualny status tłumaczenia komentarzy

# ⏰ Nadchodzące zmiany
- Wydanie aplikacji Windows z botem

# 🧐 Opis
Prosty bot do automatycznego odpisywania na tweety w innych językach.

📝Instalacja
- Zarejestruj się na https://developer.twitter.com/
- Wejdź w projekt
- Wejdź w zakładke Keys and tokens
- Wygeneruj klucze Consumer 
- Wygeneruj klucze Access token & secret
- Wpisz klucze do pliku konfiguracyjnego który znajduje się w /config/config.js
- Wybierz język oraz konto które bot ma śledzić
- Wpisz komende `npm install`
- Uruchom skrypt komendą `npm start`

![example](https://i.imgur.com/Gy1HW3p.png)

# 💡Tip
- ID konta można znaleźć na https://codeofaninja.com/tools/find-twitter-id/
- Jeśli chcesz żeby bot działał 24h/7 zainstaluj `npm install -g forever` następnie wpisz `forever start twittertranslate.js`