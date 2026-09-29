const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const docsDir = path.join(rootDir, 'docs');

const files = fs.readdirSync(docsDir).filter(f => f.endsWith('.html'));
let count = 0;

for (const file of files) {
  const filePath = path.join(docsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  if (content.includes('<div class="brand-logo">S</div>')) {
    content = content.replace(
      /<div class="brand-logo">S<\/div>/g,
      '<img src="/icon.png?v=2" alt="SecuBuzz Logo" class="brand-logo" width="28" height="28" />'
    );
    modified = true;
  }

  // Update .brand-logo CSS rule
  const oldCssPattern = /\.brand-logo\s*\{[^}]+\}/g;
  if (oldCssPattern.test(content)) {
    content = content.replace(
      oldCssPattern,
      '.brand-logo {\n    width: 28px;\n    height: 28px;\n    object-fit: contain;\n    display: block;\n    flex-shrink: 0;\n  }'
    );
    modified = true;
  }

  // Update favicon links to ?v=2
  if (content.includes('href="/favicon.png"')) {
    content = content.replace(/href="\/favicon\.png"/g, 'href="/favicon.png?v=2"');
    modified = true;
  }
  if (content.includes('href="/favicon.ico"')) {
    content = content.replace(/href="\/favicon\.ico"/g, 'href="/favicon.ico?v=2"');
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    count++;
    console.log('Updated:', file);
  }
}

console.log('Total updated HTML files in docs/:', count);
