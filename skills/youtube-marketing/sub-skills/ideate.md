---
name: youtube-ideate
description: >
  Generates 10 ranked video ideas with DataForSEO keyword data, SERP competition analysis,
  hook angle, thumbnail concept, and revenue potential. Prioritises by traffic opportunity
  and [YOUR_COMPANY] differentiation gap.
---

# /youtube ideate

## Research Process (always run)
1. `get_top_videos` — find what's already working on the channel
2. `get_traffic_sources` — understand where current traffic comes from
3. For each idea: `dfs-mcp:serp_youtube_organic_live_advanced` to check competition
4. `dfs-mcp:kw_data_google_ads_search_volume` for volume data

## Idea Scoring Criteria

| Factor | Weight | Signal |
|--------|--------|--------|
| SERP gap (top videos are 2+ years old) | HIGH | Freshness opportunity |
| Keyword volume >20/mo Google (=80–200/mo YouTube) | HIGH | Proven search demand |
| No [YOUR_COMPANY] video exists on this topic | HIGH | Untapped territory |
| Top competitor uses code/CSS (we offer widget) | VERY HIGH | Differentiation gap |
| Topic matches current subscriber interest | MEDIUM | Channel momentum |
| Related to recent product update | MEDIUM | Timely content |

## 10 Idea Output Format

```
## 10 VIDEO IDEAS — [Date]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
### IDEA 1: [Title Draft]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**Primary keyword**: [keyword] — [X/mo Google, ~[X*4]/mo YouTube]
**SERP**: Top video [X] views, [age] old
**Differentiation**: [Why Product channels win this topic]
**Product**: [Which your product to feature]
**Hook angle**: [1 sentence — what makes people click]
**Thumbnail concept**: [Dark bg + what to show + what text]
**Est. view range**: [X–X views based on SERP traffic ceiling]
**Priority**: 🔴 Make now / 🟡 This month / 🟢 Backlog

[Repeat for all 10 ideas]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## PRIORITY RANKING

🔴 Make This Week:
1. [Title] — [reason]
2. [Title] — [reason]

🟡 This Month:
3–6. [Titles]

🟢 Backlog (strong but not urgent):
7–10. [Titles]
```
