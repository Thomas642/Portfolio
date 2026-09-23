// Bouton « Copier » de l'adresse e-mail
const copyBtn = document.getElementById("copy-email");
const email = document.getElementById("email");
if (copyBtn && email) {
  copyBtn.addEventListener("click", async () => {
    const text = email.textContent.trim();
    try {
      await navigator.clipboard.writeText(text);
      copyBtn.textContent = "Copié";
    } catch {
      // Repli : sélectionne l'adresse pour une copie manuelle
      const range = document.createRange();
      range.selectNodeContents(email);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      copyBtn.textContent = "Sélectionné";
    }
    setTimeout(() => { copyBtn.textContent = "Copier"; }, 2000);
  });
}
