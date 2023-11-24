gsap.from(".header", {
    opacity: 0,
    duration: 1,
});

gsap.from(".main__title, .main__mouse-click", {
    y: -100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out",
});

gsap.from(".about__title, .about__text-info", {
    scrollTrigger: {
        trigger: ".about",
        start: "top 350px",
        end: "bottom 900px",
        scrub: 3.2,
    },
    x: -100,
    opacity: 0,
    duration: 2,
    stagger: 0.1,
    ease: "power2.out",
});

gsap.from(".about__img", {
    scrollTrigger: {
        trigger: ".about",
        start: "top 350px",
        end: "bottom 900px",
        scrub: 3.2,
    },
    x: 100,
    opacity: 0,
    duration: 2,
    stagger: 0.1,
    ease: "power2.out",
});


gsap.from(".vision__title, .vision__text-info", {
    scrollTrigger: {
        trigger: ".vision",
        start: "top 350px",
        end: "bottom 900px",
        scrub: 3.2,
    },
    x: 100,
    opacity: 0,
    duration: 2,
    stagger: 0.1,
    ease: "power2.out",
});

gsap.from(".vision__img", {
    scrollTrigger: {
        trigger: ".vision",
        start: "top 350px",
        end: "bottom 900px",
        scrub: 3.2,
    },
    x: -100,
    opacity: 0,
    duration: 2,
    stagger: 0.1,
    ease: "power2.out",
});


gsap.from(".mission__title, .mission__text-info", {
    scrollTrigger: {
        trigger: ".mission",
        start: "top 350px",
        end: "bottom 900px",
        scrub: 3.2,
    },
    x: -100,
    opacity: 0,
    duration: 2,
    stagger: 0.1,
    ease: "power2.out",
});

gsap.from(".mission__img", {
    scrollTrigger: {
        trigger: ".mission",
        start: "top 350px",
        end: "bottom 900px",
        scrub: 3.2,
    },
    x: 100,
    opacity: 0,
    duration: 2,
    stagger: 0.1,
    ease: "power2.out",
});



gsap.from(".projects__title", {
    scrollTrigger: {
        trigger: ".projects",
        start: "top 350px",
        end: "top 450px",
        scrub: 3.2,
    },
    x: -100,
    opacity: 0,
    duration: 2,
    stagger: 0.1,
    ease: "power2.out",
});
gsap.from(".project__count", {
    scrollTrigger: {
        trigger: ".projects",
        start: "top 350px",
        end: "top 450px",
        scrub: 3.2,
    },
    x: 100,
    opacity: 0,
    duration: 2,
    stagger: 0.1,
    ease: "power2.out",
});

gsap.from(".project__img", {
    scrollTrigger: {
        trigger: ".projects",
        start: "top 350px",
        end: "top 450px",
        scrub: 3.2,
    },
    y: 100,
    opacity: 0,
    duration: 2,
    stagger: 0.01,
    ease: "power2.out",
});

gsap.from(".project__info-text", {
    scrollTrigger: {
        trigger: ".projects",
        start: "top 350px",
        end: "top 450px",
        scrub: 3.2,
    },
    y: 100,
    opacity: 0,
    duration: 2,
    stagger: 0.01,
    ease: "power2.out",
});


gsap.from(".contacts__title, .contacts__text-info", {
    scrollTrigger: {
        trigger: ".contacts",
        start: "top 350px",
        end: "bottom 900px",
        scrub: 3.2,
    },
    x: -100,
    opacity: 0,
    duration: 2,
    stagger: 0.1,
    ease: "power2.out",
});

gsap.from(".contacts__img", {
    scrollTrigger: {
        trigger: ".contacts",
        start: "top 350px",
        end: "bottom 900px",
        scrub: 3.2,
    },
    x: 100,
    opacity: 0,
    duration: 2,
    stagger: 0.1,
    ease: "power2.out",
});



gsap.from(".project__title, .project__info-title, .project__tr", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out",
});

gsap.from(".project__img-block", {
    x: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out",
});

