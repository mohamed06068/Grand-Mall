document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevents the form from reloading the page

    // Retrieve input values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validate inputs
    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent successfully.`);
        this.reset(); // Resets the form fields
    } else {
        alert('Please fill out all fields before submitting.');
    }
});
