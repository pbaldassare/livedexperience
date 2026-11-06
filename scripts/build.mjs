// Build per l'hosting statico (Cloudflare Pages): rigenera le pagine e copia solo i file pubblici in dist/.
import { cpSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');

await import('./pages.mjs');

// dist/ viene sovrascritta (su Cloudflare parte sempre vuota).
mkdirSync(DIST, { recursive: true });
for (const entry of ['index.html', 'privacy.html', 'blog', 'faq', 'assets', 'sitemap.xml', 'robots.txt']) {
  cpSync(join(ROOT, entry), join(DIST, entry), { recursive: true });
}
console.log('dist/ pronto');
