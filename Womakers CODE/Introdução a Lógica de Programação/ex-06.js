const prompt = require("prompt-sync")();

let salarioTotal = prompt("De quanto é seu salário? ");
let horasPorDia = prompt("Quantas horas você trabalha por dia? ");

let valorHora = salarioTotal / (horasPorDia * 30); // Calcula o valor do salário por hora

console.log(`Considerando um mês de 30 dias, você recebe R$ ${valorHora.toFixed(2)} por hora.`);
