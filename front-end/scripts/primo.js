// Escreva um algoritmo que verifica se um número
// digitado pelo o usuário é primo e imprime uma mensagem
// de acordo 'É primo ou 'Não é o primo'.


function Primo() {

    var n = parseInt(prompt("Forneça um número maior que 1"))

    var flag = true
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {                                                                                       // O operador '%' calcula o resto da divisão de número a esquerda pelo o número a direita
            flag = false

        }
    }


    if (flag === true) {
        alert("É primo!")
    } else {
        alert("Não é primo")
    }                                                                                                                                                                // else significa senãoelse {

}