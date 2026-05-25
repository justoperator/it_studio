export function initCookies() {
    const cookieBar = document.querySelector("#cookieBar");
    const cookieAccept = document.querySelector("#cookieAccept");

    if (!cookieBar || !cookieAccept) return;

    const accepted = Cookies.get("cookieAccepted");

    if (accepted === "true") {
        cookieBar.classList.add(
            "cookie-bar--hidden"
        );
    }

    cookieAccept.addEventListener("click", () => {
            Cookies.set(
                "cookieAccepted",
                "true",
                {
                    expires: 365,
                    path: "/",
                    sameSite: "Lax"
                }
            );

            cookieBar.classList.add(
                "cookie-bar--hidden"
            );
        }
    );
}
