/* 5) Faça um programa que leia as duas notas de um aluno em uma matéria e mostre
na tela a sua média na disciplina.
Ex:
Nota 1: 4.5
Nota 2: 8.5
A média entre 4.5 e 8.5 é igual a 6.5  */
const prompt = require("prompt-sync")();

let nota1 = prompt("Digite a 1ª nota: ");
let nota2 = prompt("Digite a 2ª nota: ");
let media = (parseFloat(nota1) + parseFloat(nota2)) / 2;
console.log(`A média entre ${nota1} e ${nota2} é igual a ${media.toFixed(1)}.`);
