/* Terjemahan EN / ID + helper */
(function () {
  const T = {
    en: {
      "nav.home": "Home", "nav.about": "About", "nav.skills": "Skills", "nav.projects": "Projects", "nav.contact": "Contact",
      "code.power": "Turns whatever he imagines into reality",
      "code.a1": "Materializes pure imagination",
      "code.a2": "Summons meteors and anything he can picture",
      "code.a3": "Reshapes the world around him",
      "code.limit": "Only as strong as his own imagination",
      "status.open": "Open to collaboration", "status.based": "Based in Tulungagung, ID", "status.today": "Today:", "status.scroll": "Scroll down",
      "about.t1": "About", "about.t2": "me", "about.hi": "Hi, I'm",
      "about.p1": "A student focused on web development, with a growing interest in networking, cyber security, and cloud technology. I enjoy turning ideas into clean, responsive web pages with character, built on a solid HTML and CSS foundation.",
      "about.p2": "I keep sharpening my skills through practice and personal projects, and I welcome feedback, suggestions, and collaboration.",
      "about.cta": "Contact me",
      "skills.h": "Thought → Reality", "skills.sub": "Every skill began as a thought.",
      "projects.h": "Imagined worlds", "projects.sub": "“Ideas that became something real.”",
      "vis.q": "“Imagine it.”", "vis.sub": "Every creation begins as an idea.",
      "mat.h": "What will you imagine?", "mat.ph": "Type an idea...", "mat.btn": "Materialize",
      "mat.done": "Your idea has been materialized.", "mat.again": "Imagine again",
      "contact.h": "Make it real", "contact.sub": "Have an idea? Let’s turn imagination into reality.",
      "contact.name": "Name", "contact.email": "Email", "contact.msg": "Message", "contact.send": "Send message",
      "form.sending": "Sending...", "form.sent": "Message sent. Thank you!",
      "form.err.captcha": "Please tick “I’m not a robot” first.",
      "form.err.invalid": "Please fill in a valid name, email, and message.",
      "form.err.generic": "Couldn’t send the message. Please try again in a moment.",
      "form.err.config": "reCAPTCHA isn’t configured yet. Set the site key in js/config.js.",
      "foot.tag": "“Imagine. Create. Materialize.”", "foot.warn": "Don’t click.", "meteor.msg": "You were warned.",
      "skills": [
        ["</>", "HTML", "Structure for every idea."], ["{ }", "CSS", "Giving ideas a visible form."],
        ["JS", "JavaScript", "Making things move and respond."], ["⌁", "Networking", "Connecting machines and people."],
        ["MT", "MikroTik", "Routing and configuring networks."], ["IP", "TCP/IP", "How data finds its way."],
        ["7L", "OSI Model", "Seven layers of communication."], ["/24", "Subnetting", "Dividing networks with precision."],
        ["?!", "Problem Solving", "Turning obstacles into steps."]
      ],
      "projects": [
        ["Personal Portfolio", "Personal website", "HTML · CSS · JS"],
        ["Network Topology", "Network design for multiple computers", "MikroTik · TCP/IP"],
        ["Web Experiment", "Experimental HTML/CSS project", "HTML · CSS"],
        ["Future Project", "Placeholder for the next project", "Coming soon"]
      ],
      "viewProject": "View project", "materialized": "Materialized."
    },
    id: {
      "nav.home": "Beranda", "nav.about": "Tentang", "nav.skills": "Keahlian", "nav.projects": "Proyek", "nav.contact": "Kontak",
      "code.power": "Mengubah apa pun yang ia bayangkan menjadi nyata",
      "code.a1": "Mewujudkan imajinasi murni",
      "code.a2": "Memanggil meteor dan apa pun yang bisa ia bayangkan",
      "code.a3": "Membentuk ulang dunia di sekitarnya",
      "code.limit": "Sekuat imajinasinya sendiri",
      "status.open": "Terbuka untuk kolaborasi", "status.based": "Berbasis di Tulungagung, ID", "status.today": "Hari ini:", "status.scroll": "Gulir ke bawah",
      "about.t1": "Tentang", "about.t2": "saya", "about.hi": "Hai, saya",
      "about.p1": "Seorang pelajar yang fokus pada pengembangan web, dengan minat yang terus tumbuh pada jaringan, keamanan siber, dan teknologi cloud. Saya senang mengubah ide menjadi halaman web yang bersih, responsif, dan punya karakter, dengan fondasi HTML dan CSS yang kuat.",
      "about.p2": "Saya terus mengasah kemampuan lewat latihan dan proyek pribadi, dan saya terbuka untuk masukan, saran, serta kolaborasi.",
      "about.cta": "Hubungi saya",
      "skills.h": "Pikiran → Kenyataan", "skills.sub": "Setiap keahlian berawal dari sebuah pikiran.",
      "projects.h": "Dunia imajinasi", "projects.sub": "“Ide yang menjadi nyata.”",
      "vis.q": "“Bayangkan.”", "vis.sub": "Setiap karya berawal dari sebuah ide.",
      "mat.h": "Apa yang akan kamu bayangkan?", "mat.ph": "Ketik sebuah ide...", "mat.btn": "Wujudkan",
      "mat.done": "Idemu telah diwujudkan.", "mat.again": "Bayangkan lagi",
      "contact.h": "Wujudkan bersama", "contact.sub": "Punya ide? Mari ubah imajinasi menjadi kenyataan.",
      "contact.name": "Nama", "contact.email": "Email", "contact.msg": "Pesan", "contact.send": "Kirim pesan",
      "form.sending": "Mengirim...", "form.sent": "Pesan terkirim. Terima kasih!",
      "form.err.captcha": "Centang “I’m not a robot” terlebih dahulu.",
      "form.err.invalid": "Isi nama, email, dan pesan dengan benar.",
      "form.err.generic": "Pesan gagal terkirim. Coba lagi sebentar lagi.",
      "form.err.config": "reCAPTCHA belum dikonfigurasi. Isi site key di js/config.js.",
      "foot.tag": "“Bayangkan. Ciptakan. Wujudkan.”", "foot.warn": "Jangan diklik.", "meteor.msg": "Sudah diperingatkan.",
      "skills": [
        ["</>", "HTML", "Struktur untuk setiap ide."], ["{ }", "CSS", "Memberi ide wujud yang terlihat."],
        ["JS", "JavaScript", "Membuat halaman bergerak dan merespons."], ["⌁", "Jaringan", "Menghubungkan mesin dan manusia."],
        ["MT", "MikroTik", "Routing dan konfigurasi jaringan."], ["IP", "TCP/IP", "Cara data menemukan jalannya."],
        ["7L", "Model OSI", "Tujuh lapisan komunikasi."], ["/24", "Subnetting", "Membagi jaringan dengan presisi."],
        ["?!", "Pemecahan Masalah", "Mengubah hambatan menjadi langkah."]
      ],
      "projects": [
        ["Portofolio Pribadi", "Website pribadi", "HTML · CSS · JS"],
        ["Topologi Jaringan", "Desain jaringan untuk beberapa komputer", "MikroTik · TCP/IP"],
        ["Eksperimen Web", "Proyek eksperimen HTML/CSS", "HTML · CSS"],
        ["Proyek Mendatang", "Tempat untuk proyek berikutnya", "Segera hadir"]
      ],
      "viewProject": "Lihat proyek", "materialized": "Terwujud."
    }
  };

  const listeners = [];
  let lang = "en";
  if ((navigator.language || "").toLowerCase().startsWith("id")) lang = "id";
  try { const s = localStorage.getItem("lang"); if (s === "en" || s === "id") lang = s; } catch (e) {}

  function t(key) { return (T[lang] && T[lang][key] !== undefined) ? T[lang][key] : T.en[key]; }

  function apply() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll("[data-i18n-ph]").forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
    document.querySelectorAll(".lang button").forEach(b => {
      const on = b.dataset.lang === lang;
      b.classList.toggle("on", on);
      b.setAttribute("aria-pressed", on);
    });
    listeners.forEach(fn => fn(lang));
  }

  function set(l) {
    if (!T[l]) return;
    lang = l;
    try { localStorage.setItem("lang", l); } catch (e) {}
    apply();
  }

  window.VIS = window.VIS || {};
  window.VIS.i18n = { t, set, apply, get lang() { return lang; }, onChange(fn) { listeners.push(fn); } };
  document.addEventListener("DOMContentLoaded", apply);
  if (document.readyState !== "loading") apply();
})();
