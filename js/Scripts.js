function sendEmail(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const templateParams = {
        from_name: name,
        from_email: email,
        message: message
    };

    emailjs.send('service_39i6nei', 'template_28h6bzq', templateParams)
        .then(function(response) {
            alert('Email sent successfully!');
        }, function(error) {
            alert('Failed to send email. Please try again.');
        });
}
