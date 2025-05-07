document.addEventListener('DOMContentLoaded', function() {
  // Inicialização básica
  AOS.init({ duration: 1000 });
  
  // Carregamento de conteúdo dinâmico
  carregarOfertas();
  carregarMissoes();
  atualizarRanking();
  
  // Eventos
  document.getElementById('btn-topo').addEventListener('click', () => window.scrollTo(0, 0));
  
  // Sistema de pontos
  let pontos = parseInt(sessionStorage.getItem('pontosAfiliado')) || 0;
  let nivel = 1;
  
  function atualizarPontos(valor) {
    pontos += valor;
    document.getElementById('pontos-usuario').textContent = `${pontos} pts`;
    verificarNivel();
    sessionStorage.setItem('pontosAfiliado', pontos);
  }
  
  function verificarNivel() {
    const niveis = [100, 300, 600, 1000];
    nivel = niveis.findIndex(n => pontos < n) + 1;
    document.getElementById('nivel-usuario').textContent = `Nível ${nivel}`;
  }
  
  // Funções de carregamento de conteúdo
  function carregarOfertas() {
    const grid = document.querySelector('.grid-ofertas-especiais');
    
    // Exemplo de oferta
    const oferta = `
      <div class="card-oferta">
        <div class="card-header">
          <span class="dificuldade">⭐ Dificuldade: Fácil</span>
          <span class="pontos-recompensa">+50 pts</span>
        </div>
        <h3>📁 Download Misterioso</h3>
        <p class="pista-card">"Encontre o link que começa com 's3cr37'"</p>
        <a href="#" class="btn-ouro" data-pista="s3cr37">🔍 Investigar Oferta</a>
      </div>
    `;
    
    grid.innerHTML = oferta.repeat(3);
  }
  
  // Demais funções...
});
