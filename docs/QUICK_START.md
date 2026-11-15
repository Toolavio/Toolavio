# Quick start

[Open Toolavio](https://toolavio.com/) · [Overview](../README.md) · [Sample files](../examples/README.md) · [FAQ](FAQ.md)

Try these three tasks with non-sensitive sample data. The walkthroughs describe a workflow and expected content—not exhaustive testing on every device. Labels can vary by language and release.

**Keep your originals.** The ready-to-use [CSV and JSON samples](../examples/README.md) are fictional; you do not need private documents to try the data tools.

## 1. Turn images into one PDF

**Open:** [Images to PDF](https://toolavio.com/en/images-to-pdf/).

**You need:** two JPG, PNG, or WebP images you are allowed to use.

1. Use **Choose files** to select the images in the intended order.
2. Choose **A4** or **Original size**, then a margin setting.
3. Press **Run** and download the resulting PDF when ready.
4. Open the downloaded document. Confirm that it has one page per selected image, in the intended order, with readable content.

**Expected result:** one PDF containing both images. Review the output rather than assuming every original image property is preserved. Large image sets can exceed your device's memory.

## 2. Find the differences between two CSV files

**Open:** [Compare CSV files](https://toolavio.com/en/spreadsheet/compare-csv-files/).

Use [left.csv](../examples/csv/left.csv) and [right.csv](../examples/csv/right.csv), or paste the text below into the two table inputs.

**First table — left.csv**

```csv
name,score
Ada,4.8
Bob,7.2
```

**Second table — right.csv**

```csv
name,score
Ada,4.8
Cyd,9.6
```

1. Paste the first sample into **Table** and the second into **Second table**, or select the corresponding files.
2. Check that both inputs are present. These examples use commas and a header row.
3. Run the comparison and inspect the shared rows and rows found only in each input.
4. Copy or download the result using the actions offered by the tool.

**Expected content:** Ada/4.8 is shared; Bob/7.2 appears only in the first table; Cyd/9.6 appears only in the second.

The described operation compares rows across all columns. A matching name alone does not make two rows identical. This is not a general database merge.

## 3. Clean a CSV and convert it to JSON in Flow

**Open:** [Toolavio Flow](https://toolavio.com/en/flow/).

Use [clean-me.csv](../examples/csv/clean-me.csv), or paste:

```csv
name,score
Ada,4.8

Zoe,7.25
```

1. Choose **Clean CSV → CSV to JSON**. If the available presets differ, add the corresponding compatible operations.
2. Paste the sample into the input area, or select the file once. Review the steps and cleanup options before running.
3. Press **Run flow** and inspect the final output and any intermediate results exposed by the interface.
4. Download the JSON and confirm that it contains the intended records and values.

**Expected content:** the selected cleanup is applied before conversion, and Ada/4.8 and Zoe/7.25 remain present. Check whether cells are exported as strings or numbers; do not assume conversion preserves every source type or formatting detail.

Flow connects compatible operations, not arbitrary combinations. Available presets and advanced features can vary.

## Another quick check: format JSON

Open [Format JSON](https://toolavio.com/en/developer/json-format/), paste [sample.json](../examples/json/sample.json), keep indentation at **2**, and run the action. Check that the result is easier to read and still contains `project`, `sample`, and all three numbers. The expected object is shown in the [sample guide](../examples/README.md).

## Share the procedure, not the files

**Share workflow** shares supported steps and settings; recipients supply their own inputs. Review the configuration for sensitive text before sending it.

**Share tool** sends a public tool link. **Share result** can send the generated file to an application you select. These actions are different.

## Offline use and installation

Open [Offline toolkits](https://toolavio.com/en/offline/) while connected, prepare the toolkit you need, and follow the instructions offered for your browser. Test the specific tool before relying on it offline.

An installed web app does not make every function available without a connection. Browser support, downloaded resources, updates, and storage affect availability. Download important results rather than treating browser storage as a backup.

## Something does not work?

Keep the original, check format and size limits, and try a small synthetic sample. Do not clear site data before saving work you need from the local workspace. Follow [Support](../SUPPORT.md) to describe the problem without posting private information.

For current product changes, use the official [Updates page](https://toolavio.com/en/updates.html).
