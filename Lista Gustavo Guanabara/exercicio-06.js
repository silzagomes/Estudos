/* 6) Faça um programa que leia um número inteiro e mostre o seu antecessor e seu
sucessor.
Ex:
Digite um número: 9
O antecessor de 9 é 8
O sucessor de 9 é 10 */
const prompt = require("prompt-sync")();

let numero = prompt("Digite um número:");
let antecessor = parseInt(numero) - 1;
let sucessor = parseInt(numero) + 1;
console.log(`O número antecessor de ${numero} é ${antecessor}`);
console.log(`O número sucessor de ${numero} é ${sucessor}`);
