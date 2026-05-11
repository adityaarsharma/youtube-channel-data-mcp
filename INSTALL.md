# Install Guide

Two ways to install today. A third (hosted MCP — no Node required) is coming soon.

| Mode | Node.js? | OAuth? | Live Channel Data | Best For |
|------|----------|--------|-------------------|----------|
| **Local MCP** (recommended) | Yes | Yes (local) | Yes | Real channel workflows |
| **Skill-Only** | No | No | No | Trying prompts, no channel work |
| ~~Hosted MCP~~ | — | — | — | Coming soon — no install path for users without Node |

**Be honest about skill-only:** Without the MCP server connecting to your live YouTube channel, you can only run the planning/scripting prompts. Anything that reads your analytics or pushes SEO back to YouTube needs the Local MCP. If you have a channel to grow, install the Local MCP.

---

## Recommended — Local MCP (Full Power)

**What you get:**
- Reads your private analytics — watch time, retention %, traffic sources, demographics
- Writes title, description, tags back to YouTube directly from your agent
- All 21 commands work, including `/youtube-audit`, `/youtube-analyze`, `/youtube-batch-seo`, `/youtube-comment-intel`
- Runs entirely on your machine — your data never leaves your computer

### Prerequisites

- Node.js 18+ ([install](https://nodejs.org))
- Google Cloud project with **YouTube Data API v3** + **YouTube Analytics API** enabled
- OAuth 2.0 credentials, type "Desktop app" — saved as `credentials.json`

### Steps

```bash
# 1. Clone + install
git clone https://github.com/adityaarsharma/youtube-marketing-skills.git
cd youtube-marketing-skills && npm install

# 2. Drop your credentials.json into this directory

# 3. Authenticate — opens browser, saves tokens locally
node auth.js

# 4. Install the skill files into your agent's skills directory
cp -r skills/youtube-marketing ~/.claude/skills/
```

### Add MCP server to your agent

**Claude Code** (`~/.claude/settings.json`):

```json
{
  "mcpServers": {
    "youtube": {
      "command": "node",
      "args": ["/full/path/to/youtube-marketing-skills/server.js"]
    }
  }
}
```

Or via npm:

```json
{
  "mcpServers": {
    "youtube": {
      "command": "npx",
      "args": ["youtube-channel-mcp"]
    }
  }
}
```

**Claude Desktop** (`~/Library/Application Support/Claude/claude_desktop_config.json`):

```json
{
  "mcpServers": {
    "youtube": {
      "command": "npx",
      "args": ["youtube-channel-mcp"]
    }
  }
}
```

**Cursor** (`~/.cursor/mcp.json`):

```json
{
  "mcpServers": {
    "youtube": {
      "command": "npx",
      "args": ["youtube-channel-mcp"]
    }
  }
}
```

### Verify

```
/youtube-audit
```

If it returns a channel health audit with your real numbers, you're set.

---

## Skill-Only — Try Before You Install

**Best for:** Testing the prompt quality. Working with channels you don't own. Locked-down machines where you can't install Node.

**Time:** 60 seconds.

```bash
git clone https://github.com/adityaarsharma/youtube-marketing-skills.git
cp -r youtube-marketing-skills/skills/youtube-marketing ~/.claude/skills/
```

Open your agent (Claude Code, Cursor, Codex, Windsurf, Gemini CLI) and type `/youtube-strategy`.

### What Works Without the MCP

✅ `/youtube-strategy` — channel positioning, content pillars, milestones
✅ `/youtube-ideate` — video ideas (you'll paste your niche/data in)
✅ `/youtube-script` — retention-engineered scripts
✅ `/youtube-hook` — hook variants
✅ `/youtube-thumbnail` — thumbnail briefs
✅ `/youtube-seo` — title + description + tags (no live keyword data unless DataForSEO MCP added)
✅ `/youtube-calendar` — content calendar
✅ `/youtube-metadata` — upload package
✅ `/youtube-plugin-demo` — software demo templates

### What Doesn't Work Without the MCP

❌ `/youtube-audit` — needs to read your channel
❌ `/youtube-analyze` — needs live analytics
❌ `/youtube-batch-seo` — needs to push updates to YouTube
❌ `/youtube-comment-intel` — needs to read your comments
❌ Anything that involves "your real channel data"

### Manual Download (no git)

[Download the ZIP](https://github.com/adityaarsharma/youtube-marketing-skills/archive/refs/heads/main.zip) → unzip → move `skills/youtube-marketing/` into `~/.claude/skills/`.

---

## Remote Mode — Share With a Team

If you run the MCP server on a shared host so your team uses one channel from multiple machines:

```bash
MODE=remote PORT=3001 node server.js
```

Then point each client's MCP config at the HTTP/SSE endpoint instead of `command + args`.

---

## Configure Your Channel

Open `skills/youtube-marketing/SKILL.md` (in `~/.claude/skills/youtube-marketing/`) and set once:

```markdown
Channel: [Your channel name and handle]
Niche: [What you make videos about]
Products: [Your products with URLs]
Best publish time: [Day + time + timezone]
Fixed links: [URLs to embed in every description]
Discount code: [Your coupon, if any]
```

Every command now respects your config. For multi-brand setups, drop additional brand files in `skills/youtube-marketing/templates/brands/` (gitignored — your private brand details stay local).

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| `node: command not found` | Install Node.js 18+ from nodejs.org |
| `credentials.json not found` | Download OAuth credentials from Google Cloud Console → save in the package directory |
| Claude/Cursor says "skill not found" | Skills folder isn't in your agent's skills directory — re-check the `cp -r` path |
| Commands work but skip live data | The MCP server isn't loaded — check your `mcpServers` config |
| API quota exceeded | YouTube Data API gives 10K units/day free; `/youtube-batch-seo` is expensive — run on smaller batches |
| Tokens expired | Re-run `node auth.js` to refresh |

---

## What Gets Stored Where

| Data | Local MCP | Skill-Only |
|------|-----------|-----------|
| Skill markdown files | Your machine | Your machine |
| YouTube channel data | Streamed in by the server, not persisted | Never accessed |
| OAuth tokens | `tokens.json` on your machine | None |
| Channel config (SKILL.md) | Your machine | Your machine |
| External API logs | None | None |

Everything runs locally. Nothing is sent to any third-party service unless you explicitly add an integration (DataForSEO, ElevenLabs, etc. — those run with your own API keys).
