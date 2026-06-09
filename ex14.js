class Aluno {
    #nota;

    constructor(nota) {
        this.nota = nota;
    }

    get nota() {
        return this.#nota;
    }

    set nota(valor) {
        if (valor >= 0 && valor <= 10) {
            this.#nota = valor;
        }
    }

    static calcularMedia(nota1, nota2) {
        return (nota1 + nota2) / 2;
    }
}