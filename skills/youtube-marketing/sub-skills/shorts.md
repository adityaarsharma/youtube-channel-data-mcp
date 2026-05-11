---
name: youtube-shorts
description: >
  Vertical-format Short package for any topic. Produces a 30–60s script,
  title, description, tags, and visual marker plan. Optimized for the
  YouTube Shorts feed — not a cropped long-form video.
---

# /youtube shorts

## Research Foundation
- **YouTube Official, Sept 2025**: Shorts views now count toward channel watch hours for monetization
- **YouTube Official, March 2025**: View counting reform — views counted after replay, not just first view
- **YouTube Official, Sept 2025**: Freshness decay cliff at 28–30 days — post Shorts while topic is hot
- **Adobe Tutorials Study**: Shorts that end with a clear question or cliffhanger get 3x more long-form clicks
- **Retention Rabbit (150M+ minutes)**: Shorts need hook in first 1–2s; 3s is too late for vertical scroll audience
- **vidIQ, 2025**: Shorts channels that post 3–5x/week see 4x faster subscriber growth than 1x/week Shorts channels

## Shorts vs Long-form (What's Different)

| Element | Long-form | Shorts |
|---------|-----------|--------|
| Hook window | 28–42s | 1–2s |
| Optimal length | 8–15 min | 30–60s |
| CTA placement | 25% mark + end | Last 5s only |
| Format | Horizontal 16:9 | Vertical 9:16 |
| Description | Full SEO description | 150 chars shown |
| Tags | 20 tags | 5–8 tags |
| End card | Yes | No |
| Links in desc | Full links | No clickable links (unless >1K subs) |

## Short Script Structure (30–60s)

```
[0:00–0:02] — HOOK (1–2 sentences MAX)
Show the result or state the surprise immediately.
"You can build this in 60 seconds with no CSS."
Show the finished UI in motion — don't start talking first.

[0:02–0:40] — DEMO (The actual thing)
Fastest possible walkthrough. No preamble.
Every second has motion on screen.
Text overlays for key steps (silent viewing — 80% watch without audio).

[0:40–0:55] — REVEAL (Show the result in final state)
Full-screen showcase of the completed widget/feature.
Add a subtle zoom or transition for polish.

[0:55–1:00] — HOOK ENDING (Leave them wanting more)
"Full tutorial on the channel ↑" or open a question:
"Which version would you use — hover or click?"
Never end with a dead frame.
```

## Short Title Formula

```
[What they see in 60s] — [Platform] | [The differentiator]
```

**Examples:**
- `Build a Side Menu in 60s — Elementor | Zero CSS`
- `Horizontal Scroll in Elementor — No GSAP Needed`
- `Animated Mega Menu in WordPress — No Code`

**Rules:**
- ✅ Under 60 characters
- ✅ Verb-first or result-first
- ✅ Include "Elementor" or "WordPress"
- ❌ No "How to" opener (too slow for Shorts feed)
- ❌ No year in Short titles (Shorts expire faster)

## Short Description (150 chars visible)

```
[Primary keyword] in Elementor — no code, no CSS. Full tutorial on channel.
#Shorts #Elementor #WordPressTips
```

Keep it under 150 chars. The link to the full video can go here but won't be clickable — write it as plain text ("full tutorial at [channel URL]").

## Text Overlay Plan (Critical — 80% watch muted)

Every key step needs a text overlay. Format:
```
Step 1 → [Widget name on screen]
Step 2 → [Setting changed]
Result → [What it does]
```

Use 3–5 overlays max. Each under 5 words. White text, dark background, or brand accent color.

## Tags for Shorts

```
[primary keyword], elementor, wordpress, elementortutorial, wordpresstips, websitedesign, shorts, [product name], elementorwidget, nocode
```

Always include `#Shorts` in description. YouTube uses this to route to Shorts feed.

## Shorts Topic Sourcing

### Type 1 — Clip from Long-form
- **When to use**: After publishing a long-form video
- **Best clip**: The result reveal moment or the most surprising feature
- **Window**: Must post within 7 days of long-form upload
- **Use `/youtube shorts-from-long`** for full clip identification

### Type 2 — Standalone Shorts (Topic-first)
For topics where a 60s answer is complete:
- "What's the difference between [A] and [B] in Elementor?"
- "The 1 Elementor setting most people miss"
- "Why your Elementor site is slow — fix in 30s"

### Type 3 — Trend-capture Shorts
When a broader YouTube trend fits [YOUR_COMPANY]'s niche:
- "Bento grid layout in Elementor — 60 seconds"
- "Dark mode portfolio site — Elementor, no CSS"

## Output Format

```
# SHORTS PACKAGE — [Topic]
Type: [Clip / Standalone / Trend]
Target length: [30s / 45s / 60s]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## SCRIPT

[0:00–0:02] HOOK
[What to show + what to say]

[0:02–0:40] DEMO
[Step-by-step actions — one per line]
[Text overlay: X]

[0:40–0:55] REVEAL
[What to show]

[0:55–1:00] HOOK ENDING
[Line or visual]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## TEXT OVERLAYS (muted viewers)

Step 1: [text]
Step 2: [text]
Result: [text]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## METADATA

Title: [under 60 chars]
Description (150 chars): [text]
Tags: [8 tags]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## PRODUCTION NOTES

Best clip timestamp (if from long-form): [X:XX – Y:YY]
Post date: [within 7 days of long-form if applicable]
Thumbnail: [auto-generated or specify frame]
```
