const menuToggle = document.querySelector(".menu-toggle");
const company = document.querySelectorAll(".company");

company.forEach((company) =>
  company.addEventListener("click", () => {
    location.href = "/index.html";
  })
);

const navContainer = document.querySelector("nav");
const navigation = document.querySelector(".nav-list");
const navItems = document.querySelectorAll(".nav-item");
const navLinks = document.querySelectorAll(".nav-link");




const header = document.querySelector("header");

navItems.forEach((navItem) => {
  navItem.addEventListener("click", (e) => {
    e.preventDefault;
    menuToggleOnActive();
  });
});

menuToggle.addEventListener("click", menuToggleOnActive);

function menuToggleOnActive() {
  menuToggle.classList.toggle("active");
  navContainer.classList.toggle("active");
  navigation.classList.toggle("active");

  contactToggle.classList.remove("active");
  contact.classList.remove("active");
}

function menuToggleOnClose() {
  navigation.classList.remove("active");
}

// function showContact() {
//   navContainer.classList.toggle("active");
//   contactToggle.classList.toggle("active");
//   contact.classList.toggle("active");

//   // navigation.classList.remove('active')
// }
