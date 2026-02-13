gsap.registerPlugin(ScrollTrigger);

let masks = document.querySelectorAll('.mask')

masks.forEach (mask => {
    let img = mask.querySelector('img')

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: mask,
            toggleActions: "restart none none reset",
        }
    })

    tl.set(mask, {autoAlpha: 1});

    tl.from(mask, 1.5, {
        xPercent: -100,
        ease: "power2.out"
    })
    tl.from(img, 1.5, {
        xPercent: 100,
        scale: 1.2,
        delay: -1.5,
        ease: "power2.out",
    })
    
    ScrollTrigger.refresh();
})