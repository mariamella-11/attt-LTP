class Livro {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
    }

    toString() {
        return `Livro: ${this.titulo} - Autor: ${this.autor}`;
    }
}

class Filme {
    constructor(titulo, diretor) {
        this.titulo = titulo;
        this.diretor = diretor;
    }

    toString() {
        return `Filme: ${this.titulo} - Diretor: ${this.diretor}`;
    }
}

class Musica {
    constructor(titulo, cantor) {
        this.titulo = titulo;
        this.cantor = cantor;
    }

    toString() {
        return `Música: ${this.titulo} - Cantor: ${this.cantor}`;
    }
}
