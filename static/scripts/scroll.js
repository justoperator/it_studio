export function initScroll() {
    const header = document.querySelector("#header");
    const goTop = document.querySelector("#goTop");

    if (!header || !goTop) return;

    const scrollState = {
        lastY: window.scrollY,
        ticking: false
    };

    function handleScroll() {
        const y = window.scrollY;

        const isDown = y > scrollState.lastY;
        const isPast = y > window.innerHeight * 0.72;
        const heroBottom = window.innerHeight * 0.85;

        header.classList.toggle(
            "header--on-hero",
            y < heroBottom
        );

        header.classList.toggle(
            "header--scrolled",
            y > 12
        );

        header.classList.toggle(
            "header--hidden",
            isPast && isDown
        );

        goTop.classList.toggle(
            "go-top--active",
            y > window.innerHeight * 0.8
        );

        if (y <= 12 || !isDown) {
            header.classList.remove(
                "header--hidden"
            );
        }

        scrollState.lastY = y;
        scrollState.ticking = false;
    }

    window.addEventListener("scroll", () => {
            if (scrollState.ticking) return;

            requestAnimationFrame(handleScroll);

            scrollState.ticking = true;
        }
    );

    goTop.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    );
}
