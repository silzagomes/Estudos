/* 25) [DESAFIO] Crie um programa que leia o tamanho de três segmentos de reta.
Analise seus comprimentos e diga se é possível formar um triângulo com essas
retas. Matematicamente, para três segmentos formarem um triângulo, o comprimento
de cada lado deve ser menor que a soma dos outros dois.*/

const prompt = require("prompt-sync")(); 

// Leitura dos segmentos de reta
let lado1 = parseFloat(prompt("Digite o tamanho do primeiro segmento de reta:"));
let lado2 = parseFloat(prompt("Digite o tamanho do segundo segmento de reta:"));
let lado3 = parseFloat(prompt("Digite o tamanho do terceiro segmento de reta:"));

// Verificação se é possível formar um triângulo
if ((lado1 < lado2 + lado3) && (lado2 < lado1 + lado3) && (lado3 < lado1 + lado2)) {
  console.log("É possível formar um triângulo com os segmentos de reta informados.");
} else {
  console.log("Não é possível formar um triângulo com os segmentos de reta informados.");
}
