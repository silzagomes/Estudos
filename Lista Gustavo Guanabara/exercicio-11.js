/* 11) Desenvolva uma lógica que leia os valores de A, B e C de uma equação do
segundo grau e mostre o valor de Delta. */


const prompt = require("prompt-sync")();

let a = parseFloat(prompt("Digite o valor de A:"));
let b = parseFloat(prompt("Digite o valor de B:"));
let c = parseFloat(prompt("Digite o valor de C:"));

// A função Math.pow() retorna a base elevada ao expoente --- sintaxe ---> Math.pow(base, expoente)
let valorDelta = Math.pow(b, 2) - 4 * a * c;

console.log(`O valor de delta é ${valorDelta.toFixed(2)}.`);
