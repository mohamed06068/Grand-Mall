// Display the modal with the selected category
function showModal(category) {
    const categoryName = document.getElementById('categoryName');
    categoryName.textContent = category;
    const modal = new bootstrap.Modal(document.getElementById('shopModal'));
    modal.show();
}

// Filter categories dynamically
document.getElementById('searchInput').addEventListener('input', function (e) {
    const filter = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        if (title.includes(filter)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// Function to close the modal after submitting the form
function closeModal(modalId) {
    const modal = new bootstrap.Modal(document.getElementById(modalId));
    modal.hide();  // Hide the modal
}

// Login form submission
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();  // Prevent form submission
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Simple validation
    if (email && password) {
        alert('Login successful!');
        closeModal('loginModal');  // Close the login modal after successful login
    } else {
        alert('Please fill in all fields.');
    }
});

// Registration form submission
document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();  // Prevent form submission
    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;

    // Simple validation
    if (username && email && password && confirmPassword) {
        if (password === confirmPassword) {
            alert('Registration successful!');
            closeModal('registerModal');  // Close the register modal after successful registration
        } else {
            alert('Passwords do not match.');
        }
    } else {
        alert('Please fill in all fields.');
    }
});

// Forgot Password form submission
document.getElementById('forgotPasswordForm').addEventListener('submit', function (e) {
    e.preventDefault();  // Prevent form submission
    const email = document.getElementById('forgotEmail').value;

    // Simple validation
    if (email) {
        alert('Password recovery instructions have been sent to your email.');
        closeModal('forgotPasswordModal');  // Close the forgot password modal after processing
    } else {
        alert('Please enter your email.');
    }
});

// Add items to cart function (simple implementation)
function addToCart(itemName, itemPrice) {
    // Simulate adding to the cart
    alert(`Added ${itemName} to your cart for $${itemPrice}`);
}

// Example: Add product to cart in the Fruits & Vegetables section
document.querySelectorAll('.fruit-veg-btn').forEach(button => {
    button.addEventListener('click', function () {
        const productName = this.closest('.card').querySelector('.card-title').textContent;
        const productPrice = this.closest('.card').querySelector('.product-price').textContent.replace('$', '');
        addToCart(productName, productPrice);
    });
});

// Example: Add product to cart in the Dairy section
document.querySelectorAll('.dairy-btn').forEach(button => {
    button.addEventListener('click', function () {
        const productName = this.closest('.card').querySelector('.card-title').textContent;
        const productPrice = this.closest('.card').querySelector('.product-price').textContent.replace('$', '');
        addToCart(productName, productPrice);
    });
});
