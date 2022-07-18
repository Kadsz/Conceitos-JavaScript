// toda função retorna algo

// uma função toda vez que ela encontra um return ela para a execução e retorna logo a frente

const sum = function (number1, number2) {
  let total = number1 + number2;
  return total;
};

let number1 = 34;
let number2 = 25;

console.log(`o numero 2 e ${number1}`);
console.log(`o numero 2 e ${number2}`);
console.log(`o total e ${sum(number1, number2)}`);

// Função é um liquidificador

function fazerSuco(fruta1, fruta2) {
  return fruta1 + fruta2;
}

const copo = fazerSuco("Morango", "Manga");

console.log(copo);
