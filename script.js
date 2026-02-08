console.log("JS is working");
const sections = document.querySelectorAll(".fade-up");
function checkSections() {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionTop < screenHeight - 100) {
      section.classList.add("show");
    }
  });
}

window.addEventListener("scroll", checkSections);
checkSections(); 