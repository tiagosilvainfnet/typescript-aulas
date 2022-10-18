"use strict";
class SerVivo {
    constructor(nome = "", nascimento = new Date()) {
        this.nome = nome;
        this.nascimento = nascimento;
    }
    respirar() {
        console.log("Respirando de forma diferente");
    }
}
class Pessoa extends SerVivo {
    constructor(nome, nascimento) {
        super(nome, nascimento);
    }
    // Métodos
    exibirNome() {
        console.log("Olá me chamo " + this.nome);
    }
}
class Cachorro extends SerVivo {
    constructor(nome, nascimento) {
        super(nome, nascimento);
    }
    latir() {
        console.log("Auau, me chamo " + this.nome);
    }
}
const p1 = new Pessoa("Tiago", new Date(1990, 1, 1));
p1.nascimento = new Date(1995, 6, 27);
p1.respirar();
p1.exibirNome();
const c1 = new Cachorro("Frederico", new Date(1993, 2, 20));
c1.respirar();
c1.latir();
