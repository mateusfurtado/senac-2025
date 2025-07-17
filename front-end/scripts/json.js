//JSON = Javascript Object Notation

function json(){

    var pessoa = {
    "nome": "Evola",
    "foto": "http://...",
    "post": "http://...",
    "email": "evola@julius.comb.br"

}

console.log(pessoa)
console.log(pessoa.nome) // para acessar atributos do objeto,
//  ultizia-se o operador '.' seguido de chave. Ex:'pessoa.nome',
// onde a 'pessoa' é o objeto e 'nome' é o atributo.

pessoa.nome = "Evolution"
// o atributo e utilizando o operador de atribuição para definir o
// novo valor.

var produtos = {
    "nome": "celular 01",
    "id": "0",
    "descricao": "descricao",
    "preço": "1000.00"

}

var produtos = 
    [
       {
        "nome": "celular 01",
        "id": "1",
        "descricao": "descricao",
        "preço": "1000.00"
       },
       {
        "nome": "celular 01",
        "id": "2",
        "descricao": "descricao",
        "preço": "1000.00"
       },
       {
        "nome": "celular 01",
        "id": "3",
        "descricao": "descricao",
        "preço": "1000.00"
       },
       {
        "nome": "celular 01",
        "id": "4",
        "descricao": "descricao",
        "preço": "1000.00"
       }
    ]

    console.log(produtos[2]) // para acessar um item da lista
    // utilizando o index(lista[x])

}
