class Funcionario{
    constructor(nome, salario, cargo){
        this.nome = nome;
        this.salario = salario;
        this.cargo = cargo
    }
}

class Gerente extends Funcionario{
    constructor(nome, salario, cargo, bonus){
        super(nome, salario, cargo, bonus);

        this.equipe = [];
        this.bonus = bonus;
    }

    adicionarMembro(func){
        this.equipe.push(func)
    }

    calcularSalarioTotal(){
        return this.salario + this.bonus;
    }
}

const gerente = new Gerente("Ana", 5000, "Gerente", 2000);

gerente.adicionarMembro("Carlos");

console.log(gerente.calcularSalarioTotal());