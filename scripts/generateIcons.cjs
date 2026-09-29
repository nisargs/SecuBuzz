const fs = require('fs');
const path = require('path');
const { PNG } = require('pngjs');

// 1. Load assets/icon.png
const rootDir = path.resolve(__dirname, '..');
const srcBuf = fs.readFileSync(path.join(rootDir, 'assets', 'icon.png'));
const src = PNG.sync.read(srcBuf);

// 2. Find bounding box of non-transparent pixels
let minX = src.width, maxX = 0, minY = src.height, maxY = 0;
for (let y = 0; y < src.height; y++) {
  for (let x = 0; x < src.width; x++) {
    const idx = (src.width * y + x) << 2;
    if (src.data[idx + 3] > 15) {
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  }
}

const shieldW = maxX - minX + 1;
const shieldH = maxY - minY + 1;
console.log(`Original shield bounding box: ${shieldW}x${shieldH} at (${minX},${minY})`);

/**
 * Resamples the shield into a target canvas of size `targetSize x targetSize`.
 * Uses area-averaging (supersampling) with premultiplied alpha for pristine downsampling.
 */
function createResampledIcon(targetSize, paddingRatio = 0.06, bgColor = null) {
  const out = new PNG({ width: targetSize, height: targetSize });
  
  if (bgColor) {
    for (let i = 0; i < out.data.length; i += 4) {
      out.data[i] = bgColor[0];
      out.data[i + 1] = bgColor[1];
      out.data[i + 2] = bgColor[2];
      out.data[i + 3] = bgColor[3];
    }
  } else {
    out.data.fill(0);
  }

  const padding = Math.round(targetSize * paddingRatio);
  const maxInner = targetSize - padding * 2;
  const scale = Math.min(maxInner / shieldW, maxInner / shieldH);
  const dstW = shieldW * scale;
  const dstH = shieldH * scale;
  const offsetX = (targetSize - dstW) / 2;
  const offsetY = (targetSize - dstH) / 2;

  // 4x4 supersampling per pixel
  const samples = 4;
  const step = 1 / samples;
  const sampleWeight = 1 / (samples * samples);

  for (let y = 0; y < targetSize; y++) {
    for (let x = 0; x < targetSize; x++) {
      const outIdx = (targetSize * y + x) << 2;
      
      let accR = 0, accG = 0, accB = 0, accA = 0;

      for (let sy = 0; sy < samples; sy++) {
        for (let sx = 0; sx < samples; sx++) {
          const sampleX = x + (sx + 0.5) * step;
          const sampleY = y + (sy + 0.5) * step;

          const srcX = (sampleX - offsetX) / scale + minX;
          const srcY = (sampleY - offsetY) / scale + minY;

          if (srcX >= minX && srcX <= maxX && srcY >= minY && srcY <= maxY) {
            const x0 = Math.floor(srcX);
            const x1 = Math.min(x0 + 1, src.width - 1);
            const y0 = Math.floor(srcY);
            const y1 = Math.min(y0 + 1, src.height - 1);
            const wx = srcX - x0;
            const wy = srcY - y0;

            const idx00 = (src.width * y0 + x0) << 2;
            const idx10 = (src.width * y0 + x1) << 2;
            const idx01 = (src.width * y1 + x0) << 2;
            const idx11 = (src.width * y1 + x1) << 2;

            const a00 = src.data[idx00 + 3];
            const a10 = src.data[idx10 + 3];
            const a01 = src.data[idx01 + 3];
            const a11 = src.data[idx11 + 3];

            const a = (a00 * (1 - wx) + a10 * wx) * (1 - wy) + (a01 * (1 - wx) + a11 * wx) * wy;
            
            if (a > 0) {
              const r = (src.data[idx00] * (1 - wx) + src.data[idx10] * wx) * (1 - wy) + (src.data[idx01] * (1 - wx) + src.data[idx11] * wx) * wy;
              const g = (src.data[idx00 + 1] * (1 - wx) + src.data[idx10 + 1] * wx) * (1 - wy) + (src.data[idx01 + 1] * (1 - wx) + src.data[idx11 + 1] * wx) * wy;
              const b = (src.data[idx00 + 2] * (1 - wx) + src.data[idx10 + 2] * wx) * (1 - wy) + (src.data[idx01 + 2] * (1 - wx) + src.data[idx11 + 2] * wx) * wy;
              
              const nR = r / 255;
              const nG = g / 255;
              const nB = b / 255;
              const nA = a / 255;

              accR += nR * nA * sampleWeight;
              accG += nG * nA * sampleWeight;
              accB += nB * nA * sampleWeight;
              accA += nA * sampleWeight;
            }
          }
        }
      }

      if (accA > 0.001) {
        if (bgColor) {
          const bgR = bgColor[0] / 255;
          const bgG = bgColor[1] / 255;
          const bgB = bgColor[2] / 255;
          const compR = accR + bgR * (1 - accA);
          const compG = accG + bgG * (1 - accA);
          const compB = accB + bgB * (1 - accA);
          out.data[outIdx] = Math.min(255, Math.max(0, Math.round(compR * 255)));
          out.data[outIdx + 1] = Math.min(255, Math.max(0, Math.round(compG * 255)));
          out.data[outIdx + 2] = Math.min(255, Math.max(0, Math.round(compB * 255)));
          out.data[outIdx + 3] = 255;
        } else {
          const compR = accR / accA;
          const compG = accG / accA;
          const compB = accB / accA;
          out.data[outIdx] = Math.min(255, Math.max(0, Math.round(compR * 255)));
          out.data[outIdx + 1] = Math.min(255, Math.max(0, Math.round(compG * 255)));
          out.data[outIdx + 2] = Math.min(255, Math.max(0, Math.round(compB * 255)));
          out.data[outIdx + 3] = Math.min(255, Math.max(0, Math.round(accA * 255)));
        }
      }
    }
  }

  return PNG.sync.write(out);
}

// Generate sizes
console.log('Generating 512x512 icon...');
const icon512 = createResampledIcon(512, 0.05, null);
console.log('Generating 192x192 icon...');
const icon192 = createResampledIcon(192, 0.05, null);
console.log('Generating 48x48 favicon...');
const icon48 = createResampledIcon(48, 0.04, null);
console.log('Generating 32x32 favicon...');
const icon32 = createResampledIcon(32, 0.04, null);
console.log('Generating 180x180 Apple touch icon with #0B0F14 background...');
const appleTouch = createResampledIcon(180, 0.12, [11, 15, 20, 255]);

// Write to files
fs.writeFileSync(path.join(rootDir, 'generated_icon_512.png'), icon512);
fs.writeFileSync(path.join(rootDir, 'generated_icon_192.png'), icon192);
fs.writeFileSync(path.join(rootDir, 'generated_icon_48.png'), icon48);
fs.writeFileSync(path.join(rootDir, 'generated_icon_32.png'), icon32);
fs.writeFileSync(path.join(rootDir, 'generated_apple_touch.png'), appleTouch);

// Also overwrite assets/favicon.png with the new 48x48 SecuBuzz icon!
fs.writeFileSync(path.join(rootDir, 'assets', 'favicon.png'), icon48);
console.log('Updated assets/favicon.png with SecuBuzz icon (48x48)');

// Also write copies to website/public/
fs.writeFileSync(path.join(rootDir, 'website', 'public', 'favicon.png'), icon48);
fs.writeFileSync(path.join(rootDir, 'website', 'public', 'favicon.ico'), icon48);
fs.writeFileSync(path.join(rootDir, 'website', 'public', 'icon.png'), icon512);
fs.writeFileSync(path.join(rootDir, 'website', 'public', 'apple-touch-icon.png'), appleTouch);
console.log('Updated website/public/ assets');
