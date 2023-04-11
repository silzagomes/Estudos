const prompt = require('prompt-sync')();

const numeros = [];
console.log("Digite 10 números:");

// Lê os 10 números e armazena no array
for (let i = 0; i < 10; i++) {
  const num = parseInt(prompt(``));
  numeros.push(num);
}

console.log(`Ordem original: ${numeros.join(", ")}`);

// Percorre o array na ordem inversa e exibe os números
console.log("Ordem inversa: " + numeros.reverse().join(", "));
