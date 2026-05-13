---
name: youtube-thumbnail
description: >
  Generates 3 A/B thumbnail briefs with full design specs, title-thumbnail synergy check,
  and CTR improvement recommendations. Pass --brand [config] for brand-specific rules.
  Based on Focus Digital CTR benchmarks and vidIQ data.
---

# /youtube thumbnail

## Overview

Generates 3 A/B-testable thumbnail design briefs for a YouTube video. Each brief is
a complete spec a designer can execute in Canva, Figma, or Photoshop in under 20 minutes.

**Usage:**
```
/youtube thumbnail [video title or topic]
/youtube thumbnail [topic] --brand [config-file-path]
```

---

## Brand Configuration (--brand flag)

Pass a brand config to apply your channel's specific colors, logos, and product rules.

**Config file format** (create your own `brand.yml` or `brand.md`):
```yaml
channel_name: "[YOUR CHANNEL NAME]"
channel_handle: "@[your-handle]"
channel_type: "product"  # product / personal / education / entertainment
primary_color: "#[hex]"
secondary_color: "#[hex]"
font: "[Font name]"
logo_description: "[describe your logo or product icon]"
logo_placement: "bottom-right"  # top-left / top-right / bottom-left / bottom-right
face_in_thumbnail: "optional"  # always / optional / never
product_type: "[plugin / saas / course / personal]"
audience: "[who watches your channel — be specific]"
top_performing_pattern: "[describe what your best thumbnails look like]"
```

Without `--brand`, the skill applies generic CTR-optimized principles.

---

## Research Foundation

- **Focus Digital, Dec 2025**: Tutorial channel avg CTR 4–8%. Dark backgrounds outperform light.
- **vidIQ**: Face in thumbnail → +38% CTR average. Most effective when paired with a result visual.
- **A/B principle**: Run 3 variants, switch after 500 impressions, keep the winner.
- **Mobile rule**: 70%+ of YouTube traffic is mobile. Everything must read at 120px width.
- **Educational channels**: Trust signals outperform shock. Show the actual result, not a reaction.

---

## Topic Clarity Check — Run Before Any Brief

Answer this before generating briefs:

> **"What is this video about, and does the thumbnail communicate that WITHOUT reading the title?"**

If the answer takes more than 1 second at thumbnail size — the brief must solve this first.

| Check | Pass / Fail |
|-------|------------|
| T1: Thumbnail readable without the title | |
| T2: Tool/product doing the action is identifiable | |
| T3: Outcome scope is clear (1 page? full site? how long?) | |
| T4: Pain signal or urgency present | |
| T5: UI/screenshot content matches the video topic | |
| T6: Readable at 120px width (mobile) | |

**Rule**: If T1 or T2 fail → revise the brief before delivering. A thumbnail that needs the title to explain itself is a weak thumbnail.

---

## Winning Formula (Generic)

| Element | Winning Pattern | What to Avoid |
|---------|----------------|---------------|
| Background | Dark, brand-colored zone — not white/light gray | Generic stock photo, white backgrounds |
| Main visual | The finished result — product in active/complete state | Build state, backend admin, abstract concept |
| Text | 3–5 power words MAX, outcome-focused | 6+ words, sentence case, thin font |
| Text color | White (high contrast) | Gray, muted, low-contrast colors |
| Font | Montserrat ExtraBold / Bebas Neue / Anton | Light/Regular weight fonts |
| Face | Optional — include when expression adds information | Neutral expression with no relevant visual |
| Logo | Channel/product mark clearly visible | Missing logo = no brand recall |

---

## The 3 A/B Variants

### VARIANT A — Result Showcase (recommended default)
```
CONCEPT: Show the finished output in its most impressive state.
         The viewer should immediately understand what they will be able to do.

BACKGROUND: [primary_color from config] zone (left 40%) + dark (right 60%)
            Default (no config): dark navy #1a1a2e or charcoal

MAIN VISUAL: The final result — in active, complete, best state
             NOT: building state, admin panel, abstract diagram

TEXT OVERLAY: 3–5 words describing the outcome
             Example patterns: "[RESULT] FREE" / "NO [OBSTACLE] NEEDED" / "BUILD IN [TIME]"

TEXT POSITION: Left third, vertically centered
FONT: Montserrat ExtraBold or Bebas Neue, 90–120px equivalent
ACCENT: Brand primary color on 1 power word (or underline)
LOGO: Channel/product logo at [logo_placement], 80–100px
FACE: [from config] — if optional, use when expression adds "look at this" energy
```

### VARIANT B — Before / After Split
```
CONCEPT: Left = the problem/plain/old state. Right = the solution/polished/new state.
         Signals transformation — the viewer wants the right side.

BACKGROUND: Dark left panel, slightly lighter right panel
DIVIDER: Vertical line in brand primary color (or white)

LEFT VISUAL: The "before" state — plain, manual, competitor, unformatted
RIGHT VISUAL: The "after" state — polished, fast, automated, beautiful result

LABELS: Small "BEFORE"/"AFTER" labels in corners of each panel
HEADLINE: 3-word hook spanning full width at top
ECOSYSTEM ICONS: Relevant platform/tool logos as small badges (30–50px) — confirm relevance
LOGO: Product/channel logo bottom-right
```

### VARIANT C — Bold Claim / Power Word
```
CONCEPT: One dominant statement. Minimal visuals. The claim drives the click.

BACKGROUND: Single solid brand color OR dark gradient — full canvas

TEXT (large): 2–3 words MAX. Entire canvas width. 140–180px.
              Power words: "FREE" / "REPLACED" / "SECONDS" / "ZERO CODE" / "[NUMBER]+"

TEXT (smaller): 1 clarifying line below — max 4 words

VISUAL: One sharp supporting element (right 25% of canvas)
        Icon, badge, result screenshot, or social proof number

LOGO: Brand mark clearly visible
FACE: Optional — works when expression reacts to the bold claim
```

---

## Universal Design Rules

**Text**
- Max 5 words total (6+ = fails mobile readability scan)
- Bold or Extra Bold weight only — never Regular or Light
- Mobile test: resize to 120px — still readable? If not, cut words or increase size
- High contrast: white on dark, dark on white — never gray on gray

**Composition**
- One focal point — eye knows where to look first
- Max 3 colors in the composition
- Avoid bottom-right corner for key text (YouTube timestamp badge overlaps)
- Avoid pure-white dominant background — disappears against YouTube's white UI

**Logo**
- Always include channel or product logo/mark
- Place at config-defined corner, 80–100px, 10px padding from edge
- Never let logo compete with or overlap the main visual

**Clickbait Rule**
- Thumbnail must accurately reflect what the video teaches or shows
- High-CTR + low-watch-time = YouTube demotion. Educational trust > clickbait shock.

---

## CTR Prediction

After generating briefs, predict relative performance:

| Variant | Est. CTR | Why |
|---------|---------|-----|
| A — Result Showcase | [X%] | [Specific visual/text reasoning] |
| B — Before/After | [X%] | [Split format signals transformation] |
| C — Bold Claim | [X%] | [Power word / curiosity gap] |

Base: tutorial/educational channel avg CTR = 4–8% (Focus Digital, Dec 2025).
Adjust per your channel's historical average if known.

---

## Output Format

```
## THUMBNAIL BRIEFS — [Video Title]

**Channel:** [channel name or handle]
**Topic:** [what the video teaches, in one sentence]

### TOPIC CLARITY CHECK
[T1–T6 table results — flag fails before proceeding]

---

### 🅰 VARIANT A — Result Showcase
Concept: [1 sentence — what the viewer sees and feels]
Background: [color/hex or style description]
Main visual: [exact description — specific state, not vague]
Text (large): [exact words — max 3]
Text (small): [supporting line — max 4 words, optional]
Text position: [placement]
Font: [font + size guidance]
Logo: [position + size]
Face: [Yes — left %, emotion / No]
Ecosystem icons: [list any platform icons to include, or none]
Canva/Figma note: [any specific designer tip]

---

### 🅱 VARIANT B — Before / After
[Same structure]

---

### 🅲 VARIANT C — Bold Claim
[Same structure]

---

### 📊 CTR PREDICTION
| Variant | Est. CTR | Reasoning |
|---------|---------|-----------|
| A | X% | [reason] |
| B | X% | [reason] |
| C | X% | [reason] |

**Recommended A/B test pair:** [A vs C / B vs C / A vs B]
Switch after 500 impressions. Keep higher CTR winner.

### 🔗 TITLE–THUMBNAIL SYNERGY
[Do title and thumbnail complement each other or repeat the same words?
Good: title says "how", thumbnail shows the "result"
Bad: title and thumbnail both say the same thing — missed opportunity]
```
