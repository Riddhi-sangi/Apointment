

function bookAppointment() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // You can perform validation here before proceeding
    // For example, checking if fields are not empty

    const confirmationText = 'Appointment booked for ${name} on ${date} at ${time}. We will email you at ${email} with further details.';

    document.getElementById('bookingForm').style.display = 'none';
    document.getElementById('confirmationText').innerText = confirmationText;
    document.getElementById('confirmation').style.display = 'block';
}
