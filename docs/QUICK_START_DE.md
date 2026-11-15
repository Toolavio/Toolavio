# Schnellstart

[English — Hauptsprache](QUICK_START.md) · [Italiano](QUICK_START_IT.md) · **Deutsch**

[Toolavio öffnen](https://toolavio.com/de/) · [Überblick](../README.de.md) · [Beispieldateien](../examples/README.de.md) · [FAQ](FAQ_DE.md)

Probiere diese drei Aufgaben mit nicht vertraulichen Beispieldaten. Die Anleitungen beschreiben einen Ablauf und erwartete Inhalte, keine vollständigen Tests auf jedem Gerät. Beschriftungen können je nach Sprache und Release abweichen.

**Bewahre deine Originale auf.** Die [CSV- und JSON-Beispiele](../examples/README.de.md) sind erfunden; für die Datenwerkzeuge brauchst du keine privaten Dokumente.

## 1. Bilder in einem PDF zusammenfassen

**Öffnen:** [PDF-Werkzeuge](https://toolavio.com/de/pdf/) und dort die Konvertierung von Bildern in PDF auswählen.

**Benötigt:** Zwei JPG-, PNG- oder WebP-Bilder, die du verwenden darfst.

1. Wähle die Bilder über **Dateien auswählen** in der gewünschten Reihenfolge.
2. Wähle **A4** oder **Originalgröße** und anschließend die Randeinstellung.
3. Drücke **Ausführen** und lade das PDF herunter, sobald es bereitsteht.
4. Öffne das heruntergeladene Dokument. Prüfe, ob für jedes Bild eine Seite in der richtigen Reihenfolge und mit lesbarem Inhalt vorhanden ist.

**Erwartetes Ergebnis:** Ein PDF mit beiden Bildern. Prüfe die Ausgabe, statt anzunehmen, dass jede Eigenschaft der Originalbilder erhalten bleibt. Große Bildsammlungen können den verfügbaren Arbeitsspeicher überschreiten.

## 2. Unterschiede zwischen zwei CSV-Dateien finden

**Öffnen:** [Tabellenwerkzeuge](https://toolavio.com/de/spreadsheet/) und dort den CSV-Dateivergleich auswählen.

Verwende [left.csv](../examples/csv/left.csv) und [right.csv](../examples/csv/right.csv) oder füge die folgenden Texte in die beiden Tabelleneingaben ein.

**Erste Tabelle — left.csv**

```csv
name,score
Ada,4.8
Bob,7.2
```

**Zweite Tabelle — right.csv**

```csv
name,score
Ada,4.8
Cyd,9.6
```

1. Füge das erste Beispiel in **Tabelle**, das zweite in **Zweite Tabelle** ein oder wähle die zugehörigen Dateien.
2. Prüfe, ob beide Eingaben vorhanden sind. Die Beispiele verwenden Kommas und eine Kopfzeile.
3. Starte den Vergleich und kontrolliere gemeinsame sowie nur in einer Eingabe vorhandene Zeilen.
4. Kopiere das Ergebnis oder lade es mit den angebotenen Funktionen herunter.

**Erwarteter Inhalt:** Ada/4.8 ist gemeinsam; Bob/7.2 steht nur in der ersten Tabelle; Cyd/9.6 nur in der zweiten.

Die beschriebene Operation vergleicht Zeilen über alle Spalten. Ein gleicher Name allein macht zwei Zeilen nicht identisch. Dies ist kein allgemeines Zusammenführen von Datenbanken.

## 3. CSV bereinigen und in Flow in JSON umwandeln

**Öffnen:** [Toolavio Flow](https://toolavio.com/de/flow/).

Verwende [clean-me.csv](../examples/csv/clean-me.csv) oder füge Folgendes ein:

```csv
name,score
Ada,4.8

Zoe,7.25
```

1. Wähle **CSV bereinigen → CSV in JSON**. Weichen die verfügbaren Vorlagen ab, füge die entsprechenden kompatiblen Operationen hinzu.
2. Füge das Beispiel in den Eingabebereich ein oder wähle die Datei einmal aus. Kontrolliere Schritte und Bereinigungsoptionen vor dem Start.
3. Drücke **Flow ausführen** und prüfe die endgültige Ausgabe sowie angezeigte Zwischenergebnisse.
4. Lade das JSON herunter und kontrolliere die vorgesehenen Datensätze und Werte.

**Erwarteter Inhalt:** Die gewählte Bereinigung wird vor der Konvertierung ausgeführt; Ada/4.8 und Zoe/7.25 bleiben erhalten. Prüfe, ob Zellen als Zeichenfolgen oder Zahlen exportiert werden. Nicht jede Konvertierung erhält alle Datentypen oder Formatierungsdetails.

Flow verbindet kompatible Operationen, keine beliebigen Kombinationen. Verfügbare Vorlagen und erweiterte Funktionen können variieren.

## Eine weitere kurze Prüfung: JSON formatieren

Öffne [JSON formatieren](https://toolavio.com/de/developer/json-format/), füge [sample.json](../examples/json/sample.json) ein, lasse die Einrückung bei **2** und starte die Aktion. Prüfe, ob die Ausgabe lesbarer ist und weiterhin `project`, `sample` sowie alle drei Zahlen enthält. Das erwartete Objekt steht in der [Beispielanleitung](../examples/README.de.md).

## Den Ablauf teilen, nicht die Dateien

**Workflow teilen** übermittelt unterstützte Schritte und Einstellungen; Empfänger verwenden eigene Eingaben. Kontrolliere die Konfiguration vor dem Versand auf vertrauliche Texte.

**Werkzeug teilen** sendet einen öffentlichen Link. **Ergebnis teilen** kann die erzeugte Datei an eine ausgewählte Anwendung senden. Das sind unterschiedliche Aktionen.

## Offline-Nutzung und Installation

Öffne [Offline-Pakete](https://toolavio.com/de/offline/) mit bestehender Verbindung, bereite das benötigte Paket vor und folge den Hinweisen für deinen Browser. Teste das konkrete Werkzeug, bevor du dich offline darauf verlässt.

Eine installierte Web-App macht nicht jede Funktion ohne Verbindung verfügbar. Browserunterstützung, heruntergeladene Ressourcen, Updates und Speicher beeinflussen die Verfügbarkeit. Lade wichtige Ergebnisse herunter, statt Browserspeicher als Backup zu behandeln.

## Etwas funktioniert nicht?

Bewahre das Original auf, prüfe Format- und Größenlimits und teste ein kleines synthetisches Beispiel. Lösche Website-Daten nicht, bevor du benötigte lokale Arbeit gesichert hast. Nutze [Support](../SUPPORT.de.md), um das Problem ohne private Informationen zu beschreiben.

Aktuelle Produktänderungen stehen auf der offiziellen [Updates-Seite](https://toolavio.com/de/updates.html).
