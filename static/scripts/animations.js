export function initAnimations() {
    if (
        typeof gsap === "undefined" ||
        typeof ScrollTrigger === "undefined"
    ) {
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".hero__eyebrow", {
        y: 20,
        opacity: 0,
        duration: 0.65,
        delay: 0.1
    });

    gsap.from(".hero__title", {
        y: 56,
        opacity: 0,
        duration: 0.95,
        delay: 0.2
    });

    gsap.from(".hero__text", {
        y: 28,
        opacity: 0,
        duration: 0.85,
        delay: 0.34
    });

    gsap.from(
        ".hero__stats .hero__stat",
        {
            y: 22,
            opacity: 0,
            duration: 0.65,
            stagger: 0.1,
            delay: 0.44
        }
    );

    gsap.from(".hero__buttons > *", {
        y: 20,
        opacity: 0,
        duration: 0.65,
        stagger: 0.1,
        delay: 0.58
    });

    gsap.to("#heroBg", {
        y: "40%",
        ease: "none",
        scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            end: "bottom top",
            scrub: 0.5
        }
    });

    document.querySelectorAll(".js-reveal").forEach((e) => {
            gsap.to(e, {
                opacity: 1,
                y: 0,
                duration: 0.85,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: e,
                    start: "top 86%"
                }
            });
        });

    [
        ".services__grid",
        ".advantages__grid",
        ".process__grid"
    ].forEach((s) => {
        const grid = document.querySelector(s);

        if (!grid) return;

        const cards = grid.querySelectorAll("article");

        gsap.set(cards, {
            opacity: 0,
            y: 36
        });

        gsap.to(cards, {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.09,
            ease: "power2.out",
            scrollTrigger: {
                trigger: grid,
                start: "top 84%"
            }
        });
    });

    const miniCards = document.querySelectorAll(".mini-card");

    if (miniCards.length) {
        gsap.set(miniCards, {
            opacity: 0,
            y: 28
        });

        gsap.to(miniCards, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".intro__cards",
                start: "top 88%"
            }
        });
    }

    document.querySelectorAll(".section-label").forEach((e) => {
            gsap.from(e, {
                opacity: 0,
                x: -14,
                duration: 0.55,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: e,
                    start: "top 90%"
                }
            });
        });
}
