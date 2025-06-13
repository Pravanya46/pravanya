// Hamburger toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Scroll Spy to highlight nav links
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 70; // offset for navbar height
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Dark Mode Toggle
const darkToggle = document.getElementById('dark-toggle');
const body = document.body;

// Load saved mode from localStorage
if (localStorage.getItem('mode') === 'light') {
  body.classList.add('light-mode');
  darkToggle.textContent = '🌞';
}

darkToggle.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  if (body.classList.contains('light-mode')) {
    darkToggle.textContent = '🌞';
    localStorage.setItem('mode', 'light');
  } else {
    darkToggle.textContent = '🌙';
    localStorage.setItem('mode', 'dark');
  }
});

const text = "Hi! I am Pravanya";
const typingTarget = document.getElementById("typing-text");
let index = 0;

function typeLetterByLetter() {
  if (index < text.length) {
    typingTarget.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeLetterByLetter, 100); // 100ms delay per letter
  }
}

window.addEventListener("DOMContentLoaded", typeLetterByLetter);

document.querySelectorAll('.skill').forEach(skill => {
  skill.addEventListener('mouseenter', () => {
    const level = skill.getAttribute('data-level');
    skill.style.setProperty('--fill-width', level);
    skill.querySelector('::before'); // just to force update maybe, but not necessary
    skill.style.setProperty('--fill-width', level);
    skill.style.setProperty('position', 'relative');
  });
  skill.addEventListener('mouseleave', () => {
    skill.style.setProperty('--fill-width', '0');
  });
});

// Then modify CSS to use the variable --fill-width:

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = e.target.name.value;
  const email = e.target.email.value;
  const message = e.target.message.value;

  alert(`Thank you, ${name}! Your message has been sent.`);

  // Reset form
  e.target.reset();
});

const form = document.getElementById("contact-form");
  const successMsg = document.getElementById("success-msg");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Simulate successful submission (replace this part with real email service if needed)
    setTimeout(() => {
      successMsg.style.display = "block";
      form.reset();

      // Hide message after 4 seconds (optional)
      setTimeout(() => {
        successMsg.style.display = "none";
      }, 4000);
    }, 500); // simulate slight delay
  });

  window.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("success") === "true") {
    const successMsg = document.createElement("p");
    successMsg.textContent = "✅ Message sent successfully!";
    successMsg.style.color = "#10b981";
    successMsg.style.fontWeight = "600";
    document.querySelector("#contact-form").appendChild(successMsg);
  }
});

