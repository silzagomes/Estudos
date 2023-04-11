const prompt = require("prompt-sync")();

let soma = 0;
let continuar = true;

while (continuar) {
  let numero = parseInt(prompt("Digite um número: "));
  soma += numero;

  let resposta = prompt("Quer fornecer outro número? (s/n) ");
  if (resposta === "n") {
    continuar = false;
  }
}

console.log(`A soma dos números é ${soma}`);
