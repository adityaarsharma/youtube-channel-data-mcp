# MCP Integration Roadmap — Make YouTube Marketing Skills the Orchestrator

**Strategy:** We don't build video editors, voice generators, or stock libraries. We orchestrate the best open-source MCPs that already exist. Our skill becomes the brain — `/youtube-shorts-build` calls 5 other MCPs in sequence and outputs a finished, uploaded video.

This is how we leapfrog AgriciDaniel/claude-youtube (skill-only, can't produce video) and beat VidIQ/TubeBuddy (no production capability at all).

---

## The MCP Stack — What to Connect

### 🎬 Video Production / Editing

| Tool | What It Does | License | MCP Status | Our Use |
|------|-------------|---------|-----------|---------|
| **Remotion** | React → MP4 rendering, animated explainers | Free for non-revenue / paid commercial | [Official MCP](https://github.com/mcp-use/remotion-mcp-app) ✅ | Tutorial videos, intros, code reveals |
| **OpenCut** | Open-source CapCut clone (web/desktop/mobile) | MIT | [Repo](https://github.com/opencut-app/opencut) — no MCP yet | Future: build a thin MCP wrapper |
| **OpenReel Video** | Browser-based editor with JSON action scripting | MIT | No MCP yet — has scripting engine | Future MCP candidate |
| **FFmpeg MCP** | Trim, concat, speed adjust, keyframe optimization | LGPL | [beambuilder/ffmpeg-mcp-server](https://github.com/beambuilder/ffmpeg-mcp-server) ✅ | Assembly + post-processing for Shorts |
| **Manim** | Math/code/diagram animations | MIT | [zcsabbagh/manim-mcp](https://lobehub.com/mcp/zcsabbagh-manim-mcp) ✅ | Educational explainers |
| **Claude Code Video Toolkit** | Bundled toolkit (Remotion + Manim + FFmpeg + screen capture) | MIT | [digitalsamba/claude-code-video-toolkit](https://github.com/digitalsamba/claude-code-video-toolkit) ✅ | Drop-in starter |

**Note on CapCut:** [No public API as of 2026](https://samautomation.work/capcut-api/). Skip it. Use OpenCut/OpenReel for open-source path or stay headless with Remotion + FFmpeg.

### 🎙 Voice / Audio

| Tool | What It Does | License / Cost | MCP Status |
|------|-------------|----------------|-----------|
| **ElevenLabs** | TTS + voice cloning + audio processing | 10k credits/mo free | [Official MCP](https://github.com/elevenlabs/elevenlabs-mcp) ✅ |
| **Whisper / faster-whisper** | Audio → SRT/VTT subtitles, local processing | MIT | [Apify Whisper MCP](https://apify.com/vittuhy/audio-and-video-transcript/api/mcp), [MCP-YouTube-Transcribe](https://lobehub.com/mcp/jackhp-mcp-youtube-transcribe) ✅ |
| **Freesound** | SFX, music, ambient sounds | CC + commercial | [johnkimdw/freesound-mcp-server](https://github.com/timjrobinson/FreesoundMCPServer) ✅ |

### 🖼 Images / Thumbnails

| Tool | What It Does | Cost | MCP Status |
|------|-------------|------|-----------|
| **Nano Banana 2 (Gemini Flash Image)** | Thumbnail + image generation | Per-image (no subscription) | [ConechoAI/Nano-Banana-MCP](https://github.com/ConechoAI/Nano-Banana-MCP), [AgriciDaniel/banana-claude](https://github.com/AgriciDaniel/banana-claude) ✅ |
| **Flux via Replicate** | High-quality image gen | Per-image | Some general image-gen MCPs support it |

### 📚 Stock Media

| Tool | What It Does | License | MCP Status |
|------|-------------|---------|-----------|
| **Pexels** | Free stock photos + 4K videos | Pexels License (commercial OK) | [Pexels MCP via Composio](https://composio.dev/toolkits/pexels/framework/claude-code) ✅ |
| **Pixabay** | Free photos, videos, vectors, music | Pixabay License | [API docs](https://pixabay.com/api/docs/) — easy to wrap |

---

## The 5 New Orchestrator Skills to Build (Don't Build the MCPs — Compose Them)

### 1. `/youtube-shorts-build` — End-to-End Short Production

**Pipeline:**

```
/youtube-shorts (writes script)
        ↓
ElevenLabs MCP (generates voiceover MP3)
        ↓
Pexels MCP (fetches 5-7 vertical B-roll clips matching script keywords)
        ↓
Whisper MCP (transcribes voiceover → word-level SRT for animated captions)
        ↓
FFmpeg MCP (assembles 9:16 vertical: B-roll + voice + burned-in captions)
        ↓
Our YouTube MCP (uploads as Short with SEO metadata + tags)
```

**Output:** Finished Short MP4 uploaded to YouTube. From one Claude command. ~3-5 min runtime.

**Cost per Short:** ~$0.05 (ElevenLabs credits) + $0 (Pexels) + $0 (Whisper local) = effectively free.

### 2. `/youtube-tutorial-build` — Animated Tutorial Video

**Pipeline:**

```
/youtube-script (writes tutorial script with screen cue markers)
        ↓
Remotion MCP (generates animated intro, code reveals, lower-thirds, outro)
        ↓
User records screen content separately (manual step or screen-cap MCP)
        ↓
ElevenLabs MCP (voiceover for narration sections)
        ↓
FFmpeg MCP (composite all layers + transitions)
        ↓
/youtube-seo (writes title, description, tags)
        ↓
/youtube-wp-post (publishes companion blog post)
```

**Output:** Production-ready tutorial video + Google-ranking blog post in one workflow.

### 3. `/youtube-thumbnail-image` — Thumbnail Brief → Actual Image

Current `/youtube-thumbnail` produces a *brief*. This new skill closes the loop:

```
/youtube-thumbnail (writes 3 variant briefs with composition + color hex)
        ↓
Nano Banana MCP (generates 3 actual thumbnail JPGs from briefs)
        ↓
Our YouTube MCP (updates video thumbnail when uploaded)
```

**Cost:** ~$0.03 per thumbnail × 3 variants = $0.09 per video.

### 4. `/youtube-clip-from-long` — Long-Form → 5 Viral Shorts

Enhances current `/youtube-shorts-from-long`:

```
Our YouTube MCP (downloads or accesses long-form video)
        ↓
Whisper MCP (full transcript with timestamps)
        ↓
Claude analyzes transcript for "viral moments" (hook density, retention signals)
        ↓
FFmpeg MCP (extracts 5 clips, 30-60 sec each, 9:16 reframe)
        ↓
For each: ElevenLabs (no — keep original audio) + Whisper SRT + FFmpeg burn captions
        ↓
Our YouTube MCP (uploads all 5 as Shorts)
```

### 5. `/youtube-channel-trailer` — Build a Channel Trailer

```
/youtube-strategy (gets channel positioning)
        ↓
Claude writes 60-sec trailer script
        ↓
Pexels MCP (fetches B-roll matching channel topics)
        ↓
ElevenLabs (voiceover)
        ↓
Remotion MCP (animated channel name + subscribe CTA)
        ↓
FFmpeg MCP (assemble)
        ↓
Our YouTube MCP (uploads as channel trailer)
```

---

## Ship Order — 8 Week Roadmap

### Week 1-2: Foundation
- [ ] Add **ElevenLabs MCP** to recommended integrations (it's the highest-value single addition)
- [ ] Add **FFmpeg MCP** to recommended integrations
- [ ] Add **Pexels MCP** to recommended integrations
- [ ] Add **Whisper MCP** to recommended integrations
- [ ] Document the 4-MCP stack in `INTEGRATIONS.md` with install instructions

### Week 3-4: First Killer Workflow
- [ ] Build `/youtube-shorts-build` — orchestrator that calls all 4 MCPs above
- [ ] Test on 5 real Shorts, measure cost + time per Short
- [ ] Write a demo blog post: "How I made 30 YouTube Shorts in one afternoon with Claude Code"
- [ ] Tweet thread with before/after demo video

### Week 5: Thumbnail Loop
- [ ] Add **Nano Banana MCP** to recommended integrations
- [ ] Build `/youtube-thumbnail-image` orchestrator
- [ ] Update `/youtube-thumbnail` to optionally chain into image generation

### Week 6: Tutorial Production
- [ ] Add **Remotion MCP** to recommended integrations
- [ ] Add **Claude Code Video Toolkit** as a sibling/companion repo recommendation
- [ ] Build `/youtube-tutorial-build` orchestrator
- [ ] Make sure it plays nice with their toolkit (mutual cross-link is good for both repos)

### Week 7: Repurposing
- [ ] Enhance `/youtube-shorts-from-long` → call new `/youtube-clip-from-long`
- [ ] Add **Freesound MCP** for SFX/music in Shorts

### Week 8: Channel Trailer + Polish
- [ ] Build `/youtube-channel-trailer`
- [ ] Add demo video / GIF for each orchestrator to README
- [ ] Hit Product Hunt with "Free open-source video production agent stack for YouTube"

---

## The Pitch (Why This Beats Everyone)

**VidIQ / TubeBuddy:** No production capability at all. Just suggest, you do the work.

**AgriciDaniel/claude-youtube:** Skill-only, no live data, no production. They write briefs; users do everything manually.

**Us:** Skill + live channel + **production orchestration**. From "I want a Short about X" to "uploaded, captioned, with thumbnail, SEO optimized" — in one command.

No competitor has this. The closest is the [Claude Code Video Toolkit](https://github.com/digitalsamba/claude-code-video-toolkit) but they only handle the *production* side — no YouTube channel intelligence, no SEO, no growth strategy. We're the marketing brain that drives their production tools.

**Positioning shift:** From "YouTube AI marketing toolkit" → **"Open-source YouTube growth + production agent stack."**

---

## What NOT to Build

- ❌ Our own video editor (Remotion + FFmpeg already cover this)
- ❌ Our own TTS (ElevenLabs is the best, and they have an official MCP)
- ❌ Our own image generator (Nano Banana already integrated, cheap)
- ❌ A CapCut MCP wrapper (CapCut has no public API — dead end)
- ❌ Browser automation for YouTube Studio (the OAuth Data API is more reliable)
- ❌ Our own stock library (Pexels MCP handles this perfectly)

**Build only the orchestration glue.** That's the moat.

---

## Cross-Linking Strategy (for GitHub stars)

Each MCP we integrate, we should:
1. Open a PR to their repo's README adding our repo to their "Used by" / "Examples" section
2. Mention them prominently in our INTEGRATIONS.md with links
3. Cross-promote on Reddit/Twitter when we ship the integration

This creates a backlink network. ElevenLabs MCP has thousands of stars — even a single mention from their README would drive significant traffic.

---

## Sources

- [OpenCut — open-source CapCut alternative](https://github.com/opencut-app/opencut)
- [CapCut has no public API in 2026](https://samautomation.work/capcut-api/)
- [Remotion MCP — official](https://github.com/mcp-use/remotion-mcp-app)
- [Claude Code Video Toolkit — Remotion + Manim + FFmpeg](https://github.com/digitalsamba/claude-code-video-toolkit)
- [FFmpeg MCP for Claude](https://github.com/beambuilder/ffmpeg-mcp-server)
- [ElevenLabs official MCP](https://github.com/elevenlabs/elevenlabs-mcp)
- [Whisper MCP for SRT/VTT generation](https://apify.com/vittuhy/audio-and-video-transcript/api/mcp)
- [Pexels MCP for stock footage](https://composio.dev/toolkits/pexels/framework/claude-code)
- [Freesound MCP for SFX/music](https://github.com/timjrobinson/FreesoundMCPServer)
- [Nano Banana MCP — Gemini Flash Image](https://github.com/ConechoAI/Nano-Banana-MCP)
- [Remotion went viral with Claude in Jan 2026 — 6M views, 25k installs](https://www.remotion.dev/docs/ai/claude-code)
