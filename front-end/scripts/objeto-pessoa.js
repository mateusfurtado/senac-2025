// Classe pai: Pessoa
// CLasse filha: Servidor
// Classe filha: Professor
// Classe filha: Aluno

class Pessoa {
    constructor(id, nome, sobrenome, idade) {
        this.id = id;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    detalhes() {
        return `ID: ${this.id}, Nome: ${this.nome}, Sobrenome: ${this.sobrenome}, Idade: ${this.idade}`

    }
}
