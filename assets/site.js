/* STUDIO DGO — site motoru. İçerik için assets/icerik.js dosyasını düzenleyin. */
(function () {
  const S = window.SITE, P = window.PROJELER || [];
  const sayfa = document.body.dataset.page;
  const $ = (q, el = document) => el.querySelector(q);
  const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const AR = '<span class="ar">→</span>';

  /* ---------- DİL (TR / EN / NL) ---------- */
  const DILLER = ["tr", "en", "nl"];
  const urlDil = new URLSearchParams(location.search).get("lang");
  let kayitliDil = null; try { kayitliDil = sessionStorage.getItem("dgo-lang"); } catch (e) {}
  const L = DILLER.includes(urlDil) ? urlDil : DILLER.includes(kayitliDil) ? kayitliDil : "en";
  if (urlDil && DILLER.includes(urlDil)) { try { sessionStorage.setItem("dgo-lang", urlDil); } catch (e) {} }
  document.documentElement.lang = L;
  // içerik metni: {tr,en,nl} nesnesi ya da düz metin
  const t = v => (v && typeof v === "object" && !Array.isArray(v) && ("tr" in v || "en" in v || "nl" in v)) ? (v[L] ?? v.en ?? v.tr) : v;
  const UI = {
    projeler:   { tr: "Projeler", en: "Projects", nl: "Projecten" },
    hakkimizda: { tr: "Hakkımızda", en: "About", nl: "Over ons" },
    iletisim:   { tr: "İletişim", en: "Contact", nl: "Contact" },
    menu:       { tr: "Menü", en: "Menu", nl: "Menu" },
    anaSayfa:   { tr: "Ana sayfa", en: "Home", nl: "Home" },
    anaSayfaDon:{ tr: "Ana sayfaya dön", en: "Back to home", nl: "Terug naar home" },
    dil:        { tr: "Dil seçimi", en: "Language", nl: "Taal" },
    adres:      { tr: "Adres", en: "Address", nl: "Adres" },
    takip:      { tr: "Takip Edin", en: "Follow", nl: "Volg ons" },
    haklar:     { tr: "Tüm hakları saklıdır.", en: "All rights reserved.", nl: "Alle rechten voorbehouden." },
    yukari:     { tr: "Sayfanın başına dön", en: "Back to top", nl: "Terug naar boven" },
    proje:      { tr: "Proje", en: "Project", nl: "Project" },
    projeSayi:  { tr: n => `${n} Proje`, en: n => `${n} ${n === 1 ? "Project" : "Projects"}`, nl: n => `${n} ${n === 1 ? "project" : "projecten"}` },
    incele:     { tr: "Projeyi İncele", en: "View Project", nl: "Bekijk project" },
    tumProjeler:{ tr: "Tüm Projeler", en: "All Projects", nl: "Alle projecten" },
    instagram:  { tr: "Yolculuğumuzu Instagram'da takip edin.", en: "Follow our journey on Instagram.", nl: "Volg onze reis op Instagram." },
    tumu:       { tr: "Tümü", en: "All", nl: "Alle" },
    konum:      { tr: "Konum", en: "Location", nl: "Locatie" },
    yil:        { tr: "Yıl", en: "Year", nl: "Jaar" },
    kategori:   { tr: "Kategori", en: "Category", nl: "Categorie" },
    alan:       { tr: "Alan", en: "Area", nl: "Oppervlakte" },
    durum:      { tr: "Durum", en: "Status", nl: "Status" },
    sonraki:    { tr: "Sonraki Proje", en: "Next Project", nl: "Volgend project" },
    kapat:      { tr: "KAPAT", en: "CLOSE", nl: "SLUITEN" },
    onceki:     { tr: "Önceki görsel", en: "Previous image", nl: "Vorige afbeelding" },
    sonrakiGorsel:{ tr: "Sonraki görsel", en: "Next image", nl: "Volgende afbeelding" },
    bulunamadi: { tr: "Proje bulunamadı", en: "Project not found", nl: "Project niet gevonden" },
    eposta:     { tr: "E-posta", en: "Email", nl: "E-mail" },
    telefon:    { tr: "Telefon", en: "Phone", nl: "Telefoon" },
    epostaGonder:{ tr: "E-posta gönderin", en: "Send an email", nl: "Stuur een e-mail" },
    epostaKonu: { tr: "Proje / teklif talebi", en: "Project / quote request", nl: "Project / offerteaanvraag" },
    gorsel:     { tr: "Görsel", en: "Image", nl: "Afbeelding" },
    baslikAna:  { tr: "Mimarlık", en: "Architecture", nl: "Architectuur" }
  };
  const u = k => UI[k][L] ?? UI[k].tr;

  // görsel: dosya yoksa gri yer tutucu kalır
  const gorsel = (src, alt, cls = "") =>
    `<div class="ph ${cls}" data-label="${esc(alt || u("gorsel"))}">${src ? `<img src="${esc(src)}" alt="${esc(alt)}" loading="lazy" class="loading" onload="this.classList.remove('loading');this.parentNode.classList.add('ok')" onerror="this.remove()">` : ""}</div>`;
  const link = p => `proje.html#${encodeURIComponent(p.slug)}`;
  const sayfaLogo = () => `<a href="index.html" class="plogo rv" aria-label="${esc(S.ad)}">${window.LOGO_TAM}</a>`;

  /* ---------- header & footer ---------- */
  const navItems = [["projeler.html", u("projeler").toLocaleUpperCase(L), "projeler"], ["hakkimizda.html", u("hakkimizda").toLocaleUpperCase(L), "hakkimizda"], ["iletisim.html", u("iletisim").toLocaleUpperCase(L), "iletisim"]];
  const dilSecici = `<div class="langs" role="group" aria-label="${esc(u("dil"))}">${DILLER.map(d => `<button type="button" data-lang="${d}" class="${d === L ? "on" : ""}" aria-pressed="${d === L}" lang="${d}">${d.toUpperCase()}</button>`).join("")}</div>`;
  const overHero = sayfa === "anasayfa" || sayfa === "proje";
  document.body.insertAdjacentHTML("afterbegin", `
    <header class="hdr ${overHero ? "over" : "solid"}">
      ${sayfa === "anasayfa" ? `<span aria-hidden="true"></span>` : `<a href="index.html" class="logo" aria-label="${esc(u("anaSayfaDon"))}" title="${esc(u("anaSayfa"))}">${window.LOGO_ISARET}</a>`}
      <nav class="nav"><a href="index.html" class="mlogo" aria-label="${esc(S.ad)}">${window.LOGO_TAM}</a>${navItems.map(([h, t, k]) => `<a href="${h}" class="${k === sayfa || (k === "projeler" && sayfa === "proje") ? "on" : ""}">${t}</a>`).join("")}${dilSecici}</nav>
      <button class="burger" aria-label="${esc(u("menu"))}"><span></span><span></span></button>
    </header>`);
  const hdr = $(".hdr");
  document.querySelectorAll(".langs button").forEach(b => b.onclick = () => {
    try { sessionStorage.setItem("dgo-lang", b.dataset.lang); } catch (e) {}
    const url = new URL(location.href); url.searchParams.set("lang", b.dataset.lang); location.href = url.toString();
  });
  $(".burger").onclick = () => document.body.classList.toggle("menu-open");
  if (overHero) {
    const onScroll = () => { const solid = scrollY > innerHeight * 0.6; hdr.classList.toggle("solid", solid); hdr.classList.toggle("over", !solid); };
    addEventListener("scroll", onScroll, { passive: true }); onScroll();
  }

  const I = S.iletisim, so = S.sosyal;
  const sosyalLinkler = [["Instagram", so.instagram], ["LinkedIn", so.linkedin], ["Behance", so.behance]].filter(x => x[1]);
  document.body.insertAdjacentHTML("beforeend", `
    <footer class="ftr">
      <div class="ftr-top">
        <div><a href="index.html" class="logo flogo" aria-label="${esc(S.ad)}">${window.LOGO_TAM}</a><p style="margin-top:18px;color:#7f7c74">${esc(t(S.slogan))}</p></div>
        <div>${I.adres ? `<h5>${u("adres")}</h5><p>${I.adres}</p>` : ""}</div>
        <div><h5>${u("iletisim")}</h5><p>${I.telefon ? `<a href="tel:${I.telefon.replace(/\s/g, "")}">${esc(I.telefon)}</a><br>` : ""}<a href="mailto:${esc(I.eposta)}">${esc(I.eposta)}</a></p></div>
        <div><h5>${u("takip")}</h5><p>${sosyalLinkler.map(([n, u]) => `<a href="${esc(u)}" target="_blank" rel="noopener">${n}</a>`).join("<br>")}</p></div>
      </div>
      <div class="ftr-bot"><span>© ${new Date().getFullYear()} ${esc(S.ad)}. ${u("haklar")}</span><button type="button" class="totop" aria-label="${esc(u("yukari"))}">↑</button></div>
    </footer>`);

  $(".totop").onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const BASLIK = { anasayfa: `${S.ad} | ${u("baslikAna")}`, projeler: `${u("projeler")} — ${S.ad}`, hakkimizda: `${u("hakkimizda")} — ${S.ad}`, iletisim: `${u("iletisim")} — ${S.ad}` };
  if (BASLIK[sayfa]) document.title = BASLIK[sayfa];

  const main = $("main");

  /* ---------- ANA SAYFA ---------- */
  if (sayfa === "anasayfa") {
    const one = P.find(p => p.slug === S.oneCikanProje) || P[0];
    main.innerHTML = `
      <section class="hero">
        ${gorsel(one && one.kapak, one ? one.ad : "")}
        <div class="hero-txt">
          <div><h1 class="hlogo" aria-label="${esc(S.ad)}">${window.LOGO_TAM}</h1><div class="tag">${esc(t(S.slogan))}</div></div>
          <a href="projeler.html" class="btn">${u("projeler")} ${AR}</a>
        </div>
        <div class="scroll-cue"></div>
      </section>
      <section class="sec wrap">
        <div class="sec-head rv"><h2>${u("projeler")}</h2><span class="eyebrow">${UI.projeSayi[L](P.length)}</span></div>
        <ul class="plist">${P.map(p => `
          <li class="rv"><a class="prow" href="${link(p)}">
            ${gorsel(p.kapak, p.ad)}
            <span class="nm">${esc(p.ad)}</span>
            <span class="meta">${esc(t(p.konum))}</span>
            <span class="meta">${esc(p.yil)}</span>
            <span class="go">${u("incele")} ${AR}</span>
          </a></li>`).join("")}
        </ul>
        <div class="all-link rv"><a href="projeler.html" class="btn">${u("tumProjeler")} ${AR}</a></div>
      </section>
      ${so.instagram ? `<section class="wrap" style="padding-bottom:clamp(70px,10vw,140px)"><div class="insta rv"><p>${u("instagram")}</p><a class="btn" href="${esc(so.instagram)}" target="_blank" rel="noopener">Instagram ${AR}</a></div></section>` : ""}`;
  }

  /* ---------- PROJELER ---------- */
  if (sayfa === "projeler") {
    const kats = [...new Set(P.map(p => t(p.kategori)).filter(Boolean))];
    main.innerHTML = `
      <section class="wrap page-top" style="padding-bottom:clamp(70px,10vw,140px)">
        <h1 class="page-title">${u("projeler")}</h1>
        ${kats.length > 1 ? `<div class="filters"><button class="on" data-k="">${u("tumu")}</button>${kats.map(k => `<button data-k="${esc(k)}">${esc(k)}</button>`).join("")}</div>` : `<div style="height:50px"></div>`}
        <div class="pgrid">${P.map(p => `
          <a class="card rv" href="${link(p)}" data-k="${esc(t(p.kategori))}">
            ${gorsel(p.kapak, p.ad)}
            <div class="card-b"><h3>${esc(p.ad)}</h3><span>${esc(p.yil)}</span></div>
            <div class="cat">${esc([t(p.kategori), t(p.konum)].filter(Boolean).join(" · "))}</div>
          </a>`).join("")}
        </div>
      </section>`;
    main.querySelectorAll(".filters button").forEach(b => b.onclick = () => {
      main.querySelectorAll(".filters button").forEach(x => x.classList.toggle("on", x === b));
      main.querySelectorAll(".card").forEach(c => c.classList.toggle("hide", !!b.dataset.k && c.dataset.k !== b.dataset.k));
    });
  }

  /* ---------- PROJE DETAY ---------- */
  if (sayfa === "proje") {
    const slug = decodeURIComponent(location.hash.slice(1)) || new URLSearchParams(location.search).get("p");
    addEventListener("hashchange", () => location.reload());
    const i = Math.max(0, P.findIndex(p => p.slug === slug));
    const p = P[i];
    if (!p) { main.innerHTML = `<section class="wrap page-top sec"><h1 class="page-title">${u("bulunamadi")}</h1></section>`; return; }
    const sonraki = P[(i + 1) % P.length];
    document.title = `${p.ad} — ${S.ad}`;
    const facts = [[u("konum"), t(p.konum)], [u("yil"), t(p.yil)], [u("kategori"), t(p.kategori)], [u("alan"), t(p.alan)], [u("durum"), t(p.durum)]].filter(f => f[1]);
    const galRaw = p.galeri || [];
    const galObj = galRaw.map(g => typeof g === "string" ? { src: g } : g);
    const gal = galObj.map(g => g.src);
    main.innerHTML = `
      <section class="d-hero">${gorsel(p.kapak, p.ad)}</section>
      <div class="wrap">
        <section class="d-head">
          <div class="rv"><span class="eyebrow">${esc(t(p.kategori) || u("proje"))}</span><h1 style="margin-top:14px">${esc(p.ad)}</h1></div>
          <dl class="facts rv">${facts.map(([k, v]) => `<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>
        </section>
        ${(t(p.aciklama) || []).length || p.fotograf ? `<section class="d-text">
          <div class="body rv">${(t(p.aciklama) || []).map(x => `<p>${esc(x)}</p>`).join("")}</div>
          ${p.fotograf ? `<div class="credit rv">${esc(t(p.fotograf))}</div>` : ""}
        </section>` : ""}
        ${gal.length ? `<section class="gallery">${galObj.map((g, n) => `<div class="rv" style="${g.genis ? "grid-column:1/-1" : ""}">${gorsel(g.src, `${p.ad} ${n + 1}`, g.genis ? "wide" : "")}</div>`).join("")}</section>` : ""}
        ${P.length > 1 ? `<a class="next" href="${link(sonraki)}"><span class="eyebrow">${u("sonraki")}</span><div class="nm"><span>${esc(sonraki.ad)}</span>${AR}</div></a>` : ""}
      </div>
      <div class="lb"><button class="x">${u("kapat")} ✕</button><button class="pv" aria-label="${esc(u("onceki"))}">←</button><img alt=""><button class="nx" aria-label="${esc(u("sonrakiGorsel"))}">→</button></div>`;
    // lightbox
    const lb = $(".lb"), lbImg = $("img", lb); let cur = 0;
    const show = n => { cur = (n + gal.length) % gal.length; lbImg.src = gal[cur]; lb.classList.add("open"); };
    main.querySelectorAll(".gallery .ph").forEach((el, n) => el.onclick = () => { if ($("img", el)) show(n); });
    $(".x", lb).onclick = () => lb.classList.remove("open");
    $(".pv", lb).onclick = () => show(cur - 1); $(".nx", lb).onclick = () => show(cur + 1);
    addEventListener("keydown", e => { if (!lb.classList.contains("open")) return; if (e.key === "Escape") lb.classList.remove("open"); if (e.key === "ArrowLeft") show(cur - 1); if (e.key === "ArrowRight") show(cur + 1); });
  }

  /* ---------- HAKKIMIZDA ---------- */
  if (sayfa === "hakkimizda") {
    const H = t(S.hakkimizda);
    main.innerHTML = `
      <section class="wrap page-top" style="padding-bottom:clamp(70px,10vw,140px)">
        <span class="eyebrow">${u("hakkimizda")}</span>
        <h1 class="page-title" style="margin-top:14px">${esc(H.baslik)}</h1>
        <div class="about">
          <p class="lead rv">${esc(H.giris)}</p>
          <div class="body rv">${H.paragraflar.map(x => `<p>${esc(x)}</p>`).join("")}</div>
        </div>
        ${S.ekip.length ? `<div class="team">${S.ekip.map(e => `<div class="rv">${e.foto ? gorsel(e.foto, e.ad) : ""}<h4>${esc(e.ad)}</h4><span>${esc(t(e.unvan))}</span></div>`).join("")}</div>` : ""}
        <div class="sec-head rv" style="margin-top:clamp(80px,10vw,140px)"><h2>${esc(H.yaklasimBaslik)}</h2></div>
        <div class="about">
          <p class="lead rv">${esc(H.yaklasimGiris)}</p>
          <div class="body rv">${H.yaklasim.map(x => `<p>${esc(x)}</p>`).join("")}</div>
        </div>
        <div class="motto rv"><span class="eyebrow">${esc(S.ad)}</span><p>${esc(H.slogan)}</p></div>
      </section>`;
  }

  /* ---------- İLETİŞİM ---------- */
  if (sayfa === "iletisim") {
    main.innerHTML = `
      <section class="wrap page-top" style="padding-bottom:clamp(70px,10vw,140px)">
        <span class="eyebrow">${u("iletisim")}</span>
        <h1 class="contact-title">${esc(t(I.baslik))}</h1>
        <p class="contact-intro rv">${esc(t(I.metin))}</p>
        <a class="btn contact-btn rv" href="mailto:${esc(I.eposta)}?subject=${encodeURIComponent(u("epostaKonu"))}">${u("epostaGonder")} ${AR}</a>
        <div class="contact">
          <div class="rv"><span class="eyebrow">${u("eposta")}</span><a class="v" style="display:block" href="mailto:${esc(I.eposta)}">${esc(I.eposta)}</a></div>
          ${I.telefon ? `<div class="rv"><span class="eyebrow">${u("telefon")}</span><a class="v" style="display:block" href="tel:${I.telefon.replace(/\s/g, "")}">${esc(I.telefon)}</a></div>` : ""}
          ${I.adres ? `<div class="rv"><span class="eyebrow">${u("adres")}</span><p class="v">${I.adres}</p></div>` : ""}
        </div>
        ${I.harita ? `<div class="map rv"><iframe src="${esc(I.harita)}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>` : ""}
      </section>`;
  }

  /* ---------- görünme animasyonu ---------- */
  const io = "IntersectionObserver" in window ? new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.12 }) : null;
  document.querySelectorAll(".rv").forEach(el => io ? io.observe(el) : el.classList.add("in"));
})();
