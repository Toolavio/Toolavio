# Public roadmap

[Overview](../README.md) · [Try Toolavio](https://toolavio.com/) · [Official product updates](https://toolavio.com/en/updates.html)

This page explains the direction of Toolavio. It is not a release commitment, a delivery schedule, or a list of features that can all be downloaded from this repository.

## Available through the website

The platform provides a browser-based tool catalog, search, compatible file handoff, Flow, technical result checks, local workspace features, favorites, and selected offline toolkits. The tool, input format, browser, and feature access determine what is available in a particular workflow.

This list summarizes product capabilities, not a certification of every input, browser, or tool. The current website and its release notes remain the reference for published changes.

## Current product priorities

**Make common tasks simpler.** Keep the operation immediately accessible, reduce repeated file selection, and use plain-language labels. Advanced workflows should remain optional.

**Improve confidence in results.** Expand independent checks, describe destructive or lossy transformations, and make errors understandable. Do not treat a structurally valid file as proof of a correct document.

**Improve mobile use and accessibility.** Refine small-screen layouts, touch controls, keyboard navigation, loading feedback, and download paths.

**Improve language quality.** Keep the existing multilingual experience consistent and refine wording, instructions, and format-specific limitations.

## Toolavio Core — planned standalone modules

The goal is to extract suitable existing processing components from the website interface and make them independently testable and reusable. The first planned scope is CSV, TSV, and JSON processing.

A standalone module must have clear input/output contracts, documented limitations, and independent tests before it is described as available. No Core source package or public package-manager installation is offered here.

## Toolavio Action Engine — planned website integration

TAE is intended to bring compatible Toolavio tools to other websites through a small embed. **Toolavio Action** is the customer-facing product name. The permanent path selected for the project is `/tae/` on Toolavio.com; naming the path does not claim that a production-ready service is already released.

The planned model uses Toolavio's infrastructure for configuration, updates, and subscription management, while preserving local file processing where the operation supports it. No pricing, availability date, or universal CMS compatibility is promised here.

## Public presentation, private implementation

The software and internal development materials remain reserved. This repository is for explanation, user guidance, and safe feedback—not for distributing the Core or the website's source.

## Help prioritize useful work

[Suggest an improvement](https://github.com/Toolavio/Toolavio/issues/new?template=feature_request.yml) by describing a real task, the difficulty you encounter, and the result you need. A submitted request does not imply acceptance or a scheduled release.
