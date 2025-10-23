/* =================================
   ARQUIVO: script.js
   Funcionalidade do Menu Hambúrguer
   ================================= */

document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');

    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', function() {
            // Alterna a classe 'active' no menu
            navMenu.classList.toggle('active');

            // Altera o ícone do botão (Opcional, mas bom)
            const icon = hamburgerBtn.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
                hamburgerBtn.setAttribute('aria-label', 'Fechar menu');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                hamburgerBtn.setAttribute('aria-label', 'Abrir menu');
            }
        });
    }
});
