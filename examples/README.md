# Try Toolavio with fictional sample data

[Open Toolavio](https://toolavio.com/) · [Quick start](../docs/QUICK_START.md) · [Project overview](../README.md)

These tiny files let you try a few operations without using confidential documents. Names, scores, and project values are fictional. They contain no credentials, user records, or application source code.

## Ready-to-use files

| File | Try it with | What to look for |
| --- | --- | --- |
| [left.csv](csv/left.csv) and [right.csv](csv/right.csv) | [Compare CSV files](https://toolavio.com/en/spreadsheet/compare-csv-files/) | Ada/4.8 is shared; Bob/7.2 appears only on the left; Cyd/9.6 only on the right. |
| [clean-me.csv](csv/clean-me.csv) | [Flow](https://toolavio.com/en/flow/), using Clean CSV → CSV to JSON | Remove the empty row with the appropriate cleanup option while preserving Ada/4.8 and Zoe/7.25. |
| [sample.json](json/sample.json) | [Format JSON](https://toolavio.com/en/developer/json-format/) | Readable indentation without changing the object, boolean, or array values. |

Open a file above and copy its contents into the relevant tool. To save a file, use GitHub's raw-file download control where available. The comparison and Flow tools also accept pasted text in their supported input fields.

Direct raw contents: [left.csv](https://raw.githubusercontent.com/Toolavio/Toolavio/main/examples/csv/left.csv) · [right.csv](https://raw.githubusercontent.com/Toolavio/Toolavio/main/examples/csv/right.csv) · [clean-me.csv](https://raw.githubusercontent.com/Toolavio/Toolavio/main/examples/csv/clean-me.csv) · [sample.json](https://raw.githubusercontent.com/Toolavio/Toolavio/main/examples/json/sample.json).

## Expected JSON formatting example

Input is the compact object in `sample.json`. With an indentation of two spaces, the same data should remain:

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

Whitespace may change; the data should not. For CSV-to-JSON, check how the selected tool represents cell types rather than assuming that every numeric-looking cell becomes a number.

## Scope

These are guided examples, not a complete test suite or certification of every Toolavio operation. Always check the selected options and actual output. Product behavior can change; consult [official updates](https://toolavio.com/en/updates.html) and [report a reproducible issue](https://github.com/Toolavio/Toolavio/issues/new/choose) using synthetic data if needed.

These sample files do not include the Toolavio application, Core, SDK, or an open-source software release.
