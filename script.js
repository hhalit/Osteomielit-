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

// Темный режим
const themeBtn = document.querySelector('#theme-btn');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeBtn.textContent = '☀️ Светлый режим';
}

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        themeBtn.textContent = '☀️ Светлый режим';
        localStorage.setItem('theme', 'dark');
    } else {
        themeBtn.textContent = '🌙 Темный режим';
        localStorage.setItem('theme', 'light');
    }
});

// Пасхалка: клик по логотипу
const logo = document.querySelector('#easter-egg-logo');
let logoClickCount = 0;

logo.addEventListener('click', () => {
    logoClickCount++;
    if (logoClickCount === 5) {
        alert('Вы нашли пасхалку! Улыбнитесь :)');
        logoClickCount = 0;
    }
});

// Пасхалка: звёздочки в футере
const footer = document.querySelector('#easter-egg-footer');
footer.addEventListener('mouseenter', () => {
    const starsContainer = document.createElement('div');
    starsContainer.classList.add('stars');
    footer.appendChild(starsContainer);

    for (let i = 0; i < 10; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 2}s`;
        starsContainer.appendChild(star);
    }
});