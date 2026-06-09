class Endereco {
    constructor(rua, cidade, cep) {
        this.rua = rua;
        this.cidade = cidade;
        this.cep = cep;
    }
}

class Contato {
    constructor(telefone, email) {
        this.telefone = telefone;
        this.email = email;
    }
}

class PerfilUsuario {
    constructor(nome, endereco, contato) {
        this.nome = nome;
        this.endereco = endereco;
        this.contato = contato;
    }

    exibirPerfil() {
        return `
Nome: ${this.nome}
Rua: ${this.endereco.rua}
Cidade: ${this.endereco.cidade}
CEP: ${this.endereco.cep}
Telefone: ${this.contato.telefone}
Email: ${this.contato.email}
`;
    }
}