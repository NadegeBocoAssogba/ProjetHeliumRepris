let navbar = document.querySelector("header");
let section = document.querySelector(".unique");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("headerScroll");
    section.classList.add("uniqueScroll");
  } else {
    navbar.classList.remove("headerScroll");
    section.classList.remove("uniqueScroll");
  }
});
