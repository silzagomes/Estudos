/* 16) [DESAFIO] Escreva um programa para calcular a redução do tempo de vida de um
fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos ele
já fumou. Considere que um fumante perde 10 min de vida a cada cigarro. Calcule
quantos dias de vida um fumante perderá e exiba o total em dias. */

const prompt = require("prompt-sync")(); 

let cigarrosPorDia = prompt("Quantos cigarros você fuma por dia?");
let anosFumante = prompt("Há quantos anos você fuma?");

let totalCigarros = anosFumante * 365 * cigarrosPorDia;
let tempoPerdido = totalCigarros * 10; // cada cigarro reduz 10 minutos de vida

let diasPerdidos = Math.floor(tempoPerdido / (60 * 24)); // converte minutos para dias
// O Math.floor()método estático sempre arredonda para baixo e retorna o maior inteiro menor ou igual a um determinado número.

console.log("Você perdeu aproximadamente " + diasPerdidos + " dias de vida fumando.");


