/** Apparition douce des sections, une seule fois (désactivée si mouvement réduit). */
export function initReveal(): void {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('in');
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.06 },
  );

  document.querySelectorAll('main section:not(.hero) > .wrap').forEach((element) => {
    element.classList.add('rv');
    observer.observe(element);
  });
}
