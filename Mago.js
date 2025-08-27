
const Criatura = require('./criatura');

class Mago extends Criatura {
    constructor(nome) {
        super(nome, "Raio Arcano do Caos");
    }

    agir() {
        console.log(`${this.nome} conjura ${this.ataqueMagico}!`);
        this.alterarEnergia(-20);
    }
}

module.exports = Mago;
