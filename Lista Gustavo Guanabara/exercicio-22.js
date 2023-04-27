/* 22) Escreva um programa que leia o ano de nascimento de um rapaz e mostre a sua
situação em relação ao alistamento militar.
 - Se estiver antes dos 18 anos, mostre em quantos anos faltam para o
alistamento.
 - Se já tiver depois dos 18 anos, mostre quantos anos já se passaram do
alistamento.*/
const prompt = require("prompt-sync")();

const anoAtual = new Date().getFullYear(); // obtém o ano atual
let anoNascimento = parseInt(prompt("Digite o ano de nascimento:"));
let idade = anoAtual - anoNascimento; // calcula a idade do rapaz

if (idade < 18) {
  let anosFaltantes = 18 - idade;
  console.log(`Faltam ${anosFaltantes} anos para o alistamento militar.`);
} else {
  let anosPassados = idade - 18;
  console.log(`Já se passaram ${anosPassados} anos do alistamento militar.`);
}
