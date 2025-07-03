// document.writeln("Hello World!")

// var container = document.getElementById('container') // pegando div do html
// var elemento = document.createElement('button') // criando um botão
// elemento.textContent = 'Button' // define o conteúdo textual do elemento
// // elemento.style.backgroundColor = '#ff0000' // é possível estilizar os elementos
// elemento.id = 'btn' // adiciona um id ao elemento
// elemento.className = 'btn' //define uma classse ao elemento, 
// // .classList pode ser usado se for adicionar de uma class

// container.appendChild(elemento) // adicioan um elemento filho


// container.innerHTML += `<button class="square">square</button>` // literal com valores
 

var container = document.getElementById('container')
container.innerHTML =  `<div id="card">
            <div class="top"></div>
            <div class="square"></div>
            <p>O sangue do herói está mais próximo de Deus que a tinta dos filósofos e as orações dos devotos.</p>
        </div>
    </div>`


