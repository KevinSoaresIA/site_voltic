import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createCanvas, loadImage } from '@napi-rs/canvas';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function trimAndMakeTransparent(inPath, outPath, { pad = 24 } = {}) {
  const img = await loadImage(inPath);
  const canvas = createCanvas(img.width, img.height);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);
  const { data, width, height } = ctx.getImageData(0, 0, img.width, img.height);

  let minX = width, minY = height, maxX = -1, maxY = -1;
  const isBgWhite = (r, g, b) => r > 245 && g > 245 && b > 245;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      const r = data[i], g = data[i + 1], b = data[i + 2];
      if (!isBgWhite(r, g, b)) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  if (maxX < 0) throw new Error(`Nenhum conteudo nao-branco encontrado em ${inPath}`);

  minX = Math.max(0, minX - pad);
  minY = Math.max(0, minY - pad);
  maxX = Math.min(width - 1, maxX + pad);
  maxY = Math.min(height - 1, maxY + pad);

  const cropW = maxX - minX + 1;
  const cropH = maxY - minY + 1;

  const outCanvas = createCanvas(cropW, cropH);
  const outCtx = outCanvas.getContext('2d');
  outCtx.drawImage(canvas, minX, minY, cropW, cropH, 0, 0, cropW, cropH);

  const outImgData = outCtx.getImageData(0, 0, cropW, cropH);
  const od = outImgData.data;
  for (let p = 0; p < od.length; p += 4) {
    const r = od[p], g = od[p + 1], b = od[p + 2];
    if (isBgWhite(r, g, b)) {
      od[p + 3] = 0;
    }
  }
  outCtx.putImageData(outImgData, 0, 0);

  fs.writeFileSync(outPath, outCanvas.toBuffer('image/png').buffer ? outCanvas.toBuffer('image/png') : outCanvas.toBuffer('image/png'));
  console.log(`Trim: ${outPath} -> ${cropW}x${cropH}`);
}

async function main() {
  const dir = path.resolve(__dirname, '..', 'src', 'assets', 'images');
  await trimAndMakeTransparent(path.join(dir, 'voltic-logo.png'), path.join(dir, 'voltic-logo.png'));
  await trimAndMakeTransparent(path.join(dir, 'voltic-logo-dark.png'), path.join(dir, 'voltic-logo-dark.png'));
}

main().catch((e) => {
  console.error('ERRO:', e);
  process.exit(1);
});
