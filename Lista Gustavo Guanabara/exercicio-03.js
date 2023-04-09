/*3) Crie um programa que leia o nome e o salário de um funcionário, mostrando no
final uma mensagem.
Ex:
Nome do Funcionário: Maria do Carmo
Salário: 1850,45
O funcionário Maria do Carmo tem um salário de R$1850,45 em Junho.*/

const prompt = require("prompt-sync")();

let nomeFuncionario = prompt("Nome do Funcionário:");
let salario = prompt("Salário:");

console.log(`O funcionário ${nomeFuncionario} tem um salário de R$${salario} em Junho.`)