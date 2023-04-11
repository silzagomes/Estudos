const prompt = require("prompt-sync")();

let anoNascimento = prompt("Digite seu ano de nascimento:");
let idade = 2023 - anoNascimento;
console.log(`Sua idade é ${idade} anos.`);
