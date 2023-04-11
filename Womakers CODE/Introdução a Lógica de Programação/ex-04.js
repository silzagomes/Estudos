//Descobrir se um número é impar ou par

const prompt = require("prompt-sync")();

let numero = prompt("Digite algum número: ");
if (numero % 2 === 0) {
  console.log(`${numero} é Par.`);
} else {
  console.log(`${numero} é Ímpar.`);
}
