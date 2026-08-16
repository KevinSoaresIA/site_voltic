import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createCanvas } from '@napi-rs/canvas';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function renderPage(pdfPath, pageNum, scale, outPath) {
  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const doc = await pdfjsLib.getDocument({ data, isEvalSupported: false }).promise;
  const page = await doc.getPage(pageNum);
  const viewport = page.getViewport({ scale });

  const canvas = createCanvas(Math.ceil(viewport.width), Math.ceil(viewport.height));
  const ctx = canvas.getContext('2d');

  await page.render({
    canvasContext: ctx,
    viewport,
  }).promise;

  const buf = canvas.toBuffer('image/png');
  fs.writeFileSync(outPath, buf);
  console.log(`Salvo: ${outPath} (${viewport.width.toFixed(0)}x${viewport.height.toFixed(0)})`);
}

async function main() {
  const pdfPath = path.resolve(__dirname, '..', 'logo_voltic_bombas_v.2.pdf');
  const outDir = path.resolve(__dirname, '..', 'src', 'assets', 'images');
  fs.mkdirSync(outDir, { recursive: true });

  // Page 3 = dark/black version of the wordmark (best for light navbar/footer backgrounds)
  await renderPage(pdfPath, 3, 6, path.join(outDir, 'voltic-logo-dark.png'));
  // Page 1 = gradient blue version
  await renderPage(pdfPath, 1, 6, path.join(outDir, 'voltic-logo.png'));
}

main().catch((e) => {
  console.error('ERRO:', e);
  process.exit(1);
});
