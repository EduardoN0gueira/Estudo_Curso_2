let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global/*aqui é usado global, no chrome é usado window*/)

const obj = {}
comparaComThis = comparaComThis.bind(obj) // agora this aponta para o obj, não para o escopo global
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)

// aqui ele não aponta mais, ao usar arrowFunction 
comparaComThisArrow(obj)
comparaComThisArrow(global)
comparaComThisArrow()
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj) // ao usar o bind, não funciona por ser uma arrowFunction
comparaComThisArrow(obj)