function Funcoes() {

    function Comum() {
        alert("Função comum!")
    }


    function ComumComParametro(parametro) {
        alert("Funções com parâmetros: " + parametro)
    }
            ComumComParametro("15");

    () => {
        alert("Função de seta ou Lambda")
    }
    (function(){
        alert("Função de sete ou Lambda")
    })

}