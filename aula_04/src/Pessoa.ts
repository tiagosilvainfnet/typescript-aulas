class SerVivo{
    public nome: String;
    public nascimento: Date;

    constructor(nome: String = "", nascimento: Date = new Date()){
        this.nome = nome;
        this.nascimento = nascimento;
    }

    public respirar(): void{
        console.log("Respirando de forma diferente");
    }
}

class Pessoa extends SerVivo{
    constructor(nome: String, nascimento: Date){
        super(nome, nascimento);
    }
    // Métodos
    public exibirNome(): void{
        console.log("Olá me chamo " + this.nome)
    }
}

class Cachorro extends SerVivo{
    constructor(nome: String, nascimento: Date){
        super(nome, nascimento);
    }
    public latir(): void{
        console.log("Auau, me chamo " + this.nome);
    }
}

const p1 = new Pessoa("Tiago", new Date(1990, 1, 1));

p1.nascimento = new Date(1995, 6, 27)
p1.respirar();
p1.exibirNome();

const c1 = new Cachorro("Frederico", new Date(1993, 2, 20));
c1.respirar();
c1.latir();