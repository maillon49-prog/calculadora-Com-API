import { clicarNumero, clicarOperador } from "./script.js";


//todos os botões
const botoesNumeros = document.querySelectorAll(".numero");
const botoesOperadores = document.querySelectorAll(".operadores")

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