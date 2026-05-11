---
name: youtube-seo
description: >
  Full YouTube SEO metadata package for any video. Generates 3 title variants,
  optimized description with keyword-rich opening, 20 tags, hashtags, and VideoObject
  schema. Always runs keyword research first. Enforces YouTube policy guardrails.
---

# /youtube seo

## What This Does
Generates a complete, ready-to-publish SEO metadata package: 3 title options, description, 20 tags, hashtags, and VideoObject JSON-LD.

## Workflow

### STEP 1 — Keyword Research (always run first)
Use `dfs-mcp:kw_data_google_ads_search_volume` on:
1. Widget/feature name + "elementor"
2. The output/result (what the user builds)
3. Use cases: portfolio, agency, SaaS, business
4. Pain point angle: "without pro", "no code", "free"
5. Broader platform: "wordpress", "elementor"

Use `dfs-mcp:serp_youtube_organic_live_advanced` on primary keyword.
Note top 5 competitor view counts, ages, title patterns, and content gaps.

### STEP 2 — SERP Gap Analysis
Identify what top-ranking videos DON'T cover. Product channels win by:
- Offering widget/no-code solution where competitors use CSS/GSAP
- Adding "2026" freshness when top videos are 2+ years old
- Targeting specific audience (agency, portfolio) when competitors are generic

### STEP 3 — Write 3 Title Options

**Formula:**
```
[Outcome/Hook] + [Primary Keyword] + [Platform] | [Differentiator] | [Year]
```

**Rules:**
- ✅ Primary keyword in first 40 characters
- ✅ Include "Elementor" or "WordPress"
- ✅ Include 2026 in at least 1 option
- ✅ Under 100 characters total
- ✅ Differentiator: No Code / No GSAP / Free / Without Pro
- ❌ No ALL CAPS
- ❌ No "How to" as first two words alone
- ❌ No product name as last words (puts keyword last — bad for search weight)

### STEP 4 — Description Structure

```
[KEYWORD-RICH OPENING — 2-3 sentences. Primary keyword in first 120 chars.
Lead with the outcome/benefit, not the product name.
Mention use cases: agency, portfolio, SaaS, business.]

🔗 [Widget Name]: [widget URL]
📺 Live Demo: [demo URL]
📖 Docs: [docs URL]

Download FREE: [YOUR_FREE_DOWNLOAD_URL]
Get Pro: [YOUR_PRODUCT_URL]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔥 WHAT YOU'LL LEARN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ [Outcome bullet — specific to what's shown in video]
✅ [Outcome bullet]
✅ [Outcome bullet]
✅ [Outcome bullet]
✅ [Outcome bullet]
✅ [Outcome bullet]
✅ [Outcome bullet]
✅ [Outcome bullet]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏯️ TIMESTAMPS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[Timestamps from user]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔗 IMPORTANT LINKS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▶ [Widget page if applicable]
▶ Get 120+ Powerful Elementor Widgets: [YOUR_PRODUCT_URL]
▶ [Your Product 2]: [YOUR_PRODUCT_2_URL]
▶ Facebook Community: [YOUR_COMMUNITY_URL]
▶ Docs & Help: [YOUR_DOCS_URL]
▶ Premium Support: [YOUR_SUPPORT_URL]
▶ Feature Roadmap: [YOUR_ROADMAP_URL]

🎁 USE CODE '[YOUR_DISCOUNT_CODE]' FOR AN EXTRA 10% DISCOUNT

📌 SUBSCRIBE FOR MORE TUTORIALS
👉 [YOUR_CHANNEL_SUBSCRIBE_URL]

#[10 hashtags]
```

**Description Rules:**
- Same word max 7x (YouTube keyword stuffing filter at 8x)
- Max 15 URLs
- First 120 chars must have primary keyword
- WHAT YOU'LL LEARN bullets = most important YouTube indexing signal — each bullet is a separate keyword phrase

### STEP 5 — 20 Tags

Priority order:
1. Exact primary keyword (e.g., "horizontal scroll elementor")
2. Exact secondary keyword variant
3. Product brand + feature (e.g., "[your product brand] elementor")
4. Broader category keyword
5. Use-case tags (portfolio, agency, SaaS)
6. Competitor method tags (e.g., "no code", "without elementor pro")
7. Product brand alone ("[your-product]", "[your-other-product]")
8. "elementor tutorial 2026"
9. "wordpress tutorial"
10. "elementor"

### STEP 6 — VideoObject Schema

```json
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "[TITLE]",
  "description": "[FIRST 250 CHARS OF DESCRIPTION]",
  "thumbnailUrl": "https://i.ytimg.com/vi/[VIDEO_ID]/maxresdefault.jpg",
  "uploadDate": "[PUBLISH DATE ISO]",
  "duration": "[ISO 8601 DURATION]",
  "embedUrl": "https://www.youtube.com/embed/[VIDEO_ID]",
  "url": "https://www.youtube.com/watch?v=[VIDEO_ID]"
}
```
Include this when generating the companion WordPress post via `/youtube wp-post`.

## Output Format

```
## 📌 TITLE OPTIONS

🥇 RECOMMENDED:
[Title]
Why: [1-sentence explanation]

🥈 ALT A:
[Title]
Why: [1-sentence explanation]

🥉 ALT B:
[Title]
Why: [1-sentence explanation]

---

## 📝 DESCRIPTION
[Full description ready to paste]

---

## 🏷️ TAGS (comma-separated)
[20 tags]

---

## #️⃣ HASHTAGS
[10 hashtags]

---

## 📊 KEYWORD DATA
| Keyword | Monthly Vol | Competition | In Title? |
|---------|------------|-------------|-----------|
...
```
