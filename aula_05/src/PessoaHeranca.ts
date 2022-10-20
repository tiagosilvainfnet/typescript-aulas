class SerVivo{
    protected nome: String;
    protected nascimento: Date;

    constructor(nome: String = "", nascimento: Date = new Date()){
        this.nome = nome;
        this.nascimento = nascimento;
    }

    public respirar(): void{
        console.log("Respirando de forma diferente");
    }

    public getNome(): String{
        return this.nome;
    }
    public setNome(nome: String): void{
        this.nome = nome;
    }
}

class Pessoa2 extends SerVivo{
    private idade: number;

    constructor(nome: String, nascimento: Date, idade: number){
        super(nome, nascimento);
        this.idade = idade;
    }
    // Métodos
    public exibirNome(): void{
        console.log("Olá me chamo " + this.nome)
    }

    public setIdade(idade: number): void{
        this.idade = idade;
    }
    public getIdade(): number{
        return this.idade;
    }
}

const p12 = new Pessoa2("Tiago", new Date(1990, 1, 1), 0);
p12.setNome("Novo nome");

console.log(p12.getNome())
