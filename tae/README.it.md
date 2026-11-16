# Toolavio Action Engine — Alpha PDF · Build1

[English — principale](README.md) · **Italiano** · [Deutsch](README.de.md)

**Cinque strumenti PDF incorporabili, con una gestione più semplice di clienti e siti.** Toolavio Action Engine (TAE) è il progetto d'integrazione alla base di Toolavio Action. Il percorso applicativo permanente è `https://toolavio.com/tae/`.

> **Stato: PREPARED — build privata integrata, non una release online di produzione.** Questo aggiornamento GitHub pubblica soltanto documentazione e loader corrispondente. Non pubblica né attiva TAE su Toolavio.com. Prima di annunciarne la disponibilità servono la revisione nell'ambiente di sviluppo originale e le verifiche di rilascio ancora aperte.

## Cinque strumenti, soltanto PDF

| Strumento | Cosa fa | `data-tool` facoltativo |
| --- | --- | --- |
| **Unisci PDF** | Combina i documenti nell'ordine scelto. | `merge-pdf` |
| **Estrai pagine** | Crea un PDF con le pagine selezionate. | `extract-pdf` |
| **Elimina pagine** | Rimuove le pagine indicate. | `remove-pdf` |
| **Ruota pagine** | Ruota tutte le pagine oppure una selezione. | `rotate-pdf` |
| **Riordina pagine** | Modifica l'ordine o inverte il documento. | `reorder-pdf` |

Le operazioni lavorano sulle pagine PDF senza rasterizzarle in immagini. Compressione, OCR, oscuramento, conversione immagini e riscrittura del testo non sono inclusi in questo perimetro TAE.

La precedente selezione Alpha CSV/JSON/immagini è sostituita **soltanto in TAE**. Il sito principale conserva il proprio catalogo; Toolavio Pro e PDF Studio restano offerte distinte. Anche il progetto del modulo dati autonomo Toolavio Core rimane separato da questa Alpha PDF.

## Un pannello più semplice per l'operatore

Il pannello preparato parte da **I tuoi siti → Aggiungi sito**, anziché da un modulo tecnico di configurazione:

1. Scegli o crea il cliente e inserisci l'indirizzo del sito.
2. Seleziona gli strumenti PDF da abilitare.
3. Segui le istruzioni di verifica DNS del dominio e attiva l'installazione.
4. Copia il codice d'integrazione e consegnalo al proprietario del sito.

La scheda del sito permette di copiare il codice, scegliere gli strumenti, modificare e sospendere. Identificativi tecnici, indirizzi aggiuntivi, scadenza e registro attività sono nelle impostazioni avanzate.

Dopo la configurazione iniziale di server e database, le normali modifiche a clienti e siti vengono lette dal database senza una nuova build o un riavvio. Questo comportamento è coperto da test HTTP/SQLite locali; la verifica MySQL di produzione resta aperta. Le modifiche al codice e alla configurazione del server richiedono invece il relativo processo di rilascio o riavvio.

È un **pannello per un solo operatore**, non un portale autonomo per clienti né un sistema di fatturazione. L'autorizzazione del dominio non è una licenza a pagamento o un DRM. Sospendere un'installazione non cancella un abbonamento o risultati già scaricati.

## Esempio d'integrazione — dopo pubblicazione e attivazione del sito

Usa il codice generato dal pannello. Il segnaposto seguente non è un identificativo d'installazione attivo.

```html
<div id="toolavio-action"></div>
<script
  src="https://toolavio.com/tae/embed.js"
  data-container="toolavio-action"
  data-site-id="REPLACE_WITH_SITE_ID_FROM_ADMIN"
  data-lang="it"
  data-tool="merge-pdf"
  async>
</script>
```

**Non inserire password amministrative o segreti di sessione nel codice.** L'ID del sito è pubblico, non è una password. Il runtime ospitato controlla configurazione dell'installazione e origini autorizzate a incorporarla.

`data-lang` supporta `en`, `it` e `de`, con inglese predefinito. `data-tool` è facoltativo e seleziona uno dei cinque strumenti PDF; non autorizza uno strumento disabilitato per il sito. Usa un container diverso per ogni istanza.

[Vedi l'esempio HTML](example.html). Servi la pagina ospitante via HTTP/HTTPS, non dall'anteprima della chat o con `file:`. La sua politica di sicurezza deve consentire script e frame Toolavio necessari; l'installazione deve autorizzare l'origine esatta del sito. Copiare soltanto il loader non installa l'applicazione privata e non attiva il servizio.

## Elaborazione e limiti

L'elaborazione PDF avviene nel browser. Caricare le risorse e controllare l'abilitazione richiede comunque richieste al server. Questa build TAE non promette funzionamento offline, compatibilità universale con i CMS o installazioni native.

Limiti predisposti: **fino a 10 file, 64 MiB complessivi e 300 pagine**. Vengono rifiutati i documenti con cifratura, moduli interattivi o permessi di firma rilevati. Il rilevamento non è una validazione crittografica delle firme. Non è garantita universalmente la conservazione inalterata di segnalibri, allegati, annotazioni, metadati, firme e altre strutture complesse. Conserva gli originali e controlla i risultati importanti.

Il loader usa un iframe con sandbox e verifica origine del messaggio, finestra del frame e canale dell'istanza per caricamento e ridimensionamento. Non trasferisce al sito ospitante contenuti dei documenti o risultati tramite quel protocollo. Il JavaScript inviato al browser rimane ispezionabile.

## Cosa è stato verificato e cosa manca

Il rapporto privato di preparazione Build1 documenta test locali dei moduli/HTTP, prove dell'interfaccia in Chromium offline e controlli indipendenti di contenuto, ordine, rotazioni e pixel dei PDF campione. I test browser utilizzano risposte amministrative o autorizzazioni sintetiche e un ambiente offline. **Non sono un collaudo completo della produzione.** Questo aggiornamento documentale non riesegue né estende quelle verifiche software.

Prima dell'attivazione restano: MySQL isolato, caricamento browser HTTP/HTTPS normale e incorporamento tra origini diverse, regressioni nell'ambiente Toolavio originale, pubblicazione autorizzata e controllo live successivo. Non viene dichiarata una certificazione di compatibilità WordPress, Shopify, Safari/iPhone o Android.

## Integrazione pubblica, applicazione privata

Questa cartella contiene **soltanto loader, esempio e tre guide di lettura**. Nessun motore PDF, Core, implementazione del pannello, migrazione database, archivio di distribuzione, credenziale o rapporto interno dei test viene pubblicato. Non è un rilascio open source dell'applicazione Toolavio né un download self-hosted.

Build1 identifica la consegna TAE preparata, non una nuova versione live della piattaforma. Le release effettive restano negli [Aggiornamenti Toolavio](https://toolavio.com/it/updates.html). Gli strumenti già disponibili sono su [Toolavio.com](https://toolavio.com/it/). Per segnalazioni sicure consulta [Supporto](../SUPPORT.it.md).
