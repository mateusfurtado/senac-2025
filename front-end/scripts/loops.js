function Loops(){
        var n = parseInt(prompt())
        // o for é um laço de repetição que é usado quando se sabe a quantidade de
        //  interações a serem executadas.
        for(let i = 0; i < n; i++ ){
            alert("For "+i)
        }
        // o laço while vai executar uma ação enquanto uma condição for atentida
        var flag = true
        while(flag){ // com flag
            alert("While"+n)
            n--
            if(n===0){
                flag = false
            }

        }

        
        while(n!==0){// sem flag
    alert("2 while "+ n)
    n--
    } 
      
}

