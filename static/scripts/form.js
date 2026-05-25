export function initForm(closeModal) {
    const contactForm = document.querySelector("#contactForm");
    const emailField = document.querySelector("#emailField");

    if (!contactForm || !emailField) return;

    contactForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const email = emailField.value.trim();

            const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

            if (!isValid) {
                emailField.focus();

                emailField.setCustomValidity(
                    "Введіть коректний email"
                );

                emailField.reportValidity();

                return;
            }

            emailField.setCustomValidity("");

            alert(
                "Дякуємо! Ми зв'яжемося з вами найближчим часом."
            );

            contactForm.reset();

            if (closeModal) closeModal();
        }
    );

    emailField.addEventListener("input", () => {
            emailField.setCustomValidity("");
        }
    );
}