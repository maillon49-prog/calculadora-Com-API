//texto do historico
const historico = document.getElementById("historico");
//parte do resultado
const estrutura_A = document.getElementById("estrutura_A");
const estrutura_operador = document.getElementById("estrutura_operador");
const estrutura_B = document.getElementById("estrutura_B");
const resultado = document.getElementById("resultado");
//botões de ações
const limpar = document.getElementById("limpar");
const apagar = document.getElementById("apagar");
const porcentagem = document.getElementById("porcentagem");
const divisao = document.getElementById("divisao");
const multipicacao = document.getElementById("multipicacao");
const subtracao = document.getElementById("subtracao");
const soma = document.getElementById("soma");
const igual = document.getElementById("igual");
//botões dos numeros
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const number3 = document.getElementById("number3");
const number4 = document.getElementById("number4");
const number5 = document.getElementById("number5");
const number6 = document.getElementById("number6");
const number7 = document.getElementById("number7");
const number8 = document.getElementById("number8");
const number9 = document.getElementById("number9");
const number0 = document.getElementById("number0");


let ladoAtivo = "A";
let operadorEscolhido = "";


export function clicarOperador(operador) {

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



