// Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.

function expoente(base, expoente) {
    console.log(base ** expoente)
}

expoente(2, 3)

// gabarito

function expoente1 (base, expoente) {
    //Podemos fazer de 2 modos
    //Método antigo:
    let resultado = Math.pow(base, expoente)
    //Método novo:
    resultado = base ** expoente

    return resultado
}

console.log(expoente1(2, 9))