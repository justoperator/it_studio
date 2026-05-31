export function initCookies() {
    const cookieBar = document.querySelector(
        "#cookieBar"
    );

    const cookieAccept = document.querySelector(
        "#cookieAccept"
    );

    if (!cookieBar || !cookieAccept) return;

    const accepted = localStorage.getItem(
        "cookieAccepted"
    );

    if (accepted === "true") {
        cookieBar.classList.add(
            "cookie-bar--hidden"
        );
    }

    cookieAccept.addEventListener(
        "click",
        () => {
            localStorage.setItem(
                "cookieAccepted",
                "true"
            );

            cookieBar.classList.add(
                "cookie-bar--hidden"
            );
        }
    );
}