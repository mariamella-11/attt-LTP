class Veiculo{
    constructor(marca, modelo, velocidade){
        this.marca = marca;
        this.modelo = modelo;
        this.velocidade = velocidade;
    }

    acelerar(){
        this.velocidade += 10
    }

    frear(){
        this.velocidade -= 10
        }
    }

    class Carro extends Veiculo{
        constructor(marca, modelo, velocidade, combustivel, litrosNoTanque){
            super(marca, modelo, velocidade);

            this.combustivel = combustivel;
            this.litrosNoTanque = litrosNoTanque;
        }

        abastecer(litros){
            this.litrosNoTanque += litros
        }
    }

    class CarroEletrico extends Veiculo{
         constructor(marca, modelo, velocidade, bateriaKwh){
            super(marca, modelo, velocidade);

            this.bateriaKwh = bateriaKwh;

         }

         acelerar(){
            if(this.bateriaKwh > 0){
                super.acelerar();
                this.bateriaKwh -= 1;
            }
         }

         recarregar(kwh){
            this.bateriaKwh += kwh
         }
    }

