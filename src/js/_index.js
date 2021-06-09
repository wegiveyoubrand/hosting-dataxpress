const menuToggle = document.querySelector(".menu-toggle");
const company = document.querySelectorAll(".company");

company.forEach((company) =>
  company.addEventListener("click", () => {
    location.href = "/index.html";
  })
);

const navContainer = document.querySelector(".navigation");
const navigation = document.querySelector(".nav-list");
const navItems = document.querySelectorAll(".nav-item");
const navLinks = document.querySelectorAll(".nav-link");
const body = document.querySelector("body");

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

let scrollpos = window.scrollY;
const header_height = header.offsetHeight;

const add_class_on_scroll = () => {
  header.classList.add("scrolled");
  menuToggle.classList.add("white");
};
const remove_class_on_scroll = () => {
  header.classList.remove("scrolled");
  menuToggle.classList.remove("white");
};

window.addEventListener("scroll", function () {
  scrollpos = window.scrollY;

  if (scrollpos >= header_height) {
    add_class_on_scroll();
  } else {
    remove_class_on_scroll();
  }

  console.log(scrollpos);
});
// function showContact() {
//   navContainer.classList.toggle("active");
//   contactToggle.classList.toggle("active");
//   contact.classList.toggle("active");

//   // navigation.classList.remove('active')
// }
