document.getElementById('view-bookings').addEventListener('click', async () => {
    const center = document.getElementById('center').value;
    const sport = document.getElementById('sport').value;
    const date = document.getElementById('date').value;

    const response = await fetch(`/bookings?center=${center}&sport=${sport}&date=${date}`);
    const bookings = await response.json();

    const bookingsDiv = document.getElementById('bookings');
    bookingsDiv.innerHTML = '<h2>Bookings:</h2>';
    bookings.forEach(booking => {
        const bookingElement = document.createElement('div');
        bookingElement.classList.add('booking');
        bookingElement.textContent = `Court: ${booking.court}, Time Slot: ${booking.timeSlot}`;
        bookingsDiv.appendChild(bookingElement);
    });
});

document.getElementById('create-booking').addEventListener('click', async () => {
    const center = document.getElementById('center').value;
    const sport = document.getElementById('sport').value;
    const court = document.getElementById('court').value;
    const timeSlot = document.getElementById('timeSlot').value;
    const date = document.getElementById('date').value;

    const response = await fetch('/bookings', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ center, sport, court, timeSlot, date })
    });

    const result = await response.json();
    if (response.ok) {
        alert('Booking created successfully!');
    } else {
        alert(result.message);
    }
});

