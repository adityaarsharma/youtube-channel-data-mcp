---
name: youtube-calendar
description: >
  Monthly content calendar with video topics, metadata outlines, upload schedule,
  and Shorts supplement plan. Maintains 2:1 broad-to-widget ratio. Accounts for
  seasonal CPM timing and upload cadence data from vidIQ.
---

# /youtube calendar

## Research Foundation
- **vidIQ cadence data**: 2–3x/week grows subs 4x faster than 1x/week
- **Demand Curve, 2025**: Power law — plan 2 broad "breakout" attempts per month, rest can be widget-specific
- **Semrush, 2025**: "How to [plugin feature]" queries spike Jan–Mar and Sep–Nov (avoid holidays)
- **YouTube CPM seasonality**: Q4 (Oct–Dec) highest CPM (+40–60% vs Q1); Q1 lowest — plan affiliate/product CTAs for Q4
- **Product company rule**: 2 broad Elementor tutorials : 1 widget-specific tutorial

## Monthly Calendar Structure

### Content Ratio Per Month (8 videos + 4 Shorts minimum)
```
Week 1: Broad Elementor tutorial (high search volume keyword)
         + 1 Short (clip from previous video)
Week 2: Widget demo video ([Your Product] / [Your Product 3] / [Your Product 2])
         + 1 Short (result reveal from Week 1 video)
Week 3: Broad Elementor tutorial (different topic/audience)
         + 1 Short
Week 4: Widget demo OR [Your Products] feature
         + 1 Short
```

### Topic Selection Rules
1. Pull `get_top_videos` — replicate the style of top 3 performers
2. Run `dfs-mcp:serp_youtube_organic_live_advanced` on each planned topic before confirming
3. Broad topics: target keywords with YouTube SERP top videos that are 2+ years old (freshness gap)
4. Widget topics: pick widgets with active docs pages and live demos (higher conversion)
5. Never plan 2 widget demos back-to-back (algorithm punishes niche-only channels)

### Publish Schedule
- **Best days**: Monday, Tuesday, Wednesday, Thursday
- **Best time**: 9:00–11:00 PM IST (3:30–5:30 PM UTC)
- **Avoid**: Friday evening, Saturday, Sunday (lower search intent on weekends for tutorials)
- **Gap**: Minimum 3 days between uploads for algorithm momentum to build per video

## Output Format

```
# CONTENT CALENDAR — [Month Year]
Generated: [date]
Channel: [YOUR_CHANNEL] ([@your-channel])

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## MONTHLY STRATEGY

Broad videos: [N] | Widget demos: [N] | Shorts: [N]
Primary growth lever this month: [SEO / Suggested / Shorts]
CPM note: [Q4 = push product CTAs / Q1 = volume play]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## WEEK 1 — [Dates]

### VIDEO 1 (Broad)
Title draft: [Title]
Primary keyword: [keyword] — [X/mo]
Product featured: [Product or none]
Publish: [Day, Date] at 10 PM IST
SERP opportunity: [Top competitor views + age]
Thumbnail concept: [1 line]

### SHORT 1
Source: [Previous video title/clip]
Hook: [1 line]
Publish: [Day, 2 days after main video]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## WEEK 2 — [Dates]

### VIDEO 2 (Widget Demo)
[Same format]

### SHORT 2
[Same format]

[Continue for Week 3 and Week 4]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## KEYWORD RESEARCH SUMMARY

| Video | Primary Keyword | Vol | SERP Top Views | Age | Opportunity |
|-------|----------------|-----|----------------|-----|-------------|
[One row per planned video]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## PRODUCTION SCHEDULE

| Due | Task | Video |
|-----|------|-------|
| [Date] | Script ready | Video 1 |
| [Date] | Record | Video 1 |
| [Date] | Edit + thumbnail | Video 1 |
| [Date] | Metadata + schedule | Video 1 |
[Repeat for each video]
```
