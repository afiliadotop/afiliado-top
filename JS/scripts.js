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
document.addEventListener('DOMContentLoaded', function() {
  let visualizacoes = 0;
  const numeroVisualizacoes = document.getElementById('numero-visualizacoes');
  const popupPremio = document.getElementById('popup-premio');
  const fecharPopup = document.getElementById('fechar-popup');

  function aumentarContador() {
    visualizacoes++;
    numeroVisualizacoes.textContent = visualizacoes;

    // Mostrar popup de prêmio a cada 3 visualizações
    if (visualizacoes % 3 === 0) {
      popupPremio.style.display = 'flex';
    }
  }

  // Intervalo para aumentar visualizações
  setInterval(aumentarContador, 300000); // 5 minutos

  // Botão para fechar o popup
  fecharPopup.addEventListener('click', function() {
    popupPremio.style.display = 'none';
  });

  // Também fecha se clicar fora da caixa
  popupPremio.addEventListener('click', function(e) {
    if (e.target === popupPremio) {
      popupPremio.style.display = 'none';
    }
  });
});
