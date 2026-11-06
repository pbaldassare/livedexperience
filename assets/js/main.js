(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  // Placeholder contact data: change it here once, it updates everywhere.
  const CONTACT_EMAIL = 'info@livedexperiences.it'; // TODO: real email

  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Header state ---------- */
  const header = $('.header');
  const onScrollHeader = () => header && header.classList.toggle('is-scrolled', window.scrollY > 8);

  /* ---------- Desktop submenu (click / keyboard) ---------- */
  $$('.has-sub').forEach((li) => {
    const btn = $('.nav__toggle-sub', li);
    btn.addEventListener('click', () => {
      const open = !li.classList.contains('is-open');
      li.classList.toggle('is-open', open);
      btn.setAttribute('aria-expanded', String(open));
    });
    li.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') { li.classList.remove('is-open'); btn.setAttribute('aria-expanded', 'false'); btn.focus(); }
    });
    document.addEventListener('click', (e) => {
      if (!li.contains(e.target)) { li.classList.remove('is-open'); btn.setAttribute('aria-expanded', 'false'); }
    });
    $$('.sub a', li).forEach((a) => a.addEventListener('click', () => { li.classList.remove('is-open'); btn.setAttribute('aria-expanded', 'false'); }));
  });

  /* ---------- Mobile drawer ---------- */
  const drawer = $('#drawer');
  const openBtn = $('.header .menu-btn');
  let lastFocus = null;
  const setDrawer = (open) => {
    drawer.classList.toggle('is-open', open);
    openBtn.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) { lastFocus = document.activeElement; setTimeout(() => $('[data-close].menu-btn', drawer).focus(), 50); }
    else if (lastFocus) lastFocus.focus();
  };
  openBtn.addEventListener('click', () => setDrawer(true));
  $$('[data-close]', drawer).forEach((el) => el.addEventListener('click', () => setDrawer(false)));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && drawer.classList.contains('is-open')) setDrawer(false); });
  drawer.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      const f = $$('a, button', drawer).filter((x) => x.offsetParent !== null);
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* ---------- Activities index ---------- */
  const acts = $$('.act');
  const stage = $('.acts__stage');
  const desktop = window.matchMedia('(min-width: 901px)');
  const activate = (act, toggle = false) => {
    const wasActive = act.classList.contains('is-active');
    acts.forEach((a) => {
      const on = a === act ? (toggle ? !wasActive : true) : false;
      a.classList.toggle('is-active', on);
      $('.act__btn', a).setAttribute('aria-expanded', String(on));
    });
    if (stage) $$('img', stage).forEach((img) => img.classList.toggle('is-on', img.dataset.key === act.dataset.img));
  };
  acts.forEach((act) => {
    const btn = $('.act__btn', act);
    btn.addEventListener('click', () => activate(act, !desktop.matches));
    btn.addEventListener('mouseenter', () => { if (desktop.matches) activate(act); });
    btn.addEventListener('focus', () => { if (desktop.matches) activate(act); });
  });

  /* ---------- Reveal on scroll ---------- */
  const reveals = $$('.reveal');
  if ('IntersectionObserver' in window && !reduce) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('is-in'));
  }

  /* ---------- Sticky help bar (mobile) ---------- */
  const helpbar = $('.helpbar');
  const heroActions = $('.hero__actions');
  const contacts = $('#contatti');
  let heroVisible = true, contactsVisible = false;
  const syncHelpbar = () => helpbar && helpbar.classList.toggle('is-on', !heroVisible && !contactsVisible);
  if ('IntersectionObserver' in window && helpbar) {
    const firstAnchor = heroActions || $('.page-head, .article-head');
    if (firstAnchor) new IntersectionObserver(([en]) => { heroVisible = en.isIntersecting; syncHelpbar(); }).observe(firstAnchor);
    else { heroVisible = false; syncHelpbar(); }
    if (contacts) new IntersectionObserver(([en]) => { contactsVisible = en.isIntersecting; syncHelpbar(); }, { threshold: 0.05 }).observe(contacts);
  }

  /* ---------- Blog filters ---------- */
  const filterBtns = $$('.filters [data-filter]');
  if (filterBtns.length) {
    const empty = $('.filters-empty');
    filterBtns.forEach((b) => b.addEventListener('click', () => {
      const cat = b.dataset.filter;
      filterBtns.forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
      let shown = 0;
      $$('[data-cat]').forEach((p) => { const on = !cat || p.dataset.cat === cat; p.hidden = !on; if (on) shown++; });
      if (empty) empty.textContent = shown ? '' : 'Nessun articolo in questo tema, per ora.';
    }));
  }

  /* ---------- Article table of contents ---------- */
  const tocLinks = $$('.toc a[href^="#"]');
  if (tocLinks.length && 'IntersectionObserver' in window) {
    const map = new Map(tocLinks.map((a) => [a.getAttribute('href').slice(1), a]));
    const tio = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        tocLinks.forEach((a) => a.classList.toggle('is-here', a === map.get(en.target.id)));
      });
    }, { rootMargin: '-20% 0px -70% 0px' });
    map.forEach((_, id) => { const el = document.getElementById(id); if (el) tio.observe(el); });
  }

  /* ---------- The gold seam ---------- */
  const seamHost = $('.seam');
  const main = $('#main');
  let seamPaths = [];
  let rng;
  const seeded = (s) => () => ((s = Math.imul(s ^ (s >>> 15), 1 | s) + 0x6d2b79f5 | 0, ((s ^ (s >>> 13)) >>> 0) / 4294967296));

  const buildSeam = () => {
    if (!seamHost) return;
    rng = seeded(1018);
    const wrap = $('main .wrap');
    const hero = $('.hero');
    const cs = getComputedStyle(wrap);
    const rect = wrap.getBoundingClientRect();
    const padL = parseFloat(cs.paddingLeft);
    const x0 = rect.left + padL * 0.42;
    const amp = Math.max(5, padL * 0.16);
    const H = main.offsetHeight;
    const W = document.documentElement.clientWidth;
    const top = hero ? hero.offsetHeight * 0.18 : 24;

    let d = `M${x0.toFixed(1)} ${top.toFixed(1)}`;
    let y = top, x = x0;
    while (y < H - 40) {
      y += 26 + rng() * 64;
      const kink = rng() < 0.18 ? (rng() - 0.5) * amp * 3.2 : (rng() - 0.5) * amp * 2;
      x = Math.min(Math.max(x0 + kink, 3), x0 + padL * 0.5);
      d += ` L${x.toFixed(1)} ${Math.min(y, H).toFixed(1)}`;
      if (rng() < 0.22) {
        const dir = rng() < 0.6 ? 1 : -1;
        let bx = x, by = y, b = '';
        const n = 2 + Math.floor(rng() * 3);
        for (let i = 0; i < n; i++) {
          bx += dir * (6 + rng() * 14); by += 8 + rng() * 18;
          bx = Math.min(Math.max(bx, 2), x0 + padL * 0.45);
          b += ` L${bx.toFixed(1)} ${by.toFixed(1)}`;
        }
        d += ` M${x.toFixed(1)} ${y.toFixed(1)}${b} M${x.toFixed(1)} ${y.toFixed(1)}`;
      }
    }

    seamHost.innerHTML = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" focusable="false">
      <path class="under" d="${d}" pathLength="1"/>
      <path class="ghost" d="${d}"/>
      <path class="gold" d="${d}" pathLength="1"/>
    </svg>`;
    seamPaths = $$('.under, .gold', seamHost);
    seamPaths.forEach((p) => { p.style.strokeDasharray = '1'; });
    paintSeam();
  };

  const paintSeam = () => {
    if (!seamPaths.length) return;
    const mTop = main.getBoundingClientRect().top + window.scrollY;
    const H = main.offsetHeight;
    const p = reduce ? 1 : Math.min(1, Math.max(0, (window.scrollY + window.innerHeight * 0.75 - mTop) / H));
    seamPaths.forEach((path) => { path.style.strokeDashoffset = String(1 - p); });
  };

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { onScrollHeader(); paintSeam(); ticking = false; });
  }, { passive: true });

  let rT;
  const rebuild = () => { clearTimeout(rT); rT = setTimeout(buildSeam, 150); };
  window.addEventListener('resize', rebuild);
  if ('ResizeObserver' in window) new ResizeObserver(rebuild).observe(main);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(buildSeam);
  window.addEventListener('load', buildSeam);
  buildSeam();
  onScrollHeader();

  /* ---------- Forms ---------- */
  // No backend yet: forms validate, then open the visitor's mail app with the message
  // already written. To use a service (Formspree, Netlify Forms…), set the form's
  // action/method and remove the preventDefault branch below.
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const phoneRe = /^[+\d][\d\s./-]{5,}$/;

  const setErr = (input, msg) => {
    const err = document.getElementById(input.id + '-err');
    input.setAttribute('aria-invalid', msg ? 'true' : 'false');
    if (err) { err.textContent = msg || ''; if (msg) input.setAttribute('aria-describedby', err.id); }
  };

  const validate = (form) => {
    let firstBad = null;
    $$('input, textarea', form).forEach((el) => {
      if (el.type === 'checkbox') return;
      let msg = '';
      const v = el.value.trim();
      if (el.required && !v) msg = 'Questo campo serve per poterti rispondere.';
      else if (v && el.type === 'email' && !emailRe.test(v)) msg = 'Controlla l\'email: sembra incompleta (es. nome@esempio.it).';
      else if (v && el.name === 'recapito' && !emailRe.test(v) && !phoneRe.test(v)) msg = 'Scrivi un\'email o un numero di telefono valido.';
      setErr(el, msg);
      if (msg && !firstBad) firstBad = el;
    });
    const privacy = $('input[name="privacy"]', form);
    if (privacy && !privacy.checked && !firstBad) firstBad = privacy;
    return firstBad;
  };

  $$('form[novalidate]').forEach((form) => {
    const status = $('.form__status', form);
    form.addEventListener('input', (e) => { if (e.target.getAttribute('aria-invalid') === 'true') setErr(e.target, ''); });
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      status.className = 'form__status';
      status.textContent = '';
      const bad = validate(form);
      if (bad) {
        status.classList.add('is-err');
        status.textContent = bad.name === 'privacy'
          ? 'Per inviare serve il consenso alla privacy.'
          : 'Manca qualcosa: abbiamo evidenziato il campo da sistemare.';
        bad.focus();
        return;
      }
      const data = new FormData(form);
      const lines = [];
      const seen = new Set();
      for (const [k, v] of data.entries()) {
        if (k === 'privacy') continue;
        if (seen.has(k)) { lines.push(`   ${v}`); continue; }
        seen.add(k);
        lines.push(`${k[0].toUpperCase() + k.slice(1)}: ${v}`);
      }
      lines.push('', 'Consenso privacy: sì');
      const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(form.dataset.subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
      status.classList.add('is-ok');
      status.textContent = 'Grazie. Si sta aprendo il tuo programma di posta con il messaggio già pronto: premi «Invia» per spedircelo.';
      window.location.href = href;
    });
  });
})();
