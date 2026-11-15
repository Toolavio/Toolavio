# Öffentliche Roadmap

[English — Hauptsprache](ROADMAP.md) · [Italiano](ROADMAP_IT.md) · **Deutsch**

[Überblick](../README.de.md) · [Toolavio ausprobieren](https://toolavio.com/de/) · [Anwendungsfälle](USE_CASES_DE.md) · [Offizielle Produktupdates](https://toolavio.com/de/updates.html)

Diese Seite erklärt die Entwicklungsrichtung von Toolavio. Sie ist weder eine Release-Zusage noch ein Lieferplan oder eine Liste von Funktionen, die sich vollständig aus diesem Repository herunterladen lassen.

## Auf der Website verfügbar

Die Plattform bietet einen browserbasierten Werkzeugkatalog, Suche, kompatible Dateiübergabe, Flow, technische Ergebnisprüfungen, lokale Arbeitsbereiche, Favoriten und ausgewählte Offline-Pakete. Werkzeug, Eingabeformat, Browser und Funktionszugang bestimmen die Verfügbarkeit im jeweiligen Ablauf.

Diese Liste fasst Produktfunktionen zusammen; sie zertifiziert nicht jede Eingabe, jeden Browser oder jedes Werkzeug. Die aktuelle Website und ihre Release-Hinweise bleiben die Referenz für veröffentlichte Änderungen.

## Aktuelle Produktprioritäten

**Häufige Aufgaben vereinfachen.** Die Operation direkt zugänglich machen, wiederholte Dateiauswahl reduzieren und verständliche Beschriftungen verwenden. Erweiterte Workflows sollen optional bleiben.

**Vertrauen in Ergebnisse verbessern.** Unabhängige Prüfungen erweitern, destruktive oder verlustbehaftete Umwandlungen beschreiben und Fehler verständlich machen. Eine strukturell gültige Datei belegt noch kein korrektes Dokument.

**Mobile Nutzung und Barrierefreiheit verbessern.** Kleine Bildschirmansichten, Touch-Bedienung, Tastaturnavigation, Ladehinweise und Download-Wege verfeinern.

**Sprachqualität verbessern.** Die bestehende mehrsprachige Erfahrung konsistent halten und Formulierungen, Anleitungen sowie formatspezifische Grenzen überarbeiten.

## Toolavio Core — geplante eigenständige Module

Geeignete bestehende Verarbeitungskomponenten sollen von der Website-Oberfläche getrennt und unabhängig testbar sowie wiederverwendbar werden. Zunächst ist die Verarbeitung von CSV, TSV und JSON vorgesehen.

Ein eigenständiges Modul braucht klare Ein- und Ausgabeverträge, dokumentierte Grenzen und unabhängige Tests, bevor es als verfügbar beschrieben wird. Hier werden weder Core-Quellpakete noch öffentliche Installationen über Paketmanager angeboten.

## Toolavio Action Engine — geplante Website-Integration

TAE soll kompatible Toolavio-Werkzeuge durch einen kleinen Embed auf andere Websites bringen. **Toolavio Action** ist der Produktname für Kunden. Der dauerhafte Projektpfad ist `/tae/` auf Toolavio.com; die Benennung bedeutet nicht, dass bereits ein produktionsreifer Dienst veröffentlicht wurde.

Das geplante Modell nutzt die Toolavio-Infrastruktur für Konfiguration, Updates und Abonnementverwaltung. Lokale Dateiverarbeitung soll erhalten bleiben, wo die Operation sie unterstützt. Preise, Verfügbarkeitstermine und universelle CMS-Kompatibilität werden hier nicht zugesagt.

## Was würde als Fortschritt gelten?

Fortschritt soll durch nutzbare Ergebnisse beschrieben werden, nicht durch Werkzeugzahlen oder neue Funktionsnamen. Die folgenden Punkte sind Abnahmeziele, keine bereits im gesamten Produkt erreichten Ergebnisse.

| Bereich | Ergebnis, das wir zeigen möchten |
| --- | --- |
| Erste Nutzung | Eine Person findet das passende Werkzeug und erledigt eine unterstützte Aufgabe, ohne die ganze Plattform lernen zu müssen. |
| Dateiübergabe | Kompatible Schritte verwenden Eingaben oder Zwischenergebnisse ohne unnötiges Herunterladen und erneutes Auswählen weiter. |
| Ausgabequalität | Repräsentative Ergebnisse werden gegen erwartete Inhalte geprüft; Umwandlungen und Grenzen sind klar beschrieben. |
| Mobile Nutzung | Hauptaktion, Einstellungen, Rückmeldungen und Ergebnis bleiben in den geprüften kleinen Ansichten nutzbar. |
| Wiederholte Arbeit | Eine unterstützte Vorlage lässt sich speichern, wieder öffnen, verstehen und mit anderen Eingaben nutzen. |
| Teilen | Eine empfangende Person kann einen unterstützten Ablauf mit eigenen Dateien nachbilden, ohne private Eingaben des Absenders zu erhalten. |
| Core-Extraktion | Ein ausgewähltes Modul funktioniert außerhalb der Website mit dokumentierten Abhängigkeiten und reproduzierbaren Tests. |
| TAE-Integration | Eine autorisierte externe Testseite kann eine unterstützte Operation ohne Konflikt mit der Hostseite einbetten und ausführen. |

Die Tabelle enthält keine festen Prozentziele, Liefertermine oder Zertifizierungen.

## Entwicklungsfolge

Zunächst soll das bestehende Produkt verbessert, dann ein kleines wiederverwendbares Datenmodul isoliert und anschließend eine Integration mit geeigneten gemeinsamen Komponenten geprüft werden. So entsteht nicht voreilig eine zweite Implementierung derselben Operationen, bevor deren Wiederverwendung praktisch belegt ist.

Eine erfolgreiche CSV-/JSON-Extraktion macht nicht automatisch jedes PDF-, Bild- oder Multimedia-Modul portierbar. Ebenso belegt ein funktionierender Embed auf einer Testseite nicht die Kompatibilität mit jedem Content-Management-System.

**Toolavio Core und TAE bleiben Entwicklungsvorhaben.** Öffentliche Verfügbarkeit wird erst nach dem tatsächlichen Release des jeweiligen Ergebnisses und seines unterstützten Umfangs beschrieben. Dieses Repository verteilt die Implementierungen nicht.

## Öffentliche Vorstellung, nicht öffentliche Implementierung

Die Software und internen Entwicklungsunterlagen bleiben nicht öffentlich. Dieses Repository dient Erklärungen, Anleitungen und sicheren Rückmeldungen, nicht der Verteilung des Core oder des Website-Quellcodes.

## Hilf bei sinnvollen Prioritäten

[Schlage eine Verbesserung vor](https://github.com/Toolavio/Toolavio/issues/new?template=feature_request.yml): Beschreibe eine reale Aufgabe, die Schwierigkeit und das benötigte Ergebnis. Eine eingereichte Anfrage bedeutet keine Annahme oder geplante Veröffentlichung.

Hilfreiches Feedback zeigt, wo ein Ablauf unklar wird: bei Werkzeugwahl, Eingabe, Einstellungen, Ergebnisinterpretation oder Speichern. Nutze erfundene Beispiele. Kontodetails und Sicherheitsbedenken gehören in die privaten Kanäle aus [Support](../SUPPORT.de.md) und [Sicherheit](../SECURITY.de.md).

Beispiele für aktuell dokumentierte Abläufe stehen unter [Praktische Anwendungsfälle](USE_CASES_DE.md). Die tatsächliche Produkthistorie bleibt auf der offiziellen Website und wird hier nicht doppelt geführt.
