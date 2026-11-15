# Toolavio
## One place to convert, edit, calculate, and work with your files.

**English — main** · [Italiano](PRESENTAZIONE_IT.md) · [Deutsch](PROJECT_DE.md)

**Toolavio.com is a platform of digital tools available directly in the browser, on computers and smartphones.** It brings together operations for documents, images, text, data, and calculations, with a clear goal: helping people finish their work without searching for a different website every time.

**[Open Toolavio](https://toolavio.com/en/) · [Explore the platform](https://toolavio.com/) · [Read product updates](https://toolavio.com/en/updates.html)**

> This is the public presentation of the project and its development direction. **The software, processing engines, and commercial application source remain private and are not distributed in this repository.**

---

## What Toolavio is

Toolavio is a digital toolbox accessible through the web. The platform presents approximately **1,000 operations in 12 categories**, with interfaces available in **17 languages**.

These are not 1,000 separate applications to install. The operations belong to a common environment, with tools for individual tasks and capabilities that connect compatible steps.

Someone can arrive for a simple need, such as merging two PDFs or converting a photo, and find other useful tools for their work on the same website.

## The problem we want to solve

Everyday digital work is often fragmented: one website to convert a document, another to resize an image, and another to compare data or perform a calculation. Each step can mean another search, another interface, and another file selection.

Toolavio aims to reduce that fragmentation.

**We want people to focus on the result they need, not the name of the program or tool required.**

The principle guiding development is simple:

> Arrive with a task. Find the right operation. Get your result. Know where to return next time.

## What you can do on the platform

| Area | Types of tasks in the catalog |
| --- | --- |
| PDF | Merge, split, organize, convert, and work on documents within the selected tool's capabilities. |
| Images | Convert formats, resize, and prepare images for different destinations. |
| Spreadsheets and data | Work with tables, CSV, and compatible formats; clean, compare, and transform data. |
| Calculators | Perform calculations and unit conversions with specific inputs and outputs. |
| Finance | Use the numerical and financial calculators available in the catalog. |
| Date and time | Calculate dates, durations, and time intervals. |
| Text | Format, transform, and analyze text. |
| Developer tools | Work with JSON, encodings, URLs, and other technical utilities. |
| Web and SEO | Prepare metadata, links, and other elements for web pages. |
| Media | Access the multimedia operations actually supported. |
| Privacy and security | Use dedicated tools such as hashes and technical checks within their stated scope. |
| Everyday tasks | Address practical needs through specific utilities and calculators. |

The catalog describes operations, not a guarantee of compatibility with every file. Check the selected tool's page for formats, options, limits, and availability.

Toolavio also includes a **Pro** area with advanced features and PDF Studio. This presentation does not change commercial plans: current offers and terms remain on the official website.

## An experience designed to get started

A simple task should follow a direct path:

**Open a tool → select a file or enter data → run → review → download or copy.**

Someone arriving directly at a converter should not have to learn the whole platform. Advanced features should help those who need them without making simple tasks harder.

Where tools and formats are compatible, Toolavio allows files and results to be reused between steps, reducing the need to download and select them again.

## The eight parts of the Toolavio experience

These capabilities belong to the same platform. They are not eight separately installed products.

| Capability | Benefit for the user |
| --- | --- |
| **Toolavio One** | Find an operation from a goal and prepare sequences supported by the catalog. |
| **Universal Drop** | Select or drop files and make them available to compatible operations. |
| **Smart Chains** | Connect compatible operations in Flow and reuse their results. |
| **Proof Engine** | Read the available technical checks on an output, with the scope of verification stated. |
| **Private Vault** | Explicitly save supported work and files in the browser's local storage. |
| **My Toolavio** | Return to favorites, recent tools, preferences, and presets. |
| **Share a Workflow** | Share a reusable procedure without including the sender's personal files. |
| **Toolavio Everywhere** | Use the platform on compatible devices and prepare resources for supported installation and offline use. |

Availability depends on the operation, format, and browser. Recognizing a goal does not mean Toolavio can execute every request. Likewise, a structural output check does not automatically certify visual fidelity, OCR accuracy, or the legal validity of a document.

See the [practical guide to the eight capabilities](FEATURES.md).

## Local processing and control of files

For tools that support local processing, **file contents are handled in the browser rather than sent to Toolavio to perform that operation**.

This is separate from connections required to load the website, libraries, resources, or account services. Local processing does not mean every function is available without a connection.

Offline use requires resources to be prepared while online. Locally saved files depend on the browser and may be removed when the user clears site data or the device frees storage. Local workspace storage is not a backup.

Sharing a tool or procedure link differs from sharing an output. Sharing a file must be an explicit user choice.

For important documents, keep the original and review the result before using it. Further information is available on the [Privacy page](https://toolavio.com/en/privacy.html).

## What we want to achieve

Toolavio's direction is not an endless increase in buttons. It is better continuity of work through three principles.

### Simplicity

Help people without technical expertise find a function, understand its purpose, and complete an operation without assistance.

### Reliability

Improve output checks, state limitations, and distinguish a generated result from a verified one. No success message should promise more than the performed check demonstrates.

### Reusability

Keep operations consistent across the platform and progressively make suitable components reusable in other applications.

The aim is breadth without confusion: many possibilities available, but only the choices needed at a given moment shown.

## Toolavio, Core, and Action Engine: distinct roles

| Name | Role | Status described here |
| --- | --- | --- |
| **Toolavio.com** | The platform people use in the browser. | Available on the official website. |
| **Toolavio Core** | The project to separate existing processing engines into reusable components. | Standalone extraction and distribution still need completion and verification. |
| **Toolavio Action Engine (TAE)** | The planned system for integrating Toolavio tools into other websites. | A development initiative, not a claim of a commercially ready service. |
| **Toolavio Action** | The customer-facing product name for the TAE integration. | A future offering dependent on development and verification. |

### Toolavio Core

Core aims to separate operations from the pages that present them without creating independently maintained copies of the same functions.

The first planned scope is **CSV, TSV, and JSON**: a bounded module, documented and testable outside the website. The next aim is to reuse suitable components in both the main platform and authorized integrations.

This presentation does not distribute an extracted Core, an installable library, or a working SDK.

### Toolavio Action Engine

TAE is intended to let website owners embed Toolavio tools through an integration code without rebuilding the operations.

The planned model is a service connected to Toolavio infrastructure, with centralized configuration and updates and a monthly subscription. No prices or availability dates are announced here.

A server connection does not necessarily mean sending documents: local processing should be preserved where technically supported.

The permanent project path is **`https://toolavio.com/tae/`**, from prototype to final version. This is a development decision, not a claim that the service is already complete or published. Separate `/action/` or `/tae/demo/` pages are not planned.

## The role of this GitHub presence

This showcase presents Toolavio, explains its direction, and collects useful feedback. It is not the application source repository.

**Public documentation is not an open-source release of the product.** Commercial code, private engines, deployment archives, and internal technical documentation are not shared here. Third-party component terms remain separate; this presentation neither replaces those terms nor grants rights to that code.

Suggestions about instructions, usability, translations, and reproducible problems are useful. Public reports must use synthetic examples and contain no personal documents, passwords, credentials, or confidential information.

## Follow the project

**Use the platform:** [Toolavio.com](https://toolavio.com/en/).

**Read actual release changes:** [Toolavio Updates](https://toolavio.com/en/updates.html). The official history remains on the website; this document is not a second release register.

**Send feedback:** [Project issues](https://github.com/Toolavio/Toolavio/issues/new/choose). For private matters, use the site's contact information or [Support](../SUPPORT.md). Vulnerabilities should not be disclosed in public reports.

---

**Toolavio: many possibilities, a simple path to the result.**

[Discover the tools on Toolavio.com →](https://toolavio.com/)

*Project presentation · 15 November 2026. Future initiatives are development goals, not promises of availability or universal compatibility.*
