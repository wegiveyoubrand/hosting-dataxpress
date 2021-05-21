const slides = Array.from(document.querySelectorAll(".slide"));

const slidesContainer = document.querySelector(".slides");

const dotsEl = document.querySelector(".dots");
let timeOutId;

function getNextPrev() {
  const activeSlide = document.querySelector(".slide.active");
  const activeIndex = slides.indexOf(activeSlide);
  let prev, next;
  if (activeIndex === slides.length - 1) {
    next = slides[0];
  } else {
    next = slides[activeIndex + 1];
  }

  if (activeIndex === 0) {
    prev = slides[slides.length - 1];
  } else {
    prev = slides[activeIndex - 1];
  }
  return [next, prev];
}

function getPosition() {
  const activeSlide = document.querySelector(".slide.active");
  const activeIndex = slides.indexOf(activeSlide);
  const [next, prev] = getNextPrev();
  slides.forEach((slide, index) => {
    if (index === activeIndex) {
      slide.style.transform = "translateX(0)";
    } else if (slide === prev) {
      slide.style.transform = "translateX(-100%)";
    } else {
      slide.style.transform = "translateX(100%)";
    }
    slide.addEventListener("transitionend", () => {
      slide.classList.remove("top");
    });
  });
}
function getNextSlide() {
  clearInterval(timeOutId);
  const current = document.querySelector(".slide.active");
  const [next, prev] = getNextPrev();
  if (current.classList.contains("top")) {
    return;
  }
  current.classList.add("top");
  next.classList.add("top");
  current.style.transform = "translate(-100%)";
  current.classList.remove("active");
  next.style.transform = "translateX(0)";
  next.classList.add("active");
  getPosition();
  getActiveDot();
  autoLoop();
}
function getPrevSlide() {
  clearInterval(timeOutId);
  const current = document.querySelector(".active");
  const [next, prev] = getNextPrev();
  current.classList.add("top");
  next.classList.add("top");
  current.style.transform = "translate(100%)";
  current.classList.remove("active");
  next.style.transform = "translateX(0)";
  next.classList.add("active");
  getPosition();
  getActiveDot();
  autoLoop();
}
// Dots
slides.forEach((slide) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  dotsEl.appendChild(dot);
});
function getActiveDot() {
  const allDots = document.querySelectorAll(".dots .dot");
  allDots.forEach((dot) => {
    dot.classList.remove("active");
  });
  const activeSlide = document.querySelector(".slide.active");
  const activeIndex = slides.indexOf(activeSlide);
  allDots[activeIndex].classList.add("active");

}
function functionalDots() {
  const allDots = document.querySelectorAll(".dots .dot");
  allDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      getDotSlide(index);
    });
  });
}
function getDotSlide(index) {
  clearTimeout(timeOutId);
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  const current = slides[index];
  current.classList.add("active");
  getPosition();
  getActiveDot();
  autoLoop();
}
function autoLoop() {
  timeOutId = setTimeout(() => {
    getNextSlide();
  }, 500);
}
getActiveDot();
functionalDots();
autoLoop();
