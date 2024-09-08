//Loading Navigation
document.addEventListener("DOMContentLoaded", function() {
    fetch('../nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-placeholder').innerHTML = data;

         // Ensure the elements exist before adding event listeners
            let menuBtn = document.querySelector('#menu-btn');
            let navbar = document.querySelector('.header .flex .navbar');

            if (menuBtn && navbar) {
                menuBtn.onclick = () => {
                    menuBtn.classList.toggle('fa-times');
                    navbar.classList.toggle('active');
                };
            }
        });
});



//course swiper
var swiper = new Swiper(".course-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});


//review swiper
var swiper = new Swiper(".reviews-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
