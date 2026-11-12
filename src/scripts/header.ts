/** En-tête : fond au défilement et barre de lecture (variable CSS --p, sans animation). */
export function initHeader(): void {
  const header = document.querySelector<HTMLElement>('.site-header');
  if (!header) return;
  const root = document.documentElement;

  const update = () => {
    const max = root.scrollHeight - window.innerHeight;
    header.classList.toggle('scrolled', window.scrollY > 8);
    header.style.setProperty('--p', String(max > 0 ? Math.min(1, window.scrollY / max) : 0));
  };

  window.addEventListener('scroll', update, { passive: true });
  update();
}
