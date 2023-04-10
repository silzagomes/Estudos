/* 15) Crie um programa que leia o número de dias trabalhados em um mês e mostre o
salário de um funcionário, sabendo que ele trabalha 8 horas por dia e ganha R$25
por hora trabalhada.*/

const prompt = require("prompt-sync")(); 

const valorHora = 25.00; 

let diasTrabalhados = parseInt(prompt("Digite a quantidade de dias trabalhados em um mês: ")); 

const salario = valorHora * diasTrabalhados * 8;

console.log(`O salário do funcionário é de R$${salario.toFixed(2)}.`);