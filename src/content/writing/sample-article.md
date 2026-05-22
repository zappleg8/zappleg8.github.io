---
title: The Harness Is the Product
subtitle: 35x cheaper and 105x faster than a team of five. A real production agent in an old-school industry.
kicker: Essay
date: 2026-05-01
description: What I learned deleting 3,000 lines of code.
xUrl: https://x.com/zappleg8
draft: false
---

In building agents, the harness around the model is the product. The model is
just the intelligence that does stuff inside it. I learned this the hard way,
after deleting 3,000 lines of code.

I started with a [pipeline and an LLM](https://example.com) bolted on every time
a decision was needed. It worked for the first four vendors and broke on the
fifth.

## The harness in three pillars

Three pillars hold the harness up: tools, context engineering, and iteration it
controls. Using only these three and resisting everything else is the discipline.

> 35x cheaper. 105x faster. Zero layoffs.

Here is a hard-case trace, where the agent investigates, searches, and routes the
remaining gaps to a human:

```bash frame="terminal" title="trace — intake_agent / run_4471"
turn 12  match_brand_to_catalog(candidate="<BRAND>")
         -> match_type=exact; confidence=high
turn 18  lookup_in_catalog(brand="<BRAND>", mpn="<MPN>")
         -> found=False; brand_known=True
```

The trace is the debugger for reasoning.
