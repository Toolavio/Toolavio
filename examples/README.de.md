# Toolavio mit erfundenen Beispieldaten ausprobieren

[English — Hauptsprache](README.md) · [Italiano](README.it.md) · **Deutsch**

[Toolavio öffnen](https://toolavio.com/de/) · [Schnellstart](../docs/QUICK_START_DE.md) · [Projektüberblick](../README.de.md)

Mit diesen kleinen Dateien kannst du einige Operationen ohne vertrauliche Dokumente ausprobieren. Namen, Punktwerte und Projektangaben sind erfunden. Die Dateien enthalten weder Zugangsdaten noch Nutzerdatensätze oder Anwendungsquellcode.

## Fertige Beispieldateien

| Datei | Passendes Werkzeug | Darauf achten |
| --- | --- | --- |
| [left.csv](csv/left.csv) und [right.csv](csv/right.csv) | [Tabellenwerkzeuge](https://toolavio.com/de/spreadsheet/), dort den CSV-Vergleich wählen | Ada/4.8 ist gemeinsam; Bob/7.2 steht nur links; Cyd/9.6 nur rechts. |
| [clean-me.csv](csv/clean-me.csv) | [Flow](https://toolavio.com/de/flow/) mit CSV bereinigen → CSV in JSON | Die Leerzeile mit der passenden Option entfernen und Ada/4.8 sowie Zoe/7.25 erhalten. |
| [sample.json](json/sample.json) | [JSON formatieren](https://toolavio.com/de/developer/json-format/) | Lesbare Einrückung ohne Veränderung von Objekt, booleschem Wert oder Array-Werten. |

Öffne eine Datei aus der Liste und kopiere ihren Inhalt in das passende Werkzeug. Zum Speichern nutze, sofern verfügbar, GitHubs Download-Funktion für die Originaldatei. Vergleich und Flow akzeptieren in den unterstützten Eingabefeldern auch eingefügten Text.

Direkte Originalinhalte: [left.csv](https://raw.githubusercontent.com/Toolavio/Toolavio/main/examples/csv/left.csv) · [right.csv](https://raw.githubusercontent.com/Toolavio/Toolavio/main/examples/csv/right.csv) · [clean-me.csv](https://raw.githubusercontent.com/Toolavio/Toolavio/main/examples/csv/clean-me.csv) · [sample.json](https://raw.githubusercontent.com/Toolavio/Toolavio/main/examples/json/sample.json).

## Erwartetes Beispiel für die JSON-Formatierung

Die Eingabe ist das kompakte Objekt aus `sample.json`. Bei zwei Leerzeichen Einrückung sollen dieselben Daten erhalten bleiben:

```json
{
  "project": "Toolavio",
  "sample": true,
  "values": [
    1,
    2,
    3
  ]
}
```

Leerraum darf sich ändern, die Daten nicht. Prüfe bei CSV→JSON die Darstellung der Zelltypen, statt anzunehmen, dass jede numerisch aussehende Zelle automatisch eine Zahl wird.

## Umfang

Dies sind angeleitete Beispiele, keine vollständige Testsuite und keine Zertifizierung aller Toolavio-Operationen. Prüfe immer die gewählten Optionen und die tatsächliche Ausgabe. Produktverhalten kann sich ändern; lies die [offiziellen Updates](https://toolavio.com/de/updates.html) und [melde bei Bedarf ein reproduzierbares Problem](https://github.com/Toolavio/Toolavio/issues/new/choose) mit synthetischen Daten.

Diese Beispieldateien enthalten weder die Toolavio-Anwendung noch Core, SDK oder eine Open-Source-Veröffentlichung der Software.
