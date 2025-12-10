// Theme switcher
document.getElementById("themeToggle").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});

// Form validation
document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let message = "";

  if (email === "" || password === "") {
    message = "All fields must be filled!";
  } else if (!email.includes("@")) {
    message = "Please enter a valid email!";
  } else if (password.length < 6) {
    message = "Password must be at least 6 characters!";
  } else {
    message = "Form submitted successfully!";
  }

  document.getElementById("formMessage").textContent = message;
});

// Image toggle
document.getElementById("changeImageBtn").addEventListener("click", function() {
  let img = document.getElementById("toggleImage");
  if (img.src.includes("gymlogo.png")) {
    img.src = "photo5.jpg";
  } else {
    img.src = "gymlogo.png";
  }
});

// Real-time greeting
function showGreeting() {
  let now = new Date();
  let hour = now.getHours();
  let greeting = "";

  if (hour < 12) {
    greeting = "Good morning, user!";
  } else if (hour < 18) {
    greeting = "Good afternoon, user!";
  } else {
    greeting = "Good evening, user!";
  }

  document.getElementById("greeting").textContent = greeting;
}

// Run greeting when page loads
window.onload = showGreeting;

// Show/Hide Content
document.getElementById("toggleContentBtn").addEventListener("click", function() {
  let content = document.getElementById("hiddenContent");
  if (content.style.display === "none") {
    content.style.display = "block";
    this.textContent = "Hide Content";
  } else {
    content.style.display = "none";
    this.textContent = "Show More";
  }
});

// Automatic Slideshow
let slideIndex = 0;
let slides = ["photo5.jpg", "gymlogo.png", "photo6.jpg"]; // add your images here

function showSlides() {
  let img = document.getElementById("slideshowImage");
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  img.src = slides[slideIndex];
  setTimeout(showSlides, 3000); // change every 3 seconds
}

// Start slideshow when page loads
window.onload = function() {
  showGreeting(); // keep greeting
  showSlides();   // start slideshow
};
