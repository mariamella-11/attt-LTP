class Animal{
    constructor(nome, som){
        this.nome = nome;
        this.som = som;
    }

    emitirSom(){
        console.log(`${this.nome} faz ${this.som}`);
    }
    }

    class Cachorro extends Animal{
        constructor(nome, som, raca){
            super(nome, som);
            this.raca = raca;
        }
        emitirSom(){
            console.log(`O cachorro ${this.nome} faz ${this.som}`);
        }
    }
    const animal = new Animal("Gato", "Miau");
animal.emitirSom();

const cachorro = new Cachorro("Max", "Au Au", "Labrador");
cachorro.emitirSom();
