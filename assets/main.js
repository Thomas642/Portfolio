// Effet "frappe clavier" sur le prompt du hero
const typed = document.getElementById("typed");
if (typed) {
  const text = typed.dataset.text || "";
  let i = 0;
  const tick = () => {
    typed.textContent = text.slice(0, ++i);
    if (i < text.length) setTimeout(tick, 120);
  };
  setTimeout(tick, 400);
}

// Apparition douce des blocs au scroll
const blocks = document.querySelectorAll(".panel, .card, .timeline li, .terminal");
if ("IntersectionObserver" in window) {
  blocks.forEach((el) => el.classList.add("reveal"));
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  blocks.forEach((el) => io.observe(el));
}
