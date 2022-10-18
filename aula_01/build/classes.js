"use strict";
class Conta {
    constructor(v, n) {
        this.valor = v;
        this.nome = n;
    }
    addValor(v) {
        this.valor += v;
    }
    showValor(resultado) {
        resultado.innerText = `Resultado: ${this.valor}`;
    }
}
