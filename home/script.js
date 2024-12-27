document.addEventListener('DOMContentLoaded', () => {
  // Dynamic welcome message for the mall
  const welcomeMessage = document.querySelector('#welcomeMessage');
  const hours = new Date().getHours();
  if (hours < 12) {
      welcomeMessage.textContent = "Good Morning! Welcome to Grand Mall!";
  } else if (hours < 18) {
      welcomeMessage.textContent = "Good Afternoon! Enjoy your time at Grand Mall!";
  } else {
      welcomeMessage.textContent = "Good Evening! Explore Grand Mall's nightlife!";
  }

  
});

  // Login Form Submission
  document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // Call API to login
    console.log('Login Form Submitted:', email, password);
  });

  // Register Form Submission
  document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    // Call API to register
    console.log('Register Form Submitted:', fullName, email, password, confirmPassword);
  });

  // Forgot Password Form Submission
  document.getElementById('forgotForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    // Call API to send reset link
    console.log('Forgot Password Form Submitted:', email);
  });
