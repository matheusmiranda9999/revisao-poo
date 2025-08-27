dDragão.js
const Criatura = require('./criatura');

class Dragao extends Criatura {
    constructor(nome) {
        super(nome, "Sopro de Fogo Infernal");
    }

    agir() {
        console.log(`${this.nome} lança ${this.ataqueMagico}!`);
        this.alterarEnergia(-30);
    }
}

module.exports = Dragao;
