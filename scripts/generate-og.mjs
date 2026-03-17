import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputPath = join(__dirname, '..', 'public', 'og-image.png');

// Create 1200x630 OG image with Vericount branding
const svg = `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1a4a3f"/>
      <stop offset="50%" stop-color="#27685b"/>
      <stop offset="100%" stop-color="#1f5548"/>
    </linearGradient>
    <radialGradient id="orb1" cx="85%" cy="15%" r="35%">
      <stop offset="0%" stop-color="#e4677c" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#e4677c" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="orb2" cx="15%" cy="85%" r="40%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.04"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#orb1)"/>
  <rect width="1200" height="630" fill="url(#orb2)"/>

  <!-- Vericount icon (simplified shield/check mark) -->
  <g transform="translate(560, 140) scale(0.8)" fill="white" opacity="0.95">
    <path d="M50 0 C20 0 0 25 0 55 C0 85 20 105 50 105 C80 105 100 85 100 55 C100 25 80 0 50 0 Z M50 12 C74 12 88 32 88 55 C88 78 74 93 50 93 C26 93 12 78 12 55 C12 32 26 12 50 12 Z"/>
    <path d="M30 48 L48 66 L72 38 L65 38 L48 57 L37 48 Z"/>
  </g>

  <!-- Title -->
  <text x="600" y="340" text-anchor="middle" fill="white" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="52" font-weight="700" letter-spacing="-1">Vericount Designsystem</text>

  <!-- Subtitle -->
  <text x="600" y="390" text-anchor="middle" fill="white" fill-opacity="0.65" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="22" font-weight="400">Visuell identitet, komponenter och riktlinjer</text>

  <!-- URL badge -->
  <rect x="478" y="430" width="244" height="36" rx="18" fill="none" stroke="white" stroke-opacity="0.2" stroke-width="1"/>
  <text x="600" y="454" text-anchor="middle" fill="white" fill-opacity="0.45" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="13" font-weight="500" letter-spacing="0.5">DESIGN.VERICOUNT.SE</text>
</svg>`;

await sharp(Buffer.from(svg))
  .png()
  .toFile(outputPath);

console.log(`OG image generated: ${outputPath} (1200x630)`);
