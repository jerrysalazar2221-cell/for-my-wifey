// Small touch: reveal sections smoothly as they enter the screen.
const sections = document.querySelectorAll(".section, .final-section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.12 });

sections.forEach((section) => {
  section.classList.add("reveal");
  observer.observe(section);
});
