const swiper = new Swiper(".swiper", {
        slidesPerView: 2.25,
        spaceBetween: 14,
        breakpoints: {
            640: {
                slidesPerView: 3.10,
                spaceBetween: 14,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 20,
                navigation: {
                  nextEl: ".swiper-btn-next",
                  prevEl: ".swiper-btn-prev",
                },
          },
        },
      });