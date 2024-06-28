const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "como que a inteligencia artificial pode contribuir para nossa sociedade ?",
        alternativas: [
            { 
                texto:"pode automatizar tarefas repetitivas e demoradas, liberando tempo para que as pessoas se encontrem em atividades mais recreativas e estrategicas.",
               afirmacao: "pode analizar grandes quantiades de dados para entender preferencia e padroes de comportamento individual."
            },
            {  
              texto:"pode automatizar tarefas repetitivas e demoradas, liberando tempo para que as pessoas se encontrem em atividades mais recreativas e estrategicas.",
               afirmacao: "pode analizar grandes quantiades de dados para entender preferencia e padroes de comportamento individual."
            
        }
        
            
        ]
    

    },

    {
        enunciado: "qual e os maleficios da inteligencia artificial?",
        alternativas: [
         {
            texto:  "perda de enprego a medida que a ia se torna mais avançada é capaz de realizar tarefas que antes erao feitas por humanos",
            afirmacao:  "falta de enpatia, sistema de ia podem nao ser capazes de entender a empatia com as emoçoes humanas"
        },
        {
            texto:  "perda de enprego a medida que a ia se torna mais avançada é capaz de realizar tarefas que antes erao feitas por humanos",
            afirmacao:  "falta de enpatia, sistema de ia podem nao ser capazes de entender a empatia com as emoçoes humanas"
        }
       
    ]

    },



    {
        enunciado: "como podemos usar a inteligencia artificial no nosso dia a dia?",
        alternativas: [
            {   
            texto:  "asistente pessoal,navagaçao,emtreterimento.",
            afirmacao:  "comercio,saúde,finanças"
            },
            { 
              
              texto:  "asistente pessoal,navagaçao,emtreterimento.",
            afirmacao:  "comercio,saúde,finanças"
        }
        
      ]
    },


    {
        enunciado: "a inteligencia artificial é importante oje em dia?",
        alternativas: [
            { 
                texto:   "sim, por conta da eficiencia para a procura de resposta imediatas. ",
                afirmacao:   "sim, pode analizar grandes quantidades de dados para atender preferencias e padroes de comportamento individual."
        },
        { 
         texto:   "sim, por conta da eficiencia para a procura de resposta imediatas. ",
        afirmacao:   "sim, pode analizar grandes quantidades de dados para atender preferencias e padroes de comportamento individual."
            }
     
        ] 
    },


    {
        enunciado: "quanto tempo pode durar o programa de inteligencia artificial?",
        alternativas: [
            {
                texto:  "pode variar amplamente depemdendo do tamanho e complexidade do programa",
                afirmacao:   "o tempk de execuçao de um programa de ia tabem pode ser imfluenciado por conta de fatores como a velocidade de procesamento disponivel."
        },
        {
                texto:  "pode variar amplamente depemdendo do tamanho e complexidade do programa",
                afirmacao:   "o tempk de execuçao de um programa de ia tabem pode ser imfluenciado por conta de fatores como a velocidade de procesamento disponivel."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";



function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;

    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
     caixaAlternativas.textContent = "";
    mostraAlternativas();
}


  
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historia += afirmacoes + "";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}



