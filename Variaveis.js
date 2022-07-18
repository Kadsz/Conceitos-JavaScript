/* Variáveis 
  // declaração or declaration
  var name --- declaração de variavel

  // assignment or atribuição de valores
  name = "Carlos"

  // que tipo de dado foi colocado na variável
  console.log(typeof name)

  // multiplos argumentos na funcao
  console.log(name, age, isHuman)

  // escrita de texto + variáveis - concatenando os valores
  console.log('o' + name + 'tem' + age + 'anos.')

  // escrita de texto + variáveis - interpolando os valores
  console.log(`o ${name} tem ${age} anos.`)
*/

/*

  ----- var -----

  ## Scope -- Escopo determina a visibilidade de alguma váriavel no JS
  ## Block statement -- Declaração de bloco

  ## var é global e, também local
  // local que existe dentro de um escopo e global é o não visivel

  ## comportamento com a var --> hoisting -- elevação


  // vamos iniciar um bloc
  {
    // aqui dentro é um bloco e posso colocar qualquer código
  } 
  // aqui fechamos o bloco

  o bloco também criará um novo escopo. Chamamos de 'block-scoped'

  = --> atribuição

  
*/

/*

  ----- let / const -----

  ## São locais e só funciona no escopo onde foi criada

  {
    const y = 0;
    console.log('Existe y' + y) -- true
  }

  console.log('Existe y' + y) -- false


  ## Const não pode ser alterada - foi feita para ser constante

*/
