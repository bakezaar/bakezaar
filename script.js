// Fade-in animation on load
window.addEventListener("load", () => {
  document.querySelectorAll(".fade").forEach(el => {
    el.classList.add("show");
  });
});

// Smooth page transition effect
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function(e) {
    const href = this.getAttribute("href");
    if (href.endsWith(".html")) {
      e.preventDefault();
      document.body.style.opacity = 0;
      setTimeout(() => {
        window.location = href;
      }, 300);
    }
  });
});
