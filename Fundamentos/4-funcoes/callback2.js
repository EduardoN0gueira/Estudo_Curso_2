const notas = [1, 3, 5, 7, 9, 10]

// vamos extrair notas menores do que 7 de dentro do array, primeiro sem usar o callback

const notasBaixas1 = []
for (let i in notas) {
    if (notas [i] < 7) {
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

// agora usando callback

const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})

console.log(notasBaixas2)

const notasMenorQue7 = nota => nota < 7
const notasBaixas3 = notas.filter(notasMenorQue7)
console.log(notasBaixas3) // aqui usando uma arrowFunction

