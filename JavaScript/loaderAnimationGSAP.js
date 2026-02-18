// Create a GSAP timeline for the loader animation
const tl = gsap.timeline({
    onStart: () => {
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
    },
    onComplete: () => {
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
    }
});

tl.from(".clip-top, .clip-bottom", {
    duration: 2,
    height: "50vh",
    ease: "power4.inOut"
}, 1);

tl.to(".marquee", {
    duration: 3.5,
    top: "50%",
    ease: "power4.inOut"
}, 0.75);

tl.from(".clip-top .marquee, .clip-bottom .marquee", {
    duration: 5,
    left: "100%",
    ease: "power3.inOut"
}, 1);

tl.from(".clip-center .marquee", {
    duration: 5,
    left: "-50%",
    ease: "power3.inOut"
}, 1);

tl.to(".clip-top", {
    duration: 2,
    clipPath: "inset(0 0 100% 0)",
    ease: "power4.inOut"
}, 6);

tl.to(".clip-bottom", {
    duration: 2,
    clipPath: "inset(100% 0 0 0)",
    ease: "power4.inOut"
}, 6);

tl.to(".clip-top .marquee, .clip-bottom .marquee, .clip-center .marquee span", {
    duration: 1,
    opacity: 0,
    ease: "power2.inOut"
}, 6);