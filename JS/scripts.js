document.addEventListener('DOMContentLoaded', () => {
    console.log('Site afiliado.top carregado com sucesso!');

    // Scroll suave para âncoras internas
    const linksInternos = document.querySelectorAll('a[href^="#"]');
    linksInternos.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Botão "Voltar ao Topo"
    const btnTopo = document.getElementById('btn-topo');

    function toggleBtnTopo() {
        if (window.scrollY > 200) {
            btnTopo.style.display = "block";
        } else {
            btnTopo.style.display = "none";
        }
    }

    window.addEventListener('scroll', toggleBtnTopo);

    btnTopo.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Inicializa a visibilidade do botão ao carregar
    toggleBtnTopo();
});
