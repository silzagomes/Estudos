/*9) Faça um algoritmo que leia quanto dinheiro uma pessoa tem na carteira (em R$)
e mostre quantos dólares ela pode comprar. Considere US$1,00 = R$3,45. */

const prompt = require("prompt-sync")();

let dinheiroCarteira = parseFloat(prompt("Quanto dinheiro (R$) você tem na carteira? "));
let cotacaoDolar = 3.45;
let dolares = dinheiroCarteira / cotacaoDolar;

console.log(`Com R$${dinheiroCarteira.toFixed(2)} na carteira, você pode comprar US$${dolares.toFixed(2)}.`);
