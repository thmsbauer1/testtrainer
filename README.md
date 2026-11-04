# Testtrainer

Übungs-Apps für Philip vor Tests und Klassenarbeiten. Die Startseite listet alle Tests, jeder Test liegt in einem eigenen Ordner.

| Ordner | Fach | Thema | Testtag |
|---|---|---|---|
| `bio-hund/` | Biologie | Der Hund (Lupos Hundeschule) | 06.11.2026 |

## So ist ein Test aufgebaut
- `index.html`: die App (Hundeplatz, Stationen, Karten, Wiederholung, Generalprobe, Elternansicht)
- `inhalte.js`: Stationen, Merkzettel und Karten. Kartentypen: Auswahl, Richtig/Falsch, Reihenfolge, Zuordnen, Paare, Mehrfachauswahl, Schreiben, Erklären mit Musterlösung, dazu themenspezifische Bildkarten.
- Tag 1: alle Stationen. Tag 2: Wiederholung (Fehler zuerst) und Generalprobe nach dem Muster des Probetests. Testtag: Blitzrunde.

## Neuen Test hinzufügen
1. Neuen Ordner anlegen, `index.html` übernehmen, neue `inhalte.js` schreiben (eigener `KEY` und `TESTTAG`).
2. Eintrag in `tests.js` ergänzen.
3. Ordner in `sw.js` unter `CORE` aufnehmen und die Cache-Version hochzählen.

Der Fortschritt wird nur auf dem jeweiligen Gerät gespeichert.
