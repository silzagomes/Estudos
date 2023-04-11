const prompt = require("prompt-sync")();

const mes = prompt("Digite um mês (em extenso): ");

switch (mes.toLowerCase()) {
  case "janeiro":
  case "março":
  case "maio":
  case "julho":
  case "agosto":
  case "outubro":
  case "dezembro":
    console.log(` ${mes} tem 31 dias.`);
    break;
  case "abril":
  case "junho":
  case "setembro":
  case "novembro":
    console.log(`${mes} tem 30 dias.`);
    break;
  case "fevereiro":
    console.log(`${mes} tem 28 ou 29 dias, dependendo do ano.`);
    break;
  default:
    console.log("Mês inválido.");
}
