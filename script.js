// Typing Effect for the tagline
document.addEventListener("DOMContentLoaded", function() {
    const tagline = "Crafting Code, Securing the Future";
    let index = 0;
    const element = document.getElementById("tagline");

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

// Easter Egg: Trigger by pressing 'E' on the keyboard
document.addEventListener('keydown', function(event) {
    if (event.key === 'E' || event.key === 'e') {
        alert("You’ve found the secret code! Congrats, you’re one step closer to mastering the matrix.");
    }
});
