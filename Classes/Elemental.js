hconst Criatura = require('./Criatura');

class Elemental extends Criatura {
    constructor(nome) {
        super(nome, 'Rajada Elemental');
    }

    agir() {
        console.log(`${this.nome} invoca uma ${this.ataqueMagico}!`);
        this.alterarEnergia(-12);
    }
}

module.exports = Elemental;
