export function initSwiper() {
    if (typeof Swiper === "undefined") return;

    new Swiper(".projects-slider", {
        loop: true,
        speed: 700,
        spaceBetween: 18,
        grabCursor: true,

        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },

        breakpoints: {
            0: {
                slidesPerView: 1
            },

            768: {
                slidesPerView: 1.15
            },

            1024: {
                slidesPerView: 1.55
            }
        }
    });
}
