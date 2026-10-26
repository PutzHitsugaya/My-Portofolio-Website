/* Efek: scroll warp, materialize, meteor */
(function () {
  const $ = s => document.querySelector(s), root = document.documentElement;
  const fx = $("#fx"), wait = ms => new Promise(r => setTimeout(r, ms));
  const { t } = window.VIS.i18n, bg = window.VIS.bg;

  /* SCROLL DOWN -> warp ke About */
  $("#scrollDown").addEventListener("click", async () => {
    bg.setSpeed(14); fx.textContent = "V"; fx.className = "on";
    await wait(900);
    root.style.scrollBehavior = "auto"; $("#about").scrollIntoView(); root.style.scrollBehavior = "";
    bg.setSpeed(1); fx.className = ""; fx.style.opacity = 0;
  });

  /* Materialize */
  $("#mb").addEventListener("click", async () => {
    const v = $("#idea").value.trim();
    if (!v) { $("#idea").focus(); return; }
    const min = $("#min"), o = $("#mout");
    min.style.opacity = 0; await wait(400); min.style.display = "none";
    root.classList.add("glitch"); await wait(500); root.classList.remove("glitch");
    o.style.display = "block"; o.textContent = ""; bg.gather(o); await wait(900);
    o.textContent = "";
    const title = document.createElement("div"); title.textContent = t("mat.done");
    const q = document.createElement("small"); q.textContent = "“" + v + "”";
    const again = document.createElement("button"); again.className = "btn"; again.style.marginTop = "22px"; again.type = "button"; again.textContent = t("mat.again");
    again.onclick = () => { o.style.display = "none"; $("#idea").value = ""; min.style.display = "flex"; requestAnimationFrame(() => min.style.opacity = 1); };
    o.append(title, q, again);
  });

  /* Meteor */
  $("#met").addEventListener("click", async () => {
    const m = $("#mt"); m.className = "go"; await wait(1250);
    fx.className = "on white"; fx.textContent = ""; root.classList.add("shake", "glitch"); await wait(450);
    fx.className = "on"; fx.textContent = t("meteor.msg").toUpperCase(); fx.style.fontSize = "clamp(1.6rem,6vw,4rem)";
    m.className = ""; root.classList.remove("shake", "glitch"); await wait(2600);
    fx.className = ""; fx.textContent = ""; fx.style.opacity = 0; fx.style.fontSize = "";
  });

  window.VIS.fx = { wait };
})();
