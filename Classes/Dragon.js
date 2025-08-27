hclass Criatura {
    nome;
    ataqueMagico;
    #energia = 100;

    constructor(nome, ataqueMagico) {
        this.nome = nome;
        this.ataqueMagico = ataqueMagico;
    }

    alterarEnergia(valor) {
        this.#energia += valor;
        console.log(`${this.nome} agora tem ${this.#energia} de energia.`);
    }

    agir() {
        console.log(`${this.nome} usa ${this.ataqueMagico}!`);
        this.alterarEnergia(-10);
    }

    descansar() {
        this.alterarEnergia(15);
        console.log(`${this.nome} descansou. Energia restaurada!`);
    }
}

module.exports = Criatura;
