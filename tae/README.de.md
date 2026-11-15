# Toolavio Action Engine — Alpha mit fünf Werkzeugen

[English — Hauptsprache](README.md) · [Italiano](README.it.md) · **Deutsch**

Eine kleine Integration, um Toolavio-Werkzeuge auf anderen Websites anzubieten. Der dauerhafte Hosting-Pfad ist **`https://toolavio.com/tae/`**.

> **Status: Vorschau des Alpha-Integrationscodes. Dieses Update veröffentlicht die Laufzeitumgebung nicht auf den Toolavio-Servern.** Hier stehen nur der öffentliche Loader, ein HTML-Beispiel und Anleitungen, nicht die private Verarbeitungsanwendung. Das Beispiel funktioniert erst nach Veröffentlichung der Laufzeitumgebung und Freigabe des exakten Ursprungs der einbettenden Website.

## Fünf ausgewählte Werkzeuge

| Werkzeug | Umfang der Alpha |
| --- | --- |
| JSON formatieren | Gültiges JSON mit dem ursprünglichen Formatierer einrücken; Zahlentokens bleiben erhalten. |
| CSV → JSON | UTF-8-Tabelle mit Kopfzeile in Datensätze konvertieren; Zellen bleiben Zeichenketten. |
| JSON → CSV | Nicht leeres Array flacher Objekte exportieren. Null und fehlende Werte werden leere Zellen; präzise Zahlen als Zeichenketten angeben. |
| CSV vergleichen | Ganze Zeilen einschließlich Großschreibung, Leerzeichen und Duplikatanzahl vergleichen; gleiche Kopfzeilen und Trennzeichen erforderlich. |
| Bild skalieren | PNG/JPEG/WebP einlesen, Nearest Neighbor verwenden und PNG ausgeben. Für Pixelgrafiken geeignet, keine Fotooptimierung. |

Die private Alpha verwendet vorhandene Toolavio-Verarbeitungsmodule, keine nachgebauten Beispielkonverter. Dateien werden im Browser verarbeitet. Seiten und Ressourcen benötigen weiterhin Netzwerkzugriff. Diese Alpha bietet keine zugesicherte Offline-Installation, Abrechnung, Domainlizenzierung oder universelle CMS-Kompatibilität.

## Einbettung — nach Aktivierung auf dem Server

```html
<div id="toolavio-action"></div>
<script src="https://toolavio.com/tae/embed.js"
  data-container="toolavio-action" data-lang="de" async></script>
```

Sprachen: `en`, `it`, `de`; Standard ist Englisch. Optionales `data-tool`: `json-format`, `csv-to-json`, `json-to-csv`, `compare-csv`, `resize-image`. Jede Instanz benötigt eine eigene Container-ID.

[Vollständiges HTML-Beispiel](example.html). Über HTTP/HTTPS bereitstellen, nicht als Chat-Anhang oder `file:` öffnen. Die CSP der Hostseite muss Toolavio-Skripte und -Frames zulassen. Der Betreiber muss den exakten HTTPS-Ursprung freigeben. Ein öffentlicher Code ist keine kostenpflichtige Lizenz.

Der Loader erstellt einen Frame mit Sandbox. Das Größenprotokoll prüft Ursprung, Framefenster und Instanzkanal. Dateiinhalte, Eingabetexte und Ergebnisse werden nicht an die Hostseite übertragen. Zwischenablage und Downloads hängen von Browserberechtigungen ab.

## Prüfungen und noch offene Freigaben

Das private Paket enthält neue Modul-/HTTP-Tests und Offline-Tests in Chromium, einschließlich echter Downloads und unabhängiger Prüfungen von Tabelleninhalten und Bildpixeln. **Das sind keine Produktionstests.** Der Offline-Test lädt Module aus lokalen Blobs und passt die Worker-Verpackung für einen opaken Testursprung an. HTTP-Modulladen und echte Cross-Origin-Einbettung sind damit nicht bestätigt. Die normale HTTP-Browsersuite konnte wegen der administrativen Navigationsrichtlinie des verfügbaren Browsers nicht starten; dieser Block ist dokumentiert.

Vor einer öffentlichen Verfügbarkeitsmeldung: normale Browsersuite ausführen, Ursprünge konfigurieren, in den echten Quellcode und Releaseprozess integrieren, Deployment freigeben, Produktänderungen dokumentieren und live prüfen. WordPress, Shopify, Safari/iPhone und native Android-Funktionen sind nicht zertifiziert.

## Grenzen

Kein Core, privater Server, Produktionsarchiv, Zugangsdaten oder Kundendokument wird hier verteilt. An den Browser ausgeliefertes JavaScript bleibt einsehbar. Es wird keine Open-Source-Lizenz für die Anwendung vergeben; Preise, Konten und Zahlungen bleiben unverändert.

Die bestehende Plattform: [Toolavio.com](https://toolavio.com/de/). Tatsächliche Veröffentlichungen: [Updates](https://toolavio.com/de/updates.html). Diese Vorschau ist noch kein freigeschalteter Live-Dienst.
