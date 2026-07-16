// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Welcome message
window.onload = function () {
  console.log("Welcome to Anna Megh Portfolio");
};
const btn = document.getElementById("theme-toggle");

btn.onclick = function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        btn.innerHTML = "☀️ Light";
    } else {
        btn.innerHTML = "🌙";
    }
};
