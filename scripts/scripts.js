localStorage.setItem('displayProj', false);

const hiddenProj = document.getElementById('hidden');
const hiddenProj1 = document.getElementById('hidden1');
const hiddenProj2 = document.getElementById('hidden2');
const hiddenProj3 = document.getElementById('hidden3');
const hiddenProj4 = document.getElementById('hidden4');

const btnLoad = document.getElementById('loadNewProj');

let displayProj = localStorage.getItem('displayProj');

btnLoad.addEventListener('click', () => {
    if(displayProj === 'false'){
        hiddenProj.classList.add('block');
        hiddenProj1.classList.add('block');
        hiddenProj2.classList.add('block');
        hiddenProj3.classList.add('block');
        hiddenProj4.classList.add('block');

        localStorage.setItem('displayProj', true);
        displayProj = localStorage.getItem('displayProj');
        btnLoad.innerHTML = 'Hide projects';
    } else if (displayProj === 'true'){
        hiddenProj.classList.remove('block');
        hiddenProj1.classList.remove('block');
        hiddenProj2.classList.remove('block');
        hiddenProj3.classList.remove('block');
        hiddenProj4.classList.remove('block');

        localStorage.setItem('displayProj', false);
        displayProj = localStorage.getItem('displayProj');
        btnLoad.innerHTML = 'See all projects';
    } else {
        console.log('error');
    }
})



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

