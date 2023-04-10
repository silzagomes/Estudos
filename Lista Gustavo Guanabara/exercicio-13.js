/* 13) Faça um algoritmo que leia o salário de um funcionário, calcule e mostre o
seu novo salário, com 15% de aumento. */

const prompt = require("prompt-sync")();

const salario = parseFloat(prompt("Digite o salário do funcionário:"));

const novoSalario = salario * 1.15;

console.log(`O novo salário com aumento é de R$ ${novoSalario.toFixed(2)}`);
