# Product Requirements Document (PRD)
# Safar Saarthi (सफ़र सारथी) — Next-Gen Cultural Heritage Companion

**Document Version:** 1.0.0  
**Target Event:** 8-Hour University Hackathon  
**Theme:** TravelTech, Cultural Heritage Preservation & Local Exploration  
**Track:** Heritage De-densification & Tourist Safety  
**Team:** Heritage.exe  

---

## 1. Executive Summary & Vision

### 1.1 The Problem
Over 80 million domestic and international tourists visit India's heritage monuments annually. However, visitors face three chronic issues:
1. **Overtourism & Severe Gate Congestion:** Flagship UNESCO monuments (e.g., Taj Mahal, Qutub Minar, Hawa Mahal) experience dangerous bottlenecks, 45+ minute queues, and accelerated stone erosion, while equally significant heritage sites 1–3 km away remain empty.
2. **Dense Signage & Language Fatigue:** Informational plaques are verbose, academic, and non-engaging, failing domestic regional visitors, elderly listeners, and children.
3. **Transit Scams & Safety Insecurity:** Tourists frequently encounter extortionate auto/cab fares (300%–500% over standard tariffs) and lack immediate access to verified tourist police stations or emergency medical assistance.

### 1.2 The Solution: Safar Saarthi
Safar Saarthi is an **edge-native, mobile-first web companion** designed to balance heritage footfall, bring history alive through bilingual voice storytelling and animated trivia decks, and safeguard visitors through verified transit tariffs and 1-tap emergency dispatchers.

---

## 2. Target Personas

| Persona | Core Need | How Safar Saarthi Solves It |
| :--- | :--- | :--- |
| **P1: Families & Children** | Needs simple, engaging history without overwhelming text. | **Kids' Mode**: Transforms dense historical dates into interactive card decks with fun trivia and myth-busting facts. |
| **P2: Domestic / Hindi-Speaking Travelers** | Wants rich storytelling in native language without downloading 100MB apps. | **Bilingual Toggle (EN/HI)**: On-device text-to-speech with natural pronunciation at zero data cost. |
| **P3: Crowd-Averse Explorers & Photographers** | Wants to avoid 60-minute queues and capture tranquil views. | **Crowd Dispersal Engine**: Detects surges >80% and recommends tranquil satellite gems (e.g., Mehtab Bagh instead of Taj Mahal) with 1-tap route. |
| **P4: Solo / Foreign Tourists** | Seeks protection from transport scams and emergency security. | **Fair-Fare Benchmark & SOS**: RTO-regulated auto tariffs and instant `tel:112` and `tel:1363` calling. |

---

## 3. Core Feature Specifications

### Feature 1: Interactive Animated Fact Card Deck
* **Objective:** Replace dense museum plaques with tactile, bite-sized cards.
* **User Flow:**
  1. User selects a monument or clicks on a heritage thumbnail.
  2. The interface renders an interactive deck of 2–4 bite-sized story and fact cards.
  3. Each card features a smooth transition/flip animation, category tag (`Architecture`, `Engineering`, `Royal Legend`), bold title, and concise 3-sentence lore.
  4. Includes a dedicated **Kids' Mode Toggle** (`✨ Kids`) that instantaneously swaps adult history into engaging fairy-tale-style fun facts.
* **Acceptance Criteria:**
  - Card transitions must be fluid (<200ms) with zero layout shifting.
  - Active story card displays an animated soundwave bar visualizer during narration.

---

### Feature 2: Browser Geolocation & Proximity-Aware Dispersal
* **Objective:** Automatically identify where the tourist is and suggest the closest calm monument.
* **User Flow:**
  1. App requests browser location access via `navigator.geolocation.getCurrentPosition()`.
  2. If granted: Compares tourist's coordinates against pre-calibrated monument coordinates using the Haversine distance formula.
  3. Highlights the nearest monument and calculates real-time distance.
  4. If user is at a crowded monument (>80% capacity), the system triggers an automatic banner: *"You are near [Monument]. It is at [92%] capacity. Divert to [Sister Gem] only [X km] away with 0 min wait."*
  5. If location permission is denied: Seamlessly falls back to manual horizontal chip selection without breaking UI.
* **Acceptance Criteria:**
  - Zero crashes on permission denial or insecure context.
  - 1-tap deep link to Google Maps Universal Intent (`https://www.google.com/maps/dir/?api=1&destination=...`).

---

### Feature 3: Crowd Intelligence & Dynamic De-densification Engine
* **Objective:** Spatially redistribute tourist footfall away from congested flagship gates to preserve fragile monuments (aligned with UNESCO World Heritage Sustainable Tourism recommendations).
* **User Flow:**
  1. Displays an hourly footfall distribution chart (8 AM to 6 PM) with color coding (Low = Emerald, Med = Amber, Peak = Rose).
  2. Identifies calm visiting windows (e.g., 8–9 AM).
  3. **The Dispersal Trigger:** When current capacity exceeds 80%:
     - System displays the **Quieter Alternative Match** card.
     - Displays sister gem metadata: distance, footfall (e.g. 15%), queue time (0 mins), and key advantage.
     - Provides a direct 1-tap button: *"1-Tap Google Maps Route"*.
  4. **⚡ Presentation Demo Surge Mode:** A discrete trigger button allowing team presenters to instantly simulate 96% peak footfall during the 3-minute hackathon pitch.

---

### Feature 4: Edge Audio Storytelling Engine
* **Objective:** Hands-free, accessible heritage narration without cloud API subscription fees or latency.
* **User Flow:**
  1. User taps *"Listen / सुनें"* on any story card or hero audio capsule.
  2. Activates the browser-native `window.speechSynthesis` API.
  3. Automatically selects Indian English (`en-IN`) or Hindi (`hi-IN`) voices based on language state.
  4. Speech pitch slightly elevates (1.1x) when Kids' Mode is active to sound friendlier.
  5. UI displays dynamic soundwave equalizer bars and active play/pause/stop toggles.
* **Acceptance Criteria:**
  - 100% client-side; zero external API requests.
  - Tapping a new story automatically stops the previously playing story.

---

### Feature 5: Transit & Safety Dispatcher (Anti-Scam Shield)
* **Objective:** Protect tourists from transportation fraud and provide instant emergency coordination.
* **User Flow:**
  1. **Fair-Fare Auto Rickshaw Benchmark:**
     - Interactive distance slider (1 km to 25 km).
     - RTO-regulated pricing algorithm: Base fare ₹30 (first 1.5 km) + ₹11/km thereafter.
     - Optional Night Rate toggle (+25% surcharge between 11 PM and 5 AM).
     - Displays realistic fair-fare range (e.g. ₹75 - ₹90) to arm tourists in auto negotiations.
  2. **Emergency Hub:**
     - Direct 1-tap dialer for National Emergency (`tel:112`).
     - Direct 1-tap dialer for 24x7 Ministry of Tourism Helpline (`tel:1363`).
     - Localized tourist police station name and emergency hospital address for every selected monument.
  3. **Visitor Protocol Checklist:**
     - Monument dress code, shoe covers, photography rules, and ticket timings.

---

## 4. Technical Architecture & Constraints

```
┌────────────────────────────────────────────────────────────────────────┐
│                   SAFAR SAARTHI ZERO-COST EDGE STACK                   │
├───────────────────┬────────────────────────────────────────────────────┤
│ Client Core       │ HTML5, Modern Vanilla JS (ES6+), Tailwind CSS CDN  │
├───────────────────┼────────────────────────────────────────────────────┤
│ Audio Synthesis   │ Browser-Native Web Speech Synthesis API (`hi`/`en`)│
├───────────────────┼────────────────────────────────────────────────────┤
│ Geo & Routing     │ Geolocation API + Google Maps Universal Intent URL │
├───────────────────┼────────────────────────────────────────────────────┤
│ Data Architecture │ Structured Hierarchical JSON + In-Code Fallbacks   │
├───────────────────┼────────────────────────────────────────────────────┤
│ Deployment Target │ Static Hosting (Vercel / Netlify / GitHub Pages)   │
└───────────────────┴────────────────────────────────────────────────────┘
```

### 4.1 Strict Architectural Guardrails
1. **No Backend Dependency:** No Node.js / Python servers required at runtime.
2. **No Paid API Keys:** No Google Maps JavaScript SDK keys, no cloud voice keys.
3. **No Build Bundlers:** No Vite / Webpack / Next.js; must run directly by double-clicking `index.html`.
4. **Offline Resilience:** All monuments bundled in `app.js` as fallback so `file:///` executions never fail.

---

## 5. UI/UX Design System (Minimalist Aesthetic)

* **Design Philosophy:** Understated, functional Scandinavian/Apple-style minimalism. Zero loud cyberpunk gradients, zero dark mode clutter.
* **Canvas Colors:**
  - Background Canvas: Warm Stone `#F4F4F5`
  - Cards: Crisp White `#FFFFFF` with hairline borders `#E4E4E7` (`border-stone-200`)
  - Typography: Deep Charcoal `#18181B` (`text-stone-900`)
  - Secondary Text: Subdued `#71717A` (`text-stone-500`)
  - Status Indicators: Emerald (Low Crowd), Amber (Medium), Rose (Peak Crowd)
* **Mobile Frame:** Responsive mobile wrapper (max 410px on desktop with subtle shadow; 100% viewport width on mobile phones).
* **Navigation:** Clean 3-tab bottom dock (📖 Stories, 📊 Crowd, 🛡️ Safety).

---

## 6. MVP Scope (8 Hours) vs. Future Roadmap

### In Scope for 8-Hour Hackathon MVP
- [x] Responsive minimalist mobile interface with bottom navigation dock.
- [x] 5 flagship heritage sites across 3 states (UP, Delhi, Rajasthan).
- [x] Bilingual storytelling (EN/HI) with Web Speech API audio synthesis.
- [x] Kids' Mode toggle with adapted trivia on every card.
- [x] Hourly crowd footfall distribution chart.
- [x] Dynamic crowd dispersal engine recommending quieter satellite gems when capacity >80%.
- [x] 1-tap Google Maps directions to alternative gems.
- [x] `⚡ Demo Surge` trigger for presentation simulation.
- [x] Fair-Fare Auto Rickshaw tariff calculator with night rate allowance.
- [x] Direct native OS dialers for ERSS `112` and Tourist Helpline `1363`.

### Future Roadmap (Post-Hackathon)
- **Phase 2 (1–3 Months):** Real-time integration with Archaeological Survey of India (ASI) live e-ticketing turnstile APIs.
- **Phase 3 (3–6 Months):** On-site QR Code standees at monument gates for instant app launch without download.
- **Phase 4 (6–12 Months):** Multilingual expansion to 10 Indian regional languages (Tamil, Bengali, Marathi, Telugu) via Bhashini API.

---

## 7. Hackathon Evaluation Rubric Alignment

| Judging Criteria | Weight | How Safar Saarthi Satisfies It |
| :--- | :---: | :--- |
| **Innovation & Problem Track** | 25% | Solves overtourism and heritage degradation through intelligent de-densification rather than just passive audio guides. |
| **Working Prototype Quality** | 35% | 100% functional, responsive, zero-error mobile web app with live audio and live crowd triggers. |
| **Feasibility & Architecture** | 20% | Zero cloud cost, zero API bills, zero server latency; scales instantly to every monument in India. |
| **Presentation & UI Polish** | 20% | Pristine minimalist design, working live demo on judges' phones, and timed 3-minute pitch script. |
