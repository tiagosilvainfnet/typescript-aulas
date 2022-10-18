"use strict";
function criarConta() {
    var valor = document.querySelector("#value") || null;
    var nome = document.querySelector("#name") || null;
    var btn = document.querySelector("#btn") || null;
    var resultado = document.querySelector("#resultado") || null;
    btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", function () {
        var conta1 = new Conta(parseFloat(valor.value), nome.value);
        conta1.addValor(1000);
        conta1.showValor(resultado);
    });
}
criarConta();
