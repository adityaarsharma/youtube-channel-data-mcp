# Install Guide

Two paths. Pick the one that fits how you want to use it.

---

## Path 1 — Skill-Only Mode (No Node.js, No OAuth)

**Best for:** Trying it out, working with channel data you paste in manually, using on a machine where you can't install Node.

**Time:** 60 seconds.

### Claude Code

```bash
# Clone or download the repo
git clone https://github.com/adityaarsharma/youtube-marketing-skills.git
cd youtube-marketing-skills

# Copy the skill into your Claude skills directory
cp -r skills/youtube-marketing ~/.claude/skills/
```

That's it. Open Claude Code and type:

```
/youtube-strategy
```

Claude will ask you for the channel info it needs (handle, niche, products) and run the command. No server. No OAuth. No Node.

### Cursor / Windsurf / Codex / Gemini CLI

Same idea — drop the `skills/youtube-marketing/` folder into your agent's skills directory. The markdown files work standalone.

### Manual download (no git)

1. Download [the ZIP](https://github.com/adityaarsharma/youtube-marketing-skills/archive/refs/heads/main.zip)
2. Unzip
3. Move the `skills/youtube-marketing/` folder into `~/.claude/skills/`

Done.

---

## Path 2 — Live Channel Mode (Full Power)

**Best for:** Real workflows where you want Claude to read your private analytics and push SEO updates directly to YouTube.

**Time:** ~10 minutes (Google Cloud project setup is the only slow part).

**Adds:**
- Reads your private analytics (watch time, retention %, demographics, traffic sources)
- Writes title, description, tags back to YouTube without opening Studio
- 10 live channel tools available to every command

### Prerequisites

- Node.js 18+ ([install](https://nodejs.org))
- Google Cloud project with **YouTube Data API v3** + **YouTube Analytics API** enabled
- OAuth 2.0 credentials, type "Desktop app" — saved as `credentials.json`

### Steps

```bash
# 1. Install
npx youtube-channel-mcp

# 2. Put your credentials.json next to the package (or in ~/.config/youtube-mcp/)

# 3. Authenticate once — opens browser, saves tokens.json locally
node auth.js
```

### Add to Claude Code

`~/.claude/settings.json` (or project `settings.json`):

```json
{
  "mcpServers": {
    "youtube": {
      "command": "npx",
      "args": ["youtube-channel-mcp"]
    }
  },
  "skills": ["/path/to/youtube-marketing-skills/skills/youtube-marketing/SKILL.md"]
}
```

### Add to Claude Desktop

`~/Library/Application Support/Claude/claude_desktop_config.json`:

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

### Cursor

`~/.cursor/mcp.json`:

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

---

## Path 3 — Remote Mode (Team / Hosted)

If you want to run the MCP server on a shared host so your team uses one channel from multiple machines:

```bash
MODE=remote PORT=3001 node server.js
```

Then point each client's MCP config at the HTTP/SSE endpoint instead of running locally.

---

## Configure Your Channel (Both Paths)

Open `skills/youtube-marketing/SKILL.md` and set these once:

```markdown
Channel: [Your channel name and handle]
Niche: [What you make videos about]
Products: [Your products / services with URLs]
Best publish time: [Day + time + timezone]
Fixed links: [URLs to embed in every description — product, docs, community]
Discount code: [Your coupon code, if you have one]
```

Every command now respects your config. `/youtube-seo` will use your fixed links. `/youtube-funnel` will audit your real product pages.

For multi-brand workflows, drop additional brand configs in `skills/youtube-marketing/templates/brands/` (this directory is gitignored — your private brand details stay local).

---

## Verify

```bash
# In Claude Code
/youtube-strategy
```

If Claude asks clarifying questions about your channel and returns a positioning + content pillars breakdown, you're good.

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| `credentials.json not found` | Download OAuth credentials from Google Cloud Console → save in package dir or `~/.config/youtube-mcp/` |
| `tokens.json saved` but Claude can't connect | Restart Claude Code / Desktop after editing settings.json |
| Commands work but no live data | You're in skill-only mode — switch to Path 2 for live analytics |
| `node: command not found` | Install Node.js 18+ or use Path 1 (skill-only, no Node) |
| API quota exceeded | YouTube API has 10K units/day free — heavy `/youtube-batch-seo` runs can hit this |
