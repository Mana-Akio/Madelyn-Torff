const mobile_nav = document.querySelector(".mobile-nav-btn");
const nav_header = document.querySelector(".header");
function toggleNavbar () {
  nav_header.classList.toggle("active");
};
function lockScroll() {
  document.body.classList.toggle('lock-scroll');
}