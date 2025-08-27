const Fada = require('./classes/Fada');
const Dragao = require('./classes/Dragao');
const Gnomo = require('./classes/Gnomo');
const Mago = require('./classes/mago');

const fada = new Fada("Luminária");
const dragao = new Dragao("Fúria de Fogo");
const gnomo = new Gnomo("Cogumelo");
const mago = new Mago("Merlin");

fada.agir();
dragao.agir();
gnomo.agir();
mago.agir();

console.log('--- Descansando as criaturas ---');

fada.descansar();
dragao.descansar();
gnomo.descansar();
mago.descansar();
