const testimonials = document.querySelectorAll(".testimonial");
const names = document.querySelectorAll(".name");
const positions = document.querySelectorAll(".position");
const arrows = document.querySelectorAll("[data-carousel-button]");
console.log( testimonials, names, positions, arrows);

const toggleContent = () => {
  testimonials.forEach((img) => {
    img.classList.toggle("hidden");
  });
  names.forEach((img) => {
    img.classList.toggle("hidden");
  });
  positions.forEach((img) => {
    img.classList.toggle("hidden");
  });
};

arrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    toggleContent();
    const offset = arrow.dataset.carouselButton === "next" ? 1 : -1;
    const slides = arrow
      .closest("[data-carousel]")
      .querySelector("[data-slides]");
      const activeSlide = slides.querySelector("[data-active]");
      let newIndex = [...slides.children].indexOf(activeSlide) + offset;
      if (newIndex < 0) newIndex = slides.children.length - 1;
      if (newIndex >= slides.children.length) newIndex = 0;
    
      slides.children[newIndex].dataset.active = true;
      delete activeSlide.dataset.active;
  });
  
});
