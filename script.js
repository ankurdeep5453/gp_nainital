// Highlight active nav item based on scroll
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");
  
    window.addEventListener("scroll", () => {
      let fromTop = window.scrollY + 100;
  
      navLinks.forEach(link => {
        let section = document.querySelector(link.getAttribute("href"));
        if (
          section.offsetTop <= fromTop &&
          section.offsetTop + section.offsetHeight > fromTop
        ) {
          navLinks.forEach(l => l.classList.remove("active"));
          link.classList.add("active");
        }
      });
    });
  });
  