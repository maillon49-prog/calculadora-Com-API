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

export function apagarTudo() {
    estrutura_A.textContent = "";
    estrutura_B.textContent = "";
    estrutura_operador.textContent = "";
    resultado.textContent = "0";
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

export function clicarOperador(operador) {

    if (estrutura_A.textContent === "") {
        notificacoes.textContent = "Ponha um numero antes do operador!"
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

        historico.textContent += `${estrutura_A.textContent} ${estrutura_operador.textContent} ${estrutura_B.textContent} = ${dados.mensagem}`;


    } catch (erro) {

    }

}