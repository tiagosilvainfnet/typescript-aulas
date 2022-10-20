"use strict";
class SerVivo {
    constructor(nome = "", nascimento = new Date()) {
        this.nome = nome;
        this.nascimento = nascimento;
    }
    respirar() {
        console.log("Respirando de forma diferente");
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
}
class Pessoa2 extends SerVivo {
    constructor(nome, nascimento, idade) {
        super(nome, nascimento);
        this.idade = idade;
    }
    // Métodos
    exibirNome() {
        console.log("Olá me chamo " + this.nome);
    }
    setIdade(idade) {
        this.idade = idade;
    }
    getIdade() {
        return this.idade;
    }
}
const p12 = new Pessoa2("Tiago", new Date(1990, 1, 1), 0);
p12.setNome("Novo nome");
console.log(p12.getNome());
