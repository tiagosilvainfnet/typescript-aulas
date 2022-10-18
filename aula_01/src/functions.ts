function criarConta(){
    var valor = document.querySelector("#value") as HTMLInputElement || null;
    var nome = document.querySelector("#name") as HTMLInputElement || null;
    var btn = document.querySelector("#btn") as HTMLButtonElement || null;
    var resultado = document.querySelector("#resultado") as HTMLElement || null;

    btn?.addEventListener("click", function(){
        var conta1 = new Conta(parseFloat(valor.value), nome.value);
        conta1.addValor(1000)
        conta1.showValor(resultado)
    })
}

criarConta()