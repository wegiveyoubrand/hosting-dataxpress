const slides = document.querySelectorAll(".slide");
let i = 0;

// slides.forEach((slide, i) => {
//   slide.classList.remove("show");
//   slide.classList.add("hide");
//   slide[1].classList.add("show");
// });

setInterval(function () {
  slides.forEach((slide, i) => {
    slide.classList.remove("show");
    slide.classList.add("hide");
  });
  if (i == 0) {
    slides[i].classList.add("show");
    slides[i].classList.remove("hide");
  } else if (i == slides.length) {
    slides[i - 1].classList.add("hide");
    slides[i - 1].classList.remove("show");

    slides[0].classList.add("show");
    slides[0].classList.remove("hide");
    i = 0;
  } else {
    slides[i - 1].classList.add("hide");
    slides[i - 1].classList.remove("show");

    slides[i].classList.add("show");
    slides[i].classList.remove("hide");
  }

  i++;
}, 5000);
