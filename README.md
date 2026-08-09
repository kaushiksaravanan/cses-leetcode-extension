# CSES Code Editor

A free Chrome extension that adds a clean, distraction-free code editor to every [CSES](https://cses.fi/problemset/) problem page. Write your solution, press **Submit** (or `Ctrl+Enter`), and get instant verdicts — no file uploads, no tab switching.

> **Independent student project — built for personal learning and education.** Not affiliated with, or endorsed by, CSES, the University of Helsinki, LeetCode, or Google. Distributed free of charge. No ads, no tracking, no data collection.

## Features

- **Editor in the sidebar** — code while you read the problem; the problem list and submission history step aside
- **One-click submit** with instant verdicts: ACCEPTED, WRONG ANSWER, COMPILE ERROR, TIME LIMIT, RUNTIME ERROR, and more (shows only the aggregate test count)
- **Keyboard-first**: `Ctrl+Enter` / `Cmd+Enter` submits, `Tab` inserts 4 spaces
- **Draft autosave**: code is saved locally per problem and restored after a refresh; drafts clear when a solution is ACCEPTED
- **Language memory**: C++, C, Java, Python 3, Node.js — your last choice is remembered
- **Plain-text editor**: no syntax highlighting, no clutter, like a real contest environment
- **Progress overview**: a clean solved/total tracker on the problem set page

## Privacy

- **Zero data collection.** No analytics, no trackers, no third-party servers.
- Your code goes only to `cses.fi` — exactly where it goes when you submit through the site's own form (same `send.php` endpoint, your own session).
- Drafts live only in your browser's `localStorage`, on your device.
- Permissions: **only** "Read and change your data on cses.fi". No `cookies`, no `storage`, no web-accessible resources.

## Install (development / unpacked)

1. Download or clone this repo
2. Open `chrome://extensions`
3. Enable **Developer mode** (top-right)
4. Click **Load unpacked** → select the `cses-leetcode-extension/` folder containing `manifest.json`
5. Go to [cses.fi/problemset/](https://cses.fi/problemset/) and open any problem — the editor appears in the sidebar

To build the ZIP for Chrome Web Store submission: zip `manifest.json`, `content.js`, `styles.css`, `popup.html`, `popup.js`, and `assets/`. (`cses-leetcode-extension.zip` in the repo root is a ready-built copy.)

## Website

The `website/` folder is the landing page + privacy policy, built for static hosting (deployed on Vercel):

- Landing page: [cses-leetcode-extension.vercel.app](https://cses-leetcode-extension.vercel.app)
- Privacy policy: [cses-leetcode-extension.vercel.app/privacy](https://cses-leetcode-extension.vercel.app/privacy)

## License

This project is provided free for **personal learning and educational use**. See the [privacy policy](website/privacy.html) for the full non-affiliation and data-handling statement.