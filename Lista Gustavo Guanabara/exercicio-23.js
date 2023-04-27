/*23)Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar descontos
para todos, mas especialmente para mulheres. Faça um programa que leia nome,
sexo e o valor das compras do cliente e calcule o preço com desconto. Sabendo
que:
 - Homens ganham 5% de desconto
 - Mulheres ganham 13% de desconto */

const prompt = require("prompt-sync")();

let nome = prompt('Digite o nome do cliente: ');
let sexo = prompt('Digite o sexo do cliente (M/F): ');
let valor = parseFloat(prompt('Digite o valor das compras: '));

let desconto;

if (sexo === 'F') {
  desconto = 0.13;
} else {
  desconto = 0.05;
}

let valorComDesconto = valor * (1 - desconto);

console.log(`O valor com desconto para ${nome} é R$${valorComDesconto.toFixed(2)}`);
