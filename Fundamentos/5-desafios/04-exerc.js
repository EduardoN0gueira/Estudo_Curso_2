// Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado e o resto da divisão destes dois valores

function restoDivisao(dividendo, divisor) {
    console.log(`Resultado: ${dividendo / divisor}`)
    console.log(`Restdo da divisão: ${dividendo % divisor}`)
}

restoDivisao(11, 4)

// gabarito

function divisao (dividendo, divisor) {
    console.log("Resultado: " + Math.floor(dividendo/divisor)); // aqui ele usar Math.floor para que dê resultados formatados, sem virgula...
    console.log(`Resto: ${dividendo % divisor}`)
}

divisao(11, 4)