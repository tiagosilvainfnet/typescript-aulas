"use strict";
class Pessoa {
    constructor(nome, nascimento, idade) {
        this.nome = nome;
        this.nascimento = nascimento;
        this.idade = 0;
        this.setIdade(idade);
    }
    exibirNome() {
        console.log("Me chamo " + this.nome);
    }
    setNome(nome) {
        this.nome = nome;
    }
    getNome() {
        return this.nome;
    }
    setNascimento(nascimento) {
        this.nascimento = nascimento;
    }
    getNascimento() {
        return this.nascimento;
    }
    setIdade(idade) {
        if (idade > 120 || idade < 0) {
            console.log("Idade inválida, o valor precisa estar entre 0 e 120.");
        }
        else {
            this.idade = idade;
        }
    }
    getIdade() {
        return this.idade;
    }
}
const p1 = new Pessoa("", new Date(), -1);
p1.setNome("Tiago");
console.log(p1.getNome());
console.log(p1.getIdade());
