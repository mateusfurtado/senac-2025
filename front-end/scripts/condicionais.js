function Condicionais() {

    var n = parseInt(prompt("Forneça um número inteiro"))


var n = parseInt(prompt("Forneça um número inteiro"))

if (n % 2 === 0) { // O operador '%' calcula o resto da divisão de número a esquerda pelo o número a direita
    alert("N e par!")
} else { // else significa senão
    alert("N é impar!")
}

//Verifique se 'n' é multiplo de
//  5 e maior que 10

if (n % 5 === 0 && n > 10) { // && significa 'e' ou 'and' e o if so executa a ação se ambas as expressões forem verdadeiras
    alert("É multiplo de 5 e maior que 10")
}

// verifique se 'n' é multiplo de 3 ou é menor que 10.

if (n % 3 === 0 || n < 10) { // || significa 'ou' ou 'or', o if vai executar se uma das condições uma das condições for verdadeiro
    alert("N é multiplo de 3 ou menor que 10")
}

switch (n) { // o switch significa 'escolha' e ele funciona como
    // vários 'if' aninhados. caso a variável escolhida seja igual a 
    // um valor, ele executa a ação e o 'break' interrompe
    case 1: alert(1)
        break
    case 2: alert(2)
        break
    case 3: alert(3)
        break
    case 4: alert(4)

    }

}