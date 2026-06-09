class ContaBancaria {
    #saldo;

    constructor(saldoInicial = 0) {
        this.#saldo = saldoInicial;
    }

    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor;
        }
    }

    sacar(valor) {
        if (valor > 0 && valor <= this.#saldo) {
            this.#saldo -= valor;
        }
    }

    get saldo() {
        return this.#saldo;
    }

    static converterParaDolarCanadense(reais) {
        const cotacao = 0.25;
        return reais * cotacao;
    }
}