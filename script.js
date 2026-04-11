// Scroll Animation with Intersection Observer
const sections = document.querySelectorAll('section:not(.hero)');

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

sections.forEach(section => observer.observe(section));

// --- Animación de Estrellas Fugaces ---
function createShootingStar() {
    const container = document.getElementById('shooting-stars-container');
    if (!container) return;

    const star = document.createElement('div');
    star.classList.add('shooting-star');

    // Posicionamiento inicial aleatorio (principalmente en el cuadrante superior-izquierdo)
    const startX = Math.random() * window.innerWidth - (window.innerWidth / 4);
    const startY = Math.random() * (window.innerHeight / 2) - 100;

    star.style.left = `${startX}px`;
    star.style.top = `${startY}px`;

    container.appendChild(star);

    // Eliminar la estrella del DOM después de que termine la animación (1.5s)
    setTimeout(() => star.remove(), 1500);

    // Programar la siguiente estrella (intervalo aleatorio entre 5 y 15 segundos)
    const nextDelay = Math.random() * 10000 + 500;
    setTimeout(createShootingStar, nextDelay);
}

// Iniciar la primera estrella después de 2 segundos de cargar la página
setTimeout(createShootingStar, 2000);