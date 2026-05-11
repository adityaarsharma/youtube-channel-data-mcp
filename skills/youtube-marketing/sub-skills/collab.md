---
name: youtube-collab
description: >
  Finds WordPress and Elementor channel collaboration opportunities. Identifies
  channels with complementary audiences, no product conflict, and active
  engagement. Generates outreach templates.
---

# /youtube collab

## Research Foundation
- **Demand Curve, 2025**: Cross-promotions between complementary channels (not direct competitors) show 15–30% subscriber overlap conversion
- **YouTube Official**: Featured channels in channel description and end screen cards drive measurable subscriber transfer
- **Strategy principle**: Best collabs are with channels that serve the SAME audience but in a different niche — e.g., WP theme reviewer + WP plugin tutorial creator

## Collab Opportunity Framework

### Ideal Collab Partner Profile

| Criteria | Target Range | Why |
|----------|-------------|-----|
| Subscriber count | 5K–100K | Too small = low reach; too big = power imbalance |
| Audience overlap | WordPress, Elementor, web design | Same ICP, different product |
| Product conflict | Zero | Can't promote competing plugin |
| Upload frequency | 2+/month | Active channel = engaged audience |
| Engagement rate | >1% (likes+comments/views) | Real audience, not bot-inflated |
| Language | English | Your primary audience |

### High-Value Partner Categories

| Category | Why Great | Example Topics |
|----------|-----------|---------------|
| WordPress theme reviewers | No product conflict, same audience | "Best themes for Elementor 2026" |
| Web design general (non-Elementor) | Untapped Elementor converts | "Figma to WordPress in 2026" |
| Freelance business channels | Agency audience = highest LTV | "How I built my agency workflow" |
| Page speed / WP performance | Complementary skill, same devs | "How to speed up Elementor sites" |
| WooCommerce / e-commerce WP | Different product use case | "Elementor for e-commerce stores" |

### Channels to Avoid

| Category | Reason |
|----------|--------|
| Direct competitors (Crocoblock, Essential Addons) | Product conflict |
| Elementor official channel | Power imbalance, no mutual benefit |
| Channels under 1K subs | Too low reach |
| Channels with no recent uploads (3+ months) | Dead audience |
| Channels with <0.5% engagement | Bought subscribers |

## Collab Search Workflow

```
1. Run `dfs-mcp:serp_youtube_organic_live_advanced` on:
   - "wordpress theme tutorial"
   - "elementor web design tutorial"
   - "freelance web design wordpress"
   - "woocommerce tutorial"
   - "wordpress page speed"

2. For each channel found:
   - Check sub count (5K–100K)
   - Check last upload date (within 30 days)
   - Scan top 10 video titles for product conflicts
   - Calculate rough engagement rate from views/subs

3. Shortlist top 5 with highest overlap + zero conflict
```

## Collab Formats

### Format 1 — Guest Appearance (simplest)
One creator appears in the other's video as a subject matter expert.
- Your angle: "How our widget solves X" in a theme reviewer's video
- Works when: partner channel is evaluating tools their audience should know

### Format 2 — Cross-Tutorial Pack
Both channels release companion videos on the same day.
- Example: Partner covers "How to choose an Elementor theme" → Your channel covers "Best widgets to add to any Elementor theme"
- Cross-link in both descriptions
- Each promotes the other in end screen

### Format 3 — Collab Build Series
2–3 video series where both channels build a site together.
- High production but highest subscriber transfer
- Works best when channels are close in size

### Format 4 — Product Bundle Mention
Partner mentions your product as their recommended tool in a relevant video.
- Can be organic (gift license → honest mention) or paid partnership
- Must be disclosed per FTC rules

## Outreach Templates

### Template 1 — Peer Outreach (similar-sized channel)
```
Subject: [Channel name] × [YOUR_COMPANY] collab idea

Hi [Name],

Big fan of your [specific video title] — especially [specific thing]. 
I run a YouTube channel ([@your-channel]) — we do no-code Elementor 
tutorials for the same WordPress audience.

I had an idea: your [their specialty] + our [our widget/tool] is something 
our audiences overlap heavily on. What if we did a companion video series?

You cover [their angle], we cover [our angle] — cross-link each other.
No products selling to each other's audience, just pure value for both.

Would you be open to a quick 20-min call to explore?

[Your Name / Team]
[your-company-url]
```

### Template 2 — Gifted License + Honest Review
```
Subject: Free [Product] license for [channel name]

Hi [Name],

I love what you do on [channel name]. I'm [Your Name] from [Your Company] — 
we make [product] for Elementor.

I'd love to gift you a lifetime Pro license, no strings attached.
If you end up making a video, great. If not, still yours to use.

The only ask: if you do cover it, give your honest opinion — good or bad.
No scripted reviews.

Let me know and I'll send the license over.

[Your Name]
[your-company-url]
```

### Template 3 — Comment-to-DM (warm outreach)
```
[Comment on their relevant video:]
"This is great — we actually built a [widget] that does exactly what you 
described at [timestamp] without needing Elementor Pro. 
Genuinely think your audience would find it useful. DM if you want to explore!"
```

## Output Format

```
# COLLAB OPPORTUNITIES REPORT
Date: [today]
Search queries used: [N]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## TOP 5 COLLAB CANDIDATES

| Channel | Subs | Last Upload | Engagement | Conflict? | Best Format |
|---------|------|-------------|-----------|-----------|-------------|
| [name] | [N]K | [X days ago] | [X]% | None | Cross-Tutorial |

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## RECOMMENDED COLLAB #1

Channel: [name + URL]
Why ideal: [2 sentences]
Proposed collab: [format + topic]
Their video to reference in outreach: [URL]

Outreach: [Template 1 / 2 / 3]
Draft message:
[Full outreach message customized for this channel]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## RECOMMENDED COLLAB #2

[Same format]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## CHANNELS TO WATCH (not ready yet — follow up in 30 days)

[Channels that are close but don't meet all criteria right now]
```
