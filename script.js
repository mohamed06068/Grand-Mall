// Smooth Scroll for Navigation
// This script adds smooth scrolling behavior to navigation links in the header.
document.querySelectorAll('nav a').forEach(anchor => {
  // Select all anchor (<a>) elements inside the <nav>
  
  anchor.addEventListener('click', function (e) {
    // Add a 'click' event listener to each anchor
    
    e.preventDefault();
    // Prevent the default behavior of jumping to the section immediately

    const target = document.querySelector(this.getAttribute('href'));
    // Get the target element based on the href attribute of the clicked link
    
    if (target) {
      // Check if the target element exists
      window.scrollTo({
        top: target.offsetTop - 70, // Scroll to the element's position minus 70px for offset (e.g., fixed header)
        behavior: 'smooth' // Enables smooth scrolling
      });
    }
  });

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