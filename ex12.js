class Pagamento {
    constructor(valor) {
        this.valor = valor;
    }

    processar() {
        throw new Error("Método abstrato!");
    }
}

class CartaoCredito extends Pagamento {
    constructor(valor, parcelas) {
        super(valor);
        this.parcelas = parcelas;
    }

    processar() {
        console.log(
            `Pagamento de R$${this.valor} no cartão em ${this.parcelas}x`
        );
    }
}

class Pix extends Pagamento {
    constructor(valor, chavePix) {
        super(valor);
        this.chavePix = chavePix;
    }

    processar() {
        console.log(
            `Pagamento PIX de R$${this.valor} para ${this.chavePix}`
        );
    }
}

class Boleto extends Pagamento {
    constructor(valor, codigoBarras) {
        super(valor);
        this.codigoBarras = codigoBarras;
    }

    processar() {
        console.log(
            `Pagamento por boleto: ${this.codigoBarras}`
        );
    }
}

function processarTodos(pagamentos) {
    pagamentos.forEach(p => p.processar());
}
