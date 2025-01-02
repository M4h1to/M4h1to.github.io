// Typewriting Effect for the Tagline
document.addEventListener("DOMContentLoaded", function() {
    const tagline = "Crafting Code, Securing the Future";
    let index = 0;
    const element = document.querySelector('.tagline');

    function type() {
        if (index < tagline.length) {
            element.innerHTML += tagline.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }
    type();
});

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
