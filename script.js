// Countdown Timer
function updateCountdown() {
    // Data do casamento - ajuste aqui
    const weddingDate = new Date('2026-08-01T11:00:00').getTime();
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Atualizar countdown a cada segundo
setInterval(updateCountdown, 1000);
updateCountdown();

// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Fechar menu ao clicar em um link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Smooth scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// RSVP Form Handler
const rsvpForm = document.getElementById('rsvp-form');
const rsvpMessage = document.getElementById('rsvp-message');

rsvpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        guests: document.getElementById('guests').value,
        message: document.getElementById('message').value
    };

    // Simulação de envio (você pode integrar com um backend aqui)
    // Por enquanto, apenas mostra mensagem de sucesso
    setTimeout(() => {
        rsvpMessage.textContent = `Obrigado, ${formData.name}! Sua confirmação foi registrada. Aguardamos você e seus ${formData.guests} convidado(s)!`;
        rsvpMessage.className = 'rsvp-message success';
        rsvpForm.reset();
        
        // Scroll para a mensagem
        rsvpMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
        // Opcional: salvar no localStorage
        const confirmations = JSON.parse(localStorage.getItem('rsvpConfirmations') || '[]');
        confirmations.push({
            ...formData,
            timestamp: new Date().toISOString()
        });
        localStorage.setItem('rsvpConfirmations', JSON.stringify(confirmations));
    }, 500);
});

// Fade in on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos para animação
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.about, .details, .gallery, .rsvp');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Adicionar imagens à galeria (quando você tiver as fotos)
// Exemplo de como adicionar imagens dinamicamente:
/*
function addGalleryImage(src, alt) {
    const galleryGrid = document.querySelector('.gallery-grid');
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';
    galleryItem.innerHTML = `<img src="${src}" alt="${alt}" style="width: 100%; height: 100%; object-fit: cover;">`;
    galleryGrid.appendChild(galleryItem);
}
*/

// Atualizar data do casamento dinamicamente (se necessário)
function updateWeddingDate(dateString) {
    const dateElement = document.getElementById('wedding-date');
    if (dateElement) {
        const date = new Date(dateString);
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        dateElement.textContent = date.toLocaleDateString('pt-BR', options);
    }
}

// Exemplo de uso: updateWeddingDate('2025-06-15');

