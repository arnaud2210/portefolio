import { initHeader } from './header';
import { initLangSwitch } from './lang-switch';
import { initLightbox } from './lightbox';
import { initMenu } from './menu';
import { initNavSpy } from './nav-spy';
import { initReveal } from './reveal';

initMenu();
initHeader();
initLightbox();
initLangSwitch();

if ('IntersectionObserver' in window) {
  initNavSpy();
  initReveal();
}
