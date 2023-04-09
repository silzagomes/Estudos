/*2) Faça um programa que leia o nome de uma pessoa e mostre uma mensagem de boasvindas para ela:
Ex:
Qual é o seu nome? João da Silva
Olá João da Silva, é um prazer te conhecer! 

------> OBS. PARA UTILIZAR O PROMPT FOI NECESSÁRIO INSTALAR O  MÓDULO PROMPT-SYNC:
        npm install prompt-sync
*/
const prompt = require("prompt-sync")();

let nome = prompt("Qual é o seu nome?");
console.log("Olá " + nome + ", é um prazer te conhecer!");