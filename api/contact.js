/* Vercel Serverless Function: POST /api/contact
   - verifikasi reCAPTCHA di server
   - kirim email via Gmail SMTP (Nodemailer)
   Env vars: RECAPTCHA_SECRET, GMAIL_USER, GMAIL_APP_PASSWORD, CONTACT_TO (opsional) */
const nodemailer = require("nodemailer");

const LIMITS = { name: 80, email: 120, message: 2000 };
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const oneLine = s => String(s).replace(/[\r\n]+/g, " ").trim();

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "method" });
  }

  let body = req.body;
  if (typeof body === "string") { try { body = JSON.parse(body); } catch (e) { body = {}; } }
  body = body || {};

  // Honeypot: bot mengisi field tersembunyi -> pura-pura sukses
  if (body.website) return res.status(200).json({ ok: true });

  const name = oneLine(body.name || "");
  const email = oneLine(body.email || "");
  const message = String(body.message || "").trim();
  const token = String(body.recaptchaToken || "");

  if (!name || name.length > LIMITS.name || !/^\S+@\S+\.\S+$/.test(email) || email.length > LIMITS.email || !message || message.length > LIMITS.message) {
    return res.status(400).json({ ok: false, error: "invalid" });
  }
  if (!token) return res.status(400).json({ ok: false, error: "captcha" });

  const { RECAPTCHA_SECRET, GMAIL_USER, GMAIL_APP_PASSWORD } = process.env;
  const to = process.env.CONTACT_TO || "aditamaputra044@gmail.com";
  if (!RECAPTCHA_SECRET || !GMAIL_USER || !GMAIL_APP_PASSWORD) {
    console.error("Env vars belum lengkap (RECAPTCHA_SECRET, GMAIL_USER, GMAIL_APP_PASSWORD)");
    return res.status(500).json({ ok: false, error: "server" });
  }

  try {
    const params = new URLSearchParams({ secret: RECAPTCHA_SECRET, response: token });
    const ip = (req.headers["x-forwarded-for"] || "").split(",")[0].trim();
    if (ip) params.set("remoteip", ip);
    const vr = await fetch("https://www.google.com/recaptcha/api/siteverify", { method: "POST", body: params });
    const vj = await vr.json();
    if (!vj.success) return res.status(400).json({ ok: false, error: "captcha" });

    const transporter = nodemailer.createTransport({ service: "gmail", auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD } });
    await transporter.sendMail({
      from: `"THE VISIONARY Portfolio" <${GMAIL_USER}>`,
      to,
      replyTo: `"${name.replace(/"/g, "")}" <${email}>`,
      subject: `[Portfolio] Pesan baru dari ${name}`,
      text: `Nama: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><b>Nama:</b> ${esc(name)}<br><b>Email:</b> ${esc(email)}</p><p style="white-space:pre-wrap">${esc(message)}</p>`
    });
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("contact error:", err && err.message);
    return res.status(500).json({ ok: false, error: "server" });
  }
};
