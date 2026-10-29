// =============================================================================
// config.example.js — TEMPLATE · Safe to commit · No real keys here
//
// To enable live weather in Mausam-X Radar:
//   1. Copy this file → rename copy to config.js
//   2. Fill in your API key and provider
//   3. config.js is gitignored — your key stays private
//
// Supported Providers:
//   "weatherstack"    →  https://weatherstack.com/       (free tier: 100 calls/month)
//   "openweathermap"  →  https://openweathermap.org/api  (free tier: 1000 calls/day)
//   "weatherapi"      →  https://www.weatherapi.com/     (free tier: 1M calls/month)
//   "openmeteo"       →  No key needed, always free (default fallback)
// =============================================================================

window.APP_CONFIG = {
  weatherApiKey: "",           // ← Replace with your real key in config.js (not here)
  weatherProvider: "openmeteo" // ← "weatherstack" | "openweathermap" | "weatherapi" | "openmeteo"
};
