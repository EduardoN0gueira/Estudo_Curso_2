const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'// aqui não é nescessário o return
const resultado2 = nota =>{
    return nota >= 7? 'Aprovado' : 'Reprovado' //tambem funcionaría
}
console.log(resultado(7))
console.log(resultado2(2))