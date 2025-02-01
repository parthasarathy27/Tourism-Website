document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('navbarNav'); 

    if (menuToggle) {
        menuToggle.addEventListener('click', function () {
            menu.classList.toggle('show');
        });
    }
});


document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); 
    

    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    if (!name || !email || !message) {
        alert('Please fill out all fields!');
        return;
    }
    alert('Thank you for your message! We will get back to you shortly.');
    document.querySelector('#name').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#message').value = '';
});

