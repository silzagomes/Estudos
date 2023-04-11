const prompt = require("prompt-sync")();

console.log("---------------------------------------------");
console.log("| Código  |     Descrição    |Preço unitário");
console.log("---------------------------------------------");
console.log("|   1     |   Coxinha        |    R$ 0,50   |");
console.log("|   2     |   Pastel         |    R$ 0,75   |");
console.log("|   3     |   Pão de queijo  |    R$ 0,40   |");
console.log("|   4     |   Enroladinho    |    R$ 0,80   |");
console.log("---------------------------------------------");

let codigo = parseInt(prompt("Qual o código do salgado? "));
if (codigo >= 1 && codigo <= 4) {
  let quantidade = parseInt(prompt("Qual a quantidade de salgados? "));

  let preco;

  switch (codigo) {
    case 1:
      preco = 0.5;
      break;
    case 2:
      preco = 0.75;
      break;
    case 3:
      preco = 0.4;
      break;
    case 4:
      preco = 0.8;
      break;
  }

  let total = quantidade * preco;
  console.log(`Sua conta foi ${total.toFixed(2)} reais`);
} else {
  console.log("Código inválido.");
}
