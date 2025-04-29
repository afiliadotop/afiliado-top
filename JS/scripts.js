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
  const btnPremio = document.querySelector('.btn-premio');

  // Lista de prêmios (links de afiliados diferentes)
  const premios = [
    { texto: "Desconto Shopee!", link: "https://s.shopee.com.br/AUh1TEvm0E" },
    { texto: "Oferta Amazon Prime!", link: "https://amzn.to/3EJeRME" },
    { texto: "Ganhe com TEMU!", link: "https://temu.to/k/equr463rppl" },
    { texto: "Cupom Especial para Você!", link: "https://seu-link-especial.com" },
    { texto: "Promoção Surpresa!", link: "https://outro-link-afiliado.com" }
  ];

  function aumentarContador() {
    visualizacoes++;
    numeroVisualizacoes.textContent = visualizacoes;

    // Mostrar popup de prêmio a cada 3 visualizações
    if (visualizacoes % 3 === 0) {
      mostrarPremio();
    }
  }

  function mostrarPremio() {
    // Escolhe aleatoriamente um prêmio da lista
    const premioSorteado = premios[Math.floor(Math.random() * premios.length)];

    // Atualiza o texto e o link do botão
    document.querySelector('.popup-conteudo h2').textContent = "Parabéns!";
    document.querySelector('.popup-conteudo p').textContent = premioSorteado.texto;
    btnPremio.href = premioSorteado.link;

    popupPremio.style.display = 'flex';
  }

  // Intervalo para aumentar visualizações (5 minutos = 300000ms)
  setInterval(aumentarContador, 300000);

  // Botão para fechar o popup
  fecharPopup.addEventListener('click', function() {
    popupPremio.style.display = 'none';
  });

  // Fecha ao clicar fora do conteúdo
  popupPremio.addEventListener('click', function(e) {
    if (e.target === popupPremio) {
      popupPremio.style.display = 'none';
    }
  });
});
