const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show'); // Se quiser que volte quando sair da tela
        }
    });
    });

// Seleciona todos os elementos que terão o efeito
const elements = document.querySelectorAll('.hidden');
elements.forEach(el => observer.observe(el));