export function initTheme() {
    const themeToggle = document.querySelector("#themeToggle");
    const themeStyle = document.querySelector("#theme-style");

    if (!themeToggle || !themeStyle) return;


    function setThemeIcon() {
        const isDark = themeStyle.getAttribute("href").includes("dark");

        themeToggle.textContent = isDark ? "☾" : "☀";
    }

    function applyTheme(name) {
        const href =
            name === "light"
                ? "static/styles/light-theme.css"
                : "static/styles/dark-theme.css";

        themeStyle.setAttribute("href", href);

        localStorage.setItem("theme", name);

        setThemeIcon();
    }

    const savedTheme = localStorage.getItem("theme");

    if (
        savedTheme === "light" ||
        savedTheme === "dark"
    ) {
        applyTheme(savedTheme);
    } else {
        const prefersLight =
            window.matchMedia(
                "(prefers-color-scheme: light)"
            ).matches;

        applyTheme(
            prefersLight ? "light" : "dark"
        );
    }

    themeToggle.addEventListener("click", () => {
            const isDark = themeStyle.getAttribute("href").includes("dark");

            applyTheme(
                isDark ? "light" : "dark"
            );
        }
    );
}
