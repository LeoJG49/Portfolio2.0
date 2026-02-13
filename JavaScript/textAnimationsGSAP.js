gsap.registerPlugin(SplitText);

document.fonts.ready.then(() => {
    //Hero Text Animation
    gsap.set(".chapter1, .hover-this, .logo", { opacity: 1, y: 0 });

    let split;

    SplitText.create(".chapter1, .hover-this, .logo", {
        type: "words, lines",
        wordsClass: "word",
        linesClass: "line",
        autoSplit: true,
        mask: "lines",
        onSplit: (self) => {
            split = gsap.from(self.lines, {
                delay: 7.5,
                y: 100,
                duration: 1,
                opacity: 0,
                stagger: .1,
                ease: "power2.out",
            })
            return split;
        }
    })

    //About Text Animation
    gsap.set(".about, .text", { opacity: 1});

    SplitText.create(".about, .text", {
        type: "words, lines",
        wordsClass: "word",
        linesClass: "line",
        autoSplit: true,
        mask: "lines",
        onSplit: (self) => {
            split = gsap.from(self.lines, {
                scrollTrigger: {
                    trigger: ".about",
                    start: "top 60%",
                    end: "top 35%",
                },
                y: 100,
                duration: 1.2,
                stagger: .05,
                opacity: 0,
                ease: "power2.out",
            })
            return split;
        }
    })

    gsap.set(".chapter2", { opacity: 1});

    SplitText.create(".chapter2", {
        type: "words, lines",
        wordsClass: "word",
        linesClass: "line",
        autoSplit: true,
        mask: "lines",
        onSplit: (self) => {
            split = gsap.from(self.lines, {
                scrollTrigger: {
                    trigger: ".chapter2",
                    start: "top bottom",
                    end: "bottom 35%",
                },
                y: 100,
                duration: 1.2,
                stagger: .05,
                opacity: 0,
                ease: "power2.out",
            })
            return split;
        }
    })

    //Project Text Animation
    gsap.set(".projects", { opacity: 1});

    SplitText.create(".projects", {
        type: "words, lines",
        wordsClass: "word",
        linesClass: "line",
        autoSplit: true,
        mask: "lines",
        onSplit: (self) => {
            split = gsap.from(self.lines, {
                scrollTrigger: {
                    trigger: ".projects",
                    start: "bottom bottom",
                    end: "bottom bottom",
                },
                y: 100,
                duration: 1.2,
                stagger: .05,
                opacity: 0,
                ease: "power2.out",
            })
            return split;
        }
    })

    gsap.set(".chapter3", { opacity: 1});

    SplitText.create(".chapter3", {
        type: "words, lines",
        wordsClass: "word",
        linesClass: "line",
        autoSplit: true,
        mask: "lines",
        onSplit: (self) => {
            split = gsap.from(self.lines, {
                scrollTrigger: {
                    trigger: ".chapter3",
                    start: "top bottom",
                    end: "bottom 35%",
                },
                y: 100,
                duration: 1.2,
                stagger: .05,
                opacity: 0,
                ease: "power2.out",
            })
            return split;
        }
    })

    //Technologies Text Animation
    gsap.set(".technologies-title", { opacity: 1});

    SplitText.create(".technologies-title", {
        type: "words, lines",
        wordsClass: "word",
        linesClass: "line",
        autoSplit: true,
        mask: "lines",
        onSplit: (self) => {
            split = gsap.from(self.lines, {
                scrollTrigger: {
                    trigger: ".technologies-title",
                    start: "bottom bottom",
                    end: "bottom bottom",
                },
                y: 100,
                duration: 1.2,
                stagger: .05,
                opacity: 0,
                ease: "power2.out",
            })
            return split;
        }
    })

    gsap.set(".chapter4", { opacity: 1});

    SplitText.create(".chapter4", {
        type: "words, lines",
        wordsClass: "word",
        linesClass: "line",
        autoSplit: true,
        mask: "lines",
        onSplit: (self) => {
            split = gsap.from(self.lines, {
                scrollTrigger: {
                    trigger: ".chapter4",
                    start: "top bottom",
                    end: "bottom 35%",
                },
                y: 100,
                duration: 1.2,
                stagger: .05,
                opacity: 0,
                ease: "power2.out",
            })
            return split;
        }
    })
})