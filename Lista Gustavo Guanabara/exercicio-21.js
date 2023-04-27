/* 21) Faça um algoritmo que leia um determinado ano e mostre se ele é ou não
BISSEXTO. */
const prompt = require("prompt-sync")();

let ano = parseInt(prompt("Digite um ano: "));

if ((ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0) {
  console.log(ano + " é um ano bissexto.");
} else {
  console.log(ano + " não é um ano bissexto.");
}

