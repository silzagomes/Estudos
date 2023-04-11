//Calculo de média
const prompt = require("prompt-sync")();

let nota1 = parseFloat(prompt("Digite sua primeira nota: "));
let nota2 = parseFloat(prompt("Digite sua segunda nota: "));
let nota3 = parseFloat(prompt("Digite sua terceira nota: "));

let media = (nota1 + nota2 + nota3) / 3;

console.log("Sua média foi ", media.toFixed(2));
