// Handle form submission
document.getElementById('contact-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    const formData = {
        name: this.name.value,
        email: this.email.value,
        message: this.message.value
    };

    try {
        const response = await fetch('http://localhost:3000/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        } else {
            alert('Error submitting form. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error connecting to server. Please try again later.');
    }
});
