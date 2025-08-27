hconst { Dragao, Fada, Golem, Elemental } = require('./classes');

const criaturas = [
    new Dragao('Smaug'),
    new Fada('Luzinha'),
    new Golem('Pedregulho'),
    new Elemental('Tempestus')
];

for (const criatura of criaturas) {
    criatura.agir();
    criatura.descansar();
}
