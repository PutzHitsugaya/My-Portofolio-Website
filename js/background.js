/* Partikel jaringan merah (canvas) + efek warp / burst */
(function () {
  const cv = document.getElementById("bg"), cx = cv.getContext("2d");
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const PAL = ["255,42,77", "252,238,10", "255,43,214", "47,123,255", "141,255,155", "255,122,184"];
  let W, H, nodes = [], burst = [], speed = 1, visible = true;

  function size() {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    W = innerWidth; H = innerHeight;
    cv.width = W * dpr; cv.height = H * dpr;
    cx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = W < 700 ? 34 : 72;
    nodes = Array.from({ length: n }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - .5) * .22, vy: (Math.random() - .5) * .22,
      r: Math.random() * 1.4 + .6,
      c: PAL[Math.floor(Math.random() * PAL.length)]
    }));
    if (reduce) frame();
  }

  function frame() {
    cx.clearRect(0, 0, W, H);
    const warp = speed > 3, maxD = W < 700 ? 110 : 150;
    for (const p of nodes) {
      p.x += p.vx; p.y += p.vy * speed + (warp ? speed * .6 : 0);
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < -10) p.y = H + 10; else if (p.y > H + 10) p.y = -10;
    }
    if (!warp) {
      cx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j], d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < maxD) { cx.strokeStyle = `rgba(${a.c},${(1 - d / maxD) * .4})`; cx.beginPath(); cx.moveTo(a.x, a.y); cx.lineTo(b.x, b.y); cx.stroke(); }
      }
    }
    for (const p of nodes) {
      cx.fillStyle = `rgba(${p.c},.9)`;
      if (warp) cx.fillRect(p.x, p.y, p.r, p.r * speed * 2); else { cx.beginPath(); cx.arc(p.x, p.y, p.r, 0, 6.3); cx.fill(); }
    }
    for (let i = burst.length - 1; i >= 0; i--) {
      const b = burst[i];
      b.x += (b.tx - b.x) * .07; b.y += (b.ty - b.y) * .07; b.l--;
      cx.fillStyle = `rgba(${i % 2 ? "252,238,10" : "255,43,214"},${Math.min(1, b.l / 30)})`;
      cx.fillRect(b.x, b.y, 2.5, 2.5);
      if (b.l <= 0) burst.splice(i, 1);
    }
  }

  function loop() { if (!visible || reduce) return; frame(); requestAnimationFrame(loop); }

  size();
  addEventListener("resize", size);
  document.addEventListener("visibilitychange", () => { visible = !document.hidden; if (visible) loop(); });
  loop();

  window.VIS = window.VIS || {};
  window.VIS.bg = {
    setSpeed(v) { speed = v; },
    gather(el) {
      const r = el.getBoundingClientRect(), tx = r.left + r.width / 2, ty = r.top + r.height / 2;
      for (let i = 0; i < (W < 700 ? 50 : 110); i++)
        burst.push({ x: Math.random() * W, y: Math.random() * H, tx: tx + (Math.random() - .5) * 160, ty: ty + (Math.random() - .5) * 30, l: 90 + Math.random() * 30 });
      if (reduce) frame();
    }
  };
})();
