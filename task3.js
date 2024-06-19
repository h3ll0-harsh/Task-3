document.addEventListener('DOMContentLoaded', function () {
    let slides = document.querySelectorAll('#hero .slide');
    let currentIndex = 0;
    let slideInterval = setInterval(nextSlide, 3000);

    function nextSlide() {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add('active');
        updateBackgroundImage();
    }

    function prevSlide() {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        slides[currentIndex].classList.add('active');
        updateBackgroundImage();
    }

    function updateBackgroundImage() {
        let heroSection = document.querySelector('#hero');
        let activeSlide = slides[currentIndex];
        let imgSrc = activeSlide.querySelector('img').src;
        heroSection.style.backgroundImage = `url(${imgSrc})`;
    }

    document.querySelector('.next').addEventListener('click', function () {
        nextSlide();
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 3000);
    });

    document.querySelector('.prev').addEventListener('click', function () {
        prevSlide();
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 3000);
    });

    // Initialize background image on page load
    updateBackgroundImage();
});

