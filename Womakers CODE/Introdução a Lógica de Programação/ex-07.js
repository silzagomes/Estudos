
// OBI2023 ---> https://olimpiada.ic.unicamp.br/pratique/pj/2012/f1/busca/
const prompt = require("prompt-sync")();

// lê o número de pessoas que clicaram no terceiro link
let t = parseInt(prompt("Qual é o número de pessoas que clicaram no terceiro link? "));

// calcula o número de pessoas que clicaram no primeiro link
let x = 4 * t;

// exibe o resultado
console.log( x + " pessoas clicaram no primeiro link.");