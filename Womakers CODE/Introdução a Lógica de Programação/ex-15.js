// OBI 2023 ==> https://olimpiada.ic.unicamp.br/pratique/pj/2012/f2/chocolate/

const prompt = require('prompt-sync')();

let L = parseInt(prompt("Digite os centímetros: "));
let pedacos = 1;

while (L >= 2) {
  pedacos *= 4;
  L /= 2;
}

console.log(`Você terá ${pedacos} pedaços`);
