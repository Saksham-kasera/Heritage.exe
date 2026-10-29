// ==========================================================================
// Safar Saarthi (सफ़र सारथी) — Backend Preview Server (backend/server.js)
// Pure Node.js zero-dependency HTTP server for the Safar Saarthi frontend.
// ==========================================================================

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const FRONTEND_DIR = path.resolve(__dirname, '..', 'frontend');

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2'
};

const server = http.createServer((req, res) => {
  // CORS & caching headers for smooth dev preview
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Cache-Control', 'no-cache');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const urlPath = decodeURI(req.url.split('?')[0]);

  // Backend API Endpoints
  if (urlPath === '/api/health') {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=UTF-8' });
    res.end(JSON.stringify({
      status: 'ok',
      service: 'Safar Saarthi Heritage Companion',
      version: '2.0.0',
      monuments_supported: 10,
      timestamp: new Date().toISOString()
    }, null, 2));
    return;
  }

  if (urlPath === '/api/info') {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=UTF-8' });
    res.end(JSON.stringify({
      name: 'Safar Saarthi (सफ़र सारथी)',
      subtitle: 'Heritage Companion & Real-Time Dispersal Engine',
      architecture: 'Clean Decoupled Architecture (Frontend / Backend)',
      stack: {
        frontend: 'HTML5, Tailwind CSS, Native Vanilla JS, Web Speech API',
        backend: 'Node.js Pure HTTP Micro-Server (Zero Runtime Dependencies)'
      },
      endpoints: ['/', '/api/health', '/api/info']
    }, null, 2));
    return;
  }

  // Frontend Static File Serving
  let relativePath = urlPath === '/' ? '/index.html' : urlPath;
  const filePath = path.join(FRONTEND_DIR, relativePath);

  // Prevent directory traversal attacks
  if (!filePath.startsWith(FRONTEND_DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('403 Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // 404 fallback
      res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
      res.end(`<!DOCTYPE html><html><head><title>404 Not Found</title></head><body style="font-family:sans-serif;text-align:center;padding:50px;"><h2>404 — Resource Not Found</h2><p>Could not locate <code>${urlPath}</code> in frontend.</p><p><a href="/">Return to Safar Saarthi Home</a></p></body></html>`);
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`\n======================================================`);
  console.log(`  Safar Saarthi (सफ़र सारथी) — Heritage Companion`);
  console.log(`  Frontend: ${FRONTEND_DIR}`);
  console.log(`  Local URL: http://localhost:${PORT}/`);
  console.log(`  API Health: http://localhost:${PORT}/api/health`);
  console.log(`======================================================\n`);
});

module.exports = server;
