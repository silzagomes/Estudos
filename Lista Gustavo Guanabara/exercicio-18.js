/* 18) Faça um programa que leia o ano de nascimento de uma pessoa, calcule a idade
dela e depois mostre se ela pode ou não votar. */
const prompt = require("prompt-sync")(); 

const anoNascimento = parseInt(prompt("Qual é o seu ano de nascimento? "));
const idade = new Date().getFullYear() - anoNascimento;
//O método getFullYear() retorna o ano da data especificada de acordo com a hora local.

if (idade >= 16) {
  console.log(`Você tem ${idade} anos. Pode votar.`);
} else {
  console.log(`Você tem ${idade} anos. Você ainda não pode votar.`);
}
