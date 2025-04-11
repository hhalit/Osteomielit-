// Гамбургер-меню
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
    navList.classList.toggle('active');
    hamburger.textContent = navList.classList.contains('active') ? '✕' : '☰';
});

// Анимация при скролле
const fadeElements = document.querySelectorAll('.fade-in');

const checkFade = () => {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight * 0.8) {
            element.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', checkFade);
window.addEventListener('load', checkFade);