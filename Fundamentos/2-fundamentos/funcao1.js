
//existem funcoes anonoimas, onde não é dado nome a elas
// funções pode não receber nenhum parâmetro, ou seja, nehum ingrediente
//funções pode ou não receber dados de entrada


//funcao sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}
imprimirSoma(1, 5)
imprimirSoma(1)// aqui passamos somente 1 valor, 1 + undefined = NaN

//função com retorno
function soma(a, b = 0){
    return a + b
}

console.log(soma(2, 3))