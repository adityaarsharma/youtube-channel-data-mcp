---
name: youtube-hook
description: >
  Generates 5 hook variants for any YouTube video with drop-off risk ratings.
  Based on Retention Rabbit 150M+ minutes data and AIR Media-Tech energy patterns.
---

# /youtube hook

## Research Foundation
- **Retention Rabbit**: Hook length 28–42s optimal. <20s feels rushed, >60s loses 35% of audience
- **MrBeast Rule**: Hook must answer "Why should I watch THIS video TODAY?" — not just "what is this"
- **AIR Media-Tech**: 5 energy patterns — challenge, story, reveal, transformation, social proof

## Input Needed
- Video topic
- Primary keyword
- Target audience (beginners, agencies, developers)
- Video length
- Product being shown

## 5 Hook Variants

For each topic, generate all 5 types:

### TYPE 1 — REVEAL HOOK
Show the finished result for 3–5 seconds before saying anything.
Best for: visually impressive outputs (animations, layouts, effects)

```
[VISUAL: Show finished website/widget in action — 5 seconds]
"That's what we're building today. Here's how."
[Cut to tutorial]
```
Risk rating: LOW — results speak for themselves, low drop-off

### TYPE 2 — CHALLENGE HOOK
Lead with the assumption that makes them stay.
Best for: features that seem complex but are actually simple

```
"This looks like it needs a developer. It doesn't.
I'll show you how to build this in Elementor in under 15 minutes — no code,
no GSAP, just [Your Product]."
```
Risk rating: LOW-MEDIUM — strong if the result actually delivers on the promise

### TYPE 3 — STORY HOOK
Relatable problem → solution preview.
Best for: pain points the audience has faced

```
"A client came to me last month and asked for a horizontal scroll website
like [competitor/brand]. Every tutorial I found needed custom JavaScript.
Then I found this — 10 clicks, no code."
```
Risk rating: MEDIUM — story length must stay under 15 seconds or loses 20% of viewers

### TYPE 4 — CURIOSITY GAP HOOK
Tease something unexpected.
Best for: features with a surprising capability

```
"Most people don't know this Elementor widget can change its background
color automatically as you scroll — without a single line of CSS.
Let me show you."
```
Risk rating: LOW — works well for WordPress niche where "no CSS" is a strong signal

### TYPE 5 — SOCIAL PROOF HOOK
Authority or numbers lead.
Best for: validating the method before teaching it

```
"This layout style is used by [well-known agency/brand].
You can build the exact same thing in Elementor today —
I'll walk you through every step."
```
Risk rating: MEDIUM — requires a credible reference, otherwise feels hollow

## Output Format

```
## HOOK OPTIONS FOR: [Topic]

### 🥇 RECOMMENDED: [Type Name]
[Full hook script — word for word]
Length: ~[X] seconds
Drop-off risk: LOW/MEDIUM/HIGH
Why it works: [1 sentence]

### 🥈 ALT 1: [Type Name]
[Script]

### 🥉 ALT 2: [Type Name]
[Script]

### ALT 3: [Type Name]
[Script]

### ALT 4: [Type Name]
[Script]

---
## HOOK SELECTION GUIDE
Best for search traffic: [Type] — captures "I want to learn this" intent
Best for suggested/browse: [Type] — emotional hook works in cold traffic
Best for returning subscribers: [Type] — they already trust you
```
