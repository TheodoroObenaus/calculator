let btnNumeros = document.getElementsByClassName('numerin')
let visor = document.getElementById('resultado')

let operacao = null ;
let valor1 = null ;

for (let botao of btnNumeros) {
    botao.addEventListener('click', clique_numero) ;

}

function clique_numero(event) {

    if (visor.innerHTML === '0' || isNaN(visor.innerHTML))
    visor.innerHTML = event.target.innerHTML ;
    else
    visor.innerHTML = visor.innerHTML + event.target.innerHTML ; 

}

let Operadores = document.getElementsByClassName('operadores')

let Delete = document.getElementById('delete') ;
Delete.addEventListener('click', limpar_visor) ;

function limpar_visor(event) {
    visor.innerHTML = "0" ;

}

for (let botao of Operadores) {
    botao.addEventListener('click', clique_operador) ;

}

function clique_operador(event) {

    if (isNaN(visor.innerHTML) === false) {
        valor1 = Number(visor.innerHTML) ;
    } else {
        visor.innerHTML = realiza_operacao(operacao, valor1, Number(visor.innerHTML))
        valor1 = Number(visor.innerHTML)
    }


operacao = event.target.innerHTML

visor.innerHTML = event.target.innerHTML

}

const Igual = document.getElementById('igual')

Igual.addEventListener('click', calcula_resultado)

function calcula_resultado(event) {

    if (valor1 != null && operacao != null && isNaN(visor.innerHTML) === false) {
        visor.innerHTML = realiza_operacao(valor1, operacao, Number(visor.innerHTML));
        valor1 = null ;
        operacao = null ;
    }

}

function realiza_operacao(valor1, operacao, valor2) {
    if (operacao === "+") {
        return valor1 + valor2
    }
    else if (operacao === "-") {
        return valor1 - valor2
    }
    else if (operacao === "*") {
        return valor1 * valor2
    }
    else if (operacao === "/") {
        return valor1 / valor2
    }
}

let Ponto = document.getElementById("ponto");
Ponto.addEventListener("click", clique_ponto)


function clique_ponto(event) {
    
    if (isNaN(visor.innerHTML) === true) {
        visor.innerHTML = '.';
    }
    else if (isNaN(visor.innerHTML+'.') === false){
        visor.innerHTML = visor.innerHTML + '.';
    }
}