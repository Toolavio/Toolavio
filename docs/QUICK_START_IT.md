# Guida rapida

[English — principale](QUICK_START.md) · **Italiano** · [Deutsch](QUICK_START_DE.md)

[Apri Toolavio](https://toolavio.com/it/) · [Panoramica](../README.it.md) · [File di esempio](../examples/README.it.md) · [FAQ](FAQ_IT.md)

Prova queste tre attività con dati non riservati. I percorsi descrivono un procedimento e il contenuto atteso, non un collaudo completo di ogni dispositivo. Le etichette possono variare secondo lingua e release.

**Conserva gli originali.** I [campioni CSV e JSON](../examples/README.it.md) sono inventati: non servono documenti personali per provare gli strumenti sui dati.

## 1. Trasformare immagini in un solo PDF

**Apri:** [Strumenti PDF](https://toolavio.com/it/pdf/) e scegli la conversione da immagini a PDF.

**Occorrente:** due immagini JPG, PNG o WebP che sei autorizzato a utilizzare.

1. Usa **Scegli file** per selezionare le immagini nell'ordine desiderato.
2. Scegli **A4** oppure **Dimensione originale**, quindi imposta i margini.
3. Premi **Esegui** e scarica il PDF quando è pronto.
4. Apri il documento scaricato. Verifica che ci sia una pagina per ogni immagine, nell'ordine scelto e con contenuto leggibile.

**Risultato atteso:** un PDF contenente entrambe le immagini. Controlla l'output senza presumere che conservi ogni proprietà degli originali. Gruppi numerosi di immagini possono superare la memoria disponibile sul dispositivo.

## 2. Trovare le differenze tra due CSV

**Apri:** [Fogli di calcolo](https://toolavio.com/it/spreadsheet/) e scegli il confronto tra file CSV.

Usa [left.csv](../examples/csv/left.csv) e [right.csv](../examples/csv/right.csv), oppure incolla i testi seguenti nei due input tabellari.

**Prima tabella — left.csv**

```csv
name,score
Ada,4.8
Bob,7.2
```

**Seconda tabella — right.csv**

```csv
name,score
Ada,4.8
Cyd,9.6
```

1. Incolla il primo campione in **Tabella** e il secondo in **Seconda tabella**, oppure seleziona i file corrispondenti.
2. Verifica che siano presenti entrambi. Gli esempi usano la virgola come delimitatore e una riga di intestazione.
3. Avvia il confronto e controlla le righe comuni e quelle presenti in un solo input.
4. Copia o scarica il risultato usando le azioni dello strumento.

**Contenuto atteso:** Ada/4.8 è comune; Bob/7.2 compare soltanto nella prima tabella; Cyd/9.6 soltanto nella seconda.

L'operazione descritta confronta le righe considerando tutte le colonne. Un nome uguale non rende identiche due righe. Non è una fusione generica di database.

## 3. Pulire un CSV e convertirlo in JSON con Flow

**Apri:** [Toolavio Flow](https://toolavio.com/it/flow/).

Usa [clean-me.csv](../examples/csv/clean-me.csv), oppure incolla:

```csv
name,score
Ada,4.8

Zoe,7.25
```

1. Scegli **Pulisci CSV → CSV in JSON**. Se i preset disponibili sono diversi, aggiungi le corrispondenti operazioni compatibili.
2. Incolla il campione nell'area di input o seleziona il file una sola volta. Controlla passaggi e opzioni di pulizia prima di avviare.
3. Premi **Esegui flusso** e controlla output finale e risultati intermedi mostrati.
4. Scarica il JSON e verifica che contenga i record e i valori previsti.

**Contenuto atteso:** la pulizia scelta precede la conversione e Ada/4.8 e Zoe/7.25 rimangono presenti. Controlla se le celle vengono esportate come stringhe o numeri: non presumere che la conversione preservi ogni tipo o dettaglio di formattazione.

Flow collega operazioni compatibili, non combinazioni arbitrarie. Preset e funzioni avanzate disponibili possono variare.

## Un'altra prova rapida: formattare JSON

Apri [Formatta JSON](https://toolavio.com/it/developer/json-format/), incolla [sample.json](../examples/json/sample.json), mantieni l'indentazione a **2** ed esegui. Controlla che il risultato sia più leggibile e contenga ancora `project`, `sample` e tutti e tre i numeri. L'oggetto atteso è nella [guida ai campioni](../examples/README.it.md).

## Condividi la procedura, non i file

**Condividi flusso** comunica passaggi e impostazioni supportati; i destinatari forniscono i propri input. Verifica che la configurazione non contenga testo riservato prima di inviarla.

**Condividi strumento** invia un collegamento pubblico. **Condividi risultato** può inviare il file generato a un'applicazione scelta. Sono azioni diverse.

## Uso offline e installazione

Apri [Pacchetti offline](https://toolavio.com/it/offline/) con una connessione attiva, prepara il pacchetto necessario e segui le indicazioni per il tuo browser. Prova lo strumento prima di utilizzarlo offline.

Installare la web app non rende ogni funzione disponibile senza rete. Browser, risorse scaricate, aggiornamenti e spazio locale influiscono sulla disponibilità. Scarica i risultati importanti invece di trattare lo spazio del browser come un backup.

## Qualcosa non funziona?

Conserva l'originale, controlla limiti di formato e dimensione e prova un piccolo campione sintetico. Non cancellare i dati del sito prima di salvare il lavoro che vuoi conservare. Segui [Supporto](../SUPPORT.it.md) per descrivere il problema senza pubblicare informazioni private.

Le modifiche attuali del prodotto sono nella [pagina Aggiornamenti ufficiale](https://toolavio.com/it/updates.html).
