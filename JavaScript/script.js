import './loaderAnimationGSAP.js'
import './textAnimationsGSAP.js'
import './cursorPersonalized.js'
import './darkMode.js'
import './burgerMenuGSAP.js'
import './imgAppearAnimationGSAP.js'
import './cardsAnimationGSAP.js'

//TODO - Make the website totally responsive, fix the burger menu
//

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
