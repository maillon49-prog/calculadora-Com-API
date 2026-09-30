import { clicarNumero, clicarOperador, apagarTudo, apagar, calcular, carregarHistorico, apagarHistorico} from "./script.js";

//botões de ações
const bntLimpar = document.getElementById("limpar");
const bltApagar = document.getElementById("apagar");
const bltApagarHstorico = document.getElementById("limparHistorico");
const bntPorcentagem = document.getElementById("porcentagem");
const bntDivisao = document.getElementById("divisao");
const bntMultipicacao = document.getElementById("multipicacao");
const bntSubtracao = document.getElementById("subtracao");
const bntSoma = document.getElementById("soma");
const bntIgual = document.getElementById("igual");
//todos os botões
const botoesNumeros = document.querySelectorAll(".numero");
const botoesOperadores = document.querySelectorAll(".operadores");
//coias pra carregar junto da pagina
carregarHistorico()

bntLimpar.addEventListener("click", function() {
    apagarTudo();
});

bltApagar.addEventListener("click", function() {
    apagar();
});

bltApagarHstorico.addEventListener("click", function() {
    apagarHistorico();
});

bntIgual.addEventListener("click", function() {
    calcular();
});







botoesNumeros.forEach(function(botao) {

    botao.addEventListener("click", function() {

        clicarNumero(botao.textContent);
    });
});

botoesOperadores.forEach(function(operadores) {

    operadores.addEventListener("click", function() {
            clicarOperador(operadores.textContent);
        
    });
});