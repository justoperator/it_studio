export function initModal() {
    const modal = document.querySelector("#modal");
    const modalButtons =
        document.querySelectorAll(".modal-open");
    const modalCloseButtons =
        document.querySelectorAll(".modal-close");
    const body = document.body;

    if (!modal) {
        return;
    }

    function openModal() {
        modal.classList.add("modal--active");
        body.classList.add("menu-open");
    }

    function closeModal() {
        modal.classList.remove("modal--active");
        body.classList.remove("menu-open");
    }

    modalButtons.forEach(function (button) {
        button.addEventListener("click", openModal);
    });

    modalCloseButtons.forEach(function (button) {
        button.addEventListener("click", closeModal);
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeModal();
        }
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    return {
        closeModal
    };
}
