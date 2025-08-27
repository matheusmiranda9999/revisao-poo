hconst Criatura = require('./Criatura');

class Dragao extends Criatura {
    constructor(nome) {
        super(nome, 'Sopro de Fogo');
    }
}

module.exports = Dragao;
