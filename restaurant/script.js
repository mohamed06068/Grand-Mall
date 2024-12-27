const reservationLink = document.getElementById('reservationLink');
const reservationForm = document.getElementById('reservationForm');
const confirmationDiv = document.getElementById('confirmation');
const cancelReservation = document.getElementById('cancelReservation');
const closeConfirmation = document.getElementById('closeConfirmation'); // Get the close button

reservationLink.addEventListener('click', function(event) {
    event.preventDefault();
    reservationForm.style.display = 'block';
    confirmationDiv.style.display = 'none';
});

cancelReservation.addEventListener('click', function(){
    reservationForm.style.display = 'none';
});

closeConfirmation.addEventListener('click', function() { // Add event listener to close button
    confirmationDiv.style.display = 'none';
    reservationForm.style.display = 'none'; // Optionally show the form again or do something else
});

document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const code = Math.random().toString(36).substring(2, 10).toUpperCase();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;
    
    document.getElementById('reservationDetails').innerHTML = `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Date: ${date}</p>
        <p>Time: ${time}</p>
        <p>Guests: ${guests}</p>
    `;
    document.getElementById('reservationCode').textContent = code;
    confirmationDiv.style.display = 'block';
    reservationForm.style.display = 'none';

    console.log("Reservation Code:", code);
});document.getElementById('reservationLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior

    // Scroll to the top of the page smoothly
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    reservationForm.style.display = 'block'; //show form
    confirmationDiv.style.display = 'none'; //hide confirmation
});