// Genera blog, articoli, FAQ, sitemap e robots a partire da content/*.mjs.
// Uso: node scripts/pages.mjs   (gira anche dentro `npm run build`)
// Nessuna dipendenza esterna. I file generati sono committati, così il sito funziona anche senza build.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { articles, categories } from '../content/articles.mjs';
import { faqGroups } from '../content/faq.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
// TODO: sostituire con il dominio definitivo (es. https://www.livedexperiences.it)
const SITE_URL = (process.env.SITE_URL || 'https://livedexperience.pages.dev').replace(/\/$/, '');
const PUBLISHED = '2026-11-06';
const PHONE = { href: 'tel:+390000000000', label: '+39 000 000 0000' }; // TODO: telefono reale

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const strip = (html) => html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
const itDate = (iso) => new Date(iso + 'T12:00:00').toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' });
const bySlug = Object.fromEntries(articles.map((a) => [a.slug, a]));
const img = (key, w = 800) => `/assets/img/${key}-${w}.webp`;
const imgDims = { ascolto: [800, 533], cerchio: [800, 472], insieme: [800, 533], caffe: [800, 509], cammino: [800, 449], crepa: [800, 450], garda: [800, 600], kintsugi: [800, 533], mani: [800, 1200] };

const indexHtml = readFileSync(join(ROOT, 'index.html'), 'utf8');
const sprite = indexHtml.match(/<svg width="0" height="0"[\s\S]*?<\/svg>\n/)[0];

/* ---------------- shared chrome ---------------- */
const head = ({ title, description, path, image = '/assets/img/og.jpg', type = 'website', jsonld = [] }) => `<!doctype html>
<html lang="it">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  <link rel="canonical" href="${SITE_URL}${path}">
  <meta name="theme-color" content="#14100d">
  <link rel="icon" href="/assets/img/favicon.svg" type="image/svg+xml">
  <meta property="og:type" content="${type}">
  <meta property="og:site_name" content="Lived Experiences">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:url" content="${SITE_URL}${path}">
  <meta property="og:image" content="${SITE_URL}${image}">
  <meta property="og:locale" content="it_IT">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="preload" href="/assets/fonts/bricolage.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="/assets/fonts/atkinson.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="stylesheet" href="/assets/css/style.css">
  <script>document.documentElement.classList.add('js')</script>
${jsonld.map((o) => `  <script type="application/ld+json">${JSON.stringify(o)}</script>`).join('\n')}
</head>
<body>
  <a class="skip" href="#main">Vai al contenuto</a>
  ${sprite}`;

const NAV = [
  { href: '/#chi-siamo', label: 'Chi siamo' },
  { href: '/#attivita', label: 'Cosa facciamo' },
  { sub: true },
  { href: '/blog/', label: 'Blog', key: 'blog' },
  { href: '/faq/', label: 'FAQ', key: 'faq' },
  { href: '/#contatti', label: 'Contatti' },
];

const chrome = (active) => `
  <div class="topbar">
    <div class="wrap">
      <p>Hai bisogno di parlare con qualcuno che ci è passato? <a href="/#contatti">Scrivici</a><span class="topbar__extra"> o chiama il <a href="${PHONE.href}" data-placeholder="telefono">${PHONE.label}</a></span></p>
      <p class="topbar__extra">In pericolo immediato? <strong>Chiama il 112</strong></p>
    </div>
  </div>

  <header class="header" id="top">
    <div class="wrap">
      <a class="brand" href="/" aria-label="Lived Experiences, vai alla home">
        <svg aria-hidden="true"><use href="#mark"/></svg>
        <span>Lived Experiences<small>Supporto tra pari · Castiglione delle Stiviere</small></span>
      </a>
      <nav class="nav" aria-label="Principale">
        <ul>
${NAV.map((n) => n.sub ? `          <li class="has-sub">
            <button class="nav__toggle-sub" type="button" aria-expanded="false" aria-controls="sub-partecipa">Partecipa <svg aria-hidden="true"><use href="#i-chev"/></svg></button>
            <div class="sub" id="sub-partecipa">
              <a href="/#libro-soci">Diventa socio<small>Firma il nostro libro soci</small></a>
              <a href="/#partecipa">Fai volontariato<small>Metti a disposizione la tua storia</small></a>
              <a href="/#partecipa">Dona<small>Sostieni gli incontri gratuiti</small></a>
              <a href="/#partecipa">5×1000<small>Non ti costa nulla</small></a>
            </div>
          </li>` : `          <li><a href="${n.href}"${n.key === active ? ' aria-current="page"' : ''}>${n.label}</a></li>`).join('\n')}
        </ul>
      </nav>
      <a class="btn btn--help-desktop" href="/#contatti">Chiedi aiuto</a>
      <button class="menu-btn" type="button" aria-label="Apri il menu" aria-expanded="false" aria-controls="drawer"><svg aria-hidden="true"><use href="#i-menu"/></svg></button>
    </div>
  </header>

  <div class="drawer" id="drawer" role="dialog" aria-modal="true" aria-label="Menu">
    <div class="drawer__top">
      <a class="brand" href="/"><svg aria-hidden="true"><use href="#mark"/></svg><span>Lived Experiences</span></a>
      <button class="menu-btn" type="button" aria-label="Chiudi il menu" data-close style="display:inline-flex"><svg aria-hidden="true"><use href="#i-close"/></svg></button>
    </div>
    <nav aria-label="Menu mobile">
      <ul>
        <li><a href="/#chi-siamo" data-close>Chi siamo</a></li>
        <li><a href="/#attivita" data-close>Cosa facciamo</a></li>
        <li>
          <span class="drawer__label">Partecipa</span>
          <div class="drawer__sub">
            <a href="/#libro-soci" data-close>Diventa socio</a>
            <a href="/#partecipa" data-close>Fai volontariato</a>
            <a href="/#partecipa" data-close>Dona e 5×1000</a>
          </div>
        </li>
        <li><a href="/blog/" data-close>Blog</a></li>
        <li><a href="/faq/" data-close>Domande frequenti</a></li>
        <li><a href="/#contatti" data-close>Contatti</a></li>
      </ul>
    </nav>
    <div class="drawer__cta">
      <a class="btn" href="/#contatti" data-close><svg aria-hidden="true"><use href="#i-chat"/></svg>Chiedi aiuto</a>
      <a class="btn btn--ghost" href="${PHONE.href}" data-placeholder="telefono"><svg aria-hidden="true"><use href="#i-phone"/></svg>Chiama</a>
    </div>
    <p class="drawer__foot">Via Moscati 17, Castiglione delle Stiviere (MN)<br>In pericolo immediato chiama il <strong>112</strong>.</p>
  </div>
`;

const foot = () => `
  <footer class="footer">
    <div class="wrap">
      <div class="footer__grid">
        <div>
          <a class="brand" href="/"><svg aria-hidden="true"><use href="#mark"/></svg><span>Lived Experiences</span></a>
          <address>Associazione Lived Experiences<br>Via Moscati 17<br>46043 Castiglione delle Stiviere (MN)<br><span data-placeholder="codice-fiscale">C.F. in arrivo</span></address>
        </div>
        <div>
          <h2>Associazione</h2>
          <ul>
            <li><a href="/#chi-siamo">Chi siamo</a></li>
            <li><a href="/#attivita">Cosa facciamo</a></li>
            <li><a href="/blog/">Blog</a></li>
          </ul>
        </div>
        <div>
          <h2>Partecipa</h2>
          <ul>
            <li><a href="/#libro-soci">Diventa socio</a></li>
            <li><a href="/#partecipa">Volontariato</a></li>
            <li><a href="/#partecipa">Dona e 5×1000</a></li>
          </ul>
        </div>
        <div>
          <h2>Aiuto</h2>
          <ul>
            <li><a href="/#contatti">Scrivici</a></li>
            <li><a href="/faq/">Domande frequenti</a></li>
            <li><a href="/privacy.html">Privacy</a></li>
          </ul>
        </div>
      </div>
      <p class="footer__wordmark" aria-hidden="true">Lived<span>·</span>Experiences</p>
      <div class="footer__legal">
        <p>© 2026 Lived Experiences · Associazione</p>
        <p>Foto: <a href="https://unsplash.com" target="_blank" rel="noopener">Unsplash</a></p>
      </div>
    </div>
  </footer>

  <div class="helpbar" aria-label="Azioni rapide">
    <a class="btn" href="/#contatti"><svg aria-hidden="true"><use href="#i-chat"/></svg>Chiedi aiuto</a>
    <a class="btn btn--ghost" href="${PHONE.href}" aria-label="Chiama l'associazione" data-placeholder="telefono"><svg aria-hidden="true"><use href="#i-phone"/></svg></a>
  </div>

  <script src="/assets/js/main.js" defer></script>
</body>
</html>
`;

const crumbs = (items) => `<nav class="crumbs" aria-label="Percorso"><ol>${items.map((c, i) => i === items.length - 1
  ? `<li><span aria-current="page">${esc(c.name)}</span></li>`
  : `<li><a href="${c.path}">${esc(c.name)}</a></li>`).join('')}</ol></nav>`;

const crumbsLd = (items) => ({
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: items.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: SITE_URL + c.path })),
});

const faqLd = (items) => ({
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: strip(f.a) } })),
});

const faqItem = (f) => `<details class="faq-item"><summary>${esc(f.q)}<span class="pm" aria-hidden="true"></span></summary><div class="faq-answer">${f.a.startsWith('<') ? f.a : `<p>${esc(f.a)}</p>`}</div></details>`;

const postItem = (a, headingTag = 'h3') => `<li class="post" data-cat="${esc(a.category)}">
            <a href="/blog/${a.slug}/">
              <img src="${img(a.cover)}" width="${imgDims[a.cover][0]}" height="${imgDims[a.cover][1]}" alt="" loading="lazy">
              <div>
                <div class="meta"><span class="cat">${esc(a.category)}</span><span>${a.readMin} min di lettura</span></div>
                <${headingTag}>${esc(a.title)}</${headingTag}>
                <p>${esc(a.excerpt)}</p>
              </div>
              <span class="go" aria-hidden="true"><svg><use href="#i-arrow"/></svg></span>
            </a>
          </li>`;

const write = (rel, html) => {
  const file = join(ROOT, rel);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
};

/* ---------------- articles ---------------- */
// Le pagine vengono sovrascritte: se rinomini o elimini un articolo, cancella a mano la sua cartella in blog/.

for (const a of articles) {
  const path = `/blog/${a.slug}/`;
  const trail = [{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog/' }, { name: a.title, path }];
  const toc = [...a.body.matchAll(/<h2 id="([^"]+)">([^<]+)<\/h2>/g)].map((m) => ({ id: m[1], label: m[2] }));
  if (a.faqs?.length) toc.push({ id: 'domande', label: 'Domande frequenti' });
  const related = (a.related || []).map((s) => bySlug[s]).filter(Boolean);

  const ld = [
    {
      '@context': 'https://schema.org', '@type': 'BlogPosting',
      headline: a.title, description: a.description, keywords: a.keywords.join(', '),
      image: SITE_URL + img(a.cover, 1600), datePublished: PUBLISHED, dateModified: PUBLISHED, inLanguage: 'it-IT',
      mainEntityOfPage: SITE_URL + path,
      author: { '@type': 'Organization', name: 'Lived Experiences' },
      publisher: { '@type': 'Organization', name: 'Lived Experiences', logo: { '@type': 'ImageObject', url: SITE_URL + '/assets/img/favicon.svg' } },
    },
    crumbsLd(trail),
  ];
  if (a.faqs?.length) ld.push(faqLd(a.faqs));

  write(`blog/${a.slug}/index.html`, `${head({ title: `${a.seoTitle} · Lived Experiences`, description: a.description, path, image: img(a.cover, 1600), type: 'article', jsonld: ld })}${chrome('blog')}
  <main id="main">
    <div class="seam" aria-hidden="true"></div>
    <section class="article-head">
      <div class="wrap">
        ${crumbs(trail)}
        <h1>${esc(a.title)}</h1>
        <p class="lead">${esc(a.excerpt)}</p>
        <div class="meta"><span class="cat">${esc(a.category)}</span><span>${itDate(PUBLISHED)}</span><span>${a.readMin} min di lettura</span><span>Redazione Lived Experiences</span></div>
        <figure class="article-cover">
          <img src="${img(a.cover)}" srcset="${img(a.cover)} 800w, ${img(a.cover, 1600)} 1600w" sizes="(max-width: 1240px) 92vw, 1150px" width="${imgDims[a.cover][0]}" height="${imgDims[a.cover][1]}" alt="${esc(a.coverAlt)}" fetchpriority="high">
        </figure>
      </div>
    </section>

    <div class="wrap">
      <div class="article-layout">
        <article class="prose-article">
          <aside class="summary" aria-labelledby="in-breve"><h2 id="in-breve">In breve</h2><ul>${a.summary.map((s) => `<li>${esc(s)}</li>`).join('')}</ul></aside>
${a.body.trim()}

          <aside class="cta-box" aria-labelledby="cta-${a.slug}">
            <h2 id="cta-${a.slug}">Vuoi parlarne con qualcuno che ci è passato?</h2>
            <p>Ascolto alla pari gratuito e riservato, a Castiglione delle Stiviere o al telefono.</p>
            <div class="actions">
              <a class="btn btn--dark" href="/#contatti"><svg aria-hidden="true"><use href="#i-chat"/></svg>Scrivici</a>
              <a class="btn btn--ghost" href="/faq/">Leggi le domande frequenti</a>
            </div>
          </aside>
${a.faqs?.length ? `
          <h2 id="domande">Domande frequenti</h2>
          <div class="faq-list">${a.faqs.map(faqItem).join('')}</div>` : ''}

          <p class="note">Questo articolo nasce dall'esperienza dei soci e volontari di Lived Experiences e non sostituisce il parere di un medico o di uno psicologo. In caso di emergenza chiama il 112.</p>
        </article>
        <aside class="toc" aria-label="Indice dell'articolo">
          <h2>In questo articolo</h2>
          <ol>${toc.map((t) => `<li><a href="#${t.id}">${esc(t.label)}</a></li>`).join('')}</ol>
          <a class="btn" href="/#contatti"><svg aria-hidden="true"><use href="#i-chat"/></svg>Chiedi aiuto</a>
        </aside>
      </div>
    </div>

${related.length ? `    <section class="related" aria-labelledby="related-title">
      <div class="wrap">
        <h2 id="related-title">Continua a leggere</h2>
        <ul class="posts">
          ${related.map((r) => postItem(r)).join('\n          ')}
        </ul>
      </div>
    </section>` : ''}
  </main>
${foot()}`);
}

/* ---------------- blog index ---------------- */
{
  const [first, ...rest] = articles;
  const trail = [{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog/' }];
  const ld = [
    { '@context': 'https://schema.org', '@type': 'Blog', name: 'Il blog di Lived Experiences', url: SITE_URL + '/blog/', inLanguage: 'it-IT',
      blogPost: articles.map((a) => ({ '@type': 'BlogPosting', headline: a.title, url: `${SITE_URL}/blog/${a.slug}/`, datePublished: PUBLISHED })) },
    crumbsLd(trail),
  ];
  write('blog/index.html', `${head({ title: 'Blog · Supporto tra pari, ansia, depressione, familiari · Lived Experiences', description: 'Articoli scritti da chi ci è passato: supporto tra pari, gruppi di auto mutuo aiuto, ansia, depressione, solitudine, consigli per i familiari e risorse a Castiglione delle Stiviere.', path: '/blog/', jsonld: ld })}${chrome('blog')}
  <main id="main">
    <div class="seam" aria-hidden="true"></div>
    <section class="page-head">
      <div class="wrap">
        ${crumbs(trail)}
        <h1>Storie, strumenti, strade già percorse.</h1>
        <p class="lead">Articoli scritti da chi ci è passato, per chi ci sta passando adesso e per chi gli sta accanto.</p>
        <div class="filters" role="group" aria-label="Filtra per tema">
          <button type="button" aria-pressed="true" data-filter="">Tutti</button>
${categories.map((c) => `          <button type="button" aria-pressed="false" data-filter="${esc(c)}">${esc(c)}</button>`).join('\n')}
        </div>
      </div>
    </section>

    <section class="section" style="padding-top:0" aria-label="Articoli">
      <div class="wrap">
        <a class="feature" data-cat="${esc(first.category)}" href="/blog/${first.slug}/">
          <div class="feature__img"><img src="${img(first.cover)}" srcset="${img(first.cover)} 800w, ${img(first.cover, 1600)} 1600w" sizes="(max-width: 900px) 92vw, 50vw" width="${imgDims[first.cover][0]}" height="${imgDims[first.cover][1]}" alt="${esc(first.coverAlt)}"></div>
          <div>
            <div class="meta"><span class="cat">${esc(first.category)}</span><span>${first.readMin} min di lettura</span></div>
            <h2>${esc(first.title)}</h2>
            <p>${esc(first.excerpt)}</p>
          </div>
        </a>
        <ul class="posts" id="posts">
          ${rest.map((a) => postItem(a, 'h2')).join('\n          ')}
        </ul>
        <p class="filters-empty" role="status" aria-live="polite"></p>
      </div>
    </section>
  </main>
${foot()}`);
}

/* ---------------- FAQ ---------------- */
{
  const trail = [{ name: 'Home', path: '/' }, { name: 'Domande frequenti', path: '/faq/' }];
  const all = faqGroups.flatMap((g) => g.items);
  write('faq/index.html', `${head({ title: 'Domande frequenti · Lived Experiences, supporto tra pari a Castiglione delle Stiviere', description: 'Risposte su ascolto alla pari gratuito, gruppi di auto mutuo aiuto, supporto ai familiari, come diventare socio o volontario, donazioni e 5×1000.', path: '/faq/', jsonld: [faqLd(all), crumbsLd(trail)] })}${chrome('faq')}
  <main id="main">
    <div class="seam" aria-hidden="true"></div>
    <section class="page-head">
      <div class="wrap">
        ${crumbs(trail)}
        <h1>Domande frequenti</h1>
        <p class="lead">Le domande che ci fanno più spesso. Se la tua non c'è, <a href="/#contatti">scrivicela</a>: rispondiamo noi.</p>
      </div>
    </section>
    <div class="wrap">
      <div class="faq-groups">
        <nav class="faq-nav" aria-label="Argomenti">
          <ul>${faqGroups.map((g) => `<li><a href="#${g.id}">${esc(g.title)}</a></li>`).join('')}</ul>
        </nav>
        <div>
${faqGroups.map((g) => `          <section class="faq-group" aria-labelledby="${g.id}">
            <h2 id="${g.id}">${esc(g.title)}</h2>
            <div class="faq-list">${g.items.map(faqItem).join('')}</div>
          </section>`).join('\n')}
          <aside class="cta-box" aria-labelledby="faq-cta">
            <h2 id="faq-cta">Non hai trovato la risposta?</h2>
            <p>Scrivici: ti risponde una persona, non un sistema automatico.</p>
            <div class="actions"><a class="btn btn--dark" href="/#contatti"><svg aria-hidden="true"><use href="#i-chat"/></svg>Fai la tua domanda</a></div>
          </aside>
        </div>
      </div>
    </div>
  </main>
${foot()}`);
}

/* ---------------- home: blog + faq teasers (between markers) ---------------- */
{
  let home = indexHtml;
  const latest = articles.slice(0, 3).map((a) => postItem(a)).join('\n            ');
  home = home.replace(/(<!-- generated:blog -->)[\s\S]*?(<!-- \/generated:blog -->)/, `$1\n            ${latest}\n            $2`);
  const teaser = faqGroups[0].items.slice(1, 3).concat(faqGroups[1].items.slice(0, 1), faqGroups[3].items.slice(0, 1)).map(faqItem).join('\n            ');
  home = home.replace(/(<!-- generated:faq -->)[\s\S]*?(<!-- \/generated:faq -->)/, `$1\n            ${teaser}\n            $2`);
  if (home !== indexHtml) writeFileSync(join(ROOT, 'index.html'), home);
}

/* ---------------- sitemap + robots ---------------- */
const urls = ['/', '/blog/', '/faq/', ...articles.map((a) => `/blog/${a.slug}/`), '/privacy.html'];
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${SITE_URL}${u}</loc><lastmod>${PUBLISHED}</lastmod></url>`).join('\n')}
</urlset>
`);
write('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);

console.log(`Generati: ${articles.length} articoli, blog, FAQ (${faqGroups.reduce((n, g) => n + g.items.length, 0)} domande), sitemap (${urls.length} URL). SITE_URL=${SITE_URL}`);
