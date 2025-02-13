document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Toggle the menu visibility
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('navbarNav');

    if (menuToggle && menu) {  // Ensure both elements exist
        menuToggle.addEventListener('click', function () {
            menu.classList.toggle('show');
        });
    }

    // Handle form submission
    const form = document.querySelector('form');
    if (form) {  // Ensure the form exists
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.querySelector('#name').value;
            const email = document.querySelector('#email').value;
            const message = document.querySelector('#message').value;

            if (!name || !email || !message) {
                alert('Please fill out all fields!');
                return;
            }

            alert('Thank you for your message! We will get back to you shortly.');

            // Reset form values
            document.querySelector('#name').value = '';
            document.querySelector('#email').value = '';
            document.querySelector('#message').value = '';
        });
    }
});
