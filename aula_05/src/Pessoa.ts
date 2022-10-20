class Pessoa{
    // Public, Private e Protected
    private nome: String;
    private nascimento: Date;
    private idade: number;

    constructor(nome: String, nascimento: Date, idade: number){
        this.nome = nome;
        this.nascimento = nascimento;

        this.idade = 0;
        this.setIdade(idade);
    }

    public exibirNome(){
        console.log("Me chamo " + this.nome);
    }

    public setNome(nome: String): void{
        this.nome = nome
    }
    public getNome(): String{
        return this.nome;
    }

    public setNascimento(nascimento: Date): void{
        this.nascimento = nascimento;
    }
    public getNascimento(): Date{
        return this.nascimento;
    }

    public setIdade(idade: number): void{
        if(idade > 120 || idade < 0){
            console.log("Idade inválida, o valor precisa estar entre 0 e 120.");
        }else{
            this.idade = idade;
        }
    }
    public getIdade(): number{
        return this.idade;
    }
}

const p1 = new Pessoa("", new Date(), -1);

p1.setNome("Tiago");
console.log(p1.getNome())
console.log(p1.getIdade())