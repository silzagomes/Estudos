/* 14) A locadora de carros precisa da sua ajuda para cobrar seus serviços. Escreva
um programa que pergunte a quantidade de Km percorridos por um carro alugado e a
quantidade de dias pelos quais ele foi alugado. Calcule o preço total a pagar,
sabendo que o carro custa R$90 por dia e R$0,20 por Km rodado. */

const prompt = require("prompt-sync")();

const valorDiaria = 90; // Valor da diária em reais
const valorKmRodado = 0.20; // Valor do km rodado em reais

let kmPercorridos = parseFloat(prompt("Qual a quantidade de km percorridos? ")); //A função parseFloat converte uma string digitada para um número decimal;
let diasAlugados = parseInt(prompt("Qual a quantidade de dias alugados? "));// A função parseInt converte uma string digitada para um número inteiro. 

let valorPagar = (diasAlugados * valorDiaria) + (kmPercorridos * valorKmRodado);

console.log(`O preço total a pagar é R$${valorPagar.toFixed(2)}.`);

