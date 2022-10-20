class Produto{
    private preco:  number;
    private nome: String;
    private quantidade: number;

    constructor(nome: String, preco: number, quantidade: number){
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    public setNome(nome: String): void{
        this.nome = nome;
    }
    public getNome(): String{
        return this.nome;
    }

    public setPreco(preco: number){
        this.preco = preco;
    }
    public getPreco(): number{
        return this.preco;
    }

    public setQuantidade(quantidade: number){
        this.quantidade = quantidade;
    }
    public getQuantidade(): number{
        return this.quantidade;
    }
}

class Pedido{
    private items: any = [];
    private tipoPagamento: String = "";

    construtor(){
        this.items = [];
        this.tipoPagamento = "";
    }

    public addProduto(produto: Produto){
        this.items.push(produto);
    }

    public exibirPedidos(){

    }
}

// Associativo / Associação
const produto1: Produto = new Produto("Banana", 9.99, 12);
const produto2: Produto = new Produto("Nescau", 8.99, 1);
const produto3: Produto = new Produto("Leit UTH Integral", 3.99, 4);

let pedido1 = new Pedido();
pedido1.addProduto(produto1);
pedido1.addProduto(produto2);
pedido1.addProduto(produto3);

// Identifique as classes e implemente um programa para a seguinte especificação: “O 
// supermercado vende diferentes tipos de produtos. Cada produto tem um preço e uma 
// quantidade em estoque. Um pedido de um cliente é composto de itens, onde cada item 
// especifica o produto que o cliente deseja e a respectiva quantidade. Esse pedido pode ser 
// pago em dinheiro, cheque ou cartão.”