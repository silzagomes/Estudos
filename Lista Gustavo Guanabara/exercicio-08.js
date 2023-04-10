/*
8) Desenvolva um programa que leia uma distância em metros e mostre os valores
relativos em outras medidas.
Ex:
Digite uma distância em metros: 185.72
A distância de 85.7m corresponde a:
0.18572Km       1857.2dm 
1.8572Hm        18572.0cm
18.572Dam       185720.0mm  */

const prompt = require("prompt-sync")();

let distanciaMetros = parseFloat(prompt("Digite uma distância em metros:"));
let distanciaKm = distanciaMetros / 1000;
let distanciaHm = distanciaMetros / 100;
let distanciaDam = distanciaMetros / 10;
let distanciaDm = distanciaMetros * 10;
let distanciaCm = distanciaMetros * 100;
let distanciaMm = distanciaMetros * 1000;

console.log(`A distância de ${distanciaMetros}metros corresponde a:`);
console.log(`- ${distanciaKm.toFixed(3)} Km`);
console.log(`- ${distanciaHm.toFixed(3)} Hm`);
console.log(`- ${distanciaDam.toFixed(3)} Dam`);
console.log(`- ${distanciaDm.toFixed(1)} dm`);
console.log(`- ${distanciaCm.toFixed(1)} cm`);
console.log(`- ${distanciaMm.toFixed(1)} mm`);