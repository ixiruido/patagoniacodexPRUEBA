document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousedown', () => {
        card.style.transform = 'translateY(-5px) scale(0.98)';
    });
    card.addEventListener('mouseup', () => {
        card.style.transform = 'translateY(-10px) scale(1)';
    });
});

// Detección de sección activa en el menú
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = sectionId;
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});