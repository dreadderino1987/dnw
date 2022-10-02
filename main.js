const navToggle = document.querySelector(".mobile-nav-toogle");
const primaryNav = document.querySelector(".primary-nav");
const primaryHeader = document.querySelector(".primary-header");

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
});
