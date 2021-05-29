const intro = document.querySelector("#intro");
const introContent = document.querySelector("#introContent");


setTimeout(function () {
  introContent.classList.add("hide");
}, 3000);

setTimeout(function () {
  intro.classList.add("hide");
}, 5000);
