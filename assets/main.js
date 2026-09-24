const root = document.documentElement;

// ---------- Textes selon la langue de la page ----------
const EN = (root.lang || "").startsWith("en");
const T = EN ? {
  dispoCourt: "Immediately", dispoLong: "Available immediately",
  toLight: "Switch to light theme", toDark: "Switch to dark theme",
  project: (n) => `${n} project${n > 1 ? "s" : ""}`,
  kinds: { all: "", pro: " (work)", perso: " (personal)", ecole: " (school)" },
  copied: "Copied", selected: "Selected", copy: "Copy",
} : {
  dispoCourt: "Immédiate", dispoLong: "Disponible immédiatement",
  toLight: "Passer en thème clair", toDark: "Passer en thème sombre",
  project: (n) => `${n} projet${n > 1 ? "s" : ""}`,
  kinds: { all: "", pro: " pro", perso: " perso", ecole: " d'école" },
  copied: "Copié", selected: "Sélectionné", copy: "Copier",
};

// ---------- Disponibilité : bascule automatique au 1er octobre 2026 ----------
if (new Date() >= new Date(2026, 9, 1)) {
  const DISPO = { court: T.dispoCourt, long: T.dispoLong };
  document.querySelectorAll("[data-dispo]").forEach((el) => {
    el.textContent = DISPO[el.dataset.dispo] || el.textContent;
  });
}

// ---------- Thème clair / sombre ----------
const themeBtn = document.getElementById("theme-toggle");
const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

function currentTheme() {
  return root.dataset.theme || (darkQuery.matches ? "dark" : "light");
}
function updateThemeLabel() {
  if (!themeBtn) return;
  themeBtn.setAttribute("aria-label", currentTheme() === "dark" ? T.toLight : T.toDark);
}
try {
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") root.dataset.theme = saved;
} catch (e) { /* stockage indisponible : on suit le réglage de l'appareil */ }
updateThemeLabel();
darkQuery.addEventListener?.("change", updateThemeLabel);
themeBtn?.addEventListener("click", () => {
  const next = currentTheme() === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  try { localStorage.setItem("theme", next); } catch (e) {}
  updateThemeLabel();
});

// ---------- Barre de progression + bouton retour en haut ----------
const bar = document.getElementById("progress-bar");
const toTop = document.getElementById("to-top");
let ticking = false;
function onScroll() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = max > 0 ? Math.min(1, window.scrollY / max) : 0;
  if (bar) bar.style.transform = `scaleX(${ratio})`;
  if (toTop) toTop.hidden = window.scrollY < 700;
  ticking = false;
}
window.addEventListener("scroll", () => {
  if (!ticking) { requestAnimationFrame(onScroll); ticking = true; }
}, { passive: true });
onScroll();

// ---------- Section active dans la navigation ----------
const navLinks = [...document.querySelectorAll(".mainnav a")]
  .filter((a) => (a.getAttribute("href") || "").startsWith("#"));
const nav = document.querySelector(".mainnav");
const sections = navLinks
  .map((a) => document.querySelector(a.getAttribute("href")))
  .filter(Boolean);

function setActive(id) {
  navLinks.forEach((a) => {
    const on = a.getAttribute("href") === `#${id}`;
    if (on) a.setAttribute("aria-current", "true");
    else a.removeAttribute("aria-current");
    // Sur téléphone, garde le lien actif visible dans la ligne défilante
    if (on && nav && nav.scrollWidth > nav.clientWidth) {
      nav.scrollTo({ left: a.offsetLeft - 16, behavior: "smooth" });
    }
  });
}
if ("IntersectionObserver" in window && sections.length) {
  const visible = new Map();
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => visible.set(e.target.id, e.isIntersecting));
    const first = sections.find((s) => visible.get(s.id));
    if (first) setActive(first.id);
    else if (window.scrollY < sections[0].offsetTop - 200) setActive("");
  }, { rootMargin: "-35% 0px -55% 0px" });
  sections.forEach((s) => io.observe(s));
}

// ---------- Filtre des projets ----------
const filters = [...document.querySelectorAll(".filter")];
const projects = [...document.querySelectorAll("main [data-kind]")];
const count = document.getElementById("filter-count");

filters.forEach((btn) => btn.addEventListener("click", () => {
  const f = btn.dataset.filter;
  filters.forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
  let n = 0;
  projects.forEach((p) => {
    const show = f === "all" || p.dataset.kind === f;
    p.hidden = !show;
    if (show) n++;
  });
  if (count) count.textContent = T.project(n) + (T.kinds[f] || "");
}));

// ---------- Copie de l'adresse e-mail ----------
const copyBtn = document.getElementById("copy-email");
const email = document.getElementById("email");
if (copyBtn && email) {
  copyBtn.addEventListener("click", async () => {
    const text = email.textContent.trim();
    try {
      await navigator.clipboard.writeText(text);
      copyBtn.textContent = T.copied;
    } catch {
      // Repli : sélectionne l'adresse pour une copie manuelle
      const range = document.createRange();
      range.selectNodeContents(email);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      copyBtn.textContent = T.selected;
    }
    setTimeout(() => { copyBtn.textContent = T.copy; }, 2000);
  });
}
