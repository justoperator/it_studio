export function initMenu() {
    const burger = document.querySelector("#burger");
    const menu = document.querySelector("#mobileMenu");
    const overlay = document.querySelector("#navOverlay");
    const links = document.querySelectorAll(".nav__link");

    if (!burger || !menu || !overlay) {
        return;
    }

    function closeMenu() {
        menu.classList.remove("nav--active");

        overlay.classList.remove(
            "nav-overlay--active"
        );

        burger.classList.remove(
            "burger--active"
        );

        burger.setAttribute(
            "aria-expanded",
            "false"
        );

        document.body.classList.remove(
            "menu-open"
        );
    }

    function openMenu() {
        menu.classList.add("nav--active");

        overlay.classList.add(
            "nav-overlay--active"
        );

        burger.classList.add(
            "burger--active"
        );

        burger.setAttribute(
            "aria-expanded",
            "true"
        );

        document.body.classList.add(
            "menu-open"
        );
    }

    burger.addEventListener(
        "click",
        function () {
            const isOpened =
                menu.classList.contains(
                    "nav--active"
                );

            if (isOpened) {
                closeMenu();
                return;
            }

            openMenu();
        }
    );

    overlay.addEventListener(
        "click",
        closeMenu
    );

    links.forEach(function (link) {
        link.addEventListener(
            "click",
            closeMenu
        );
    });

    document.addEventListener(
        "keydown",
        function (event) {
            if (event.key === "Escape") {
                closeMenu();
            }
        }
    );

    window.addEventListener(
        "resize",
        function () {
            if (window.innerWidth > 900) {
                closeMenu();
            }
        }
    );
}