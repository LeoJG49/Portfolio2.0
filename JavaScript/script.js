import './loaderAnimationGSAP.js'
import './chapterOneTextAnimationGSAP.js'
import './cursorPersonalized.js'
import './imgAppearAnimationGSAP.js'
import './cardsAnimationGSAP.js'

//Smooth Scroll
let lenis;

if (window.matchMedia('(min-width: 1200px)').matches) {
  lenis = new Lenis({
    smoothWheel: true,
    smoothTouch: false
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}
