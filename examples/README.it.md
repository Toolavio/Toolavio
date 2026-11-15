# Prova Toolavio con dati di esempio inventati

[English — principale](README.md) · **Italiano** · [Deutsch](README.de.md)

[Apri Toolavio](https://toolavio.com/it/) · [Guida rapida](../docs/QUICK_START_IT.md) · [Panoramica del progetto](../README.it.md)

Questi piccoli file permettono di provare alcune operazioni senza documenti riservati. Nomi, punteggi e valori di progetto sono inventati. Non contengono credenziali, dati degli utenti o codice sorgente applicativo.

## File pronti da usare

| File | Dove provarlo | Cosa controllare |
| --- | --- | --- |
| [left.csv](csv/left.csv) e [right.csv](csv/right.csv) | [Fogli di calcolo](https://toolavio.com/it/spreadsheet/), scegliendo il confronto CSV | Ada/4.8 è comune; Bob/7.2 compare soltanto a sinistra; Cyd/9.6 soltanto a destra. |
| [clean-me.csv](csv/clean-me.csv) | [Flow](https://toolavio.com/it/flow/), usando Pulisci CSV → CSV in JSON | Rimuovere la riga vuota con l'opzione appropriata, conservando Ada/4.8 e Zoe/7.25. |
| [sample.json](json/sample.json) | [Formatta JSON](https://toolavio.com/it/developer/json-format/) | Indentazione leggibile senza modificare oggetto, booleano o valori dell'array. |

Apri un file dall'elenco e copiane il contenuto nello strumento. Per salvarlo, utilizza il comando GitHub per scaricare il file originale, quando disponibile. Confronto e Flow accettano anche testo incollato nei campi supportati.

Contenuti originali diretti: [left.csv](https://raw.githubusercontent.com/Toolavio/Toolavio/main/examples/csv/left.csv) · [right.csv](https://raw.githubusercontent.com/Toolavio/Toolavio/main/examples/csv/right.csv) · [clean-me.csv](https://raw.githubusercontent.com/Toolavio/Toolavio/main/examples/csv/clean-me.csv) · [sample.json](https://raw.githubusercontent.com/Toolavio/Toolavio/main/examples/json/sample.json).

## Esempio di formattazione JSON attesa

L'input è l'oggetto compatto in `sample.json`. Con indentazione di due spazi, gli stessi dati devono rimanere:

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

Gli spazi possono cambiare, i dati no. Nella conversione CSV→JSON verifica come lo strumento rappresenta i tipi delle celle, senza presumere che ogni cella dall'aspetto numerico diventi un numero.

## Ambito

Sono esempi guidati, non una suite completa di test o una certificazione di ogni operazione Toolavio. Controlla sempre opzioni scelte e output reale. Il prodotto può cambiare: consulta gli [aggiornamenti ufficiali](https://toolavio.com/it/updates.html) e, quando necessario, [segnala un problema riproducibile](https://github.com/Toolavio/Toolavio/issues/new/choose) con dati sintetici.

Questi file di esempio non includono l'applicazione Toolavio, il Core, un SDK o un rilascio software open source.
