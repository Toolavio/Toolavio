# Quick start

[Back to Toolavio](https://toolavio.com/) · [Overview](../README.md) · [FAQ](FAQ.md)

Use these three walkthroughs to try Toolavio with non-sensitive sample files. They describe the intended workflow and expected result; they are not a claim of exhaustive testing on every device. Labels can vary by language and release.

Keep your originals. Do not use confidential documents just to try a tool.

## 1. Turn images into one PDF

**Open:** [Images to PDF](https://toolavio.com/en/images-to-pdf/).

**You need:** two JPG, PNG, or WebP images you are allowed to use.

1. Select the images in the order you want them to appear.
2. Choose A4 or image-sized pages and the available margin setting.
3. Run the conversion and download the PDF.
4. Open the downloaded document. Confirm that it has one page per selected image, in the intended order, with readable content.

**Expected result:** one PDF containing both images. Images are re-encoded for the document; do not assume the output preserves every original image property. Large image sets can exceed your device's memory.

## 2. Find the differences between two CSV files

**Open:** [Toolavio](https://toolavio.com/) and search for **Compare CSV files**.

Create two small UTF-8 text files with a `.csv` extension. These sample names and scores are fictional.

**left.csv**

```csv
name,score
Ada,4.8
Bob,7.2
```

**right.csv**

```csv
name,score
Ada,4.8
Cyd,9.6
```

1. Open the comparison tool and select both files. Where the homepage offers file handoff, you can select them there first.
2. Use the available settings for a comma-delimited table with a header row.
3. Run the comparison and inspect the shared rows and the rows found only in each input.
4. Copy or download the result using the actions offered by the tool.

**Expected content:** Ada/4.8 is shared; Bob/7.2 appears only in the first table; Cyd/9.6 appears only in the second.

The comparison is based on the tool's supported table-matching rules, not a general database merge. Check the selected columns and options rather than assuming that a matching name alone makes two rows identical.

## 3. Clean a CSV and convert it to JSON in Flow

**Open:** [Toolavio Flow](https://toolavio.com/en/flow/).

**You need:** a small CSV with a header row and a few sample records, such as the file below.

```csv
name,score
Ada,4.8

Zoe,7.25
```

1. Choose a compatible CSV flow, or add **Clean CSV** followed by **CSV to JSON** using the operations available in Flow.
2. Select the file once. Review each step's available options, including any removal of empty rows or whitespace.
3. Run the flow and inspect the final output and any intermediate results exposed by the interface.
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
