ScrollReveal().reveal(".grid-wrapper > div", {
delay: 200,
distance: "50px",
interval: 100,
origin: "bottom",
scale: 0.9,
});

document.addEventListener("DOMContentLoaded", function() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const handleScroll = () => {
        fadeElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
});