---
name: youtube-competitor
description: >
  Live competitor analysis using DataForSEO SERP data. Identifies keyword gaps,
  format gaps, audience sentiment gaps, and [YOUR_COMPANY]'s best differentiation angles.
  Runs 4 parallel analyses.
---

# /youtube competitor

## Research Foundation
- **Make Dream Website**: Dominates with emotional hooks + dark UI screenshots. ~396K combined views in Elementor niche
- **Jeffrey @ Lytbox**: Wins with "no code / no popup / no pro" framing. ~240K combined views
- **Imran Siddiq - Web Squadron**: Evergreen content, multiple aged videos still ranking
- **WPDev**: Most active 2025–2026, 6 videos in top 25 for navigation keywords alone
- **[YOUR_COMPANY] gap**: No competitor covers widget/no-code solutions where top content requires GSAP/CSS

## 4-Part Competitor Analysis

### ANALYSIS 1 — SERP Competitor Map
For the target keyword, run `dfs-mcp:serp_youtube_organic_live_advanced` and map:

| Rank | Channel | Views | Age | Title Pattern | Uses Code? | Uses Pro? |
|------|---------|-------|-----|--------------|------------|-----------|
[Extract top 10]

Key questions:
- Which videos are 2+ years old? (Freshness gap)
- Which require CSS/GSAP/code? (No-code gap — [YOUR_COMPANY]'s main advantage)
- Which require Elementor Pro? (Free tier gap)
- Which don't cover the full use case (agency, portfolio, SaaS)?

### ANALYSIS 2 — Keyword Gap
Run `dfs-mcp:dataforseo_labs_google_keyword_ideas` on competitor channel's top videos.
Find keywords they rank for that [YOUR_COMPANY] has no video covering.

Priority gaps:
- Keywords where top video is >2 years old
- Keywords with 10–200/mo Google volume (=40–800/mo YouTube)
- Keywords where top video uses code and we can offer a widget

### ANALYSIS 3 — Format Gap
Compare video formats across top competitors:

| Format | MDW | Lytbox | Web Squadron | WPDev | [YOUR_COMPANY] |
|--------|-----|--------|-------------|-------|---------|
| Full build tutorial | | | | | |
| Quick tip (<5 min) | | | | | |
| Comparison/vs | | | | | |
| Shorts | | | | | |
| No-code specific | | | | | |
| Widget showcase | | | | | |

Missing formats = opportunities.

### ANALYSIS 4 — Title & Hook Pattern Analysis
From top 20 SERP videos, extract:
- Most common title words (what signals CTR in this niche)
- Differentiator words used ("smooth", "incredible", "free", "no code")
- Audience callouts ("agency", "portfolio", "beginners")
- Missing audience callouts (underserved segments)

## Output Format

```
# COMPETITOR ANALYSIS — [Keyword/Topic]
Date: [today]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## SERP MAP

[Top 10 table with: rank, channel, views, age, code required, pro required]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## KEYWORD GAPS (no [YOUR_COMPANY] video exists)

| Keyword | Vol | Top Competitor | Views | Age | Gap Type |
|---------|-----|----------------|-------|-----|---------|
[Sorted by opportunity score]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## FORMAT GAPS
[What formats top competitors use that [YOUR_COMPANY] doesn't]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## [YOUR_COMPANY] WINNING ANGLES
[2-3 specific angles where [YOUR_COMPANY] has clear advantage over every top competitor]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## TOP 3 VIDEOS TO MAKE (based on this analysis)

1. [Title draft] — [why this wins]
2. [Title draft] — [why this wins]
3. [Title draft] — [why this wins]
```
