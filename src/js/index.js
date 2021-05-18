const menuToggle = document.querySelector(".menu-toggle");

const navigation = document.querySelector("nav");
const header = document.querySelector("header");

menuToggle.addEventListener("click", menuToggleOnActive);

function menuToggleOnActive() {
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
  

  console.log(menuToggleClose);
}

function menuToggleOnClose() {
  navigation.classList.remove("active");
}
