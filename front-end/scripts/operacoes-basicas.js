function Calculadora (){
    var a = parseFloat (prompt("Digite o primeiro valor"))
    var b = parseFloat (prompt("Digite o segundo valor"))
    var tipo = prompt ("informe o tipo de operação(+,-,*,/).")

    if(tipo === "+"){
        alert("Soma = "+(a+b))
    }
if (tipo === "-"){
    alert("Subtração = "+(a-b))
}
if (tipo === "*"){
    alert("Multiplicação = "+(a*b))
}
if (tipo === "/"){
    alert("Divisão = "+(a/b))
}
        
}
