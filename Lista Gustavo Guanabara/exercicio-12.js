/*12) Crie um programa que leia o preço de um produto, calcule e mostre o seu
PREÇO PROMOCIONAL, com 5% de desconto.*/

const prompt = require("prompt-sync")();

let preco = parseFloat(prompt("Digite o preço do produto:"));

const precoPromocional = preco * 0.95;

console.log(`O preço promocional é: R$ ${precoPromocional.toFixed(2)}.`);
