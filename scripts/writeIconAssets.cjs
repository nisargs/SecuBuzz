const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const icon48 = fs.readFileSync(path.join(rootDir, 'generated_icon_48.png')).toString('base64');
const icon32 = fs.readFileSync(path.join(rootDir, 'generated_icon_32.png')).toString('base64');
const apple = fs.readFileSync(path.join(rootDir, 'generated_apple_touch.png')).toString('base64');
const appIcon = fs.readFileSync(path.join(rootDir, 'generated_icon_256.png')).toString('base64');

const ts = `// Auto-generated SecuBuzz brand icon assets
export const FAVICON_48_BASE64 = '${icon48}';
export const FAVICON_32_BASE64 = '${icon32}';
export const APPLE_TOUCH_BASE64 = '${apple}';
export const APP_ICON_BASE64 = '${appIcon}';
`;

fs.writeFileSync(path.join(rootDir, 'worker', 'src', 'iconAssets.ts'), ts);
console.log('Successfully written worker/src/iconAssets.ts, total size:', ts.length);
