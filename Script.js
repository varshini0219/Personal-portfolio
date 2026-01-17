// Simple JS for Portfolio Website
// Change header text color when hovered
const header = document.querySelector("header h1");
header.addEventListener("mouseover", () => {
    header.style.color = "#FF5733";  // Change color on hover
});
header.addEventListener("mouseout", () => {
    header.style.color = "white"; // Change back when mouse leaves
});
// Scroll animation for sections
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY + window.innerHeight;
    sections.forEach((section) => {
        if (scrollPos > section.offsetTop + 100) {
            section.style.opacity = 1;
            section.style.transform = "translateY(0)";
        }
    });
});
