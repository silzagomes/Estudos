const prompt = require('prompt-sync')();

const notas = [];
console.log("Digite as 5 médias: ");

for (let i = 1; i <= 5; i++) {
  const nota = parseFloat(prompt(''));
  notas.push(nota);
}

const media = notas.reduce((soma, nota) => soma + nota, 0) / notas.length;

let abaixoDaMedia = 0;
for (let i = 0; i < notas.length; i++) {
  if (notas[i] < media) {
    abaixoDaMedia++;
  }
}

console.log(`${abaixoDaMedia} alunos estão abaixo da média da turma.`);
