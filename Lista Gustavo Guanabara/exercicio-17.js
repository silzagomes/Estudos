/*17) Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse
80Km/h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba
o valor da multa, cobrando R$5 por cada Km acima da velocidade permitida.*/

let prompt = require("prompt-sync")(); 

let velocidadeCarro = parseFloat(prompt("Qual é a velocidade do carro (em km/h)? "));

const velocidadeMaxima = 80;
const valorPorKmAcima = 5;

if (velocidadeCarro > velocidadeMaxima) {
  const kmAcima = velocidadeCarro - velocidadeMaxima;
  const valorMulta = kmAcima * valorPorKmAcima;
  console.log(`Você foi multado por estar ${kmAcima}km/h acima da velocidade permitida. Sua multa é de R$${valorMulta}.`);
} else {
  console.log("Você está dentro do limite de velocidade permitido.");
}
