# Toolavio Action Engine — five-tool Alpha

**English — main** · [Italiano](README.it.md) · [Deutsch](README.de.md)

A small integration for offering selected Toolavio tools on another website. The permanent hosted path is **`https://toolavio.com/tae/`**.

> **Status: Alpha integration source preview. The Toolavio-hosted runtime has not been deployed by this update.** This directory contains the public loader, an HTML example and instructions—not the private processing application. Copying the example now does not make the five tools available until the hosted runtime is published and the embedding site's origin is authorized.

## Five selected tools

| Tool | Alpha scope |
| --- | --- |
| Format JSON | Indent valid JSON using the original formatter, including preservation of number tokens. |
| CSV → JSON | Convert a UTF-8 table with headers into records; cell values remain strings. |
| JSON → CSV | Export a non-empty array of flat records. Null/missing values become empty cells; high-precision numbers must be strings. |
| Compare CSV | Compare complete rows, including case, whitespace and duplicate counts; both inputs need identical headers and delimiter. |
| Resize image | PNG/JPEG/WebP input, nearest-neighbour scaling, PNG output. Pixel graphics are the main fit; this is not a photo-enhancement algorithm. |

The private Alpha implements these paths with existing Toolavio processing modules, not a replacement collection of sample converters. File contents are processed in the browser. Page and resource requests still require the network; this Alpha does not claim offline installation, billing, domain licensing or universal CMS compatibility.

## Integration code — usable after host activation

```html
<div id="toolavio-action"></div>
<script
  src="https://toolavio.com/tae/embed.js"
  data-container="toolavio-action"
  data-lang="en"
  async>
</script>
```

`data-lang` accepts `en`, `it` and `de`; English is the default. Optional `data-tool` selects `json-format`, `csv-to-json`, `json-to-csv`, `compare-csv` or `resize-image` on opening. Use a different container ID for each instance.

[View the complete HTML example](example.html). Serve it over HTTP/HTTPS, not a chat attachment preview or a `file:` URL. The host must permit Toolavio scripts and frames in its CSP. The Toolavio operator must authorize the host's exact HTTPS origin; a public identifier or copied snippet is not a paid license.

The loader creates a sandboxed frame. The sizing/readiness protocol checks the sender origin, frame window and per-instance channel. It does not pass file contents, entered text or generated results to the host page. Clipboard and downloads remain subject to browser permissions.

## Verification and remaining gates

The private development package has fresh motor/HTTP tests and offline Chromium UI checks, including actual downloads and independent checks of table contents and resized pixels. **These are not production tests.** The offline browser harness resolves modules from local blobs and packages the worker for an opaque test origin. It does not validate HTTP module loading or real cross-origin embedding. The normal HTTP browser suite was blocked by the available browser's administrator navigation policy and is retained as not run successfully.

Before calling the hosted Alpha available, complete the normal browser suite, configure the allowed origins, merge with the real Toolavio source/release pipeline, deploy with authorization, update the product release notes, and check the live result. WordPress, Shopify, Safari/iPhone and Android-native behavior are not certified here.

## Boundaries

- No Core, private server, production ZIP, credentials or customer files are in this directory.
- Browser-delivered JavaScript remains inspectable; keeping the repository private is not encryption of browser code.
- No open-source license for the Toolavio application is granted by this integration preview.
- No new subscription, price, account or payment configuration is activated.

Use [Toolavio.com](https://toolavio.com/) for the existing platform. Follow actual releases on [Toolavio Updates](https://toolavio.com/en/updates.html). Do not describe this source preview as an already-live service.
