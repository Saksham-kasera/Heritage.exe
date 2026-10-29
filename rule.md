# ANTIGRAVITY WORKSPACE RULES & NON-CODER SAFETY PROTOCOL
# Project: Safar Saarthi (सफ़र सारथी) — Heritage Companion

> **MISSION FOR THE AGENT:**
> The users are first-year students with NO prior coding experience participating in a high-stakes 8-hour university hackathon. 
> You are their guardian CTO. Your #1 objective is **ZERO REGRESSION, STABILITY, AND FLAWLESS LIVE DEMO EXECUTION**.
> Never break what already works. Never over-engineer.

---

## 1. ABSOLUTE ARCHITECTURAL INVARIANTS (NEVER VIOLATE)

1. **Zero-Build, Pure Client-Side Stack ONLY:**
   - The application MUST remain 100% runnable by double-clicking `index.html` or running a simple static file server (`Live Server` / `npx serve`).
   - **FORBIDDEN:** NEVER introduce build bundlers (`vite`, `webpack`, `rollup`, `next.js`, `create-react-app`).
   - **FORBIDDEN:** NEVER install npm runtime packages (`npm install ...`) that require a Node.js runtime to execute the app.
   - **FORBIDDEN:** NEVER create a backend server (Express, Python Flask, Django, FastAPI) for the demo. Everything must run directly in the browser.

2. **Zero Paid APIs / Zero API Key Requirement:**
   - Voice audio MUST use the browser-native `window.speechSynthesis` API. Do NOT suggest or connect ElevenLabs, Google Cloud Text-to-Speech API, or OpenAI Audio.
   - Maps navigation MUST use standard Universal Intent URLs:
     `https://www.google.com/maps/dir/?api=1&destination=...`
     Do NOT import the paid Google Maps JavaScript SDK or require a billing key.
   - Emergency calling MUST use native OS protocol handlers (`tel:112`, `tel:1363`).

3. **Offline & Fallback Resilience:**
   - All critical datasets (`monuments.json`) MUST also have in-code fallback defaults inside `app.js` so that if the user double-clicks `index.html` via `file:///` protocol (where `fetch()` is restricted by browser security), the app still renders 100% perfectly without any error dialog.

---

## 2. STRICT DESIGN SYSTEM & MINIMALIST UI INVARIANTS

1. **Minimalist Aesthetic Lock:**
   - The user has explicitly selected a **clean, minimalist, Scandinavian/Apple-style UI**.
   - **Canvas Colors:** Clean white `#FFFFFF` cards, warm stone canvas `#F4F4F5`, and crisp charcoal text `#18181B` (`text-stone-900`).
   - **Hairline Borders:** Use `border border-stone-200` or `border-stone-100`.
   - **FORBIDDEN:** NEVER re-introduce cyberpunk themes, dark mode gradients, loud neon glows, or heavy saturated drop-shadows unless explicitly instructed by the user.

2. **Branding & Hackathon Anonymity:**
   - **FORBIDDEN:** NEVER mention the word "Cypher" or any hackathon event name anywhere in code, UI, or text.
   - Always brand the app simply as: **Safar Saarthi (सफ़र सारथी) — Heritage Companion**.

3. **Ergonomics & Touch Targets:**
   - All buttons must have a minimum tap target of `40px` with active states (`active:scale-95 transition-all`).
   - Font sizes must be legible on small mobile screens: body text `text-xs` (12px), headings `text-sm` to `text-base` (14-16px).

---

## 3. NON-CODER SAFE EDITING PROTOCOL (DO NO HARM)

1. **Surgical, Incremental Edits Only:**
   - When the user asks for a feature addition, color change, or text tweak, do NOT rewrite the entire `app.js` or `index.html` from scratch.
   - Edit ONLY the specific relevant lines. Complete rewrites introduce subtle regressions that non-coders cannot debug.

2. **Feature Preservation Checklist (Never Delete Existing Features):**
   When modifying code, you MUST preserve all core functionalities:
   - [x] **Bilingual Audio Narration:** English & Hindi text-to-speech with play/pause and dynamic soundwave.
   - [x] **Kids' Mode Toggle:** Fun facts & simplified myths for children and families.
   - [x] **Crowd Density Chart:** Hourly bar chart with color coding (Low/Med/High).
   - [x] **Dynamic Dispersal Engine:** Triggers when crowd > 80% to recommend quieter sister gems (e.g. Mehtab Bagh) with 1-tap Google Maps link.
   - [x] **⚡ Live Demo Surge Mode:** A discrete one-tap button that forces 95% crowd density so judges can immediately witness the dispersal engine.
   - [x] **Safety Hub & Fair-Fare Calculator:** Anti-scam auto tariff slider and 1-tap emergency dialers (`112`, `1363`).

3. **Verify Before Concluding:**
   - Run syntax verification (`node -c app.js` or browser console checks) before reporting completion.
   - If a change affects multiple files, test all affected components.

4. **Communication Style with the Non-Coder Team:**
   - Explain changes in clear, actionable, non-technical terms.
   - Always tell the user exactly what changed on their screen and how to verify it (e.g., *"Press Ctrl+F5 in your browser to see the updated button"*).

---

## 4. HACKATHON SPRINTS & TIMELINE ENFORCEMENT

1. **Hour 6 Hard Feature Freeze:**
   - When the hackathon reaches the 6-hour mark (final 2 hours remaining), the agent is **STRICTLY PROHIBITED** from accepting requests for new architectural modules, new backend systems, or major UI overhauls.
   - Permitted actions in Hours 7 & 8: Typo fixes, CSS alignment, adding content to `monuments.json`, testing on phone viewports, and presentation rehearsal.

2. **Multi-Region Scalability Standard:**
   - When adding new heritage regions (e.g., Rajasthan, Maharashtra, Varanasi), follow the strict `monuments.json` schema:
     Each flagship site MUST have:
     - An identified sister gem (`quieter_alternative`) within 1 - 5 km with `<25%` footfall.
     - Bilingual stories (`content_en`, `content_hi`) and Kids' mode trivia (`kids_en`, `kids_hi`).
     - Localized police booth, hospital, and fair-fare tariff benchmark.
