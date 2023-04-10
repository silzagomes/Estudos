/* 7) Crie um algoritmo que leia um número real e mostre na tela o seu dobro e a
sua terça parte.
Ex:
Digite um número: 3.5
O dobro de 3.5 é 7.0
A terça parte de 3.5 é 1.16666 */
const prompt = require("prompt-sync")();

let numeroReal = parseFloat(prompt("Digite um número real:"));
let dobro = numeroReal * 2;
let tercaParte = numeroReal / 3;
console.log(`O dobro de ${numeroReal} é ${dobro}`);
console.log(`A terça parte de ${numeroReal} é ${tercaParte.toFixed(5)}`);
