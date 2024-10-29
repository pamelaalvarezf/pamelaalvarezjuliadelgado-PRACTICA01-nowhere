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

document.addEventListener("DOMContentLoaded", function () {
    const galleryItems = document.querySelectorAll(".gallery-item img");
    const modalImage = document.getElementById("modalImage");
    let currentIndex = 0;

    galleryItems.forEach((item, index) => {
        item.addEventListener("click", () => {
            modalImage.src = item.src;
            currentIndex = index;
        });
    });

    document.getElementById("nextImage").addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % galleryItems.length;
        modalImage.src = galleryItems[currentIndex].src;
    });

    document.getElementById("prevImage").addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        modalImage.src = galleryItems[currentIndex].src;
    });

    document.addEventListener("keydown", function (e) {
        if (document.getElementById("galleryModal").classList.contains("show")) {
            if (e.key === "ArrowRight") {
                currentIndex = (currentIndex + 1) % galleryItems.length;
            } else if (e.key === "ArrowLeft") {
                currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
            }
            modalImage.src = galleryItems[currentIndex].src;
        }
    });
});