// // script.js

// // Animate sections on scroll
// const sections = document.querySelectorAll(".section");
// const navLinks = document.querySelectorAll("nav a");

// function setActiveLink() {
//   let index = sections.length;

//   while (--index && window.scrollY + 100 < sections[index].offsetTop) {}

//   navLinks.forEach((link) => link.classList.remove("active"));
//   navLinks[index].classList.add("active");
// }

// window.addEventListener("scroll", () => {
//   revealOnScroll();
//   setActiveLink();
// });
// const revealOnScroll = () => {
//   const triggerBottom = window.innerHeight * 0.85;

//   sections.forEach((section) => {
//     const sectionTop = section.getBoundingClientRect().top;

//     if (sectionTop < triggerBottom) {
//       section.classList.add("show");
//     }
//   });
// };

// window.addEventListener("scroll", revealOnScroll);
// window.addEventListener("load", revealOnScroll);

// const form = document.getElementById("contact-form");
// const status = document.getElementById("status-msg");

// form.addEventListener("submit", async function (e) {
//   e.preventDefault();
//   const data = new FormData(form);
//   const response = await fetch(form.action, {
//     method: form.method,
//     body: data,
//     headers: {
//       Accept: "application/json",
//     },
//   });
//   if (response.ok) {
//     status.style.display = "block";
//     form.reset();
//   }
// });

// Typing animation in #home section
document.addEventListener("DOMContentLoaded", () => {
  const text = "Aspiring Data Science Professional and ML Developer";
  let i = 0;
  const speed = 50;
  const target = document.querySelector("#home p");

  function typeWriter() {
    if (i < text.length) {
      target.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  target.textContent = "";
  typeWriter();
});

// Show sections with animation on scroll
const sections = document.querySelectorAll(".section");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add("show");
    }
  });
};

// Active nav link on scroll
const navLinks = document.querySelectorAll("nav a");

function setActiveLink() {
  let index = sections.length;

  while (--index && window.scrollY + 100 < sections[index].offsetTop) {}

  navLinks.forEach((link) => link.classList.remove("active"));
  navLinks[index].classList.add("active");
}

// Page load fade-in
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
  revealOnScroll();
  setActiveLink();
});

// Scroll and resize event bindings
window.addEventListener("scroll", () => {
  revealOnScroll();
  setActiveLink();

  // progress bar
  const scrolled =
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";

  // back to top
  document.getElementById("back-to-top").style.display =
    window.scrollY > 300 ? "block" : "none";
});

// Back to top button click
document.getElementById("back-to-top").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Contact form submission
const form = document.getElementById("contact-form");
const status = document.getElementById("status-msg");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const data = new FormData(form);
  const response = await fetch(form.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  });
  if (response.ok) {
    status.style.display = "block";
    form.reset();
  }
});
