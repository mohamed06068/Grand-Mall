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

// Example: Close the login modal after submission
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();  // Prevent form submission
    closeModal('loginModal');  // Close the login modal
});

// Example: Close the register modal after submission
document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();  // Prevent form submission
    closeModal('registerModal');  // Close the register modal
});

