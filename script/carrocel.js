        //SCRIPT DO CARROCEL pag HOME

    
        const swiper = new Swiper('.js-banner-swiper', {
            loop: true,
            slidesPerView: 'auto',
            centeredSlides: true,
            spaceBetween: 20,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            autoplay: {
              delay: 3000,
              disableOnInteraction: false,
            },
            speed: 900, // <---- Adicione esta linha para definir a velocidade da transição em 800ms (0.8 segundos)
            on: {
              slideChangeTransitionStart: function () {
                swiper.slides.forEach(slide => {
                  slide.classList.remove('swiper-slide-scaled');
                });
                swiper.slides[swiper.activeIndex].classList.add('swiper-slide-scaled');
              },
            },
          });

        //FIN DO SCRIPT CARROCEL