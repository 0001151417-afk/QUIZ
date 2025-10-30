
const perguntas = [
    {
        pergunta: "Qual tag HTML é usada para criar uma lista não ordenada?",
        opcoes: ["<ul>", "<ol>", "<li>", "<dl>"],
        resposta: "<ul>"
    },
    {
        pergunta: "Qual atributo HTML define um identificador único para um elemento?",
        opcoes: ["class", "id", "name", "tag"],
        resposta: "id"
    },
    {
        pergunta: "Qual tag HTML é usada para criar uma tabela?",
        opcoes: ["<table>", "<tabela>", "<tr>", "<td>"],
        resposta: "<table>"
    },
    {
        pergunta: "Qual a maneira correta de adicionar um comentário em HTML?",
        opcoes: ["// comentário", "<!-- comentário -->", "/* comentário */", "# comentário"],
        resposta: "<!-- comentário -->"
    },
    {
        pergunta: "Qual a tag HTML que representa a principal seção de conteúdo de uma página?",
        opcoes: ["<header>", "<footer>", "<main>", "<section>"],
        resposta: "<main>"
    },

    
    {
        pergunta: "Qual propriedade CSS controla a cor do texto?",
        opcoes: ["color", "font-color", "text-color", "foreground-color"],
        resposta: "color"
    },
    {
        pergunta: "Qual seletor CSS tem maior especificidade?",
        opcoes: ["Classe", "ID", "Tag", "Estilo Inline"],
        resposta: "Estilo Inline"
    },
    {
        pergunta: "Como se chama a propriedade CSS que muda a cor de fundo de um elemento?",
        opcoes: ["bgcolor", "background-color", "color-background", "background"],
        resposta: "background-color"
    },
    {
        pergunta: "Qual propriedade CSS é usada para definir tipo de letra",
        opcoes: ["font-size","font-style","font-weight","font-family"],
        resposta: "font-family"
    },
    {
        pergunta: "Qual a forma correta de aplicar uma regra CSS para todos os elementos h2 da página?",
        opcoes: ["#h2 {}", ".h2 {}", "h2 {}", "*h2 {}"],
        resposta: "h2 {}"
    },

    {
        pergunta: "Qual palavra-chave JavaScript é usada para declarar uma variável com escopo de bloco e que pode ser reatribuída?",
        opcoes: ["var", "const", "let", "function"],
        resposta: "let"
    },
    {
        pergunta: "Em JavaScript, qual comando é usado para mostrar uma mensagem em uma pequena caixa de diálogo (pop-up)?",
        opcoes: ["log" ,"print", "alert", "show"],
        resposta: "alert"
    },
    {
        pergunta: "Qual o operador de igualdade estrita em JavaScript (compara valor e tipo)?",
        opcoes: ["==", "===", "!=", "!=="],
        resposta: "==="
    },
    {
        pergunta: "Qual é a forma correta de criar uma função em JavaScript?",
        opcoes: ["function:minhaFuncao()", "function minhaFuncao()", "criar minhaFuncao()", "minhaFuncao = function()"],
        resposta: "function minhaFuncao()"
    },
    {
        pergunta: "Qual método JavaScript é usado para exibir uma caixa de diálogo com uma mensagem?",
        opcoes: ["prompt()", "confirm()", "alert()", "console.log()"],
        resposta: "alert()"
    }
];


const perguntaElemento = document.getElementById('pergunta');
const opcoesElemento = document.getElementById('opcoes');
const proximoBtn = document.getElementById('proximo-btn');

let perguntaAtualIndex = 0;
let pontuacao = 0;


function exibirPergunta() {
    const perguntaAtual = perguntas[perguntaAtualIndex];
    perguntaElemento.textContent = perguntaAtual.pergunta;
    opcoesElemento.innerHTML = '';

    perguntaAtual.opcoes.forEach(opcao => {
        const opcaoBtn = document.createElement('button');
        opcaoBtn.classList.add('opcao-btn');
        opcaoBtn.textContent = opcao;
        opcoesElemento.appendChild(opcaoBtn);

        opcaoBtn.addEventListener('click', () => {
            verificarResposta(opcao, perguntaAtual.resposta, opcaoBtn);
        });
    });

    proximoBtn.style.display = 'none';
}


function verificarResposta(opcaoSelecionada, respostaCorreta, botao) {
    if (opcaoSelecionada === respostaCorreta) {
        botao.classList.add('correta');
        pontuacao++;
    } else {
        botao.classList.add('errada');
        const botoesOpcao = opcoesElemento.querySelectorAll('.opcao-btn');
        botoesOpcao.forEach(btn => {
            if (btn.textContent === respostaCorreta) {
                btn.classList.add('correta');
            }
        });
    }

    const botoesOpcao = opcoesElemento.querySelectorAll('.opcao-btn');
    botoesOpcao.forEach(btn => btn.disabled = true);

    proximoBtn.style.display = 'block';
}


function proximaPergunta() {
    perguntaAtualIndex++;
    if (perguntaAtualIndex < perguntas.length) {
        exibirPergunta();
    } else {
        exibirResultado();
    }
}


function exibirResultado() {
    perguntaElemento.textContent = `Quiz concluído! Sua pontuação: ${pontuacao} de ${perguntas.length}.`;
    opcoesElemento.innerHTML = '';
    proximoBtn.style.display = 'none';
}

proximoBtn.addEventListener('click', proximaPergunta);


exibirPergunta();
