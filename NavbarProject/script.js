document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const link = document.querySelector('.link');

    navToggle.addEventListener('click', function() {
        link.classList.toggle('show-links');
    });
});
