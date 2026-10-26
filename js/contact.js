/* Form kontak -> POST /api/contact (+ reCAPTCHA v2) */
(function () {
  const $ = s => document.querySelector(s);
  const { t } = window.VIS.i18n, cfg = window.SITE_CONFIG || {};
  const form = $("#contactForm"), btn = $("#sendBtn"), status = $("#formStatus");
  let widgetId = null;
  const keyOk = cfg.RECAPTCHA_SITE_KEY && !/^GANTI_/.test(cfg.RECAPTCHA_SITE_KEY);

  function show(msg, type) { status.textContent = msg; status.className = "form-status" + (type ? " " + type : ""); }

  window.onRecaptchaLoad = function () {
    if (!keyOk) return;
    widgetId = grecaptcha.render("recaptcha", { sitekey: cfg.RECAPTCHA_SITE_KEY, theme: "dark" });
  };
  if (window.grecaptcha && grecaptcha.render) window.onRecaptchaLoad();

  form.addEventListener("submit", async e => {
    e.preventDefault();
    if (!keyOk) { show(t("form.err.config"), "err"); return; }
    const data = Object.fromEntries(new FormData(form));
    if (!data.name.trim() || !/^\S+@\S+\.\S+$/.test(data.email) || !data.message.trim()) { show(t("form.err.invalid"), "err"); return; }
    const token = widgetId !== null ? grecaptcha.getResponse(widgetId) : "";
    if (!token) { show(t("form.err.captcha"), "err"); return; }

    btn.disabled = true; show(t("form.sending"));
    try {
      const res = await fetch(cfg.CONTACT_ENDPOINT || "/api/contact", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: data.name, email: data.email, message: data.message, website: data.website, recaptchaToken: token })
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.ok) {
        show(t("form.sent"), "ok"); window.VIS.bg.gather(btn); form.reset();
      } else {
        show(t(json.error === "captcha" ? "form.err.captcha" : json.error === "invalid" ? "form.err.invalid" : "form.err.generic"), "err");
      }
    } catch (err) { show(t("form.err.generic"), "err"); }
    finally { btn.disabled = false; if (widgetId !== null) grecaptcha.reset(widgetId); }
  });
})();
