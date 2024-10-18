function tratarErroELancar(erro){
    throw new Error('...')
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj){
    
    try{ // a palavra reservada try tenta executar o que tem dentro do bloco de código
    console.log(obj.name.toUpperCase() + "!!!  ") 
    }
    catch (e){ // e aqui podemos tratar o erro diretamente, após passar pelo "try" ele vai cair no "catch"
        tratarErroELancar(e)
    }
    finally {
        console.log('final do código') // independente de ser ou não excutado o try, será executado o finally...
    }
}



const obj = { name: 'Eduardo'}
imprimirNomeGritado(obj)

// const obj = { nome: 'Eduardo'}
// imprimirNomeGritado(obj)                              testar esse código