
const saudacao = "Opa"// contexto léxico 1

function exec(){
    const saudacao = "Falaa"// texto léxico 2
    return saudacao
}


const cliente = {
    nome: 'Eduardo',
    idade: 19,
    peso: 110,
    enderco: {
        logradouro: "Rua 123",
        numero: 123
    }
}

console.log(cliente)