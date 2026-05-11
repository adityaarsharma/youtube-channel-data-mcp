---
name: youtube-metadata
description: >
  Complete copy-paste upload package for any video. Produces title, description,
  tags, chapters, category, thumbnail brief, and publish settings in one block.
  Ready to paste into YouTube Studio — no editing required.
---

# /youtube metadata

## Research Foundation
- **YouTube Official**: Title max 100 chars; description indexes first 150 chars before "Show more"
- **YouTube Official**: Chapters require timestamps starting at 0:00; minimum 3 chapters
- **vidIQ, 2025**: Videos with chapters get 8–12% more average view duration (chapter navigation = retention signal)
- **Focus Digital, Dec 2025**: First 150 chars of description have the strongest keyword indexing weight
- **Yoast SEO Study, 2024**: VideoObject schema on companion page → +31% CTR from Google search

## Metadata Package Components

### 1. Title (1 of 3 recommended by `/youtube seo`)
Select the highest-scoring option. Final check:
- [ ] Primary keyword in first 40 characters
- [ ] Under 100 characters total
- [ ] Year included (2026)
- [ ] Product name included
- [ ] Differentiator word included (Smooth / FREE / No Code / etc.)

### 2. Description (Full)
Use the template from `/youtube seo`. Verify:
- [ ] Widget URL on line 1
- [ ] Primary keyword in first 150 chars (before "Show more")
- [ ] "WHAT YOU'LL LEARN" section present (5–7 bullets)
- [ ] Timestamps present and start at 0:00
- [ ] IMPORTANT LINKS section is complete (all 7 product links)
- [ ] [YOUR_DISCOUNT_CODE] discount code included
- [ ] Subscribe link includes `?sub_confirmation=1`
- [ ] 10 hashtags at bottom
- [ ] Total length: 250+ words

### 3. Tags (20 tags)
- Ordered: specific → broad
- No single tag over 30 characters
- Total all tags under 500 characters
- No keyword stuffing (no single word repeated 8+ times across all tags)

### 4. Chapters (Timestamps)
Chapters auto-activate if:
- At least 3 timestamps
- First timestamp is `0:00`
- Format: `0:00 Title` (no brackets, no dashes required, but consistent)

### 5. Publish Settings
| Setting | Value |
|---------|-------|
| Category | Science & Technology |
| Language | English |
| License | Standard YouTube License |
| Visibility | Public (or Unlisted for review) |
| Publish date/time | Mon–Thu, 9:00–11:00 PM IST |
| Audience | Not made for kids |
| Age restriction | None |
| Allow embedding | Yes |
| Notify subscribers | Yes |
| Comments | Enabled |

### 6. Thumbnail
Use brief from `/youtube thumbnail`. Quick check:
- [ ] Dark background
- [ ] Finished result shown (not backend)
- [ ] 2–3 words max on thumbnail text
- [ ] High contrast between text and background

## Your Fixed Links (Always Include)

```
▶ Get 120+ Powerful Elementor Widgets ([Your Product]): [YOUR_PRODUCT_URL]
▶ [Your Product 2]: [YOUR_PRODUCT_2_URL]
▶ [Your Product 3]: [YOUR_PRODUCT_3_URL]
▶ [Your Product 3] Docs & Help: [YOUR_DOCS_URL]
▶ Facebook Community: [YOUR_COMMUNITY_URL]
▶ Feature Roadmap: [YOUR_ROADMAP_URL]
▶ Premium Support: [YOUR_SUPPORT_URL]
```

For [Your Product] videos, swap [Your Product 3] community/docs for:
```
▶ [Your Product] Docs: [YOUR_DOCS_URL]
▶ Facebook Community: [YOUR_COMMUNITY_URL]
▶ Feature Roadmap: [YOUR_ROADMAP_URL]
```

## Output Format

```
# UPLOAD PACKAGE — [Video Topic]
Video ID: [if updating existing] or [NEW]
Product: [[Your Product 3] / [Your Product] / [Your Product 2] / [Your Product 4]]
Prepared: [date]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## TITLE (paste into YouTube Studio)

[Final title — ready to paste]

Character count: [N]/100

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## DESCRIPTION (paste into YouTube Studio)

[Full description — ready to paste, starting with widget URL]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## TAGS (paste as comma-separated or one per line)

[tag 1], [tag 2], [tag 3], ..., [tag 20]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## CHAPTERS (already inside description — confirm format)

0:00 [Chapter name]
[X:XX] [Chapter name]
...

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## PUBLISH SETTINGS

Category: Science & Technology
Language: English
Visibility: Public
Scheduled publish: [Day, Date] at [9–11 PM IST]
Audience: Not made for kids
Notify subscribers: Yes

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## THUMBNAIL BRIEF

[2 sentences: what to show + text overlay]
See `/youtube thumbnail` for full brief.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## PRE-PUBLISH CHECKLIST

- [ ] Title has primary keyword in first 40 chars
- [ ] Description first 150 chars has primary keyword
- [ ] All product links are present and correct
- [ ] [YOUR_DISCOUNT_CODE] discount code present
- [ ] Subscribe link has ?sub_confirmation=1
- [ ] Chapters start at 0:00
- [ ] Thumbnail uses dark background + result shown
- [ ] Publish time is 9–11 PM IST, Mon–Thu
- [ ] Not made for kids is selected
- [ ] Notify subscribers is ON
```
