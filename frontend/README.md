# Safar Saarthi — Frontend Module

This directory contains the complete client-side application for **Safar Saarthi (सफ़र सारथी) — Heritage Companion**.

## Structure
- `index.html` — Main HTML application entry point
- `app.js` — Core application logic:
  - Bilingual voice narration (English & Hindi via Web Speech API)
  - Kids' Mode audio & myth simplification
  - Crowd density radar & dynamic dispersal sister-gem recommendations
  - Mausam-X microclimate radar (Weatherstack, OpenWeatherMap, WeatherAPI, Open-Meteo)
  - Transit shield fair-fare calculator & emergency dials
- `style.css` — Warm editorial Scandinavian minimalist design system
- `data.js` — 10 UNESCO flagship monuments dataset with coordinates, bilingual content, stories, and safety protocols
- `config.example.js` — Template for local API key configuration
- `config.js` — Local API key configuration (**gitignored** for privacy)
- `safarsaarthi-standalone.html` — Single-file all-in-one bundle runnable offline

## How to Run
1. **Direct Browser Execution:** Double-click `index.html` directly in any web browser.
2. **Via Local Server:** Run `node ../backend/server.js` or `npm start` from root / backend.
