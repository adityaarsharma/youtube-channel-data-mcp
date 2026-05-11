# Install Guide

One setup. Local MCP + skills. ~10 minutes (Google Cloud project setup is the only slow part).

A no-install hosted version is coming soon. Until then, this is the path.

---

## What You Get

- All 21 commands working against your real YouTube channel
- Reads your private analytics — watch time, retention %, traffic sources, demographics
- Writes title, description, tags back to YouTube directly from your agent
- Runs entirely on your machine — your data never leaves your computer

---

## Prerequisites

- **Node.js 18+** — [install](https://nodejs.org)
- **Google Cloud project** with both APIs enabled:
  - YouTube Data API v3
  - YouTube Analytics API
- **OAuth 2.0 credentials** (type: Desktop app) — downloaded as `credentials.json`

[Google's guide to enabling the APIs](https://developers.google.com/youtube/v3/getting-started). Pick "Desktop app" when creating the OAuth client.

---

## Steps

### 1. Clone and install

```bash
git clone https://github.com/adityaarsharma/youtube-marketing-skills.git
cd youtube-marketing-skills
npm install
```

### 2. Add your Google OAuth credentials

Drop the `credentials.json` you downloaded from Google Cloud Console into the package directory.

### 3. Authenticate

```bash
node auth.js
```

Opens a browser, you grant access to your YouTube channel, tokens are saved locally as `tokens.json`.

### 4. Install the skill files

```bash
cp -r skills/youtube-marketing ~/.claude/skills/
```

For Cursor / Windsurf / other agents, drop the same folder into that agent's skills directory.

### 5. Add the MCP server to your agent

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

**Claude Desktop** (`~/Library/Application Support/Claude/claude_desktop_config.json`):

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

**Cursor** (`~/.cursor/mcp.json`):

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

Or use the published npm package instead of a local path:

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

### 6. Restart your agent

Quit and reopen Claude Code / Cursor / Claude Desktop so it picks up the new MCP server.

---

## Configure Your Channel

Open `~/.claude/skills/youtube-marketing/SKILL.md` (or wherever you copied the skill folder) and set once:

```markdown
Channel: [Your channel name and handle]
Niche: [What you make videos about]
Products: [Your products with URLs]
Best publish time: [Day + time + timezone]
Fixed links: [URLs to embed in every description]
Discount code: [Your coupon, if any]
```

Every command now respects your config. For multi-brand setups, drop additional brand files in `templates/brands/` (gitignored — stays local).

---

## Verify

In your agent:

```
/youtube-audit
```

If it returns a channel health audit with your real numbers, you're set.

---

## Remote Mode — Share With a Team

To run the MCP on a shared host so multiple machines use one channel:

```bash
MODE=remote PORT=3001 node server.js
```

Point each client's MCP config at the HTTP/SSE endpoint instead of `command + args`.

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| `node: command not found` | Install Node.js 18+ from [nodejs.org](https://nodejs.org) |
| `credentials.json not found` | Download OAuth credentials from Google Cloud Console → save in the package directory |
| Agent says "skill not found" | Skill folder isn't in your agent's skills directory — recheck the `cp -r` path |
| Commands return generic answers, not channel data | The MCP server isn't loaded — check your `mcpServers` config + restart the agent |
| `Error: invalid_grant` on auth | Tokens expired — re-run `node auth.js` |
| API quota exceeded | YouTube Data API gives 10K units/day free; `/youtube-batch-seo` is expensive — run on smaller batches |

---

## What Gets Stored Where

| Data | Location |
|------|----------|
| Skill markdown files | Your machine (`~/.claude/skills/youtube-marketing/`) |
| YouTube channel data | Streamed in by the local MCP server, never persisted |
| OAuth tokens | `tokens.json` on your machine |
| Channel config | `SKILL.md` on your machine |

Everything runs locally. Nothing is sent to any third-party service unless you explicitly add an integration (DataForSEO, ElevenLabs, etc. — those use your own API keys).
