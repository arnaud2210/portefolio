/**
 * Navigation : lien actif selon la section visible (le bouton « Me contacter » suit la
 * section Contact) et soulignement qui glisse d'un lien à l'autre en bureau.
 * Sans IntersectionObserver ou sans JS : repli sur le soulignement du lien lui-même.
 */
export function initNavSpy(): void {
  const nav = document.getElementById('nav');
  if (!nav) return;

  const ink = document.createElement('span');
  ink.className = 'ink';
  ink.setAttribute('aria-hidden', 'true');
  nav.appendChild(ink);
  nav.classList.add('has-ink');

  const moveInk = () => {
    const active = nav.querySelector<HTMLElement>('[aria-current]');
    const fresh = ink.style.opacity !== '1';
    if (active) {
      // Première apparition : pas de glissement depuis la gauche.
      if (fresh) ink.style.transition = 'none';
      ink.style.width = `${active.offsetWidth}px`;
      ink.style.transform = `translateX(${active.offsetLeft}px)`;
      if (fresh) {
        void ink.offsetWidth;
        ink.style.transition = '';
      }
    }
    ink.style.opacity = active ? '1' : '0';
  };
  window.addEventListener('resize', moveInk);
  void document.fonts?.ready.then(moveInk);

  const links = new Map<string, HTMLAnchorElement>();
  document.querySelectorAll<HTMLAnchorElement>('.nav a, .nav-cta').forEach((link) => {
    links.set(link.hash.slice(1), link);
  });

  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => link.removeAttribute('aria-current'));
        links.get(entry.target.id)?.setAttribute('aria-current', 'location');
        moveInk();
      });
    },
    { rootMargin: '-45% 0px -50% 0px' },
  );
  document.querySelectorAll('main section[id]').forEach((section) => spy.observe(section));
}
