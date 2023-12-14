//ativar animação dos links do menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add('ativo');
  }
}

links.forEach(ativarLink);

//ativar itens do orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
    const element = document.getElementById(parametro);
    if(element) {
      element.checked = true;
    }
}

parametros.forEach(ativarProduto);

//perguntas frequentes

const perguntas = document.querySelectorAll('.perguntas button');

function ativarPergunta(evt) {
  const pergunta = evt.currentTarget;
  const controls = pergunta.getAttribute('aria-controls');
  const resposta = document.getElementById(controls);

  resposta.classList.toggle('ativo');
  const ativo = resposta.classList.add.contains('ativo');
  pergunta.setAttribute('aria-expanded', ativo);
}
function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);


//galeria de bicicletas
const galeria = document.querySelectorAll('.bicicleta-imagens img');
const galeriaContainer = document.querySelector('.bicicleta-imagens');

function trocarImagem(evt) {
  const img = evt.currentTarget;
  const media = matchMedia('(min-width: 1000px)').matches;
  if(media) {
    galeriaContainer.prepend(img)
  }
}

function eventosGaleria(img){
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);

//animação plugin
if(window.SimpleAnime) {
  new SimpleAnime();
}

//verificar se o javascript existe na página
document.documentElement.classList.add('js')