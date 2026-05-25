import { initMenu } from "./menu.js";
import { initModal } from "./modal.js";
import { initTheme } from "./theme.js";
import { initCookies } from "./cookies.js";
import { initScroll } from "./scroll.js";
import { initForm } from "./form.js";
import { initAnimations } from "./animations.js";
import { initSwiper } from "./swiper.js";


document.addEventListener("DOMContentLoaded", () =>{
        initMenu();

        const modal = initModal();

        initTheme();
        initCookies();
        initScroll();

        initForm(modal?.closeModal);

        initAnimations();
        initSwiper();
    }
);