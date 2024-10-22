function geradorAleatorio(min, max){
    const valor = Math.random() * (max - min) + min
    return console.log(Math.floor(valor))
}

geradorAleatorio(1, 15)

let opcao = -1

do{
    opcao = geradorAleatorio(-1, 10)
    console.log(`Opção escolhida foi ${opcao}`)
} while (opcao != -1)