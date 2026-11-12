/**
 * Captures : <dialog> natif (Échap natif ; clic sur le fond, bouton Fermer, flèches ;
 * le focus revient à la dernière vignette vue).
 */
export function initLightbox(): void {
  const dialog = document.getElementById('lightbox');
  const big = document.getElementById('lb-img');
  const title = document.getElementById('lb-title');
  if (!(dialog instanceof HTMLDialogElement) || !(big instanceof HTMLImageElement) || !title)
    return;

  const shots = [...document.querySelectorAll<HTMLButtonElement>('.shot')];
  let current = 0;

  const show = (index: number) => {
    current = (index + shots.length) % shots.length;
    const shot = shots[current];
    const thumb = shot?.querySelector('img');
    if (!shot || !thumb) return;
    big.src = shot.dataset.fullSrc ?? thumb.currentSrc;
    big.alt = thumb.alt;
    big.width = Number(shot.dataset.fullWidth) || thumb.width;
    big.height = Number(shot.dataset.fullHeight) || thumb.height;
    title.textContent = `${shot.dataset.cap ?? ''} (${current + 1}/${shots.length})`;
  };

  shots.forEach((shot, index) => {
    shot.addEventListener('click', () => {
      show(index);
      dialog.showModal();
    });
  });

  dialog.addEventListener('click', (event) => {
    const target = event.target instanceof Element ? event.target : null;
    const nav = target?.closest<HTMLElement>('.lb-nav');
    if (nav) show(current + Number(nav.dataset.dir));
    else if (target === dialog || target?.closest('.lb-close')) dialog.close();
  });

  dialog.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') show(current - 1);
    if (event.key === 'ArrowRight') show(current + 1);
  });

  dialog.addEventListener('close', () => {
    shots[current]?.focus();
  });
}
