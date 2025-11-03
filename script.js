// JavaScript para menu hambúrguer
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Smooth scroll para links de navegação
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 60, // Ajuste para header sticky
            behavior: 'smooth'
        });
        // Fechar menu mobile após clique
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });
});