document.addEventListener("DOMContentLoaded", () => {
    let activeItemIndicator = document.querySelector(".menu-item p#active::after");
    const toggleButton = document.querySelector(".burger");
    const overlayLinks = document.querySelectorAll(".overlay-menu .nav-items a");
    let isOpen = false;

    gsap.set(".menu-item p", {y: 225})

    const tl = gsap.timeline({paused: true})

    tl.to(".overlay", {
        duration: 1.5,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power4.out"
    })

    tl.to(".menu-item p", {
        duration: 1.5,
        y: 0,
        stagger: 0.2,
        ease: "power4.out",
    }, "-=1")

    tl.to(activeItemIndicator, {
        width: "100%",
        duration: 1,
        ease: "power4.out",
        delay: .5,
    }, "<")

    tl.to(".sub-nav", {
        bottom: "10%",
        opacity: 1,
        duration: .5,
        delay: .5,
    }, "<")

    toggleButton.addEventListener("click", () => {
        if(isOpen) {
            tl.reverse()
            toggleButton.classList.remove('active')
        } else {
            tl.play()
            toggleButton.classList.add('active')
        }
        isOpen = !isOpen 
    })

    // Clicks on the overlay options
    overlayLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            if(isOpen) {
                e.preventDefault();
                const href = link.getAttribute("href");
                isOpen = false;
                toggleButton.classList.remove('active');
                
                // Close the menu with the animation
                tl.reverse();
                
                // Direct the user to the section after the animation finished
                gsap.delayedCall(tl.duration(), () => {
                    window.location.hash = href;
                });
            }
        });
    });
})