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

const contact = document.querySelector(".contact");
const contactToggle = document.querySelector("#contactToggle");
const header = document.querySelector("header");

navItems.forEach((navItem) => {
  navItem.addEventListener("click", (e) => {
    e.preventDefault;
    menuToggleOnActive();
  });
});

menuToggle.addEventListener("click", menuToggleOnActive);
contactToggle.addEventListener("click", showContact);

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
