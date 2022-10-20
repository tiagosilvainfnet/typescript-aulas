"use strict";
class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getNome() {
        return this.nome;
    }
    setPreco(preco) {
        this.preco = preco;
    }
    getPreco() {
        return this.preco;
    }
    setQuantidade(quantidade) {
        this.quantidade = quantidade;
    }
    getQuantidade() {
        return this.quantidade;
    }
}
class Pedido {
    constructor() {
        this.items = [];
        this.tipoPagamento = "";
    }
    construtor() {
        this.items = [];
        this.tipoPagamento = "";
    }
    addProduto(produto) {
        this.items.push(produto);
    }
    exibirPedidos() {
    }
}
// Associativo / Associação
const produto1 = new Produto("Banana", 9.99, 12);
const produto2 = new Produto("Nescau", 8.99, 1);
const produto3 = new Produto("Leit UTH Integral", 3.99, 4);
let pedido1 = new Pedido();
pedido1.addProduto(produto1);
pedido1.addProduto(produto2);
pedido1.addProduto(produto3);
// Identifique as classes e implemente um programa para a seguinte especificação: “O 
// supermercado vende diferentes tipos de produtos. Cada produto tem um preço e uma 
// quantidade em estoque. Um pedido de um cliente é composto de itens, onde cada item 
// especifica o produto que o cliente deseja e a respectiva quantidade. Esse pedido pode ser 
// pago em dinheiro, cheque ou cartão.”
