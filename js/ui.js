/* Navigasi, scroll, render kartu, foto, tanggal */
(function () {
  const $ = s => document.querySelector(s);
  const i18n = window.VIS.i18n;

  /* reveal on scroll */
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("on"); io.unobserve(e.target); }
  }), { threshold: .12 });
  document.querySelectorAll(".rv").forEach(el => io.observe(el));

  /* skills + projects (dirender ulang saat bahasa berganti) */
  function renderCards() {
    $("#skillGrid").innerHTML = i18n.t("skills").map(s =>
      `<div class="card rv on"><div class="ic">${s[0].replace(/</g, "&lt;")}</div><h3>${s[1]}</h3><p>${s[2]}</p><span class="mat-note">${i18n.t("materialized")}</span></div>`).join("");
    $("#projectGrid").innerHTML = i18n.t("projects").map((p, i) =>
      `<div class="card pj rv on"><span class="num">0${i + 1}</span><h3>${p[0]}</h3><p>${p[1]}</p><div class="tech">${p[2]}</div><a href="#">${i18n.t("viewProject")}</a></div>`).join("");
  }

  /* tanggal */
  function renderDate() {
    const loc = i18n.lang === "id" ? "id-ID" : "en-GB";
    $("#today").textContent = new Date().toLocaleDateString(loc, { day: "2-digit", month: "short", year: "numeric" }).replace(/\./g, "").toUpperCase();
  }

  i18n.onChange(() => { renderCards(); renderDate(); });
  renderCards(); renderDate();
  $("#year").textContent = new Date().getFullYear();

  /* language toggle */
  document.querySelectorAll(".lang button").forEach(b => b.addEventListener("click", () => i18n.set(b.dataset.lang)));

  /* mobile menu */
  const nav = $("#nav"), burger = $("#burger");
  burger.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    burger.setAttribute("aria-expanded", open);
  });
  document.querySelectorAll("#menu a").forEach(a => a.addEventListener("click", () => {
    nav.classList.remove("open"); burger.setAttribute("aria-expanded", "false");
  }));

  /* scrollspy */
  const links = [...document.querySelectorAll("#menu a")];
  const spy = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
  }), { rootMargin: "-45% 0px -50% 0px" });
  ["home", "about", "skills", "projects", "contact"].forEach(id => spy.observe(document.getElementById(id)));

  /* progress bar */
  const bar = $("#progress");
  function progress() {
    const max = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? Math.min(1, scrollY / max) : 0})`;
  }
  addEventListener("scroll", progress, { passive: true }); progress();

  /* foto: tap / Enter untuk ganti di perangkat sentuh */
  const photo = $("#photo");
  photo.addEventListener("click", () => photo.classList.toggle("flip"));
  photo.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); photo.classList.toggle("flip"); } });
})();
