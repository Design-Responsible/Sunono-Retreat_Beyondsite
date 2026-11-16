// All interface motion for the site. Each block finds its own markup via
// data-* attributes, so sections can be swapped without touching this file.
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const $$ = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => [...r.querySelectorAll<T>(s)] as T[];
const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));

/* ── header: shade after scrolling, "more" menu, phone sheet ── */
const header = document.querySelector<HTMLElement>('[data-header]');
const onScrollHeader = () => header?.classList.toggle('scrolled', scrollY > 40);
addEventListener('scroll', onScrollHeader, { passive: true }); onScrollHeader();
$$('[data-more]').forEach((m) => {
  const b = m.querySelector('button')!;
  b.addEventListener('click', () => { const o = m.classList.toggle('open'); b.setAttribute('aria-expanded', String(o)); });
  document.addEventListener('click', (e) => { if (!m.contains(e.target as Node)) { m.classList.remove('open'); b.setAttribute('aria-expanded', 'false'); } });
});
const burger = document.querySelector<HTMLButtonElement>('[data-burger]');
burger?.addEventListener('click', () => {
  const o = header!.classList.toggle('menu-open');
  burger.setAttribute('aria-expanded', String(o)); burger.setAttribute('aria-label', o ? 'Close menu' : 'Open menu');
  document.body.style.overflow = o ? 'hidden' : '';
});
$$('[data-sheet] a').forEach((a) => a.addEventListener('click', () => { header!.classList.remove('menu-open'); document.body.style.overflow = ''; }));

/* ── scroll reveal ── */
const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
$$('[data-reveal], [data-band]').forEach((el) => io.observe(el));

/* ── hero photo blinds ── */
$$('[data-blinds]').forEach((hero) => {
  const imgs = $$<HTMLImageElement>('img.ph', hero);
  const slatsEl = hero.querySelector<HTMLElement>('.slats')!;
  const bars = $$<HTMLElement>('[data-bar]', hero);
  const hold = +hero.dataset.hold!, dur = +hero.dataset.dur!, n = +hero.dataset.slats!;
  if (imgs.length < 2) return;
  let i = 0, timer = 0, visible = true;
  imgs.slice(1).forEach((im) => { im.loading = 'eager'; });
  const runBar = (k: number) => bars.forEach((b, j) => {
    b.style.transition = 'none'; b.style.transform = `scaleX(${j < k ? 1 : 0})`;
    if (j === k) requestAnimationFrame(() => requestAnimationFrame(() => { b.style.transition = `transform ${hold + dur}ms linear`; b.style.transform = 'scaleX(1)'; }));
  });
  const next = () => {
    const nxt = (i + 1) % imgs.length;
    if (nxt === 0) runBar(-1);
    if (reduce) { imgs[i].classList.remove('is-on'); imgs[nxt].classList.add('is-on'); i = nxt; runBar(i); return schedule(); }
    slatsEl.innerHTML = '';
    for (let s = 0; s < n; s++) {
      const sl = document.createElement('span');
      sl.style.backgroundImage = `url(${imgs[nxt].currentSrc || imgs[nxt].src})`;
      sl.style.backgroundSize = 'cover';
      sl.style.backgroundPosition = `${(s / (n - 1)) * 100}% 50%`;
      sl.style.transition = `transform ${dur * 0.55}ms cubic-bezier(.65,0,.35,1) ${(s / n) * dur * 0.45}ms`;
      slatsEl.appendChild(sl);
    }
    // background-size cover per slat would rescale each slat; use one wide image per slat instead
    $$<HTMLElement>('span', slatsEl).forEach((sl, s) => { sl.style.backgroundSize = `${n * 100}% 100%`; sl.style.backgroundPosition = `${(s / (n - 1)) * 100}% 50%`; });
    requestAnimationFrame(() => requestAnimationFrame(() => $$<HTMLElement>('span', slatsEl).forEach((sl) => (sl.style.transform = 'scaleY(1)'))));
    setTimeout(() => { imgs[i].classList.remove('is-on'); imgs[nxt].classList.add('is-on'); slatsEl.innerHTML = ''; i = nxt; }, dur + 40);
    runBar(nxt);
    schedule();
  };
  const schedule = () => { clearTimeout(timer); timer = window.setTimeout(() => (visible ? next() : schedule()), hold + dur); };
  new IntersectionObserver(([e]) => (visible = e.isIntersecting)).observe(hero);
  runBar(0); schedule();
});

/* ── words light up while scrolling (01 statement) ── */
$$('[data-words]').forEach((h) => {
  const ws = $$('.w', h);
  const upd = () => {
    const r = h.getBoundingClientRect();
    const p = clamp((innerHeight * 0.85 - r.top) / (r.height + innerHeight * 0.35));
    const k = Math.round(p * ws.length);
    ws.forEach((w, j) => w.classList.toggle('on', j < k));
  };
  if (reduce) return ws.forEach((w) => w.classList.add('on'));
  addEventListener('scroll', upd, { passive: true }); upd();
});

/* ── carousels with arrows (rooms, route) ── */
$$('[data-carousel]').forEach((c) => {
  const t = c.querySelector<HTMLElement>('[data-track]')!;
  const prev = c.querySelector<HTMLButtonElement>('[data-prev]')!, nxt = c.querySelector<HTMLButtonElement>('[data-next]')!;
  const step = () => (t.firstElementChild as HTMLElement).getBoundingClientRect().width + parseFloat(getComputedStyle(t).columnGap || '0');
  const upd = () => { prev.disabled = t.scrollLeft < 4; nxt.disabled = t.scrollLeft + t.clientWidth >= t.scrollWidth - 4; };
  prev.addEventListener('click', () => t.scrollBy({ left: -step() * 2 }));
  nxt.addEventListener('click', () => t.scrollBy({ left: step() * 2 }));
  t.addEventListener('scroll', upd, { passive: true }); addEventListener('resize', upd); upd();
});

/* ── amenities tabs with photo cross-fade ── */
$$('[data-tabs]').forEach((root) => {
  const tabs = $$<HTMLButtonElement>('[role=tab]', root), panels = $$('[data-panel]', root), photos = $$('[data-photo]', root);
  const sel = (k: number, focus = false) => {
    tabs.forEach((t, j) => { t.setAttribute('aria-selected', String(j === k)); t.tabIndex = j === k ? 0 : -1; });
    panels.forEach((p, j) => (p.hidden = j !== k));
    photos.forEach((p, j) => p.classList.toggle('on', j === k));
    if (focus) tabs[k].focus();
  };
  tabs.forEach((t, k) => {
    t.addEventListener('click', () => sel(k));
    t.addEventListener('keydown', (e) => {
      const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (d) { e.preventDefault(); sel((k + d + tabs.length) % tabs.length, true); }
    });
  });
});

/* ── location band: places light up in turn ── */
$$('[data-band]').forEach((b) => {
  const ps = $$('[data-place]', b); let k = 0;
  if (ps.length < 2 || reduce) return;
  setInterval(() => { ps[k].classList.remove('on'); k = (k + 1) % ps.length; ps[k].classList.add('on'); }, 2200);
});

/* ── FAQ accordion ── */
$$('[data-acc]').forEach((it) => {
  const b = it.querySelector('button')!;
  b.addEventListener('click', () => { const o = it.classList.toggle('open'); b.setAttribute('aria-expanded', String(o)); });
});

/* ── a day at the house: hover / tap expands a slot ── */
$$('[data-day]').forEach((d) => {
  const ss = $$('[data-slot]', d);
  const on = (k: number) => ss.forEach((s, j) => s.classList.toggle('on', j === k));
  ss.forEach((s, k) => { s.addEventListener('mouseenter', () => on(k)); s.addEventListener('focus', () => on(k)); s.addEventListener('click', () => on(k)); });
});

/* ── price estimate ── */
$$<HTMLFormElement>('[data-price]').forEach((f) => {
  const price = +f.dataset.price!, fees: [string, number][] = JSON.parse(f.dataset.fees!);
  const st = { nights: 3, guests: 2 };
  const arrive = f.querySelector<HTMLInputElement>('[data-arrive]')!;
  const d0 = new Date(); d0.setDate(d0.getDate() + 14);
  arrive.valueAsDate = d0; arrive.min = new Date().toISOString().slice(0, 10);
  const fmt = (d: Date) => d.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' });
  const money = (v: number) => '$' + v.toLocaleString('en-US');
  const render = () => {
    const a = arrive.valueAsDate || d0, dep = new Date(a); dep.setDate(dep.getDate() + st.nights);
    f.querySelector('[data-arrive-text]')!.textContent = fmt(a);
    f.querySelector('[data-depart-text]')!.textContent = 'to ' + fmt(dep);
    f.querySelector('[data-nights]')!.textContent = String(st.nights);
    f.querySelector('[data-guests]')!.textContent = String(st.guests);
    f.querySelector('[data-line-label]')!.textContent = `${money(price)} × ${st.nights} nights`;
    f.querySelector('[data-line-total]')!.textContent = money(price * st.nights);
    f.querySelector('[data-total]')!.textContent = money(price * st.nights + fees.reduce((s, [, v]) => s + v, 0));
  };
  const lim = { nights: [2, 28], guests: [1, 4] } as const;
  $$<HTMLButtonElement>('[data-inc],[data-dec]', f).forEach((b) => b.addEventListener('click', () => {
    const k = (b.dataset.inc || b.dataset.dec) as 'nights' | 'guests';
    st[k] = clamp(st[k] + (b.dataset.inc ? 1 : -1), lim[k][0], lim[k][1]); render();
  }));
  arrive.addEventListener('change', render);
  render();
});

/* ── gallery lightbox ── */
$$('[data-lightbox-group]').forEach((g) => {
  const dlg = g.closest('section')!.querySelector<HTMLDialogElement>('[data-lightbox-dialog]')!;
  const tiles = $$<HTMLButtonElement>('[data-lightbox]', g);
  const slot = dlg.querySelector<HTMLElement>('[data-lb-slot]')!, cap = dlg.querySelector<HTMLElement>('[data-lb-cap]')!;
  let k = 0;
  const show = (j: number) => {
    k = (j + tiles.length) % tiles.length;
    const src = tiles[k].querySelector('img')!;
    const im = new Image(); im.src = src.currentSrc || src.src; im.alt = src.alt;
    slot.replaceChildren(im); cap.textContent = src.alt;
  };
  tiles.forEach((t, j) => t.addEventListener('click', () => { show(j); dlg.showModal(); }));
  dlg.querySelector('[data-lb-close]')!.addEventListener('click', () => dlg.close());
  dlg.querySelector('[data-lb-prev]')!.addEventListener('click', () => show(k - 1));
  dlg.querySelector('[data-lb-next]')!.addEventListener('click', () => show(k + 1));
  dlg.addEventListener('keydown', (e) => { if (e.key === 'ArrowLeft') show(k - 1); if (e.key === 'ArrowRight') show(k + 1); });
  dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });
});

/* ── photo closer: chip grows into a full-screen window, then three lines ── */
$$('[data-closer]').forEach((sec) => {
  if (reduce) return;
  const win = sec.querySelector<HTMLElement>('[data-closer-win]')!, line = sec.querySelector<HTMLElement>('[data-closer-line]')!;
  const slot = sec.querySelector<HTMLElement>('[data-chip-slot]')!, chip = sec.querySelector<HTMLElement>('[data-chip-img]')!;
  const imgs = $$('[data-step-img]', sec), steps = $$('[data-step]', sec);
  const upd = () => {
    const r = sec.getBoundingClientRect();
    const total = r.height - innerHeight;
    const p = clamp(-r.top / total);
    const s = slot.getBoundingClientRect();
    const grow = clamp((p - 0.08) / 0.24);
    const e = grow < .5 ? 4 * grow ** 3 : 1 - (-2 * grow + 2) ** 3 / 2;
    const w = s.width + (innerWidth - s.width) * e, h = s.height + (innerHeight - s.height) * e;
    const cx = s.left + s.width / 2, cy = s.top + s.height / 2;
    win.style.width = `${w}px`; win.style.height = `${h}px`;
    win.style.left = `${cx + (innerWidth / 2 - cx) * e}px`; win.style.top = `${cy + (innerHeight / 2 - cy) * e}px`;
    win.style.borderRadius = `${40 * (1 - e)}px`;
    line.style.opacity = String(1 - clamp((grow - .6) / .3));
    win.style.setProperty('--shade', String(clamp((p - 0.3) / 0.08)));
    chip.classList.toggle('on', p < 0.34);
    const sp = clamp((p - 0.36) / 0.6) * steps.length;
    const cur = Math.min(steps.length - 1, Math.floor(sp));
    steps.forEach((st, j) => { st.classList.toggle('on', p > .36 && j === cur); st.classList.toggle('past', p > .36 && j < cur); });
    imgs.forEach((im, j) => im.classList.toggle('on', j === cur));
  };
  addEventListener('scroll', upd, { passive: true }); addEventListener('resize', upd); upd();
});

/* ── footer giant wordmark rises in ── */
$$('[data-giant] span').forEach((sp) => {
  // fit the name to the full width of the wrap, whatever the name is
  const fit = () => {
    sp.style.fontSize = '100px'; sp.style.display = 'inline-block';
    const w = sp.getBoundingClientRect().width, avail = sp.parentElement!.clientWidth;
    sp.style.fontSize = `${(100 * avail) / w}px`; sp.style.display = 'block';
  };
  document.fonts.ready.then(fit); addEventListener('resize', fit); fit();
  if (reduce) return sp.style.setProperty('--gy', '0%');
  const upd = () => { const r = sp.getBoundingClientRect(); const p = clamp((innerHeight - r.top) / (r.height * 1.4)); sp.style.setProperty('--gy', `${(1 - p) * 30}%`); };
  addEventListener('scroll', upd, { passive: true }); upd();
});
