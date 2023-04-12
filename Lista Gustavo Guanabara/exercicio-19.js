/*19) Crie um algoritmo que leia o nome e as duas notas de um aluno, calcule a sua
média e mostre na tela. No final, analise a média e mostre se o aluno teve ou
não um bom aproveitamento (se ficou acima da média 7.0).*/
const prompt = require("prompt-sync")(); 

let nome = prompt("Qual é o nome do aluno? ");
let nota1 = parseFloat(prompt("Digite a primeira nota: "));
let nota2 = parseFloat(prompt("Digite a segunda nota: "));
let media = (nota1 + nota2) / 2;

console.log("A média de " + nome + " é " + media.toFixed(2));

if (media >= 7.0) {
  console.log( nome + " teve um bom aproveitamento.");
} else {
  console.log( nome + " não teve um bom aproveitamento.");
}
