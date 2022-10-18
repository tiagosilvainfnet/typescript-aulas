interface ContaInterface{
    valor: number,
    nome: string,
    addValor(v: number): void,
    showValor(resultado: HTMLElement): void
}

class Conta implements ContaInterface{
    valor: number;
    nome: string;

    constructor(v: number, n: string){
        this.valor = v;
        this.nome = n;
    }

    addValor(v: number): void {
        this.valor += v;
    }

    showValor(resultado: HTMLElement): void {
        resultado.innerText = `Resultado: ${this.valor}`
    }   
}