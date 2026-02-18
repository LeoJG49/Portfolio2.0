//Viewport height fallback for mobile/tablet
//Applies only for viewport max-width: 1200px (mobile + tablets).

(function () {
  const MAX_WIDTH_PX = 1200;

  function setAppHeight() {
    if (!window.matchMedia("(max-width: " + MAX_WIDTH_PX + "px)").matches) return;
    const height = window.innerHeight;
    document.documentElement.style.setProperty("--app-height", height + "px");
  }

  function injectFallbackStyles() {
    if (!window.matchMedia("(max-width: " + MAX_WIDTH_PX + "px)").matches) return;
    if (document.getElementById("viewport-height-fallback-styles")) return;

    var style = document.createElement("style");
    style.id = "viewport-height-fallback-styles";
    style.textContent =
      "/* Injected by viewportHeightFallback.js — fixed height so browser bar does not cause reflow */\n" +
      "@media (min-width: 319px) and (max-width: 1200px) {\n" +
      "  html, body { min-height: var(--app-height) !important; }\n" +
      "  .loader { min-height: var(--app-height) !important; }\n" +
      "  .loader-clip { height: calc(var(--app-height) * 0.333) !important; }\n" +
      "  .clip-center { height: calc(var(--app-height) * 0.333) !important; top: calc(var(--app-height) * 0.333) !important; }\n" +
      "  .two { height: var(--app-height) !important; }\n" +
      "  .four { height: var(--app-height) !important; }\n" +
      "  footer { height: calc(var(--app-height) * 0.4) !important; }\n" +
      "  .three { height: calc(var(--app-height) * 1.6) !important; }\n" +
      "  .overlay, .overlay-menu { height: var(--app-height) !important; }\n" +
      "}\n";
    document.head.appendChild(style);
  }

  function init() {
    setAppHeight();
    injectFallbackStyles();
  }

  // Run on load (DOM ready so we can inject styles)
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // Update only on orientation change (not on resize, so browser bar does not trigger reflow)
  window.addEventListener("orientationchange", function () {
    setAppHeight();
  });
})();
