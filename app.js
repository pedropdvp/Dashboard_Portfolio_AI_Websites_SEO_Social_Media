/* Interactive portfolio dashboard — Pedro Varela Pinto. Content comes from data.js (taken from Notion). */
(() => {
  'use strict';
  const D = window.PF_DATA;
  const P = D.profile;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- icons (stroke paths, 24px grid) ---------- */
  const ICONS = {
    star: '<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',
    bot: '<rect x="4" y="8" width="16" height="12" rx="3"/><path d="M12 8V4M9 13v1M15 13v1M9 17h6"/><circle cx="12" cy="3.5" r="1"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    book: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5M8 7h7M8 11h7"/>',
    chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
    palette: '<path d="M12 3a9 9 0 1 0 0 18c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.3-.3-.4-.5-.8-.5-1.3 0-1.1.9-2 2-2h2.3A4.7 4.7 0 0 0 22 9.7C22 6 17.5 3 12 3z"/><circle cx="7.5" cy="11" r="1.2"/><circle cx="10" cy="7" r="1.2"/><circle cx="15" cy="7" r="1.2"/>',
    swatch: '<rect x="3" y="3" width="7" height="18" rx="2"/><path d="M10 7l5-3 4 7-9 5M10 15l9 0v4a2 2 0 0 1-2 2H6"/>',
    grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
    bars: '<rect x="3" y="12" width="4" height="8" rx="1"/><rect x="10" y="7" width="4" height="13" rx="1"/><rect x="17" y="3" width="4" height="17" rx="1"/>',
    layers: '<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/>',
    share: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/>',
    film: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 4v16M17 4v16M3 9h4M3 15h4M17 9h4M17 15h4"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
    instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',
    pin: '<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',
    linkedin: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7"/>',
    cake: '<path d="M4 21h16v-7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2zM4 16c2 1 4-1 4-1s2 2 4 0 4 0 4 0 2 2 4 1M12 12V8M12 5v.01"/>',
    id: '<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="11" r="2"/><path d="M6 16c.5-1.5 5.5-1.5 6 0M15 10h3M15 13h3"/>',
    flag: '<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>',
    copy: '<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/>',
    doc: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/>',
    link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
    chev: '<path d="m9 6 6 6-6 6"/>',
    arrowL: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
    arrowR: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    home: '<path d="m3 11 9-8 9 8M5 9v11h14V9"/>',
    download: '<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',
    notion: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M9 16V8l6 8V8"/>',
    cv: '<rect x="4" y="3" width="16" height="18" rx="2"/><circle cx="12" cy="9" r="2.5"/><path d="M8 16c1-2 7-2 8 0"/>',
    sunTheme: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
  };
  const icon = (n) => `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[n] || ICONS.star}</svg>`;

  /* ---------- section registry ---------- */
  const HUES = ['#36e2c4', '#6f7dff', '#ff7ab6', '#ffc65c', '#4fc3ff', '#b78cff', '#7ee07a', '#ff8f6b'];
  const SECS = [
    { id: 'overview', title: 'Portfolio Overview', icon: 'star', lede: 'Seven areas of work, one portfolio: AI, brand identity, dashboards, full-stack programming, SEO, social media and websites.', special: true },
    ...D.sections,
    { id: 'contacts', title: 'Contacts', icon: 'mail', lede: 'Get in touch — phone, e-mail, LinkedIn and address.', special: true },
  ];
  SECS.forEach((s, i) => { s.hue = HUES[i % HUES.length]; s.idx = i; s.short = s.short || s.title; });
  const byId = Object.fromEntries(SECS.map((s) => [s.id, s]));
  // Which portfolio areas illustrate each of the seven headline pillars.
  const PILLARS = {
    'AI': ['ai-assistants', 'avatars'],
    'Brand Identity': ['brand-identity', 'brand-book', 'annual-report'],
    'DashBoards': ['dashboards', 'powerbi'],
    'Full-Stack Programming': ['platforms', 'ai-assistants', 'dashboards'],
    'SEO': ['social-seo', 'websites'],
    'Social Media': ['social-seo', 'video'],
    'Websites': ['websites'],
  };

  const statsOf = (s) => {
    const st = { projects: 0, images: 0, videos: 0, links: 0, docs: 0 };
    (s.items || []).forEach((it) => {
      st.projects++;
      st.images += (it.img ? 1 : 0) + (it.gallery || []).length;
      st.videos += (it.video || it.yt) ? 1 : 0;
      st.links += (it.links || []).length;
      st.docs += (it.files || []).length;
    });
    return st;
  };
  D.sections.forEach((s) => (s.stats = statsOf(s)));
  const TOT = D.sections.reduce((a, s) => { Object.keys(s.stats).forEach((k) => (a[k] = (a[k] || 0) + s.stats[k])); return a; }, {});
  const clients = byId['social-seo'].items.length;
  const liveApps = D.sections.flatMap((s) => s.items).filter((it) => (it.links || []).some((l) => !/instagram|youtube|notion/.test(l.url))).length;

  function statChips(st) {
    if (!st) return '';
    const names = [['projects', 'project'], ['images', 'screenshot'], ['videos', 'video'], ['links', 'link'], ['docs', 'document']];
    return names.filter(([k]) => st[k]).map(([k, w]) => `<span class="chip"><b>${st[k]}</b> ${w}${st[k] > 1 ? 's' : ''}</span>`).join('');
  }
  function toast(msg) {
    const t = $('#toast'); t.textContent = msg; t.classList.add('show');
    clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove('show'), 1800);
  }
  async function copy(text) {
    try { await navigator.clipboard.writeText(text); toast('Copied: ' + text); } catch { toast(text); }
  }
  const observer = 'IntersectionObserver' in window ? new IntersectionObserver((ents) => {
    ents.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); observer.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -6% 0px' }) : null;
  function reveal(root) {
    $$('.reveal, .tile, .kpi', root).forEach((el, i) => {
      if (el.classList.contains('tile') || el.classList.contains('pcard')) el.style.transitionDelay = Math.min(i * 50, 600) + 'ms';
      if (observer && !reduced) observer.observe(el); else el.classList.add('in');
    });
  }

  /* ---------- project cards ---------- */
  let gallery = []; // media of the current view, for modal navigation

  function linkChip(l) {
    const ig = /instagram\.com/.test(l.url), yt = /youtu/.test(l.url);
    const live = !ig && !yt && !/notion|labs\.google/.test(l.url);
    return `<a class="file link${live ? ' live' : ''}" href="${esc(l.url)}" target="_blank" rel="noopener" title="${esc(l.url)}">${live ? '<i class="dotlive"></i>' : icon(ig ? 'instagram' : 'link')}<span>${esc(l.label)}</span></a>`;
  }
  function card(it, s) {
    let shot;
    if (it.img) {
      const gi = gallery.push({ src: it.img, label: it.title, t: 'img' }) - 1;
      shot = `<button class="shot" data-media="${gi}" aria-label="Open screenshot of ${esc(it.title)}"><img loading="lazy" src="${esc(it.img)}" alt="Screenshot: ${esc(it.title)}"></button>`;
    } else if (it.video) {
      shot = `<div class="shot" style="cursor:auto"><video controls preload="metadata" playsinline poster="${esc(it.poster || '')}" src="${esc(it.video)}" style="height:100%;border-radius:0;object-fit:cover"></video></div>`;
    } else if (it.yt) {
      shot = `<div class="shot" style="cursor:auto"><iframe loading="lazy" style="width:100%;height:100%;border:0" src="https://www.youtube-nocookie.com/embed/${esc(it.yt)}" title="${esc(it.title)}" allow="accelerometer; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe></div>`;
    } else if (it.social) {
      const n = (it.links || []).length;
      shot = `<div class="shot" style="cursor:auto"><div class="stack">${icon('instagram')}<span class="handle">${esc(it.title)}</span><span style="font-size:13px;opacity:.9">${n} Instagram link${n > 1 ? 's' : ''}</span></div></div>`;
    } else {
      shot = `<div class="shot" style="cursor:auto"><div class="stack" style="color:${s.hue}">${icon(s.icon)}<span style="font:600 15px 'Space Grotesk';margin-top:8px;color:var(--text)">${esc(it.title)}</span></div></div>`;
    }
    const extra = (it.gallery || []).map((g) => { const gi = gallery.push({ src: g, label: it.title, t: 'img' }) - 1; return `<button class="thumb" data-media="${gi}" aria-label="Open image"><img loading="lazy" src="${esc(g)}" alt=""></button>`; }).join('');
    const files = (it.files || []).map((f) => { const gi = gallery.push({ src: f.src, label: f.label, t: 'pdf' }) - 1; return `<button class="file" data-media="${gi}">${icon('doc')}<span>${esc(f.label)}</span><i class="ext">pdf</i></button>`; }).join('');
    return `<article class="pcard reveal${it.social ? ' social-card' : ''}" style="--hue:${s.hue}">${shot}<div class="body">
      <span class="cat">${esc(s.short)}</span>${it.group ? `<span class="group">${esc(it.group)}</span>` : ''}
      <h3>${esc(it.title)}</h3>${it.desc ? `<p>${esc(it.desc)}</p>` : ''}
      ${extra ? `<div class="showcase">${extra}</div>` : ''}
      ${(it.links || []).length || files ? `<div class="files">${(it.links || []).map(linkChip).join('')}${files}</div>` : ''}</div></article>`;
  }

  /* ---------- views ---------- */
  function secHead(s, extra = '') {
    return `<div class="sec-head" style="--hue:${s.hue}">
      <div class="crumbs"><button data-go="home">Portfolio</button>${icon('chev')}<span>${s.idx + 1} / ${SECS.length}</span></div>
      <div class="ico">${icon(s.icon)}</div>
      <h2>${esc(s.title)}</h2>
      ${s.lede ? `<p class="lede">${esc(s.lede)}</p>` : ''}
      <div class="sec-stats">${statChips(s.stats)}${extra}</div>
    </div>`;
  }
  function secNav(s) {
    const prev = SECS[s.idx - 1], next = SECS[s.idx + 1];
    return `<div class="sec-nav">
      ${prev ? `<button class="btn ghost" data-go="${prev.id}">${icon('arrowL')}<span>${esc(prev.short)}</span></button>` : '<span></span>'}
      ${next ? `<button class="btn primary" data-go="${next.id}"><span>${esc(next.short)}</span>${icon('arrowR')}</button>` : `<button class="btn primary" data-go="home">${icon('home')}<span>Back to portfolio</span></button>`}
    </div>`;
  }
  const viewSection = (s) => secHead(s) + `<div class="port-grid${s.items.length === 1 ? ' solo' : ''}" style="margin-top:18px">${s.items.map((it) => card(it, s)).join('')}</div>` + secNav(s);

  function viewOverview(s) {
    const counts = D.sections.map((x) => ({ id: x.id, n: x.items.length }));
    const max = Math.max(...counts.map((c) => c.n));
    const bars = counts.slice().sort((a, b) => b.n - a.n).map((c) => `<button class="bar" data-go="${c.id}"><span class="lbl"><span>${esc(byId[c.id].short)}</span><b>${c.n}</b></span><span class="track"><span class="fill" data-w="${(c.n / max) * 100}%"></span></span></button>`).join('');
    const pillars = P.pillars.map((p, i) => `<div class="card pill-card reveal" style="--hue:${HUES[i % HUES.length]}">
      <div class="pillar" style="border:0;padding:0;background:none"><span class="ico">${icon(['bot', 'palette', 'grid', 'layers', 'globe', 'share', 'globe'][i])}</span><div><h3 style="margin:0 0 6px">${esc(p)}</h3>
      <div class="links">${PILLARS[p].map((id) => `<button data-go="${id}">${esc(byId[id].short)}</button>`).join('')}</div></div></div></div>`).join('');
    const shots = D.sections.flatMap((x) => x.items.filter((it) => it.img).map((it) => ({ it, x })));
    const showcase = shots.map(({ it, x }) => { const gi = gallery.push({ src: it.img, label: it.title, t: 'img' }) - 1; return `<button class="thumb reveal" data-media="${gi}" title="${esc(it.title)} — ${esc(x.short)}"><img loading="lazy" src="${esc(it.img)}" alt="${esc(it.title)}"></button>`; }).join('');
    return secHead(s, `<span class="chip"><b>${TOT.projects}</b> projects</span><span class="chip"><b>${D.sections.length}</b> areas</span>`) + `
      <div class="pillar-grid">${pillars}</div>
      <div class="summary-grid">
        <div class="card reveal"><h3>Projects by area</h3><div class="bars">${bars}</div></div>
        <div class="card reveal"><h3>Pharus AI Avatar — pitch</h3>
          <video controls preload="metadata" playsinline poster="${esc(P.cover)}" src="assets/pharus-ai-avatar-pitch.mp4"></video>
          <div class="hero-cta" style="margin-top:14px"><button class="btn primary" data-go="dashboards">Dashboards ${icon('arrowR')}</button><button class="btn ghost" data-go="websites">Websites</button></div>
        </div>
      </div>
      <div class="card reveal" style="margin-top:16px"><h3>Screenshot wall — click to enlarge</h3><div class="showcase">${showcase}</div></div>` + secNav(s);
  }

  function viewContacts(s) {
    const c = P.contacts;
    const items = [
      ['phone', 'Mobile', `<a href="tel:${c.mobile.replace(/\s/g, '')}">${esc(c.mobile)}</a>`, c.mobile],
      ['mail', 'E-mail', `<a href="mailto:${esc(c.email)}">${esc(c.email)}</a>`, c.email],
      ['linkedin', 'LinkedIn', `<a href="${esc(c.linkedin)}" target="_blank" rel="noopener">linkedin.com/in/pedrodinisvarelapinto</a>`, c.linkedin],
      ['pin', 'Address', `<a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(c.address)}" target="_blank" rel="noopener">${esc(c.address)}</a>`, c.address],
      ['cake', 'Born', esc(c.born), null],
      ['flag', 'Nationality', esc(c.nationality), null],
      ['id', 'Professional registrations', esc(c.registrations), null],
      ['cv', 'Interactive CV', `<a href="${esc(P.cv)}" target="_blank" rel="noopener">Open the CV dashboard</a>`, null],
      ['notion', 'Portfolio on Notion', `<a href="${esc(P.notion)}" target="_blank" rel="noopener">Open Notion page</a>`, null],
    ];
    return secHead(s) + `<div class="contact-grid">
      <div class="contact-photo reveal"><img src="${esc(P.photo)}" alt="Pedro Varela Pinto"></div>
      <div class="contact-list">${items.map(([ic, k, v, cp]) => `<div class="citem reveal"><span class="ico">${icon(ic)}</span><div><small>${k}</small><b>${v}</b></div>${cp ? `<button class="icon-btn copy" data-copy="${esc(cp)}" aria-label="Copy ${k}">${icon('copy')}</button>` : ''}</div>`).join('')}
        <div class="contact-actions">
          <a class="btn primary" href="mailto:${esc(c.email)}?subject=${encodeURIComponent('Portfolio — project enquiry')}">${icon('mail')}Send an e-mail</a>
          <button class="btn ghost" data-act="vcard">${icon('download')}Save contact (vCard)</button>
          <a class="btn ghost" href="${esc(c.linkedin)}" target="_blank" rel="noopener">${icon('linkedin')}Connect on LinkedIn</a>
        </div>
      </div></div>` + secNav(s);
  }

  function viewSearch(q) {
    const ql = q.toLowerCase();
    const hits = [];
    D.sections.forEach((s) => s.items.forEach((it) => {
      const hay = [it.title, it.desc, it.group, s.title, ...(it.links || []).map((l) => l.url + ' ' + l.label)].join(' ').toLowerCase();
      if (hay.includes(ql)) hits.push({ it, s });
    }));
    const body = hits.length ? `<div class="port-grid">${hits.map(({ it, s }) => card(it, s)).join('')}</div>` : `<div class="empty-state">No results for “${esc(q)}”.</div>`;
    return `<div class="sec-head"><div class="crumbs"><button data-go="home">Portfolio</button>${icon('chev')}<span>Search</span></div>
      <h2>Results for “${esc(q)}”</h2><p class="lede">${hits.length} matching project${hits.length === 1 ? '' : 's'}.</p></div><div style="margin-top:18px">${body}</div>`;
  }

  /* ---------- home ---------- */
  function buildHome() {
    const kpis = [
      [TOT.projects, '', 'portfolio entries'],
      [D.sections.length, '', 'areas of work'],
      [liveApps, '', 'live apps, sites & dashboards'],
      [TOT.images, '', 'screenshots'],
      [clients, '', 'social media clients'],
      [TOT.links, '', 'project links'],
    ];
    $('#kpis').innerHTML = kpis.map(([v, suf, l]) => `<div class="kpi"><b data-count="${v}" data-suf="${suf}">0</b><span>${l}</span></div>`).join('');
    const pills = P.pillars.map((p) => `<button data-go="${PILLARS[p][0]}"><i></i>${esc(p)}</button>`).join('');
    $('#marquee').innerHTML = pills + pills.replace(/<button /g, '<button tabindex="-1" aria-hidden="true" ');
    $('#tiles').innerHTML = SECS.map((s) => {
      const meta = s.stats ? statChips({ projects: s.stats.projects, images: s.stats.images, videos: s.stats.videos, links: s.stats.links }) :
        s.id === 'overview' ? '<span class="chip">7 areas</span><span class="chip">screenshot wall</span><span class="chip">video</span>' : '<span class="chip">phone · e-mail · LinkedIn</span>';
      const thumb = s.items && s.items.find((it) => it.img);
      const feature = s.id === 'overview' || s.id === 'dashboards' || s.id === 'platforms';
      return `<button class="tile${feature ? ' feature' : ''}" style="--hue:${s.hue}" data-go="${s.id}">
        <span class="num">${String(s.idx + 1).padStart(2, '0')}</span>
        <span class="ico">${icon(s.icon)}</span><h3>${esc(s.title)}</h3>
        ${s.lede && feature ? `<p>${esc(s.lede)}</p>` : ''}
        ${thumb && feature && s.id !== 'overview' ? `<span class="tile-shots">${s.items.filter((it) => it.img).slice(0, 4).map((it) => `<img loading="lazy" src="${esc(it.img)}" alt="">`).join('')}</span>` : ''}
        <span class="meta">${meta}</span></button>`;
    }).join('');
    $('#dock').innerHTML = `<button data-go="home" data-tip="Portfolio home">${icon('home')}</button>` +
      SECS.map((s) => `<button data-go="${s.id}" data-tip="${esc(s.short)}">${icon(s.icon)}</button>`).join('');

    const nameEl = $('.split');
    if (!reduced) nameEl.innerHTML = [...nameEl.textContent].map((ch, i) => `<span class="ch" style="animation-delay:${200 + i * 45}ms;background-position:${i * 6}% 0">${ch === ' ' ? '&nbsp;' : esc(ch)}</span>`).join('');
    const phrases = ['AI assistants, avatars & automation', 'Brand identity & national media campaigns', 'Interactive dashboards & Power BI reports',
      'Full-stack platforms for real businesses', 'SEO & social media that grows brands', 'Responsive websites that convert'];
    const el = $('#typed');
    if (reduced) { el.textContent = phrases[0]; return; }
    let pi = 0, ci = 0, del = false;
    (function tick() {
      const p = phrases[pi];
      el.textContent = p.slice(0, ci);
      if (!del && ci === p.length) { del = true; return setTimeout(tick, 2000); }
      if (del && ci === 0) { del = false; pi = (pi + 1) % phrases.length; }
      ci += del ? -1 : 1;
      setTimeout(tick, del ? 22 : 45);
    })();
  }
  function runCounters() {
    $$('[data-count]').forEach((el) => {
      const target = +el.dataset.count, suf = el.dataset.suf;
      if (reduced) { el.textContent = target + suf; return; }
      const t0 = performance.now(), dur = 1500;
      (function step(t) {
        const k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 3);
        el.textContent = Math.round(target * e) + suf;
        if (k < 1) requestAnimationFrame(step);
      })(t0);
    });
  }

  /* ---------- router ---------- */
  let current = null;
  function go(id) {
    if (id === 'home') { if (location.hash) history.pushState(null, '', location.pathname); show('home'); return; }
    if (location.hash !== '#' + id) history.pushState(null, '', '#' + id);
    show(id);
  }
  function show(id, opts = {}) {
    gallery = [];
    const home = $('#home'), sec = $('#section');
    $$('#dock button').forEach((b) => b.classList.toggle('on', b.dataset.go === id));
    if (id === 'home' || (!byId[id] && !id.startsWith('search='))) {
      current = null; sec.classList.remove('active'); home.classList.add('active'); $('#dock').classList.remove('show');
      window.scrollTo({ top: 0 }); return;
    }
    let html;
    if (id.startsWith('search=')) html = viewSearch(decodeURIComponent(id.slice(7)));
    else {
      const s = byId[id];
      html = s.id === 'overview' ? viewOverview(s) : s.id === 'contacts' ? viewContacts(s) : viewSection(s);
      sec.style.setProperty('--hue', s.hue);
    }
    current = id;
    home.classList.remove('active');
    sec.classList.remove('active'); void sec.offsetWidth;
    sec.innerHTML = html; sec.classList.add('active');
    $('#dock').classList.add('show');
    reveal(sec);
    $$('[data-w]', sec).forEach((b) => setTimeout(() => (b.style.width = b.dataset.w), 150));
    if (!opts.keepScroll) window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
  }
  const route = () => show(decodeURIComponent(location.hash.slice(1)) || 'home');
  window.addEventListener('popstate', route);

  /* ---------- interactions ---------- */
  document.addEventListener('click', (e) => {
    const g = e.target.closest('[data-go]');
    if (g) { e.preventDefault(); go(g.dataset.go); return; }
    const m = e.target.closest('[data-media]');
    if (m) { openModal(+m.dataset.media); return; }
    const cp = e.target.closest('[data-copy]');
    if (cp) { copy(cp.dataset.copy); return; }
    const a = e.target.closest('[data-act="vcard"]');
    if (a) downloadVcard();
  });
  document.addEventListener('pointermove', (e) => {
    const glow = $('.cursor-glow'); glow.style.left = e.clientX + 'px'; glow.style.top = e.clientY + 'px';
    const t = e.target.closest && e.target.closest('.tile');
    if (!t || reduced) return;
    const r = t.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
    t.style.setProperty('--mx', x + 'px'); t.style.setProperty('--my', y + 'px');
    t.style.transform = `rotateX(${((y / r.height) - .5) * -7}deg) rotateY(${((x / r.width) - .5) * 9}deg) translateY(-4px)`;
  });
  document.addEventListener('pointerout', (e) => { const t = e.target.closest && e.target.closest('.tile'); if (t && !t.contains(e.relatedTarget)) t.style.transform = ''; });

  const search = $('#search');
  let st;
  search.addEventListener('input', () => {
    clearTimeout(st);
    const q = search.value.trim();
    st = setTimeout(() => {
      if (q.length >= 2) { history.replaceState(null, '', '#search=' + encodeURIComponent(q)); show('search=' + encodeURIComponent(q), { keepScroll: true }); }
      else if (!q && current && current.startsWith('search=')) go('home');
    }, 220);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== search) { e.preventDefault(); search.focus(); }
    if ($('#modal').classList.contains('open')) {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') stepModal(1);
      if (e.key === 'ArrowLeft') stepModal(-1);
    } else if (e.key === 'Escape' && current) go('home');
  });

  /* ---------- modal viewer ---------- */
  let mIdx = -1;
  function openModal(i) {
    const n = gallery[i]; if (!n) return;
    mIdx = i;
    $('#modalTitle').textContent = n.label;
    $('#modalOpen').href = n.src;
    $('#modalBody').innerHTML = n.t === 'img' ? `<img src="${esc(n.src)}" alt="${esc(n.label)}">` : `<iframe src="${esc(n.src)}#view=FitH" title="${esc(n.label)}"></iframe>`;
    $('#modal').classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeModal() { $('#modal').classList.remove('open'); $('#modalBody').innerHTML = ''; document.body.style.overflow = ''; }
  function stepModal(d) { if (gallery.length) openModal((mIdx + d + gallery.length) % gallery.length); }
  $('#modalClose').addEventListener('click', closeModal);
  $('#modalNext').addEventListener('click', () => stepModal(1));
  $('#modalPrev').addEventListener('click', () => stepModal(-1));
  $('#modal').addEventListener('click', (e) => { if (e.target.id === 'modal') closeModal(); });

  function downloadVcard() {
    const c = P.contacts;
    const v = ['BEGIN:VCARD', 'VERSION:3.0', 'N:Varela Pinto;Pedro Dinis;;;', 'FN:Pedro Varela Pinto', `TEL;TYPE=CELL:${c.mobile.replace(/\s/g, '')}`,
      `EMAIL:${c.email}`, `URL:${c.linkedin}`, 'ADR;TYPE=HOME:;;Rua Rodrigo Reinel nº4 4ºEsq;Lisboa;;1400-320;Portugal', 'BDAY:1968-03-03', 'END:VCARD'].join('\r\n');
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([v], { type: 'text/vcard' }));
    a.download = 'Pedro_Varela_Pinto.vcf'; a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  }

  /* ---------- theme ---------- */
  const themeBtn = $('#themeBtn');
  function setTheme(t) {
    document.documentElement.dataset.theme = t;
    themeBtn.innerHTML = icon(t === 'light' ? 'moon' : 'sunTheme');
    try { localStorage.setItem('pf-theme', t); } catch { /* storage unavailable */ }
  }
  let saved = null;
  try { saved = localStorage.getItem('pf-theme'); } catch { /* storage unavailable */ }
  setTheme(saved || 'dark');
  themeBtn.addEventListener('click', () => setTheme(document.documentElement.dataset.theme === 'light' ? 'dark' : 'light'));

  /* ---------- animated background: neural network ---------- */
  (function network() {
    const cv = $('#bg'); const ctx = cv.getContext('2d');
    if (reduced || !ctx) return;
    let w, h, pts; const mouse = { x: -999, y: -999 };
    const dpr = Math.min(devicePixelRatio || 1, 2);
    function size() {
      w = cv.width = innerWidth * dpr; h = cv.height = innerHeight * dpr;
      cv.style.width = innerWidth + 'px'; cv.style.height = innerHeight + 'px';
      const n = Math.min(90, Math.round((innerWidth * innerHeight) / 16000));
      pts = Array.from({ length: n }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - .5) * .35 * dpr, vy: (Math.random() - .5) * .35 * dpr }));
    }
    size(); addEventListener('resize', size);
    addEventListener('pointermove', (e) => { mouse.x = e.clientX * dpr; mouse.y = e.clientY * dpr; });
    const link = 140 * dpr;
    (function frame() {
      ctx.clearRect(0, 0, w, h);
      const col = document.documentElement.dataset.theme === 'light' ? '69,82,230' : '111,125,255';
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        const dx = p.x - mouse.x, dy = p.y - mouse.y, dm = Math.hypot(dx, dy);
        if (dm < 120 * dpr) { p.x += dx / dm; p.y += dy / dm; }
      }
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i], b = pts[j], d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < link) { ctx.strokeStyle = `rgba(${col},${(1 - d / link) * .35})`; ctx.lineWidth = dpr * .8; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
        }
        ctx.fillStyle = `rgba(${col},.8)`; ctx.beginPath(); ctx.arc(pts[i].x, pts[i].y, 1.6 * dpr, 0, 7); ctx.fill();
      }
      if (!document.hidden) requestAnimationFrame(frame); else setTimeout(() => requestAnimationFrame(frame), 500);
    })();
  })();

  /* ---------- boot ---------- */
  buildHome();
  reveal($('#home'));
  const kObs = 'IntersectionObserver' in window ? new IntersectionObserver((ents, o) => { if (ents.some((e) => e.isIntersecting)) { runCounters(); o.disconnect(); } }) : null;
  kObs ? kObs.observe($('#kpis')) : runCounters();
  route();
})();
