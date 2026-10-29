# Safar Saarthi — Backend Module

This folder contains the lightweight local server and API layer for Safar Saarthi.

## Features
- **Zero External Dependencies:** Runs natively with Node.js built-ins (`http`, `fs`, `path`). No `npm install` required.
- **Frontend Static Serving:** Automatically serves all files from `../frontend` (`index.html`, `style.css`, `app.js`, `data.js`).
- **REST Endpoints:**
  - `GET /` — Serves the main Safar Saarthi web experience
  - `GET /api/health` — System health check & monument count
  - `GET /api/info` — Architectural metadata & stack overview

## Quick Start
```bash
# From this folder
node server.js

# Or with npm
npm start
```
The server will start at `http://localhost:3000/`.

