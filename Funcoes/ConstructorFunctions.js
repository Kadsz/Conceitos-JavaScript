/*
  Function() constructor

  * expressao new
  * criar um novo objeto
  * this keyword
*/

function Person(name, idade) {
  // esse this sempre vai referenciar o carlos que está lá fora
  // Fazer o molde desse objeto usando a palavra "this"
  this.name = name;
  this.idade = idade;
  this.walk = function () {
    return this.name + " andando";
  };
}

/* RETORNA UM OBJETO */

// sempre vai ser referenciado como this
const carlos = new Person("Carlos", 18);
// instanciando um novo objeto
const enrico = new Person("Jao", 32);

console.log(carlos.walk());
console.log(enrico.walk());
