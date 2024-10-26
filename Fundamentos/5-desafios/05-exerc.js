/*
    ​Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o seguinte comando
    no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa importante de observar, é o fato 
    que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer um exercício simples para mostrar dinheiro
    sempre da forma correta. Desenvolva uma função JavaScript para que ela receba um valor como 0.30000000000000004 e retorne R$0,30
    (observe a vírgula e o ponto).
*/


function converter(valor) {
    console.log(`R$ ${Number(valor).toFixed(2).toString().replace(".", ",")}`)
}

converter(0.30000004)
converter(Math.PI)


// gabarito

function formatarValorDecimal(valorDecimal) {
    valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}` // aqui ele usa o toSring e o replace para trocar ponto por virgula
    console.log(valorEmReais)
}

formatarValorDecimal(0.1 + 0.2)

// o metodo toString() retorna uma matriz com uma sequência separada por vírgula, separa uma array por virgula...

var frutas = ["Banana", "Laranja", "Morango", "Manga"]
console.log(frutas.toString())

// método "replace" 

var frase = "Olá meu nome é Eduardo!"
frase2 = frase.replace("Eduardo", "André") // primeiro colocamos o que deseja ser alterado, depois a alteração

console.log(frase2)