/*20) Desenvolva um programa que leia um número inteiro e mostre se ele é PAR ou
ÍMPAR.*/

const prompt = require("prompt-sync")(); 

let numero = parseInt(prompt("Digite um número inteiro: "));

if (numero % 2 === 0) {
  console.log(numero + " é um número PAR.");
} else {
  console.log(numero + " é um número ÍMPAR.");
}
