#!/usr/bin/env node
/**
 * YouTube Analytics + Video Metadata MCP Server
 * Connects Claude to your YouTube channel via OAuth2
 * Supports: analytics, video metadata, drafts, unlisted, private videos
 */

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { CallToolRequestSchema, ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";
import { google } from "googleapis";
import { OAuth2Client } from "google-auth-library";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import http from "http";
import open from "open";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TOKEN_PATH = path.join(__dirname, "tokens.json");
const CREDENTIALS_PATH = path.join(__dirname, "credentials.json");

// ─── OAuth Setup ─────────────────────────────────────────────────────────────
function getOAuth2Client() {
  if (!fs.existsSync(CREDENTIALS_PATH)) {
    throw new Error(
      "credentials.json not found. Download it from Google Cloud Console → APIs & Services → Credentials"
    );
  }
  const creds = JSON.parse(fs.readFileSync(CREDENTIALS_PATH));
  const { client_id, client_secret, redirect_uris } = creds.installed || creds.web;
  return new OAuth2Client(client_id, client_secret, redirect_uris[0]);
}

async function authorize() {
  const auth = getOAuth2Client();
  if (fs.existsSync(TOKEN_PATH)) {
    auth.setCredentials(JSON.parse(fs.readFileSync(TOKEN_PATH)));
    return auth;
  }
  return await getNewToken(auth);
}

function getNewToken(auth) {
  return new Promise((resolve, reject) => {
    const authUrl = auth.generateAuthUrl({
      access_type: "offline",
      scope: [
        "https://www.googleapis.com/auth/youtube",
        "https://www.googleapis.com/auth/youtube.readonly",
        "https://www.googleapis.com/auth/yt-analytics.readonly",
        "https://www.googleapis.com/auth/youtubepartner-channel-audit",
      ],
    });

    console.error("Opening browser for OAuth authorization...");
    console.error("Auth URL:", authUrl);

    const server = http.createServer(async (req, res) => {
      if (req.url?.startsWith("/?code=")) {
        const code = new URL(req.url, "http://localhost:3000").searchParams.get("code");
        res.end("<h1>✅ Authorization successful! You can close this tab and return to Claude.</h1>");
        server.close();
        try {
          const { tokens } = await auth.getToken(code);
          auth.setCredentials(tokens);
          fs.writeFileSync(TOKEN_PATH, JSON.stringify(tokens));
          console.error("Token saved to", TOKEN_PATH);
          resolve(auth);
        } catch (err) {
          reject(err);
        }
      }
    });

    server.listen(3000, () => {
      open(authUrl).catch(() => {
        console.error("Could not open browser automatically. Visit the URL above manually.");
      });
    });
  });
}

// ─── YouTube API Helpers ──────────────────────────────────────────────────────

async function getChannelStats(auth) {
  const youtube = google.youtube({ version: "v3", auth });
  const res = await youtube.channels.list({
    part: ["snippet", "statistics", "brandingSettings"],
    mine: true,
  });
  const ch = res.data.items?.[0];
  if (!ch) return { error: "No channel found" };
  return {
    id: ch.id,
    title: ch.snippet.title,
    description: ch.snippet.description,
    country: ch.snippet.country,
    publishedAt: ch.snippet.publishedAt,
    customUrl: ch.snippet.customUrl,
    subscriberCount: ch.statistics.subscriberCount,
    viewCount: ch.statistics.viewCount,
    videoCount: ch.statistics.videoCount,
    hiddenSubscriberCount: ch.statistics.hiddenSubscriberCount,
  };
}

// Get full video details by ID — works for public, unlisted, private, and draft
async function getVideoDetails(auth, videoId) {
  const youtube = google.youtube({ version: "v3", auth });

  // Extract video ID from URL if full URL is passed
  const idMatch = videoId.match(
    /(?:youtube\.com\/(?:watch\?v=|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  const cleanId = idMatch ? idMatch[1] : videoId.trim();

  const res = await youtube.videos.list({
    part: ["snippet", "statistics", "contentDetails", "status", "localizations"],
    id: [cleanId],
  });

  const video = res.data.items?.[0];
  if (!video) {
    return { error: `Video not found: ${cleanId}. If it's a draft, ensure it's associated with this channel.` };
  }

  return {
    id: video.id,
    url: `https://www.youtube.com/watch?v=${video.id}`,
    // Full metadata for SEO
    title: video.snippet.title,
    description: video.snippet.description,
    tags: video.snippet.tags || [],
    categoryId: video.snippet.categoryId,
    defaultLanguage: video.snippet.defaultLanguage,
    defaultAudioLanguage: video.snippet.defaultAudioLanguage,
    publishedAt: video.snippet.publishedAt,
    // Status — public / unlisted / private / draft
    privacyStatus: video.status?.privacyStatus,
    uploadStatus: video.status?.uploadStatus,
    madeForKids: video.status?.madeForKids,
    // Stats
    viewCount: parseInt(video.statistics?.viewCount || 0),
    likeCount: parseInt(video.statistics?.likeCount || 0),
    commentCount: parseInt(video.statistics?.commentCount || 0),
    // Duration
    duration: video.contentDetails?.duration,
    definition: video.contentDetails?.definition,
    // Thumbnail
    thumbnail: video.snippet.thumbnails?.maxres?.url || video.snippet.thumbnails?.high?.url,
  };
}

// Search your own channel's videos by title (includes unlisted)
async function searchMyVideos(auth, query, maxResults = 10) {
  const youtube = google.youtube({ version: "v3", auth });
  const chRes = await youtube.channels.list({ part: ["id"], mine: true });
  const channelId = chRes.data.items?.[0]?.id;

  const res = await youtube.search.list({
    part: ["id", "snippet"],
    channelId,
    q: query,
    maxResults,
    type: ["video"],
  });

  const videoIds = res.data.items.map((i) => i.id.videoId).filter(Boolean);
  if (!videoIds.length) return [];

  const statsRes = await youtube.videos.list({
    part: ["snippet", "statistics", "status"],
    id: videoIds,
  });

  return statsRes.data.items.map((v) => ({
    id: v.id,
    url: `https://www.youtube.com/watch?v=${v.id}`,
    title: v.snippet.title,
    description: v.snippet.description?.substring(0, 500),
    tags: v.snippet.tags || [],
    publishedAt: v.snippet.publishedAt,
    privacyStatus: v.status?.privacyStatus,
    viewCount: parseInt(v.statistics?.viewCount || 0),
    likeCount: parseInt(v.statistics?.likeCount || 0),
    thumbnail: v.snippet.thumbnails?.medium?.url,
  }));
}

// ─── YouTube Metadata Safety Guardrails ──────────────────────────────────────
// HARD BLOCKS — enforced at the server level, cannot be bypassed by any caller.
// Based on YouTube's official policies:
//   Title policy:       https://support.google.com/youtube/answer/57421
//   Spam/misleading:    https://support.google.com/youtube/answer/2801973
//   Metadata policy:    https://support.google.com/youtube/answer/6162278
function validateYouTubeMetadata(updates) {
  const errors = [];
  const warnings = [];

  // ── Title ────────────────────────────────────────────────────────────────────
  if (updates.title) {
    const t = updates.title;

    if (t.trim().length === 0)
      errors.push("BLOCKED: Title cannot be empty or whitespace only.");

    if (t.length > 100)
      errors.push(`BLOCKED: Title too long (${t.length} chars). YouTube hard limit is 100 chars.`);

    // ALL CAPS check — >80% uppercase letters = spam signal
    const letters = t.replace(/[^a-zA-Z]/g, "");
    if (letters.length > 5 && (t.match(/[A-Z]/g) || []).length / letters.length > 0.8)
      errors.push("BLOCKED: Title is mostly ALL CAPS. YouTube demotes/flags ALL CAPS titles as spam.");

    // Excessive punctuation
    const punctCount = (t.match(/[!?]/g) || []).length;
    if (punctCount > 4)
      errors.push(`BLOCKED: ${punctCount} exclamation/question marks in title. Max 4 — YouTube flags this as clickbait spam.`);

    // Repetitive characters (e.g. "!!!!!!!" or "......")
    if (/(.)\1{5,}/.test(t))
      errors.push('BLOCKED: Repetitive characters detected (e.g. "!!!!!!"). YouTube flags this as spam.');

    // Emoji overload (>3 emojis in title)
    const emojiMatches = t.match(/\p{Emoji_Presentation}/gu) || [];
    if (emojiMatches.length > 3)
      errors.push(`BLOCKED: ${emojiMatches.length} emojis in title. Max 3 — more than that signals spam to YouTube's algorithm.`);

    // Known high-risk misleading clickbait patterns YouTube auto-flags
    const clickbaitPatterns = [
      /\b(i'?m (quitting|leaving|deleting|dying|gone forever))\b/i,
      /\b(100%\s*free\s*(money|robux|vbucks|gift\s*card))\b/i,
      /\b(hack(ed|ing)\s+youtube)\b/i,
    ];
    for (const pattern of clickbaitPatterns) {
      if (pattern.test(t))
        errors.push(`BLOCKED: Title matches a known YouTube policy violation pattern: "${t.match(pattern)[0]}".`);
    }
  }

  // ── Description ──────────────────────────────────────────────────────────────
  if (updates.description) {
    const d = updates.description;

    if (d.length > 5000)
      errors.push(`BLOCKED: Description too long (${d.length} chars). YouTube hard limit is 5000 chars.`);

    // Keyword stuffing: any word (>3 chars) repeated 8+ times
    const wordFreq = {};
    d.toLowerCase().split(/\s+/).forEach((w) => {
      const clean = w.replace(/[^a-z]/g, "");
      if (clean.length > 3) wordFreq[clean] = (wordFreq[clean] || 0) + 1;
    });
    const stuffed = Object.entries(wordFreq).find(([, c]) => c >= 8);
    if (stuffed)
      errors.push(`BLOCKED: Keyword stuffing — "${stuffed[0]}" repeated ${stuffed[1]} times. YouTube penalizes keyword stuffing descriptions.`);

    // Excessive URLs / link spam
    const urlCount = (d.match(/https?:\/\//g) || []).length;
    if (urlCount > 15)
      errors.push(`BLOCKED: ${urlCount} URLs in description. Max 15 — YouTube may flag as link spam.`);
  }

  // ── Tags ─────────────────────────────────────────────────────────────────────
  if (updates.tags) {
    if (!Array.isArray(updates.tags)) {
      errors.push("BLOCKED: Tags must be an array of strings.");
    } else {
      const longTags = updates.tags.filter((t) => t.length > 30);
      if (longTags.length > 0)
        errors.push(`BLOCKED: ${longTags.length} tag(s) exceed 30-char YouTube limit: ${longTags.slice(0, 3).map((t) => `"${t}"`).join(", ")}.`);

      const totalChars = updates.tags.reduce((sum, t) => sum + t.length, 0);
      if (totalChars > 500)
        errors.push(`BLOCKED: Total tag length (${totalChars} chars) exceeds YouTube's 500-char limit. Remove some tags.`);

      if (updates.tags.length > 30)
        errors.push(`BLOCKED: Too many tags (${updates.tags.length}). YouTube's effective limit is 30 tags.`);
    }
  }

  return { valid: errors.length === 0, errors, warnings };
}

// Update video SEO: title, description, tags
async function updateVideoSEO(auth, videoId, updates) {
  // ── Safety guardrails — HARD BLOCK, not bypassable ──
  const validation = validateYouTubeMetadata(updates);
  if (!validation.valid) {
    return {
      success: false,
      blocked: true,
      reason: "YouTube policy guardrails prevented this update.",
      errors: validation.errors,
      warnings: validation.warnings,
      fix_required: "Correct the issues listed in 'errors' and retry.",
    };
  }

  const youtube = google.youtube({ version: "v3", auth });

  // First get current data
  const current = await getVideoDetails(auth, videoId);
  if (current.error) return current;

  const snippet = {
    title: updates.title || current.title,
    description: updates.description || current.description,
    tags: updates.tags || current.tags,
    categoryId: current.categoryId || "28",
    defaultLanguage: current.defaultLanguage || "en",
  };

  const res = await youtube.videos.update({
    part: ["snippet"],
    requestBody: {
      id: videoId,
      snippet,
    },
  });

  return {
    success: true,
    updated: {
      id: res.data.id,
      title: res.data.snippet.title,
      description: res.data.snippet.description,
      tags: res.data.snippet.tags || [],
    },
  };
}

async function getVideos(auth, maxResults = 50, order = "date") {
  const youtube = google.youtube({ version: "v3", auth });
  const chRes = await youtube.channels.list({ part: ["id"], mine: true });
  const channelId = chRes.data.items?.[0]?.id;

  const res = await youtube.search.list({
    part: ["id", "snippet"],
    channelId,
    maxResults,
    order,
    type: ["video"],
  });

  const videoIds = res.data.items.map((i) => i.id.videoId).filter(Boolean);
  if (!videoIds.length) return [];

  const statsRes = await youtube.videos.list({
    part: ["snippet", "statistics", "contentDetails", "status"],
    id: videoIds,
  });

  return statsRes.data.items.map((v) => ({
    id: v.id,
    url: `https://www.youtube.com/watch?v=${v.id}`,
    title: v.snippet.title,
    description: v.snippet.description?.substring(0, 300),
    publishedAt: v.snippet.publishedAt,
    duration: v.contentDetails.duration,
    tags: v.snippet.tags || [],
    privacyStatus: v.status?.privacyStatus,
    viewCount: parseInt(v.statistics.viewCount || 0),
    likeCount: parseInt(v.statistics.likeCount || 0),
    commentCount: parseInt(v.statistics.commentCount || 0),
    thumbnail: v.snippet.thumbnails?.medium?.url,
  }));
}

async function getAnalytics(auth, startDate, endDate, metrics, dimensions) {
  const youtubeAnalytics = google.youtubeAnalytics({ version: "v2", auth });
  const res = await youtubeAnalytics.reports.query({
    ids: "channel==MINE",
    startDate: startDate || getDateDaysAgo(30),
    endDate: endDate || getDateDaysAgo(0),
    metrics: metrics || "views,estimatedMinutesWatched,averageViewDuration,subscribersGained,subscribersLost,likes,comments",
    dimensions: dimensions || "day",
    sort: dimensions === "video" ? "-views" : "day",
    maxResults: 50,
  });
  return {
    columnHeaders: res.data.columnHeaders,
    rows: res.data.rows || [],
  };
}

async function getTopVideos(auth, days = 28) {
  const youtubeAnalytics = google.youtubeAnalytics({ version: "v2", auth });
  const res = await youtubeAnalytics.reports.query({
    ids: "channel==MINE",
    startDate: getDateDaysAgo(days),
    endDate: getDateDaysAgo(0),
    metrics: "views,estimatedMinutesWatched,averageViewDuration,averageViewPercentage,subscribersGained,likes,comments",
    dimensions: "video",
    sort: "-views",
    maxResults: 25,
  });
  return {
    period: `Last ${days} days`,
    columnHeaders: res.data.columnHeaders,
    rows: res.data.rows || [],
  };
}

async function getAudienceData(auth) {
  const youtubeAnalytics = google.youtubeAnalytics({ version: "v2", auth });
  const [geo, device, age] = await Promise.all([
    youtubeAnalytics.reports.query({
      ids: "channel==MINE",
      startDate: getDateDaysAgo(90),
      endDate: getDateDaysAgo(0),
      metrics: "views,estimatedMinutesWatched",
      dimensions: "country",
      sort: "-views",
      maxResults: 10,
    }),
    youtubeAnalytics.reports.query({
      ids: "channel==MINE",
      startDate: getDateDaysAgo(90),
      endDate: getDateDaysAgo(0),
      metrics: "views,estimatedMinutesWatched",
      dimensions: "deviceType",
      sort: "-views",
    }),
    youtubeAnalytics.reports.query({
      ids: "channel==MINE",
      startDate: getDateDaysAgo(90),
      endDate: getDateDaysAgo(0),
      metrics: "viewerPercentage",
      dimensions: "ageGroup,gender",
    }),
  ]);

  return {
    topCountries: { headers: geo.data.columnHeaders, rows: geo.data.rows || [] },
    deviceTypes: { headers: device.data.columnHeaders, rows: device.data.rows || [] },
    ageDemographics: { headers: age.data.columnHeaders, rows: age.data.rows || [] },
  };
}

async function getTrafficSources(auth, days = 30) {
  const youtubeAnalytics = google.youtubeAnalytics({ version: "v2", auth });
  const res = await youtubeAnalytics.reports.query({
    ids: "channel==MINE",
    startDate: getDateDaysAgo(days),
    endDate: getDateDaysAgo(0),
    metrics: "views,estimatedMinutesWatched",
    dimensions: "insightTrafficSourceType",
    sort: "-views",
  });
  return {
    period: `Last ${days} days`,
    columnHeaders: res.data.columnHeaders,
    rows: res.data.rows || [],
  };
}

function getDateDaysAgo(days) {
  const d = new Date();
  d.setDate(d.getDate() - days);
  return d.toISOString().split("T")[0];
}

// ─── MCP Server ───────────────────────────────────────────────────────────────
const server = new Server(
  { name: "youtube-analytics", version: "2.1.0" },
  { capabilities: { tools: {} } }
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    // ── Video Metadata (NEW) ──────────────────────────────────────────────────
    {
      name: "get_video_details",
      description: "Get FULL metadata for any video by ID or URL — title, description, tags, status (public/unlisted/private/draft). Works for your own channel's private, unlisted, and draft videos. Pass either a video ID (e.g. 'dQw4w9WgXcQ') or full YouTube URL.",
      inputSchema: {
        type: "object",
        properties: {
          video_id: { type: "string", description: "YouTube video ID or full URL (e.g. youtu.be/abc123 or youtube.com/watch?v=abc123)" },
        },
        required: ["video_id"],
      },
    },
    {
      name: "search_my_videos",
      description: "Search your own channel's videos by title keyword. Returns full metadata including unlisted videos. Useful for finding a video before doing SEO work.",
      inputSchema: {
        type: "object",
        properties: {
          query: { type: "string", description: "Search term to find in your video titles" },
          maxResults: { type: "number", description: "Max results to return (default 10)" },
        },
        required: ["query"],
      },
    },
    {
      name: "update_video_seo",
      description: "Update a video's title, description, and/or tags directly on YouTube. Works for public, unlisted, and private videos. Provide only the fields you want to change. IMPORTANT: Built-in YouTube policy guardrails are HARD ENFORCED — updates will be blocked (not warned) if they violate YouTube's rules. TITLE rules: max 100 chars, no ALL CAPS (>80% uppercase), max 4 !?, max 3 emojis, no repetitive characters, no known misleading clickbait patterns. DESCRIPTION rules: max 5000 chars, no keyword stuffing (same word 8+ times), max 15 URLs. TAGS rules: each tag max 30 chars, total tags max 500 chars combined, max 30 tags. These blocks cannot be bypassed.",
      inputSchema: {
        type: "object",
        properties: {
          video_id: { type: "string", description: "YouTube video ID to update" },
          title: { type: "string", description: "New title (leave empty to keep current)" },
          description: { type: "string", description: "New description (leave empty to keep current)" },
          tags: {
            type: "array",
            items: { type: "string" },
            description: "New tags array (leave empty to keep current)",
          },
        },
        required: ["video_id"],
      },
    },
    // ── Analytics ────────────────────────────────────────────────────────────
    {
      name: "get_channel_overview",
      description: "Get your YouTube channel's overall statistics: subscribers, total views, video count, etc.",
      inputSchema: { type: "object", properties: {} },
    },
    {
      name: "get_all_videos",
      description: "Get a list of your videos with their stats (views, likes, comments, tags, privacy status). Can be ordered by date or viewCount.",
      inputSchema: {
        type: "object",
        properties: {
          maxResults: { type: "number", description: "Number of videos to fetch (default 50, max 50)" },
          order: { type: "string", enum: ["date", "viewCount", "rating"], description: "Sort order" },
        },
      },
    },
    {
      name: "get_analytics_over_time",
      description: "Get day-by-day analytics for your channel including views, watch time, subscribers gained/lost.",
      inputSchema: {
        type: "object",
        properties: {
          startDate: { type: "string", description: "Start date YYYY-MM-DD (default: 30 days ago)" },
          endDate: { type: "string", description: "End date YYYY-MM-DD (default: today)" },
        },
      },
    },
    {
      name: "get_top_videos_analytics",
      description: "Get your top performing videos with detailed analytics for a given period.",
      inputSchema: {
        type: "object",
        properties: {
          days: { type: "number", description: "Number of past days to analyze (default: 28)" },
        },
      },
    },
    {
      name: "get_audience_demographics",
      description: "Get audience breakdown by country, device type, and age/gender demographics.",
      inputSchema: { type: "object", properties: {} },
    },
    {
      name: "get_traffic_sources",
      description: "See where viewers are coming from: search, suggested, browse features, external, etc.",
      inputSchema: {
        type: "object",
        properties: {
          days: { type: "number", description: "Number of past days (default: 30)" },
        },
      },
    },
    {
      name: "analyze_and_suggest_topics",
      description: "Analyze your channel data and get AI-powered video topic suggestions based on your best performing content.",
      inputSchema: { type: "object", properties: {} },
    },
  ],
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const auth = await authorize();
  const { name, arguments: args } = request.params;

  try {
    let result;
    switch (name) {
      // ── Video Metadata ──────────────────────────────────────────────────────
      case "get_video_details":
        result = await getVideoDetails(auth, args.video_id);
        break;
      case "search_my_videos":
        result = await searchMyVideos(auth, args.query, args?.maxResults || 10);
        break;
      case "update_video_seo":
        result = await updateVideoSEO(auth, args.video_id, {
          title: args?.title,
          description: args?.description,
          tags: args?.tags,
        });
        break;
      // ── Analytics ───────────────────────────────────────────────────────────
      case "get_channel_overview":
        result = await getChannelStats(auth);
        break;
      case "get_all_videos":
        result = await getVideos(auth, args?.maxResults || 50, args?.order || "date");
        break;
      case "get_analytics_over_time":
        result = await getAnalytics(auth, args?.startDate, args?.endDate);
        break;
      case "get_top_videos_analytics":
        result = await getTopVideos(auth, args?.days || 28);
        break;
      case "get_audience_demographics":
        result = await getAudienceData(auth);
        break;
      case "get_traffic_sources":
        result = await getTrafficSources(auth, args?.days || 30);
        break;
      case "analyze_and_suggest_topics": {
        const [channel, videos, analytics] = await Promise.all([
          getChannelStats(auth),
          getVideos(auth, 50, "viewCount"),
          getTopVideos(auth, 90),
        ]);
        result = {
          channel_summary: channel,
          top_videos_by_views: videos.slice(0, 10),
          analytics_top_performers: analytics,
          analysis_note: "Use this data with Claude to identify patterns in your best videos and generate new topic ideas.",
        };
        break;
      }
      default:
        throw new Error(`Unknown tool: ${name}`);
    }

    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
    };
  } catch (error) {
    return {
      content: [{ type: "text", text: `Error: ${error.message}` }],
      isError: true,
    };
  }
});

// ─── Start ────────────────────────────────────────────────────────────────────
const transport = new StdioServerTransport();
await server.connect(transport);
console.error("YouTube MCP Server v2.0 running — analytics + video metadata ready...");
