class Produto{
    constructor(nome, preco, quantidade){
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;

        Produto.totalProdutos ++
    }
    static totalProdutos = 0

    calcularValorEstoque(){
        return this.preco * this.quantidade
    }

    static obterTotal(){
        return Produto.totalProdutos
    }

}