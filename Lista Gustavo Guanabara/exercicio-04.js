/*4) Desenvolva um algoritmo que leia dois números inteiros e mostre o somatório
entre eles.
Ex:
Digite um valor: 8
Digite outro valor: 5
A soma entre 8 e 5 é igual a 13.*/

const prompt = require("prompt-sync")();

let valor1 = prompt("Digite um valor:");
let valor2 = prompt("Digite outro valor:");
let soma = parseInt(valor1) + parseInt(valor2);
console.log(`A soma entre ${valor1} e ${valor2} é igual a ${soma}.`);
