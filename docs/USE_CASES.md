# Practical ways to use Toolavio

[Open Toolavio](https://toolavio.com/) · [Overview](../README.md) · [Quick start](QUICK_START.md) · [Italiano](CASI_USO_IT.md)

## Start with a result, not a product name

You do not need to learn the whole platform to use one tool. Start from the task you need to complete, provide the relevant input, and review the result. Use Flow only when connecting several compatible operations is helpful.

The six scenarios below explain practical uses of the capabilities described in this repository. They are usage guides—not new test results, a guarantee of compatibility with every file, or a claim that a specialist application is never needed. Button labels and available settings can change with the website release.

| What you need | Where to start |
| --- | --- |
| Put several photos into one document | [Images to PDF](https://toolavio.com/en/images-to-pdf/) |
| Prepare an image in another size or format | [Image tools](https://toolavio.com/en/images/) |
| Find differences between two tables | [Compare CSV files](https://toolavio.com/en/spreadsheet/compare-csv-files/) |
| Make JSON easier to read | [Format JSON](https://toolavio.com/en/developer/json-format/) |
| Clean tabular data and change its format | [Toolavio Flow](https://toolavio.com/en/flow/) |
| Use a selected toolkit without a connection | [Offline toolkits](https://toolavio.com/en/offline/) |

## 1. Put several photos into one PDF

**The task:** prepare a single document instead of sending several image attachments.

Select the images in the intended order, choose the page-size and margin options offered by the tool, run the conversion, and download the PDF.

**Review the result:** open the downloaded document and check the page count, image order, orientation, and readability. A PDF containing photos is not automatically an OCR document with searchable text.

**When it is useful:** handing over a small set of pictures, assembling visual notes, or preparing a document from images you are authorized to use.

[Follow the images-to-PDF walkthrough](QUICK_START.md).

## 2. Prepare an image for another destination

**The task:** change an image's dimensions or file format before using it on a website or in another application.

Open the image category and choose the specific resize or conversion tool. Select the file, review the settings, and download the result.

**Review the result:** check the dimensions, appearance, transparency where relevant, and whether the destination accepts the output format. Changing format is not a promise of a smaller file or unchanged quality. Read the selected tool's limits before processing a large batch.

**Keep it simple:** a single image task does not require a saved project or a workflow.

## 3. Find what changed between two CSV files

**The task:** compare two exports and identify shared rows and rows found in only one input.

Start with the fictional [left.csv](../examples/csv/left.csv) and [right.csv](../examples/csv/right.csv) files. Supply both inputs, check the delimiter and header assumptions, and run the comparison.

**Expected sample content:** Ada/4.8 is shared; Bob/7.2 appears only on the left; Cyd/9.6 appears only on the right.

**Important distinction:** the documented operation compares complete rows across their columns. Matching a name does not imply that every field matches. Comparing files is not the same as merging records into a database.

The sample files are safe practice material, not customer data.

## 4. Make a JSON document readable

**The task:** turn compact JSON into an easier-to-inspect representation.

Paste [sample.json](../examples/json/sample.json) into Format JSON, choose the available indentation setting, and run the action. Copy or download the result.

**Review the result:** confirm that the expected keys and values are still present. Formatting improves presentation; it does not determine whether the data is correct for a business process or valid against every possible schema.

An invalid JSON input should be addressed rather than treated as a successfully formatted result.

## 5. Clean a table and reuse the result

**The task:** apply a supported cleanup to a CSV, then convert the resulting table into JSON without manually moving the intermediate file between tools.

Open Flow, use [clean-me.csv](../examples/csv/clean-me.csv), and select or assemble the compatible **Clean CSV → CSV to JSON** steps. Review the cleanup settings before execution.

**Review the result:** the intended records must remain present after cleanup. Check field names and whether values have been represented as strings or numbers. Do not assume every conversion is reversible.

Once a procedure is useful, a supported workflow link can let another person repeat it with their own input. Review the settings before sharing: a workflow link is not a transfer of your files.

## 6. Prepare a toolkit before going offline

**The task:** use supported utilities when a connection may not be available.

While online, open the Offline page and prepare the toolkit you need. Test the particular tool with a non-sensitive sample before relying on it without a connection. Installation instructions depend on the browser and device.

**Keep the distinction clear:** installing a web app and preparing its offline resources are related but different actions. Account services and operations that require a connection do not become offline simply because the app is installed.

Download important outputs. Local browser storage is useful workspace storage, not a guaranteed backup.

## Choose the simplest path

For one conversion, use its dedicated tool. For several compatible transformations, use Flow. For repeated use, explore favorites and supported presets. For another person's task, share a tool or procedure rather than posting private input data.

See the [FAQ](FAQ.md) for privacy and platform limits, or [Support](../SUPPORT.md) for a reproducible problem. No application source or private processing engine is distributed with these examples.

**[Try your next task on Toolavio.com →](https://toolavio.com/)**
