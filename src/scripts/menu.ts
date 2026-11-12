/**
 * Menu mobile : panneau plein écran (liens, « Me contacter », langue).
 * Échap ferme, le focus reste piégé dans le panneau tant qu'il est ouvert.
 */
export function initMenu(): void {
  const button = document.querySelector<HTMLButtonElement>('.menu-btn');
  const panel = document.getElementById('menu');
  if (!button || !panel) return;
  const root = document.documentElement;

  const setMenu = (open: boolean) => {
    panel.classList.toggle('open', open);
    root.classList.toggle('menu-open', open);
    button.setAttribute('aria-expanded', String(open));
  };

  button.addEventListener('click', () => {
    setMenu(button.getAttribute('aria-expanded') !== 'true');
  });

  panel.addEventListener('click', (event) => {
    if (event.target instanceof Element && event.target.closest('a')) setMenu(false);
  });

  document.addEventListener('keydown', (event) => {
    if (!panel.classList.contains('open')) return;
    if (event.key === 'Escape') {
      setMenu(false);
      button.focus();
      return;
    }
    if (event.key !== 'Tab') return;
    // Cycle : liens du panneau puis bouton (le nom, au-dessus du voile, est hors cycle).
    const focusable = [...panel.querySelectorAll<HTMLElement>('a'), button];
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  });

  window.matchMedia('(min-width:768px)').addEventListener('change', (event) => {
    if (event.matches) setMenu(false);
  });
}
