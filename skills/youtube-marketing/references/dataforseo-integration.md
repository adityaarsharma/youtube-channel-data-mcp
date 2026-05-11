# DataForSEO Integration Guide

## Tools Used by This Skill Suite

| Tool | Used For | When |
|------|----------|------|
| `kw_data_google_ads_search_volume` | Monthly keyword volumes | Every `/youtube seo` and `/youtube ideate` |
| `serp_youtube_organic_live_advanced` | Live YouTube SERP top 25 | Every `/youtube seo`, `/youtube competitor`, `/youtube ideate` |
| `dataforseo_labs_google_keyword_ideas` | Related keyword discovery | `/youtube ideate`, `/youtube competitor` |
| `dataforseo_labs_google_related_keywords` | Keyword variants | `/youtube seo` step 2 |
| `serp_youtube_video_comments_live_advanced` | Comment mining | `/youtube comment-intel` |
| `serp_youtube_video_info_live_advanced` | Video metadata lookup | Competitor analysis |
| `on_page_content_parsing` | Crawl landing pages | `/youtube funnel` |

## Critical Context: Google Volume ≠ YouTube Volume

Google monthly volume in tutorial niches is deliberately LOW (10–50/mo). This is not a signal of low demand.

YouTube search volume is estimated at 3–8x Google volume for tutorial keywords:
- "elementor navigation menu" → 40/mo Google = ~160–320/mo YouTube searches
- "off canvas menu elementor" → 20/mo Google = ~80–160/mo YouTube searches

**Always pull the YouTube SERP** (`serp_youtube_organic_live_advanced`) to see actual view counts — those prove demand far better than Google volume numbers.

## Reading YouTube SERP Results

For each result, extract:
- **View count**: How much traffic this topic generates
- **Age**: How old is the top video? (>2 years = freshness gap)
- **Channel**: Who dominates? (Are they using a widget or CSS?)
- **Title language**: What words are driving CTR?

## Keyword Priority Tiers

| Tier | Volume | Use For |
|------|--------|---------|
| Primary | 50–500/mo Google | Title, first 40 chars |
| Secondary | 10–50/mo Google | Description opening, secondary title |
| Long-tail | 1–10/mo Google | Tags, WHAT YOU'LL LEARN bullets |
| Brand | Any | Description, tags (conversion layer) |

## Cost Control

DataForSEO charges per API call. To minimize costs:
- Run `kw_data_google_ads_search_volume` once per batch of keywords (not one call per keyword)
- Run `serp_youtube_organic_live_advanced` once per primary keyword (not for every variant)
- Cache results within the session — don't re-fetch the same keyword twice in one conversation

## Sources
- DataForSEO API documentation
- your channel keyword research, March 2026
