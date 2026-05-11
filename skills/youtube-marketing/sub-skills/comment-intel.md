---
name: youtube-comment-intel
description: >
  Mines YouTube comments for feature requests, pain points, and audience
  sentiment. Generates reply templates, identifies video ideas from comments,
  and extracts SEO language the audience uses naturally.
---

# /youtube comment-intel

## Research Foundation
- **YouTube Algorithm, 2025**: Comment activity in first 24h is a strong ranking signal — reply within 24h boosts distribution
- **Wistia, 2024**: Channels that respond to >30% of comments within 24h see 22% higher subscriber retention
- **Product strategy principle**: User language in comments = the exact words they'll search for. Use them in titles and descriptions.
- **vidIQ, 2025**: Videos with pinned comments (tutorial links, product links) have 18% higher description click-through

## What to Mine From Comments

### 1. Feature Requests (Direct Product Feedback)
Comments that contain:
- "Can you make a video on..."
- "Does this work with..."
- "Is there a way to..."
- "I wish it could..."
- "What if you added..."

These are **video ideas AND product feedback** — share the product ones with the dev team.

### 2. Pain Points (Search Intent Gold)
Comments that contain:
- "I've been trying to..."
- "I couldn't figure out..."
- "The problem I have is..."
- "Nothing works for..."
- "Every tutorial shows X but I need Y"

These reveal the **exact words people search** when they have this problem. Use in titles.

### 3. Questions (FAQ Content)
Repeated questions across multiple videos = a video that doesn't exist yet. If 5+ people ask the same question, make that video.

### 4. Competitor Mentions
Comments that mention other plugins or tools:
- "How does this compare to [competitor]?"
- "I was using [tool] before..."
- "This is better/worse than [tool]"

These reveal which competitors your viewers are evaluating.

### 5. Sentiment Markers
- **Confusion markers**: "I'm lost at...", "What is...", "Why does..."
- **Delight markers**: "This saved me...", "Finally found...", "Best tutorial..."
- **Conversion markers**: "Just bought...", "Getting Pro because of this", "Worth the upgrade"

Conversion markers = best candidates for testimonial social proof.

## Comment Analysis Workflow

```
Run `dfs-mcp:serp_youtube_video_comments_live_advanced` on target video ID

→ Scan for:
  - Feature request patterns
  - Pain point language
  - Repeated questions (5+ occurrences)
  - Competitor mentions
  - Conversion/purchase signals

→ For each pattern:
  - Quote the comment verbatim
  - Tag as: [Feature Request / Pain Point / FAQ / Competitor / Sentiment]
  - Extract the natural language phrase they used
  - Map to: video idea OR product feedback OR keyword
```

## Reply Templates

### Template 1 — Feature Request Reply
```
Great idea! That's actually covered in [related video URL] if you want to check it out. 
We're also tracking feature requests at roadmap.[product].com — feel free to upvote it there.
```

### Template 2 — Question That Has a Video Answer
```
Good question! We have a full tutorial on exactly that: [URL]
Let me know if that helps or if you get stuck anywhere.
```

### Template 3 — Question That Needs a New Video
```
This is something we're planning to cover — you're not the only one asking!
Subscribe and you'll get notified when it's up. [subscribe link]
```

### Template 4 — Confusion / Lost at X
```
Sorry for the confusion at [timestamp]! Here's the quick fix: [1-sentence answer].
If it's still not working, drop a message at [support URL] and we'll help you directly.
```

### Template 5 — Purchase / Positive Sentiment
```
Thank you! That really means a lot. If you ever run into anything or want to explore more, 
the docs are at [docs URL] and our community is at [community URL]. 
Use [YOUR_DISCOUNT_CODE] for 10% off anything you haven't tried yet.
```

### Template 6 — Competitor Mention
```
Both work great! The main difference with [your product] is [1-line differentiation].
If you want to compare directly, [comparison URL or demo URL].
```

## Output Format

```
# COMMENT INTEL REPORT — [Video Title / Channel-wide]
Videos analyzed: [N]
Comments scanned: [N]
Date: [today]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## TOP FEATURE REQUESTS

| Request | Frequency | Video Source | Action |
|---------|-----------|-------------|--------|
| [feature] | [N comments] | [video] | [New video / Product feedback] |

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## PAIN POINTS (search-intent language)

| Phrase Used | Frequency | What They Want |
|-------------|-----------|----------------|
| "[exact phrase]" | [N] | [interpretation] |

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## REPEATED QUESTIONS (FAQ candidates)

| Question | Frequency | Has Answer Video? |
|----------|-----------|------------------|
| [question] | [N] | Yes: [URL] / No → Make video |

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## COMPETITOR MENTIONS

| Competitor | Context | Your Counter-angle |
|------------|---------|----------------------|
| [tool] | [how mentioned] | [differentiation] |

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## CONVERSION SIGNALS (use as social proof)

[Direct quotes from comments showing purchase intent or completed purchases]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## VIDEO IDEAS FROM COMMENTS

1. [Video idea] — based on [N] comments asking for this
2. [Video idea] — based on pain point: "[exact phrase]"
3. [Video idea] — answer to most repeated question

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## REPLY QUEUE (high-priority unanswered)

| Comment | Type | Suggested Reply Template |
|---------|------|------------------------|
| "[comment excerpt]" | [type] | Template [N] |

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## KEYWORD GOLD (natural audience language)

[Phrases from comments that match search intent — use in future titles/descriptions]
```
