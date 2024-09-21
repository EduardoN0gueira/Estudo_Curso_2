{
    {
        {
            var sera = "123"
        }
    }
}
// a var funciona em escopo global
console.log(sera)
/*
{
    {
        {
            let sera1 = "123"
        }
    }
}

// o let não funcionar por não ser de escopo global
console.log(sera1)
*/


function teste(){
    var local = 123
}

teste()
console.log(local)// é impossível acessar essa função por estar dentro de
// uma função
 

// temos window que é um objeto, e ele representa o site como um todo