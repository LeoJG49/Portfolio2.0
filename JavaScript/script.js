import './loaderAnimationGSAP.js'
import './textAnimationsGSAP.js'
import './cursorPersonalized.js'
import './darkMode.js'
import './burgerMenuGSAP.js'
import './imgAppearAnimationGSAP.js'
import './cardsAnimationGSAP.js'

//TODO - Make the website totally responsive, fix the burger menu
//

// Smooth scroll (laptop/desktop only). Must sync Lenis with GSAP ScrollTrigger
// so mouse wheel scroll works; without this, ScrollTrigger sees wrong scroll and page jumps to top.
let lenis;

if (window.matchMedia('(min-width: 1200px)').matches) {
  lenis = new Lenis({
    smoothWheel: true,
    smoothTouch: false
  });

  // Sync Lenis scroll position with ScrollTrigger (fixes wheel scroll jumping to top)
  lenis.on('scroll', ScrollTrigger.update);

  // Run Lenis on GSAP ticker so scroll and animations stay in sync
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);
}
