
// ============================================
// ETAPA 3 E 4 - DOM E ALTERAÇÃO DE CSS
// ============================================

// Seleciona o botão e o parágrafo
const botao = document.getElementById("botao");
const texto = document.getElementById("texto");

// Detecta o clique no botão
botao.addEventListener("click", function() {

    // Altera o texto do parágrafo
    texto.textContent = "O texto foi alterado usando JavaScript!";

    // textContent altera apenas o texto, enquanto innerHTML interpreta elementos HTML.

    // Altera a cor de fundo da página
    document.body.style.backgroundColor = "#243b55";

    // Aumenta o tamanho da fonte
    texto.style.fontSize = "24px";
});


// ============================================
// ETAPA 3 - SELETORES DO DOM
// ============================================

// Seleciona um elemento pelo ID
const titulo = document.getElementById("texto");

// Seleciona o primeiro título h1
const primeiroTitulo = document.querySelector("h1");

// Seleciona todos os botões
const todosBotoes = document.querySelectorAll("button");


// ============================================
// ETAPA 3 - JAVASCRIPT EXTERNO
// ============================================

// Seleciona o botão de mensagem externa
const botaoExterno = document.getElementById("botaoExterno");

// Detecta o clique
botaoExterno.addEventListener("click", function() {

    // Mostra uma mensagem
    alert("Esta mensagem veio do arquivo script.js!");
});


// ============================================
// NOVA FUNCIONALIDADE - REVELAR MENSAGEM
// ============================================

// Seleciona o botão de revelar mensagem
const revelar = document.getElementById("revelar");

// Seleciona o parágrafo da mensagem surpresa
const mensagemSurpresa = document.getElementById("mensagemSurpresa");

// Detecta quando o botão é clicado
revelar.addEventListener("click", function() {

    // Alterna a classe que esconde ou mostra a mensagem
    mensagemSurpresa.classList.toggle("escondida");

    // Verifica se a mensagem está escondida
    if (mensagemSurpresa.classList.contains("escondida")) {

        // Altera o texto do botão
        revelar.textContent = "Revelar mensagem";

    } else {

        // Altera o texto do botão quando a mensagem aparece
        revelar.textContent = "Esconder mensagem";
    }
});


// ============================================
// ETAPA 5 - EVENTO INPUT
// ============================================

// Seleciona o campo de digitação
const campo = document.getElementById("campo");

// Seleciona o espelho
const espelho = document.getElementById("espelho");

// Detecta cada alteração no campo
campo.addEventListener("input", function() {

    // Mostra o texto digitado no espelho
    espelho.textContent = campo.value;
});


// ============================================
// ETAPA 6 - CRIAR E REMOVER ELEMENTOS
// ============================================

// Seleciona os botões e a lista
const adicionar = document.getElementById("adicionar");
const remover = document.getElementById("remover");
const lista = document.getElementById("lista-curiosidades");

// Lista de curiosidades
const curiosidades = [
    "Gosto de aprender coisas novas.",
    "Tenho interesse por tecnologia.",
    "Gosto de ouvir música.",
    "Gosto de descobrir coisas diferentes.",
    "Estou aprendendo a programar!"
];

// Contador de curiosidades
let contador = 0;

// Detecta o clique em adicionar
adicionar.addEventListener("click", function() {

    // Cria um novo parágrafo
    const paragrafo = document.createElement("p");

    // Escolhe uma curiosidade
    paragrafo.textContent =
        curiosidades[contador % curiosidades.length];

    // Adiciona o parágrafo à página
    lista.appendChild(paragrafo);

    // Aumenta o contador
    contador++;
});

// Detecta o clique em remover
remover.addEventListener("click", function() {

    // Seleciona o último elemento da lista
    const ultimo = lista.lastElementChild;

    // Verifica se existe algum elemento
    if (ultimo) {

        // Remove o último parágrafo
        ultimo.remove();
    }
});


// ============================================
// ETAPA 7 - MOUSEOVER E CLASSLIST
// ============================================

// Seleciona a imagem
const imagem = document.getElementById("imagem");

// Detecta quando o mouse entra na imagem
imagem.addEventListener("mouseover", function() {

    // Adiciona a classe que aumenta e gira a imagem
    imagem.classList.add("imagem-destaque");
});

// Detecta quando o mouse sai da imagem
imagem.addEventListener("mouseout", function() {

    // Remove a classe de destaque
    imagem.classList.remove("imagem-destaque");
});


// ============================================
// INTERAÇÕES COM A IMAGEM
// ============================================

// Seleciona o botão de girar
const girar = document.getElementById("girar");

// Detecta o clique
girar.addEventListener("click", function() {

    // Alterna o efeito de giro
    imagem.classList.toggle("girar");
});


// Seleciona o botão de mudar cor
const corAngulo = document.getElementById("corAngulo");

// Detecta o clique
corAngulo.addEventListener("click", function() {

    // Alterna o efeito de cor e ângulo
    imagem.classList.toggle("cor-angulo");
});


// Seleciona o botão de filtro
const filtro = document.getElementById("filtro");

// Detecta o clique
filtro.addEventListener("click", function() {

    // Alterna o filtro visual
    imagem.classList.toggle("filtro");
});


// ============================================
// MOVIMENTAR A IMAGEM ALEATORIAMENTE
// ============================================

// Seleciona o botão de movimentar
const mover = document.getElementById("mover");

// Seleciona a área da imagem
const palco = document.querySelector(".palco");

// Cria uma função para sortear a posição
function mudarPosicao() {

    // Calcula o espaço horizontal disponível
    const larguraMaxima = palco.clientWidth - imagem.offsetWidth;

    // Calcula o espaço vertical disponível
    const alturaMaxima = palco.clientHeight - imagem.offsetHeight;

    // Sorteia a posição horizontal
    const novaEsquerda = Math.random() * larguraMaxima;

    // Sorteia a posição vertical
    const novoTopo = Math.random() * alturaMaxima;

    // Altera a posição horizontal da imagem
    imagem.style.left = novaEsquerda + "px";

    // Altera a posição vertical da imagem
    imagem.style.top = novoTopo + "px";
}

// Quando clicar, movimenta a imagem
mover.addEventListener("click", mudarPosicao);


// ============================================
// CLASSLIST - EFEITO NOS BOTÕES
// ============================================

// Percorre todos os botões da página
todosBotoes.forEach(function(botaoAtual) {

    // Adiciona um evento de clique em cada botão
    botaoAtual.addEventListener("click", function() {

        // Alterna a classe selecionado
        botaoAtual.classList.toggle("selecionado");
    });
});
