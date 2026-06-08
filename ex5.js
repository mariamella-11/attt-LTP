class Usuario{
    #senha
    constructor(nome, senha){
    this.nome = nome;
    this.#senha = senha;
    }

    autenticar(senha){
        if(senha === this.#senha){
            return true
        }
        else{
            return false
        }
    }

    alterarSenha(senhaAtual, novaSenha){
        if(senhaAtual === this.#senha){
            this.#senha = novaSenha
            console.log("Senha alterada")
        }
        else{
            console.log("Senha incorreta")
        }
    }
}