/* 10) Faça um algoritmo que leia a largura e altura de uma parede, calcule e
mostre a área a ser pintada e a quantidade de tinta necessária para o serviço,
sabendo que cada litro de tinta pinta uma área de 2metros quadrados. */

const prompt = require("prompt-sync")();

let largura = parseFloat(prompt("Digite a largura da parede (em metros):"));
let altura = parseFloat(prompt("Digite a altura da parede (em metros):"));

let area = largura * altura;
let litrosTinta = area / 2;

console.log(`A área da parede é igual a  ${area.toFixed(2)} m² e precisa de ${litrosTinta.toFixed(2)} litros de tinta para ser pintada.`);
