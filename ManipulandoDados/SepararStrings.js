// Manipulando Strings e Arrays

/* Separe um texto que contem espaços, 
   em um novo array onde cada texto é uma posição do array. 
   Depois disso, transforme o array em um texto e onde eram espaços.
   coloque _
*/

let frase = "Carlos gosta de sushi";
let myArray = frase.split(" ");

console.log(myArray);

let fraseUnderscore = myArray.join("_");

console.log(fraseUnderscore);
