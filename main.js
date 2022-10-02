// Navigation //

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

// Slider //

const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const prevBtn = document.querySelector(".button-slider-left");
const nextBtn = document.querySelector(".button-slider-right");
const dotsNav = document.querySelector(".carousel__nav");
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePostion = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove("current_slide");
  targetDot.classList.add("current_slide");
};

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current_slide");
  targetSlide.classList.add("current_slide");
};

const hideShowArrow = (slides, prevBtn, nextBtn, targetIndex) => {
  if (targetIndex === 0) {
    prevBtn.classList.add("is-hidden");
    nextBtn.classList.remove("is-hidden");
  } else if (targetIndex === slides.length - 1) {
    prevBtn.classList.remove("is-hidden");
    nextBtn.classList.add("is-hidden");
  } else {
    prevBtn.classList.remove("is-hidden");
    nextBtn.classList.remove("is-hidden");
  }
};

slides.forEach(setSlidePostion);

nextBtn.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current_slide");
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotsNav.querySelector(".current_slide");
  const nextDot = currentDot.nextElementSibling;
  const nextIndex = slides.findIndex((slide) => slide === nextSlide);
  moveToSlide(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
  hideShowArrow(slides, prevBtn, nextBtn, nextIndex);
});

prevBtn.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current_slide");
  const previousSlide = currentSlide.previousElementSibling;
  const currentDot = dotsNav.querySelector(".current_slide");
  const previousDot = currentDot.previousElementSibling;
  const previousIndex = slides.findIndex((slide) => slide === previousSlide);
  moveToSlide(track, previousSlide, previousSlide);
  updateDots(currentDot, previousDot);
  hideShowArrow(slides, prevBtn, nextBtn, previousIndex);
});

dotsNav.addEventListener("click", (e) => {
  const targetDot = e.target.closest("button");

  if (!targetDot) return;

  const currentSlide = track.querySelector(".current_slide");
  const currentDot = dotsNav.querySelector(".current_slide");
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetIndex];

  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
  hideShowArrow(slides, prevBtn, nextBtn, targetIndex);
});
