<p align="center">
  <a href="https://toolavio.com/">
    <img src="https://raw.githubusercontent.com/Toolavio/Toolavio/main/assets/toolavio-mark.svg" alt="Toolavio" width="96" height="96">
  </a>
</p>

<h1 align="center">Toolavio</h1>

<p align="center"><strong>One place to convert, edit, calculate, and work with your files.</strong></p>

<p align="center">
  <a href="https://toolavio.com/"><strong>Open Toolavio</strong></a> ·
  <a href="https://github.com/Toolavio/Toolavio/blob/main/docs/QUICK_START.md">Quick start</a> ·
  <a href="https://github.com/Toolavio/Toolavio/blob/main/examples/README.md">Try sample files</a> ·
  <a href="https://github.com/Toolavio/Toolavio/discussions">Community</a> ·
  <a href="https://github.com/Toolavio/Toolavio/blob/main/docs/PRESENTAZIONE_IT.md">Italiano</a>
</p>

<p align="center"><strong>Browser-based · Desktop & mobile · 17 interface languages</strong><br>
Public product guide. Private application code.</p>

Toolavio brings everyday digital tasks into one browser-based toolkit for desktop and mobile: **PDFs, images, text, tables, calculations, and developer utilities**. Its catalog contains approximately **1,000 operations across 12 categories**, with interfaces in **17 languages**.

**Use the product at [Toolavio.com](https://toolavio.com/).** This repository contains its public presentation, user guides, fictional sample data, and feedback forms—not the application source code or an installable software package.

## Why give Toolavio a try?

**Start with a task, not a software manual.** Open a dedicated tool when you know what you need, or use the site's search and file selection to explore compatible actions.

**Keep a useful result moving.** Supported workflows can pass output to the next compatible operation instead of making you download and select the same content again.

**Choose local processing where supported.** File-processing tools can work in your browser; the scope and limitations are explained below. Advanced features remain optional for simple tasks.

## Start with what you need

| Your task | Open the tool |
| --- | --- |
| Turn photos into a PDF | [Images to PDF](https://toolavio.com/en/images-to-pdf/) |
| Merge, split, or organize documents | [PDF tools](https://toolavio.com/en/pdf/) |
| Resize or convert an image | [Image tools](https://toolavio.com/en/images/) |
| Compare two tables | [Compare CSV files](https://toolavio.com/en/spreadsheet/compare-csv-files/) |
| Make JSON easier to read | [Format JSON](https://toolavio.com/en/developer/json-format/) |
| Find developer utilities | [Developer tools](https://toolavio.com/en/developer/) |
| Combine compatible operations | [Toolavio Flow](https://toolavio.com/en/flow/) |
| Prepare tools for offline use | [Offline toolkits](https://toolavio.com/en/offline/) |

**Choose a tool → select a file or enter data → run the operation → review and download the result.** Advanced features are optional; a simple conversion should not require learning a workflow system.

### Try a tiny input — no private document needed

Open the [JSON formatter](https://toolavio.com/en/developer/json-format/) and paste:

```json
{"project":"Toolavio","tasks":["convert","calculate","organize"]}
```

Choose indentation, run the operation, and inspect the result. With two-space indentation, the expected content is:

```json
{
  "project": "Toolavio",
  "tasks": [
    "convert",
    "calculate",
    "organize"
  ]
}
```

This is a fictional example of the expected transformation, not a claim that every tool or browser has been tested. Compare the keys, values, and array order before copying or downloading.

For file-based tasks, use the [small CSV and JSON samples](https://github.com/Toolavio/Toolavio/blob/main/examples/README.md) and follow the [three practical walkthroughs](https://github.com/Toolavio/Toolavio/blob/main/docs/QUICK_START.md). The samples are fictional inputs, not software or private user data.

For a task-oriented introduction, explore [six practical use cases](docs/USE_CASES.md) or [leggi i casi d'uso in italiano](docs/CASI_USO_IT.md).

## Keep your work moving

| Capability | Practical benefit |
| --- | --- |
| **Toolavio One & Universal Drop** | Describe a task or select files to find compatible operations. |
| **Smart Chains in Flow** | Connect supported operations and reuse their results. |
| **Proof Engine** | Review the technical checks available for a generated result. |
| **Private Vault & My Toolavio** | Explicitly save supported work locally and return to favorites, recent tools, and presets. |
| **Share a Workflow** | Share a reusable procedure; the recipient supplies their own files. |
| **Toolavio Everywhere** | Prepare supported toolkits for offline use and follow browser-specific installation guidance. |

For tools that support local processing, file contents are processed in your browser rather than uploaded to Toolavio for that operation. Loading the site, downloading resources, or using account services can still require network requests.

Capabilities depend on the tool, format, browser, and feature access. Technical checks are not universal certification of document fidelity. Keep your originals and review important outputs. Local browser storage is not a guaranteed backup. Read the [FAQ](https://github.com/Toolavio/Toolavio/blob/main/docs/FAQ.md) and [official privacy information](https://toolavio.com/en/privacy.html).

## Explore the project

| Guide | What it helps you understand |
| --- | --- |
| [Quick start](docs/QUICK_START.md) | Three walkthroughs with expected sample results. |
| [Practical use cases](docs/USE_CASES.md) | Six everyday tasks and the appropriate starting points. |
| [Casi d'uso in italiano](docs/CASI_USO_IT.md) | Percorsi concreti, risultati attesi e cosa controllare. |
| [Guida alle otto funzioni](docs/GUIDA_FUNZIONI_IT.md) | Quando usare One, Drop, Flow, Proof, Vault, preferiti, condivisione e offline. |
| [Presentazione in italiano](docs/PRESENTAZIONE_IT.md) | Cos'è Toolavio e quale problema vogliamo risolvere. |
| [Public roadmap](docs/ROADMAP.md) | Current priorities, planned Core/TAE work, and readiness criteria. |

## What we are building toward

**Our goal: focus on the result, not on which application to use.** We prioritize simple interactions, reliable output, and fewer repeated file selections over adding tools for the sake of a larger number.

- **Toolavio Core:** a development initiative to separate suitable existing processing engines into independently usable modules, starting with CSV, TSV, and JSON.
- **Toolavio Action Engine (TAE):** the planned integration system for bringing compatible Toolavio tools into other websites. The customer-facing product is **Toolavio Action**, with `/tae/` as its permanent project path on Toolavio.com.

These initiatives are not presented as released libraries or a production-ready embedding service. There is no Core download, public SDK installation, or self-hosted distribution in this repository. See the [roadmap](https://github.com/Toolavio/Toolavio/blob/main/docs/ROADMAP.md).

## Help shape Toolavio

**What were you trying to do? Which step felt confusing? What would make you use it again?** Share a concrete task in [Discussions](https://github.com/Toolavio/Toolavio/discussions); feedback in English or Italian is welcome.

If a tool helped, share its direct link with someone who needs that operation. You can also star this repository to find the guides again. No account action or public endorsement is required to try a tool.

[Report a reproducible bug](https://github.com/Toolavio/Toolavio/issues/new/choose) using fictional data. Keep documents, credentials, account details, and confidential information private.

For private matters, use [Support](https://github.com/Toolavio/Toolavio/blob/main/SUPPORT.md). Report security concerns privately following [SECURITY.md](https://github.com/Toolavio/Toolavio/blob/main/SECURITY.md). Documentation contributions are covered by [CONTRIBUTING.md](https://github.com/Toolavio/Toolavio/blob/main/CONTRIBUTING.md).

Product release notes remain on the official [Toolavio Updates page](https://toolavio.com/en/updates.html). Changes to this repository are documentation updates, not application releases.

## Public presentation. Private software.

Toolavio's application code, processing engines, deployment archives, credentials, and internal technical material are not published here. This public presentation is **not an open-source release of the software**.

> Arrive with a task. Find the right operation. Get your result. Know where to return next time.

**[Explore Toolavio.com →](https://toolavio.com/)**
