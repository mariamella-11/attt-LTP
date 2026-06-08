class Pilha{
    #itens = []

    emplilhar(item){
        this.#itens.push(item);
    }

    desempilhar(item){
        return this.#itens.pop()
    }

    topo(){
        return this.#itens[this.#itens.length - 1];
    }

    estaVazia(){
        return this.#itens.length === 0;
    }

    get tamanho(){
        return this.#itens.length;
    }
}