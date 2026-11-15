# Roadmap pubblica

[English — principale](ROADMAP.md) · **Italiano** · [Deutsch](ROADMAP_DE.md)

[Panoramica](../README.it.md) · [Prova Toolavio](https://toolavio.com/it/) · [Casi d'uso](CASI_USO_IT.md) · [Aggiornamenti ufficiali](https://toolavio.com/it/updates.html)

Questa pagina spiega la direzione di Toolavio. Non è un impegno di rilascio, un calendario di consegna o un elenco di funzioni tutte scaricabili da questo repository.

## Disponibile attraverso il sito

La piattaforma offre un catalogo utilizzabile dal browser, ricerca, trasferimento dei file nei percorsi compatibili, Flow, controlli tecnici sui risultati, funzioni di lavoro locale, preferiti e pacchetti offline selezionati. Strumento, formato di input, browser e accesso alle funzioni determinano ciò che è disponibile in uno specifico percorso.

Questo elenco riassume capacità del prodotto, non certifica ogni input, browser o strumento. Il sito aggiornato e le sue note di rilascio rimangono il riferimento per le modifiche pubblicate.

## Priorità attuali del prodotto

**Semplificare le attività comuni.** Rendere l'operazione subito accessibile, ridurre le selezioni ripetute dei file e utilizzare etichette comprensibili. I workflow avanzati devono restare facoltativi.

**Aumentare la fiducia nei risultati.** Ampliare i controlli indipendenti, descrivere le trasformazioni distruttive o con perdita di informazioni e rendere chiari gli errori. Un file strutturalmente valido non dimostra che il documento sia corretto.

**Migliorare utilizzo mobile e accessibilità.** Perfezionare layout piccoli, controlli touch, navigazione da tastiera, feedback di caricamento e percorsi di download.

**Migliorare la qualità linguistica.** Mantenere coerente l'esperienza multilingua e perfezionare testi, istruzioni e limiti specifici dei formati.

## Toolavio Core — moduli autonomi previsti

L'obiettivo è estrarre componenti di elaborazione esistenti e idonei dall'interfaccia del sito, rendendoli verificabili e riutilizzabili autonomamente. Il primo ambito previsto è l'elaborazione CSV, TSV e JSON.

Prima di descriverlo come disponibile, un modulo autonomo deve avere contratti di input/output chiari, limiti documentati e test indipendenti. Qui non viene offerto un pacchetto sorgente Core né un'installazione pubblica tramite gestore di pacchetti.

## Toolavio Action Engine — integrazione prevista per siti web

TAE vuole portare gli strumenti Toolavio compatibili in altri siti tramite un piccolo componente incorporabile. **Toolavio Action** è il nome del prodotto rivolto ai clienti. Il percorso permanente scelto è `/tae/` su Toolavio.com: indicarlo non significa che il servizio sia già pronto per la produzione.

Il modello previsto utilizza l'infrastruttura Toolavio per configurazioni, aggiornamenti e gestione abbonamenti, preservando l'elaborazione locale quando supportata dall'operazione. Non vengono promessi qui prezzi, date di disponibilità o compatibilità universale con i CMS.

## Cosa considereremo un progresso?

Vogliamo descrivere i progressi attraverso risultati utilizzabili, non tramite quantità di strumenti o nuovi nomi. I seguenti sono obiettivi di accettazione, non risultati già raggiunti sull'intero prodotto.

| Ambito | Risultato che vogliamo dimostrare |
| --- | --- |
| Primo utilizzo | Una persona identifica lo strumento pertinente e completa un'attività supportata senza imparare tutta la piattaforma. |
| Continuità dei file | I passaggi compatibili riutilizzano input o risultato intermedio senza download e selezioni inutili. |
| Qualità degli output | Risultati rappresentativi sono confrontati con contenuti attesi, rendendo esplicite trasformazioni e limitazioni. |
| Uso mobile | Azione principale, impostazioni, feedback e risultato rimangono utilizzabili nei layout piccoli verificati. |
| Attività ripetute | Un preset supportato può essere salvato, riaperto, compreso e utilizzato con un altro input. |
| Condivisione | Un destinatario ricostruisce una procedura supportata con i propri file, senza ricevere input privati del mittente. |
| Estrazione Core | Un modulo selezionato funziona fuori dal sito con dipendenze documentate e test riproducibili. |
| Integrazione TAE | Una pagina esterna autorizzata incorpora ed esegue un'operazione supportata senza conflitti con il sito ospitante. |

La tabella non implica percentuali fisse, date di consegna o certificazioni.

## Sequenza di sviluppo

La direzione è migliorare il prodotto esistente, isolare un piccolo modulo dati riutilizzabile e poi verificare un'integrazione con componenti condivisi idonei. In questo modo evitiamo una seconda implementazione delle stesse operazioni prima di dimostrare che il riutilizzo sia praticabile.

Estrarre con successo CSV/JSON non renderebbe automaticamente portabile ogni motore PDF, immagini o multimedia. Allo stesso modo, un embed riuscito su una pagina di prova non dimostrerebbe compatibilità con ogni CMS.

**Toolavio Core e TAE restano iniziative di sviluppo.** La disponibilità pubblica va dichiarata soltanto dopo il rilascio effettivo del componente e del suo ambito supportato. Questo repository non ne distribuisce l'implementazione.

## Presentazione pubblica, implementazione riservata

Software e materiali interni di sviluppo restano riservati. Questo repository serve per spiegazioni, guide e feedback sicuro, non per distribuire il Core o i sorgenti del sito.

## Aiutaci a dare priorità al lavoro utile

[Suggerisci un miglioramento](https://github.com/Toolavio/Toolavio/issues/new?template=feature_request.yml) descrivendo un'attività reale, la difficoltà incontrata e il risultato necessario. Una richiesta non implica accettazione o un rilascio pianificato.

Il feedback utile spiega dove il percorso diventa poco chiaro: scelta dello strumento, input, opzioni, interpretazione del risultato o salvataggio. Usa esempi inventati. Dettagli dell'account e problemi di sicurezza appartengono ai canali privati indicati in [Supporto](../SUPPORT.it.md) e [Sicurezza](../SECURITY.it.md).

Leggi i [Casi d'uso pratici](CASI_USO_IT.md) per gli attuali percorsi documentati. La cronologia reale del prodotto rimane sul sito ufficiale, senza essere duplicata qui.
