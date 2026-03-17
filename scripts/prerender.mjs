/**
 * Post-build prerendering script.
 * Renders the built SPA with Puppeteer and saves the full HTML
 * so search engines can index the content without executing JS.
 *
 * Usage: node scripts/prerender.mjs
 * Run after `vite build`.
 */
import { createServer } from 'http';
import { readFileSync, writeFileSync } from 'fs';
import { resolve, join } from 'path';
import puppeteer from 'puppeteer';

const DIST = resolve('dist');
const PORT = 4173;

// Simple static file server for the dist folder
function serve() {
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.png': 'image/png',
    '.svg': 'image/svg+xml',
    '.json': 'application/json',
    '.ico': 'image/x-icon',
    '.woff2': 'font/woff2',
  };

  return new Promise((resolvePromise) => {
    const server = createServer((req, res) => {
      let filePath = join(DIST, req.url === '/' ? '/index.html' : req.url);
      try {
        const content = readFileSync(filePath);
        const ext = filePath.slice(filePath.lastIndexOf('.'));
        res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
        res.end(content);
      } catch {
        // SPA fallback
        const html = readFileSync(join(DIST, 'index.html'));
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(html);
      }
    });
    server.listen(PORT, () => resolvePromise(server));
  });
}

async function prerender() {
  console.log('Starting prerender...');
  const server = await serve();

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });

  await page.goto(`http://localhost:${PORT}/`, { waitUntil: 'networkidle0', timeout: 30000 });

  // Wait for React to render
  await page.waitForSelector('#hero', { timeout: 10000 });

  // Get the full rendered HTML
  const html = await page.content();

  // Write back to dist/index.html
  writeFileSync(join(DIST, 'index.html'), html);

  await browser.close();
  server.close();

  console.log('Prerender complete: dist/index.html now contains server-rendered HTML');
}

prerender().catch((err) => {
  console.warn('Prerender skipped (Chrome not available):', err.message);
  console.warn('The SPA will still work, but without pre-rendered HTML for SEO.');
  process.exit(0);
});
