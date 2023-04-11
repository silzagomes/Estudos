

const prompt = require("prompt-sync")();

const valorMetroQuadrado = 850; // Custo por metro quadrado de construção

let largura = prompt("Digite a largura do terreno em metros: ");
let comprimento = prompt("Digite o comprimento do terreno em metros: ");

let areaTerreno = largura * comprimento; // Cálculo da área do terreno
let custoConstrucao = areaTerreno * valorMetroQuadrado; // Cálcula do custo de construção

console.log(`A construção custará R$${custoConstrucao}.`);
