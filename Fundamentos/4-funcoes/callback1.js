const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) // para cada elemento que ele achar em fabricantes a função "imprimir" será chamada
fabricantes.forEach(function(a, index) {
    console.log(`${index + 1}. ${a}`) // auqi é a mesma coisa
})

fabricantes.forEach(fabricante => console.log(fabricante))