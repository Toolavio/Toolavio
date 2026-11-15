# Toolavio Action Engine — Alpha con cinque strumenti

[English — principale](README.md) · **Italiano** · [Deutsch](README.de.md)

Una piccola integrazione per offrire strumenti Toolavio su altri siti. Il percorso permanente previsto è **`https://toolavio.com/tae/`**.

> **Stato: anteprima del codice d'integrazione Alpha. Questo aggiornamento non pubblica il runtime sui server Toolavio.** La cartella contiene loader pubblico, esempio HTML e istruzioni, non l'applicazione di elaborazione riservata. Copiare l'esempio non rende subito disponibili i cinque strumenti: servono pubblicazione del runtime e autorizzazione dell'origine del sito ospitante.

## I cinque strumenti

| Strumento | Ambito Alpha |
| --- | --- |
| Formatta JSON | Indenta JSON valido con il formattatore originale, conservando i token numerici. |
| CSV → JSON | Converte una tabella UTF-8 con intestazioni in record; le celle restano stringhe. |
| JSON → CSV | Esporta un array non vuoto di record piatti. Null/campi assenti diventano celle vuote; numeri molto precisi vanno inseriti come stringhe. |
| Confronta CSV | Confronta righe complete, distinguendo maiuscole, spazi e quantità dei duplicati; stesse intestazioni e delimitatore. |
| Ridimensiona immagine | Input PNG/JPEG/WebP; vicino più prossimo; output PNG. Adatto alla grafica pixel, non è un miglioramento fotografico. |

L'Alpha riservata implementa questi percorsi con i motori Toolavio esistenti, non con convertitori dimostrativi sostitutivi. I file vengono elaborati nel browser. Caricare pagina e risorse richiede connessione: questa Alpha non promette installazione offline, fatturazione, licenze per dominio o compatibilità universale con i CMS.

## Codice d'integrazione — dopo l'attivazione sul server

```html
<div id="toolavio-action"></div>
<script src="https://toolavio.com/tae/embed.js"
  data-container="toolavio-action" data-lang="it" async></script>
```

Lingue: `en`, `it`, `de`; inglese predefinito. `data-tool` facoltativo: `json-format`, `csv-to-json`, `json-to-csv`, `compare-csv`, `resize-image`. Ogni istanza deve avere un container diverso.

[Vedi l'esempio HTML completo](example.html). Servilo via HTTP/HTTPS, non come allegato della chat o con `file:`. La CSP del sito deve consentire script e frame Toolavio; l'operatore deve autorizzare l'origine HTTPS esatta. Il codice pubblico non è una licenza a pagamento.

Il loader crea un iframe con sandbox. Il protocollo di dimensionamento verifica origine, finestra del frame e canale dell'istanza; non invia al sito ospitante file, testi inseriti o risultati. Appunti e download dipendono dai permessi del browser.

## Verifiche e passaggi ancora necessari

Il pacchetto privato ha nuovi test sui motori/HTTP e prove Chromium offline, con download reali e controlli indipendenti di tabelle e pixel. **Non sono test della produzione.** Il caricatore offline risolve i moduli tramite blob locali e adatta il packaging del worker all'origine di test opaca. Non dimostra caricamento HTTP dei moduli o incorporamento cross-origin reale. La suite browser HTTP non è riuscita ad avviarsi a causa della politica amministrativa di navigazione del browser disponibile; il blocco è documentato.

Prima di annunciare l'Alpha online: eseguire la suite browser normale, configurare le origini, integrare nel vero sorgente e nella pipeline release, ottenere autorizzazione al deploy, aggiornare le note del prodotto e verificare il risultato live. Non sono certificati WordPress, Shopify, Safari/iPhone o funzioni native Android.

## Confini

Nessun Core, server riservato, ZIP di produzione, credenziale o file cliente viene pubblicato qui. Il JavaScript inviato al browser resta ispezionabile. Non viene assegnata una licenza open source all'applicazione e non vengono attivati prezzi, account o pagamenti.

La piattaforma esistente è su [Toolavio.com](https://toolavio.com/it/). Le release effettive sono negli [Aggiornamenti](https://toolavio.com/it/updates.html). Questa anteprima non è un servizio già online.
