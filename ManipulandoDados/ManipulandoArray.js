let techs = ["html", "css", "js"];

// adicionar um item no fim
techs.push("nodejs");

// adicionar no começo
techs.unshift("sql");

// remover do fim
// techs.pop();

// remover do começo
// techs.shift();

// pegar somente alguns elementos do array

/*
 slice -- cortar 
 recebe dois argumentos posição de inicio e posição final
*/

// console.log(techs.slice(1, 3));

// remover 1 ou mais items em qualquer posição do array

/*
 slice -- cortar 
 recebe dois argumentos index do array e quantos elementos quero tirar
*/

// techs.splice(1, 2);

// encontrar a posição de um elemento no array

// indexOf -- index DE

let index = techs.indexOf("css");
techs.splice(index, 1);

console.log(techs);
