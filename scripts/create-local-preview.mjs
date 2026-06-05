import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const root = dirname(dirname(__filename));
const dist = join(root, 'dist');
const htmlPath = join(dist, 'index.html');

let html = readFileSync(htmlPath, 'utf8');

const scriptMatch = html.match(/<script type="module" crossorigin src="\.\/(assets\/[^"]+\.js)"><\/script>/);
const styleMatch = html.match(/<link rel="stylesheet" crossorigin href="\.\/(assets\/[^"]+\.css)">/);

if (!scriptMatch || !styleMatch) {
  throw new Error('Could not find Vite script or stylesheet tags in dist/index.html.');
}

const js = readFileSync(join(dist, scriptMatch[1]), 'utf8')
  .replace(/(["'])\.\/([^/"']+\.(?:avif|gif|jpe?g|mp4|png|svg|webp))\1/g, '$1./assets/$2$1')
  .replace(/new URL\((["'])([^/"']+\.(?:avif|gif|jpe?g|mp4|png|svg|webp))\1,\s*import\.meta\.url\)/g, 'new URL($1./assets/$2$1, import.meta.url)')
  .replaceAll('</script>', '<\\/script>');
const css = readFileSync(join(dist, styleMatch[1]), 'utf8').replaceAll('</style>', '<\\/style>');
const runtimeProbe = `
try {
  document.documentElement.dataset.localPreviewMounted = 'true';
} catch (_) {}
`;

html = html
  .replace(styleMatch[0], () => `<style>\n${css}\n</style>`)
  .replace(scriptMatch[0], '')
  .replace('</body>', () => `  <script type="module">\n${js}\n${runtimeProbe}\n  </script>\n</body>`);

writeFileSync(htmlPath, html, 'utf8');
writeFileSync(join(dist, 'local-preview.html'), html, 'utf8');
