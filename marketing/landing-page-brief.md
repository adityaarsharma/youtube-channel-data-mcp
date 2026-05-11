# Landing Page Brief — youtube-skills.adityaarsharma.com

For tomorrow's subdomain setup. Suggested structure, copy, and SEO targets.

---

## Subdomain Setup

| Setting | Value |
|---------|-------|
| Subdomain | `youtube-skills.adityaarsharma.com` |
| Hosting | Wherever adityaarsharma.com lives (Hetzner, Vercel, RunCloud, etc.) |
| Stack | Static HTML or single-page Astro/Next.js — no DB needed |
| SSL | Let's Encrypt (auto via RunCloud / Vercel) |

---

## Page Structure

### 1. Hero Section

**H1:** Free Open-Source VidIQ Alternative for Claude Code

**Subhead:** 21 commands + 10 live channel tools. Read your private YouTube analytics, push SEO updates directly from Claude, publish companion blog posts to WordPress. No subscription. No paid ads. Runs on your machine.

**Primary CTA:** Install in 60 seconds → links to `#install`
**Secondary CTA:** ⭐ Star on GitHub → links to repo

**Hero metric strip:**
- 21 commands
- 10 live tools
- 0 monthly cost
- MIT licensed

### 2. The Problem

**H2:** VidIQ shows you a score. TubeBuddy shows you a checklist. Neither tells you what to do Monday.

Three paragraphs about creator pain — stuck under 1K subs, CTR dropping, no idea why one video hit 50K when others get 800, manual competitor tracking in spreadsheets.

### 3. What You Get (Feature Grid)

3-column grid, 9 features:
1. Live Analytics — reads private channel data via OAuth
2. SEO Auto-Push — updates titles/tags directly to YouTube
3. WordPress Pipeline — companion blog post with VideoObject schema
4. Retention Scripts — pattern interrupts every 60–90s
5. Thumbnail A/B — 3 briefs with CTR predictions
6. Competitor Gap Map — SERP analysis for your niche
7. Batch SEO — bulk update old videos
8. Channel Templates — 6 channel types
9. 100% Free — MIT, open source, runs locally

### 4. Two-Path Install

**H2:** Install in 60 seconds (no Node.js required)

Two install cards side by side:
- **Skill-Only:** `git clone` + `cp` — works without Node.js
- **Live Mode:** `npx` + `node auth.js` — full live channel tools

Code blocks for both, copy buttons.

### 5. Organic Growth Playbook

**H2:** Build a YouTube Personal Brand Without Paid Ads

The 4-step playbook from the README (Find Evergreen Gaps → 3 Discovery Paths → Compounding Loop → Gap Map). This is the unique angle — no other YouTube tool teaches this system.

### 6. Comparison Table

VidIQ / TubeBuddy / claude-youtube / YouTube Marketing Skills — 4-column comparison highlighting what only this repo does.

### 7. Research Foundation

Pull the 12 citations from README — credibility signal.

### 8. FAQ

Same FAQ as the README — for SEO featured snippets.

### 9. Final CTA

**H2:** Ready to stop guessing?

Two big buttons:
- Install Now (links to GitHub)
- Star the Repo

---

## SEO Targets (Page Meta)

```html
<title>Free VidIQ Alternative — YouTube Marketing Skills for Claude Code</title>
<meta name="description" content="Open-source YouTube growth toolkit. 21 commands + live channel MCP. Reads private analytics, pushes SEO to YouTube, publishes WordPress companion posts. Free. MIT.">
<meta property="og:title" content="YouTube Marketing Skills — Free VidIQ Alternative">
<meta property="og:description" content="21 commands. Live channel data. Organic-only growth strategy. Free open-source toolkit for Claude Code, Cursor, Codex.">
<meta property="og:image" content="https://youtube-skills.adityaarsharma.com/og-image.png">
<link rel="canonical" href="https://youtube-skills.adityaarsharma.com/">
```

### Schema.org JSON-LD

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "YouTube Marketing Skills",
  "operatingSystem": "macOS, Linux, Windows",
  "applicationCategory": "DeveloperApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "ratingCount": "[update with actual GitHub stars]"
  }
}
```

### FAQ Schema (for Google Featured Snippets)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is this a free VidIQ alternative?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. 100% free, open source, MIT licensed. No subscription, no paywalled features, no usage limits."
      }
    }
    // ... rest from README FAQ
  ]
}
```

---

## Target Keywords (Rank Goals)

| Keyword | Search Intent | Difficulty | Notes |
|---------|--------------|------------|-------|
| free vidiq alternative | High-intent commercial | Medium | Primary target |
| youtube mcp server | Tool discovery | Low | First-mover advantage |
| claude code youtube skill | Tool discovery | Low | Niche but high-fit |
| youtube seo claude ai | Educational + tool | Medium | Strong fit |
| open source youtube analytics tool | Discovery | Medium | Underserved |
| youtube creator tools 2026 | Roundup intent | High | Long-tail play |
| how to grow youtube without paid ads | Educational | High | Content-heavy |
| youtube tubebuddy alternative free | Commercial | Medium | Direct competitor |

---

## Outbound Links to Build

Pages this should link out to (and ideally backlink-trade with):

1. github.com/anthropics/claude-code (official Claude Code)
2. modelcontextprotocol.io (MCP spec)
3. dataforseo.com (their SEO API)
4. github.com/adityaarsharma/youtube-marketing-skills (the repo itself)
5. adityaarsharma.com (root site, for site authority)

---

## Conversion Tracking

Track in GA4 (Property: 257383426):

| Event | Trigger |
|-------|---------|
| `install_view` | User scrolls to install section |
| `npm_command_copy` | User clicks copy on `npx youtube-channel-mcp` |
| `github_click` | User clicks any GitHub link |
| `star_click` | User clicks ⭐ Star badge |
| `faq_expand` | User expands any FAQ item |

---

## Launch Day Plan

1. Build static page → push to subdomain
2. Submit to Google Search Console → request indexing
3. Submit sitemap to GSC
4. Post Reddit drafts from `marketing/growth-plan.md` (r/ClaudeAI first)
5. Submit to:
   - github.com/punkpeye/awesome-mcp-servers
   - github.com/wong2/awesome-mcp-servers
   - github.com/appcypher/awesome-mcp-servers
6. Tweet thread with demo GIF
7. LinkedIn post (longer form, technical audience)
8. Product Hunt (Tuesday or Wednesday for max visibility)
