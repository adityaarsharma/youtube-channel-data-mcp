---
name: youtube-wp-post
description: >
  Generates a companion blog post for any YouTube video and publishes it via
  WordPress REST API with Yoast SEO metadata, video embed, timestamps as ToC,
  and VideoObject schema. Unique feature — no other YouTube tool does this.
---

# /youtube wp-post

## Why This Matters
- **BrightEdge, 2025**: Blog posts embedding YouTube videos rank 53% higher for tutorial queries
- **Yoast SEO Study, 2024**: Video schema on WordPress → +31% CTR from Google
- **BrightEdge, 2025**: 41% of YouTube "how to" videos now surface in Google AI Overviews — a companion post doubles the surface area

## Input Needed
- Video URL or ID
- Product featured ([Your Product 1 / Product 2 / etc.])
- Target WordPress site (your-site.com / etc.)

## Workflow

### STEP 1 — Pull Video Data
Use `youtube-marketing-mcp:get_video_details` to get:
- Title, description, tags, publish date, duration, thumbnail URL, timestamps

### STEP 2 — Keyword Mapping
- Primary keyword for blog = same as video primary keyword
- Pull Google Search volume (different from YouTube volume — usually lower)
- Check GSC for existing blog post on same topic (avoid cannibalisation)

### STEP 3 — Post Structure

```
[SEO TITLE]: [Primary keyword] — [Year] Tutorial | [Product Name]

[META DESCRIPTION — 155 chars]:
[Primary keyword benefit statement]. Step-by-step tutorial with [key feature]. No [pain point] required.

[FEATURED IMAGE]: Video thumbnail (maxres)

[POST BODY]:

## [H1 = SEO Title]

[VIDEO EMBED]
<iframe width="560" height="315" src="https://www.youtube.com/embed/[VIDEO_ID]"
  title="[TITLE]" frameborder="0" allowfullscreen></iframe>

[INTRO PARAGRAPH — 80–120 words, keyword-rich, matches video description opening]

## What You'll Learn

[Mirror the WHAT YOU'LL LEARN bullets from video description as a formatted list]

## Table of Contents

[Timestamps converted to ToC links — each timestamp becomes a heading]
- [00:00 – Intro](#intro)
- [01:30 – Step 1](#step-1)
...

## [Timestamp heading 1]

[2–3 sentence summary of what happens at this timestamp]
[Screenshot from video if available]

## [Timestamp heading 2]
...

## Frequently Asked Questions

[3–5 FAQs generated from comment patterns or common search queries around this topic]
FAQ format triggers Google FAQ rich snippet.

## Related Tutorials

[3 internal links to related product pages or tutorials]
```

### STEP 4 — Yoast SEO Fields

```
Focus keyphrase: [primary keyword]
SEO title: [post title] | [Site Name]
Meta description: [155-char description]
```

### STEP 5 — VideoObject Schema

```json
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "[VIDEO TITLE]",
  "description": "[FIRST 250 CHARS OF VIDEO DESCRIPTION]",
  "thumbnailUrl": "https://i.ytimg.com/vi/[VIDEO_ID]/maxresdefault.jpg",
  "uploadDate": "[ISO DATE]",
  "duration": "[ISO 8601]",
  "embedUrl": "https://www.youtube.com/embed/[VIDEO_ID]",
  "url": "https://www.youtube.com/watch?v=[VIDEO_ID]"
}
```

### STEP 6 — WordPress Publish via REST API

Use `mcp__wp-[product]__mcp-adapter-execute-ability` with:
- post_title, post_content, post_status (draft), tags, categories
- Yoast fields via meta

## Output Format

Deliver the complete post content ready to paste or publish:

```
## POST METADATA
Site: [your-wordpress-site.com]
Title: [SEO title]
Slug: [url-slug]
Focus keyword: [keyword]
Meta description: [155 chars]
Category: [Tutorials / Elementor Widgets / etc.]
Tags: [post tags]

---
## POST CONTENT
[Full HTML/markdown content]

---
## VIDEOOBJECT SCHEMA
[JSON-LD]

---
## YOAST FIELDS
[All fields listed]
```
