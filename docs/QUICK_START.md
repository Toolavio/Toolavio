# Quick start

[Back to Toolavio](https://toolavio.com/) · [Overview](../README.md) · [FAQ](FAQ.md)

Use these three walkthroughs to try Toolavio with non-sensitive sample data. They describe the workflow and expected result, not exhaustive testing on every device. Labels can vary by language and release.

Keep your originals. Do not use confidential documents just to try a tool.

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

You can paste these samples directly into the two table inputs, or save them as small UTF-8 `.csv` files. The sample names and scores are fictional.

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
3. Run the comparison and inspect the shared rows and the rows found only in each input.
4. Copy or download the result using the actions offered by the tool.

**Expected content:** Ada/4.8 is shared; Bob/7.2 appears only in the first table; Cyd/9.6 appears only in the second.

The tool compares rows across all columns in the described operation. A matching name alone does not make two rows identical. This is not a general database merge.

## 3. Clean a CSV and convert it to JSON in Flow

**Open:** [Toolavio Flow](https://toolavio.com/en/flow/).

**Sample input:**

```csv
name,score
Ada,4.8

Zoe,7.25
```

1. Choose the **Clean CSV → CSV to JSON** preset. If the available presets differ, add the corresponding compatible operations.
2. Paste the sample into the input area, or select your sample CSV once. Review the steps and their options before running.
3. Press **Run flow** and inspect the final output and any intermediate results exposed by the interface.
4. Download the JSON and confirm that it contains the intended records and values.

**Expected content:** the selected cleanup is applied before conversion, and the Ada/4.8 and Zoe/7.25 records remain present. Check whether cell values are exported as strings or numbers; do not assume that conversion preserves all source types or formatting.

Flow only connects compatible operations. A recipe cannot perform an operation that is not implemented or accept an unsupported input. Availability of particular presets or advanced features can vary.

## Before sharing a workflow

Choose **Share workflow** to share the supported sequence and settings—not your input files. The recipient supplies their own files. Review the shared configuration for sensitive text before sending it.

**Share tool** and **Share result** are different actions: the first shares a public link; the second can send the generated file to an application you choose.

## Use offline or install Toolavio

Open [Offline toolkits](https://toolavio.com/en/offline/) while connected, prepare the toolkit you need, and follow the installation instructions offered for your browser. Test the specific tool before relying on it offline.

An installed web app is not a promise that every tool works without a connection. Browser support, downloaded resources, updates, and local storage affect availability. Download important results rather than relying on the browser as a backup.

## Something does not work?

Check the format and size limits, retain the original, and try a small synthetic sample. Do not clear site data before saving anything you need from the local workspace. Follow [Support](../SUPPORT.md) to report a reproducible problem without publishing private information.

For product changes, use the official [Updates page](https://toolavio.com/en/updates.html).
