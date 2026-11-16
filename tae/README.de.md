# Toolavio Action Engine — PDF-Alpha · Build1

[English — Hauptsprache](README.md) · [Italiano](README.it.md) · **Deutsch**

**Fünf einbettbare PDF-Werkzeuge und eine einfachere Verwaltung von Kunden und Websites.** Toolavio Action Engine (TAE) ist das Integrationsprojekt hinter Toolavio Action. Der dauerhafte Anwendungspfad ist `https://toolavio.com/tae/`.

> **Status: PREPARED — privat vorbereitete, integrierte Build, keine veröffentlichte Produktionsversion.** Dieses GitHub-Update veröffentlicht nur die Dokumentation und den passenden Embed-Loader. Es stellt TAE nicht auf Toolavio.com bereit und aktiviert den Dienst nicht. Vor einer Verfügbarkeitsmeldung sind die Prüfung in der ursprünglichen Entwicklungsumgebung und die offenen Freigabetests erforderlich.

## Fünf Werkzeuge, ausschließlich PDF

| Werkzeug | Funktion | Optionales `data-tool` |
| --- | --- | --- |
| **PDFs zusammenführen** | Dokumente in der gewählten Reihenfolge verbinden. | `merge-pdf` |
| **Seiten extrahieren** | Aus ausgewählten Seiten ein neues PDF erstellen. | `extract-pdf` |
| **Seiten entfernen** | Die angegebenen Seiten löschen. | `remove-pdf` |
| **Seiten drehen** | Alle Seiten oder eine Auswahl drehen. | `rotate-pdf` |
| **Seiten neu ordnen** | Die Reihenfolge ändern oder das Dokument umkehren. | `reorder-pdf` |

Die Operationen bearbeiten PDF-Seiten, ohne sie in Rasterbilder umzuwandeln. Komprimierung, OCR, Schwärzung, Bildkonvertierung und das Umschreiben vorhandener Texte gehören nicht zu diesem TAE-Umfang.

Die frühere CSV-/JSON-/Bildauswahl der Alpha wird **nur in TAE** ersetzt. Die Toolavio-Hauptwebsite behält ihren eigenen Katalog; Toolavio Pro und PDF Studio bleiben getrennte Angebote. Auch das Vorhaben eines eigenständigen Toolavio-Core-Datenmoduls ist von dieser PDF-Alpha zu unterscheiden.

## Ein einfacheres Verwaltungspanel

Das vorbereitete Panel beginnt mit **Deine Websites → Website hinzufügen**, nicht mit einem technischen Konfigurationsformular:

1. Kunden auswählen oder anlegen und die Website-Adresse eingeben.
2. Die gewünschten PDF-Werkzeuge freischalten.
3. Der Anleitung zur DNS-Domainprüfung folgen und die Installation aktivieren.
4. Den Einbettungscode kopieren und dem Website-Betreiber geben.

Die Website-Karte bietet Codekopie, Werkzeugauswahl, Bearbeitung und Sperrung. Technische Kennungen, zusätzliche Ursprünge, Ablaufdatum und Änderungsprotokoll stehen unter den erweiterten Einstellungen.

Nach der einmaligen Server- und Datenbankeinrichtung werden normale Kunden- und Website-Änderungen aus der Datenbank gelesen, ohne neue Build oder Serverneustart. Dieses Verhalten wurde in lokalen HTTP-/SQLite-Tests geprüft; der MySQL-Produktionstest ist noch offen. Codeänderungen und Serverkonfiguration erfordern weiterhin den jeweiligen Release- oder Neustartprozess.

Dies ist ein **Panel für einen einzelnen Betreiber**, kein Kunden-Self-Service-Portal und kein Abrechnungssystem. Eine Domainfreigabe ist weder eine kostenpflichtige Lizenz noch DRM. Eine Installationssperre kündigt kein Abonnement und löscht keine bereits heruntergeladenen Ergebnisse.

## Einbettungsbeispiel — nach Bereitstellung und Website-Aktivierung

Verwende den vom Panel erzeugten Code. Der folgende Platzhalter ist keine aktive Installationskennung.

```html
<div id="toolavio-action"></div>
<script
  src="https://toolavio.com/tae/embed.js"
  data-container="toolavio-action"
  data-site-id="REPLACE_WITH_SITE_ID_FROM_ADMIN"
  data-lang="de"
  data-tool="merge-pdf"
  async>
</script>
```

**Keine Administratorpasswörter oder Sitzungsschlüssel in diesen Code eintragen.** Die Website-ID ist eine öffentliche Kennung, kein Passwort. Die gehostete Laufzeitumgebung prüft die Installationskonfiguration und die erlaubten Einbettungsursprünge.

`data-lang` unterstützt `en`, `it` und `de`; Standard ist Englisch. Das optionale `data-tool` wählt eines der fünf PDF-Werkzeuge, schaltet aber kein für die Website gesperrtes Werkzeug frei. Jede Instanz benötigt eine eigene Container-ID.

[HTML-Beispiel ansehen](example.html). Die Hostseite muss über HTTP/HTTPS bereitgestellt werden, nicht als Chat-Vorschau oder `file:`. Ihre Sicherheitsrichtlinie muss die notwendigen Toolavio-Skripte und -Frames zulassen; die Installation muss den exakten Ursprung der Website freigeben. Nur den Loader zu kopieren installiert weder die private Anwendung noch aktiviert es den Dienst.

## Verarbeitung und Grenzen

Die PDF-Verarbeitung erfolgt im Browser. Ressourcenladen und Zugriffsprüfungen benötigen weiterhin Serveranfragen. Diese TAE-Build verspricht weder Offline-Betrieb noch universelle CMS-Kompatibilität oder native App-Installation.

Vorgesehene Grenzen: **bis zu 10 Dateien, insgesamt 64 MiB und 300 Seiten**. Dokumente mit erkannter Verschlüsselung, interaktiven Formularen oder Signaturberechtigungen werden abgelehnt. Die Erkennung ist keine kryptografische Signaturprüfung. Der unveränderte Erhalt von Lesezeichen, Anhängen, Anmerkungen, Metadaten, Signaturen und anderen komplexen Strukturen ist nicht allgemein garantiert. Originale aufbewahren und wichtige Ergebnisse prüfen.

Der Loader verwendet einen Frame mit Sandbox und prüft Nachrichtenursprung, Framefenster und Instanzkanal für Bereitschaft und Größenanpassung. Über dieses Protokoll werden keine Dokumentinhalte oder Ergebnisse an die Hostseite übertragen. An den Browser ausgeliefertes JavaScript bleibt einsehbar.

## Prüfstand und offene Schritte

Der private Build1-Vorbereitungsbericht dokumentiert lokale Modul-/HTTP-Tests, Oberflächentests in Chromium offline und unabhängige Prüfungen von Inhalt, Seitenreihenfolge, Drehungen und Pixeln der Beispiel-PDFs. Die Browsertests verwenden synthetische Verwaltungs- oder Freigabeantworten sowie eine Offline-Testumgebung. **Sie sind kein vollständiger Produktionsnachweis.** Dieses Dokumentationsupdate wiederholt oder erweitert diese Softwareprüfungen nicht.

Vor der Aktivierung bleiben isolierte MySQL-Tests, normales HTTP-/HTTPS-Laden im Browser und Cross-Origin-Einbettung, Regressionstests in der ursprünglichen Toolavio-Umgebung, ein freigegebenes Deployment und eine anschließende Live-Prüfung erforderlich. Eine Zertifizierung für WordPress, Shopify, Safari/iPhone oder Android wird nicht behauptet.

## Öffentliche Integration, private Anwendung

Dieses Verzeichnis enthält **nur Loader, Beispiel und drei Lesefassungen der Anleitung**. PDF-Engine, Core, Panel-Implementierung, Datenbankmigration, Auslieferungsarchiv, Zugangsdaten und interne Testberichte werden nicht veröffentlicht. Dies ist weder eine Open-Source-Veröffentlichung der Toolavio-Anwendung noch ein Self-Hosting-Download.

Build1 bezeichnet die vorbereitete TAE-Lieferung, keine neue Live-Version der Plattform. Tatsächliche Produktveröffentlichungen stehen unter [Toolavio Updates](https://toolavio.com/de/updates.html). Bereits verfügbare Werkzeuge findest du auf [Toolavio.com](https://toolavio.com/de/). Hinweise für sichere Rückmeldungen stehen unter [Support](../SUPPORT.de.md).
