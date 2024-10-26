//Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores.

function Calculo(x, y) {
    console.log("Soma: " + (x + y))
    console.log("Subtração: " + (x - y))
    console.log("Multiplicação: " + (x * y))
    console.log("Divisão: " + (x / y))
}

Calculo(1, 3)

// resposta do gabarito 

function calcularOperacoes (operador1, operador2) {
    console.log(operador1+operador2, operador1-operador2, operador1*operador2, operador1/operador2);
}

calcularOperacoes(1, 2)
