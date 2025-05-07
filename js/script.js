// Form validation and submission simulation
const form = document.getElementById("contactForm");
const nameInput = form.name;
const emailInput = form.email;
const messageInput = form.message;
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const formMessage = document.getElementById("formMessage");

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let valid = true;

  // Reset errors
  nameError.style.display = "none";
  emailError.style.display = "none";
  messageError.style.display = "none";
  formMessage.style.display = "none";
  formMessage.textContent = "";
  if (!nameInput.value.trim()) {
    nameError.style.display = "block";
    valid = false;
  }
  if (!validateEmail(emailInput.value.trim())) {
    emailError.style.display = "block";
    valid = false;
  }
  if (!messageInput.value.trim()) {
    messageError.style.display = "block";
    valid = false;
  }
  if (valid) {
    // Simulate successful message send
    formMessage.style.color = "green";
    formMessage.textContent = "Thank you for your message! I will get back to you soon.";
    formMessage.style.display = "block";
    form.reset();
  }
});

// Hamburger-Menu
const navbarnav = document.querySelector(".nav-links");
const hamburger = document.querySelector("#hamburger-menu");

hamburger.onclick = () => {
  navbarnav.classList.toggle("active");
};

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarnav.contains(e.target)) {
    navbarnav.classList.remove("active");
  }
});
