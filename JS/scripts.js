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
let tempoNoSite = 0;
let nivel = 1;

setInterval(() => {
  tempoNoSite += 1; // Cada minuto

  if (tempoNoSite === 5 && nivel === 1) {
    document.getElementById('popup-missao').style.display = 'block';
  }
}, 60000); // 60000ms = 1 minuto

document.getElementById('btn-completar-missao').addEventListener('click', () => {
  window.open('https://linkcpa.com/sualink', '_blank'); // Seu link CPA aqui
  nivel = 2;
  document.getElementById('popup-missao').style.display = 'none';
});
let pontos = 0;
let nivelAtual = "Noob das Ofertas";

function atualizarPainel() {
  document.getElementById('pontos').innerText = `Pontos: ${pontos}`;
  document.getElementById('nivel').innerText = `Nível: ${nivelAtual}`;
}

function checarNivel() {
  if (pontos >= 1500) {
    nivelAtual = "Lenda dos Cupons";
  } else if (pontos >= 800) {
    nivelAtual = "Mestre Afiliado";
  } else if (pontos >= 400) {
    nivelAtual = "Pro das Promoções";
  } else if (pontos >= 150) {
    nivelAtual = "Caçador de Descontos";
  } else {
    nivelAtual = "Noob das Ofertas";
  }
  atualizarPainel();
}

// Ganha pontos a cada 5 minutos
setInterval(() => {
  pontos += 50;
  checarNivel();
}, 300000); // 300 mil ms = 5 minutos

// Aparece popup de missão a cada 5 minutos
setInterval(() => {
  document.getElementById('popup-missao').style.display = 'block';
}, 300000);

// Quando o usuário clicar no botão da missão
document.getElementById('btn-missao').addEventListener('click', () => {
  let links = [
    'https://singingfiles.com/show.php?l=0&u=2381480&id=41025&tracking_id=AfiliadoTop',
    'https://singingfiles.com/show.php?l=0&u=2381480&id=54731&tracking_id=AfiliadoTop'
  ];
  
  let linkAleatorio = links[Math.floor(Math.random() * links.length)];
  window.open(linkAleatorio, '_blank');
  
  pontos += 100; // Ganha 100 pontos por clicar na missão
  checarNivel();
  
  document.getElementById('popup-missao').style.display = 'none';
});

// Atualiza o painel inicial
atualizarPainel();
