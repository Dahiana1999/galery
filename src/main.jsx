import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import Swiper from 'swiper'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <App />
  </StrictMode>,

  new Swiper( ".swiper", {
    slidesPerView: 3,
    spaceBetween: 50,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {

      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",

    },

    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },

    onSlideChange: function () {
      console.log('slide change');
    },


    on: {
      slideChange: function () {
        console.log('slide change');
      },

      onSwiper: function (swiper) {
        console.log(swiper);
      }

    }

  })
)


