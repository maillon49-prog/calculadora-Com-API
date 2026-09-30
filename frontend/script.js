//texto do historico e notificações
const historico = document.getElementById("historico");
const notificacoes = document.getElementById("notificacoes");
//parte do resultado
const estrutura_A = document.getElementById("estrutura_A");
const estrutura_operador = document.getElementById("estrutura_operador");
const estrutura_B = document.getElementById("estrutura_B");
const resultado = document.getElementById("resultado");


let ladoAtivo = "A";
let operadorEscolhido = "";

let historico_dados =
                JSON.parse(localStorage.getItem("historico")) || [];

export function apagarTudo() {
    estrutura_A.textContent = "";
    estrutura_B.textContent = "";
    estrutura_operador.textContent = "";
    resultado.textContent = "0";
    ladoAtivo = "A";
}

export function apagar() {
    if (ladoAtivo === "A") {
        estrutura_A.textContent = estrutura_A.textContent.slice(0, -1);
    }
    if (ladoAtivo === "B" && estrutura_B.textContent === "") {
        estrutura_operador.textContent = estrutura_operador.textContent.slice(0, -1);
        ladoAtivo = "A";
    }
    if (ladoAtivo === "B") {
        estrutura_B.textContent = estrutura_B.textContent.slice(0, -1);
    }
}

export function apagarHistorico() {

    localStorage.removeItem("historico");

    historico_dados =[];

    historico.innerHTML = "";
}

export function clicarOperador(operador) {

    if (estrutura_A.textContent === "") {
        notificacoes.textContent = "Digite um número antes de escolher o operador.";
        return;
    }
    operadorEscolhido = operador;
    estrutura_operador.textContent = operador;

    ladoAtivo = "B";
}

export function clicarNumero(numero) {

    if (ladoAtivo === "A") {
        estrutura_A.textContent += numero;
    } if (ladoAtivo === "B") {
        estrutura_B.textContent += numero;
    }
}

export async function calcular() {

    try {


        const resposta = await fetch("http://localhost:3000/calcular", {

            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                valorA: Number(estrutura_A.textContent),
                valorB: Number(estrutura_B.textContent),
                operador: estrutura_operador.textContent
            })
        });

        const dados = await resposta.json();

        resultado.textContent = dados.mensagem;


        historicoTela(estrutura_A.textContent,estrutura_operador.textContent,estrutura_B.textContent,dados.mensagem);
        carregarHistorico();


    } catch (erro) {
        console.error(erro);
        notificacoes.textContent = "O sistema não está respondendo. Tente novamente.";

    }

}

function historicoTela(valor1,operador,valor2,resultado) {
    historico_dados.push({
        numero1: valor1,
        operador: operador,
        numero2: valor2,
        total: resultado
    });
    
    localStorage.setItem(
        "historico",
        JSON.stringify(historico_dados)
    );

}

export function carregarHistorico() {

    historico.innerHTML = "";

    historico_dados.forEach(function(item){


        historico.innerHTML +=  `<p>${item.numero1} ${item.operador} ${item.numero2} = ${item.total}</p>`;

    });
}
