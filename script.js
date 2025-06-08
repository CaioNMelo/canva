// Função para rolagem suave até a seção de preços
function scrollToPricing() {
    const pricingSection = document.getElementById('pricing');
    pricingSection.scrollIntoView({ behavior: 'smooth' });
}

// Adiciona animação de fade-in aos elementos quando eles aparecem na tela
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    });

    // Observa todos os elementos que devem ter a animação
    document.querySelectorAll('section').forEach((section) => {
        observer.observe(section);
    });
}); 