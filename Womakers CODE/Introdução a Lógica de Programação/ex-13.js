const prompt = require("prompt-sync")();

let mesNum = parseInt(prompt("Digite o mês em formato numérico: "));

let mes;

switch (mesNum) {
  case 1:
    mes = "JANEIRO";
    break;
  case 2:
    mes = "FEVEREIRO";
    break;
  case 3:
    mes = "MARÇO";
    break;
  case 4:
    mes = "ABRIL";
    break;
  case 5:
    mes = "MAIO";
    break;
  case 6:
    mes = "JUNHO";
    break;
  case 7:
    mes = "JULHO";
    break;
  case 8:
    mes = "AGOSTO";
    break;
  case 9:
    mes = "SETEMBRO";
    break;
  case 10:
    mes = "OUTUBRO";
    break;
  case 11:
    mes = "NOVEMBRO";
    break;
  case 12:
    mes = "DEZEMBRO";
    break;
  default:
    console.log("Mês inválido.");
}

if (mes) {
  console.log(mes);
}
