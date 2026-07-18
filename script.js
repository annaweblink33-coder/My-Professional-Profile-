// Smooth Scroll
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Welcome Message
window.onload = function () {
  console.log("Welcome to Anna Megh Portfolio");
};

// Initialize EmailJS
emailjs.init("znmc9bIj26Bix8CMC");

// Contact Form
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_mwzqwnx",
    "template_8hmcm6l",
    this,
  "znmc9bIj26Bix8CMC"
)
  )
  .then(function () {
    alert("Message Sent Successfully!");
    document.getElementById("contact-form").reset();
  })
  .catch(function (error) {
  console.log(error);
  alert(JSON.stringify(error));
});
});

// Dark Mode Toggle
const btn = document.getElementById("theme-toggle");

if (btn) {
  btn.onclick = function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      btn.innerHTML = "☀️ Light";
    } else {
      btn.innerHTML = "🌙";
    }
  };
}
