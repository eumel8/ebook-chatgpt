# Ebook ChatGPT

Ersatz für [Ebook Wunschliste](https://github.com/eumel8/ebook-wunschliste) basierend auf Amazon Product Advertising API (nicht mehr existent), basiert diese Lösung auf einer Idee von [@Gutoneitzke](https://github.com/Gutoneitzke/chatgpt-with-javascript), die Abfrage von ChatGPT mit Javascript.

## Modifizierungen:

- Übersetzungen in Deutsch
- Benutzer muss seinen eigenen [API Key](https://platform.openai.com/account/api-keys) eintragen (client-side Javascript)
- Der Key wird als `localStorage` lokal auf dem benutzen Rechner/Browser unverschlüsselt abgelegt
- Die Abfrage wird in Richtung 10 alternativer Buchtitel modifiziert
- Die Ausgabe erfolgt als Liste mit Links zu einem Bücherdienst

## Bekannte Probleme:

- ISBNs stimmen nicht unbedingt überwein, wenn man die auf ChatGPT abfragt
- Datenbestand ist von 2021 und früher, neuere Bücher können derzeit noch nicht gefunden werden

## Links:

- [https://ebooks.eumel.de](https://ebooks.eumel.de)
- [https://chat.openai.com/](chat.openai.com/)

## Credits:

[@Gutoneitzke](https://github.com/Gutoneitzke)
