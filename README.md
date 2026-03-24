# YouTube MCP Server

> **The only YouTube MCP with read + write access.** Pull analytics, fetch full video metadata (including unlisted/private/draft), and update titles/descriptions/tags — directly from Claude.

[![npm version](https://img.shields.io/npm/v/youtube-mcp-server?style=for-the-badge&color=CB3837&logo=npm)](https://www.npmjs.com/package/youtube-mcp-server)
[![npm downloads](https://img.shields.io/npm/dm/youtube-mcp-server?style=for-the-badge&color=CB3837&logo=npm)](https://www.npmjs.com/package/youtube-mcp-server)
[![GitHub Stars](https://img.shields.io/github/stars/adityaarsharma/youtube-mcp-server?style=for-the-badge&logo=github)](https://github.com/adityaarsharma/youtube-mcp-server)
[![License MIT](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)
[![Claude MCP](https://img.shields.io/badge/Claude-MCP%20Server-FF6B35?style=for-the-badge&logo=anthropic)](https://claude.ai)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-43853D?style=for-the-badge&logo=node.js)](https://nodejs.org)

---

## Why This One?

Most YouTube MCPs only fetch public video info or transcripts. This one connects to **your private channel data via OAuth2** — real analytics, real subscriber counts, real traffic sources — and can **write back** to update SEO directly.

```
You: "Pull my video details and optimize the title and tags"

Claude:
  1. get_video_details → fetches current title, description, 20 tags
  2. Analyzes keyword gaps, suggests 3 new titles
  3. update_video_seo → pushes changes live to YouTube
```

**Everything runs on YOUR machine. Your data stays local. Nothing sent to third parties.**

---

## How It Compares

| Feature | youtube-mcp-server (this) | youtube-mcp-server (Zubeid) | mcp-youtube (Kirbah) | youtube-mcp-server (Pauling) |
|---------|:---:|:---:|:---:|:---:|
| **Video metadata (public)** | ✅ | ✅ | ✅ | ✅ |
| **Private/unlisted/draft videos** | ✅ | ❌ | ❌ | ✅ |
| **Channel analytics (views, subs, watch time)** | ✅ | ❌ | ❌ | ✅ |
| **Audience demographics (age, country, device)** | ✅ | ❌ | ❌ | ✅ |
| **Traffic source breakdown** | ✅ | ❌ | ❌ | ✅ |
| **Update titles/descriptions/tags (write)** | ✅ | ❌ | ❌ | ✅ |
| **Search own channel videos** | ✅ | ✅ | ✅ | ✅ |
| **Transcripts** | ❌ | ✅ | ✅ | ❌ |
| **Token optimization** | — | — | ✅ | — |
| **Bundled AI skills (8 skills)** | ✅ | ❌ | ❌ | ❌ |
| **OAuth2 (channel owner auth)** | ✅ | API key | API key | ✅ |
| **npx zero-install** | ✅ | ✅ | ✅ | ❌ |
| **Language** | Node.js | Node.js | Node.js | Python |

**This is for channel owners who want to analyze AND act on their data.** If you just need public video info or transcripts, other options exist. If you need private analytics + SEO updates + AI skills — this is the only option.

---

## Install

### Option A: npx (Zero Install)

```bash
npx youtube-mcp-server
```

### Option B: Global Install

```bash
npm install -g youtube-mcp-server
youtube-mcp-server
```

### Option C: Clone

```bash
git clone https://github.com/adityaarsharma/youtube-mcp-server.git
cd youtube-mcp-server
npm install
```

---

## 10 Tools

### Video Metadata (Read + Write)

| Tool | What It Does |
|------|-------------|
| `get_video_details` | Full metadata for any video by ID or URL — title, full description, all tags, category, privacy status, stats, duration, thumbnail |
| `search_my_videos` | Search your channel's videos by keyword. Returns metadata + stats |
| `update_video_seo` | Update title, description, and/or tags on any video. Only changes fields you provide |

### Channel Analytics

| Tool | What It Does |
|------|-------------|
| `get_channel_overview` | Subscribers, total views, video count, channel description, creation date |
| `get_all_videos` | List all videos with stats (views, likes, comments, tags, privacy). Sort by date or views |
| `get_analytics_over_time` | Day-by-day views, watch time, subscribers gained/lost for any date range |
| `get_top_videos_analytics` | Top performing videos with retention %, watch time, subs gained |
| `get_audience_demographics` | Audience breakdown: top countries, device types, age groups, gender |
| `get_traffic_sources` | Where viewers come from: YouTube Search, Suggested, Browse, External |
| `analyze_and_suggest_topics` | Pulls channel + top video data for AI-powered topic analysis |

---

## Setup (15 minutes, one time)

### Step 1 — Google Cloud Project

1. Go to [console.cloud.google.com](https://console.cloud.google.com)
2. Create a new project (name: `YouTube MCP`)
3. Enable these 2 APIs:
   - **YouTube Data API v3** (for video data + updates)
   - **YouTube Analytics API** (for private analytics)

### Step 2 — OAuth Consent Screen

1. Go to **APIs & Services → OAuth consent screen**
2. Select **External** → Create
3. Fill in app name (`YouTube MCP`), your email
4. Skip scopes → Add your Gmail as test user → Save

### Step 3 — Create OAuth Credentials

1. Go to **APIs & Services → Credentials**
2. Click **+ Create Credentials → OAuth client ID**
3. Select **Desktop app** → Create
4. **Download JSON** → rename to `credentials.json`
5. Move into this repo folder

### Step 4 — Authenticate

```bash
node auth.js
```

Browser opens → log in with the Google account that owns your YouTube channel → Allow.

> **"This app isn't verified"** warning is normal for personal apps. Click **Advanced → Go to YouTube MCP (unsafe)**.

### Step 5 — Connect to Claude

<details>
<summary><strong>Claude Desktop</strong></summary>

Edit `~/Library/Application Support/Claude/claude_desktop_config.json` (Mac) or `%APPDATA%\Claude\claude_desktop_config.json` (Windows):

```json
{
  "mcpServers": {
    "youtube-analytics": {
      "command": "node",
      "args": ["/full/path/to/youtube-mcp-server/server.js"]
    }
  }
}
```

Or if installed via npm:

```json
{
  "mcpServers": {
    "youtube-analytics": {
      "command": "npx",
      "args": ["-y", "youtube-mcp-server"]
    }
  }
}
```
</details>

<details>
<summary><strong>Claude Code (Terminal)</strong></summary>

```bash
claude mcp add youtube-analytics node /full/path/to/youtube-mcp-server/server.js
```
</details>

<details>
<summary><strong>VS Code (Copilot / Continue)</strong></summary>

Add to `.vscode/settings.json`:

```json
{
  "mcp.servers": {
    "youtube-analytics": {
      "command": "npx",
      "args": ["-y", "youtube-mcp-server"]
    }
  }
}
```
</details>

Restart your MCP client. Done!

---

## Ready-to-Use Prompts

```
Get full details for this video: [paste URL]
Then suggest an optimized title, description, and tags
```

```
Pull my channel overview, top 20 videos, 90-day analytics,
traffic sources and audience demographics. Full report.
```

```
Search my videos for "mobile menu". Pull details for the top one.
Write optimized SEO and update it directly.
```

```
Get all my videos sorted by views. Compare bottom 10 vs top 10.
Why did the lower ones underperform? What would you change?
```

---

## 8 Bundled AI Skills

This repo includes **ready-to-use AI skill files** in `skills/` that make Claude act as your YouTube team:

| Skill | What It Does |
|-------|-------------|
| **[SEO Optimizer](skills/youtube-seo-optimizer.md)** | 3 title options + full description + 20 tags. Protects existing ranking keywords |
| **[Channel Audit](skills/youtube-channel-audit.md)** | Full health report — views, subs, retention, traffic, demographics + 30-day action plan |
| **[Topic Finder](skills/youtube-topic-finder.md)** | 12 data-backed topics with keyword volumes, SERP gaps, tier prioritization |
| **[Thumbnail Auditor](skills/youtube-thumbnail-auditor.md)** | 20-point scoring (66-point scale). Grades A-F + redesign brief |
| **[Script Writer](skills/youtube-script-writer.md)** | Word-for-word scripts with screen cues, timestamps, editor brief + companion Short |
| **[Competitor Spy](skills/youtube-competitor-spy.md)** | Competitor analysis, SERP battle maps, 10 steal-worthy topics |
| **[Video Analyzer](skills/youtube-video-analyzer.md)** | Single-video SEO score (21-point) + performance benchmarks + rewrite |
| **[Shorts Repurposer](skills/youtube-shorts-repurposer.md)** | Turn any long-form video into 3-5 Shorts with hooks + posting plan |

**Install all skills:**
```bash
cp skills/youtube-*.md ~/.claude/skills/
```

The skills tell Claude **what to do**. The MCP tools give Claude **access to your data**. Together = complete YouTube AI workflow.

---

## OAuth Scopes

| Scope | Purpose |
|-------|---------|
| `youtube` | Read + write video metadata (titles, descriptions, tags) |
| `youtube.readonly` | Read video data, search, list |
| `yt-analytics.readonly` | Read private analytics (views, watch time, subs, demographics) |
| `youtubepartner-channel-audit` | Extended channel audit data |

---

## Privacy & Security

- Runs **100% on your machine** — no external servers
- Can **only read data and update metadata** — cannot delete videos
- Uses **standard OAuth2** — same system as TubeBuddy, VidIQ
- Revoke anytime at [myaccount.google.com/permissions](https://myaccount.google.com/permissions)
- **Never commit** `credentials.json` or `tokens.json` to git

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| `credentials.json not found` | Download from Google Cloud Console → move to repo folder |
| `Not authenticated` | Run `node auth.js` |
| Port 3000 in use | `lsof -ti:3000 \| xargs kill -9` then retry |
| Claude doesn't show tools | Check JSON syntax in config, restart Claude fully |
| "App isn't verified" | Click Advanced → Go to YouTube MCP (unsafe) |
| `update_video_seo` fails | Delete `tokens.json`, re-run `node auth.js` for write scope |
| Quota exceeded | YouTube API free limit: 10,000 units/day. Wait 24h |

---

## Contributing

PRs welcome! Ideas:
- Transcript extraction (YouTube captions API)
- YouTube Shorts-specific analytics
- Revenue/monetization data (Reporting API)
- Playlist management
- Comment management (read + reply)
- Thumbnail upload

---

## License

[MIT](LICENSE) — free to use, modify, share.

---

## Built By

**[Aditya Sharma](https://adityaarsharma.com)** — Building AI tools for creators and marketers.

[![Twitter](https://img.shields.io/badge/Twitter-@adityaarsharma-1DA1F2?style=flat&logo=twitter)](https://twitter.com/adityaarsharma)
[![GitHub](https://img.shields.io/badge/GitHub-adityaarsharma-181717?style=flat&logo=github)](https://github.com/adityaarsharma)

If this saved you time — **[star the repo](https://github.com/adityaarsharma/youtube-mcp-server)** and share with a creator friend!
