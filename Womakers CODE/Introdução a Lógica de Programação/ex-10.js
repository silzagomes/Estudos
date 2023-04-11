const prompt = require("prompt-sync")();

const kmPorLitro = parseFloat(prompt("Quantos quilômetros o carro percorre por litro? "));
const litrosNoTanque = parseFloat(prompt("Quantos litros de gasolina tem no carro atualmente? "));
const distanciaDesejada = parseFloat(prompt("Qual a distância (em Km) você deseja percorrer? "));

const kmPercorridosComTanqueAtual = kmPorLitro * litrosNoTanque;
const kmRestantes = distanciaDesejada - kmPercorridosComTanqueAtual;

if (kmRestantes > 0) {
  const litrosNecessarios = kmRestantes / kmPorLitro;
  console.log(`Você precisa abastecer ${litrosNecessarios.toFixed(2)} litros.`);
} else {
  console.log("Você não precisa abastecer.");
}
