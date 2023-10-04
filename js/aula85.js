/*RegEx Expressões regulares: são padrões de caracterers q eu defino e posso utilizar em funções para
mudar o comportamento dessas funções
//search: faz a pesquisa e retorna a posição inicial
//match: verifica onde deu match e retorna o primeiro caracterer q ele encontrar
//replace: substitui um caracter ou uma string por outro
*/

let nome = new String('Brunoooooooo Pinho Camposssssssssss 1978');
let email = 'bruno@bruno.com.br';
let numeros = '1, 10, 100, 1000';

console.log(nome);

//console.log(nome.search(/pinho/i)); //estou usando regEx. O i indica q ele n vai usar o case sensitive

//console.log(nome.match(/O/ig)); //estou usando regEx / /. O g significa global. Com isso ele retorna todos os caracteres q ele encontrar. O i fala para ignorar o case sensitive

//console.log(nome.replace(/o/ig, 'Teste')); //estou usando regEx. O i indica para ignorar o case sensitive. O g significa global. Com isso ele retorna todos os caracteres q ele encontrar.

//console.log(nome.match(/[oh]/ig)); //estou criando um padrão. Ele vai encontrar tanto o 'o' quanto o 'h' usando o []

//console.log(nome.match(/[a-m]/ig)) //ele retorna os caracteres de 'a' até 'm'. Tudo q ele encontrar de a até m irá ser retornado

//console.log(nome.match(/[a-m | 0-9]/ig)) //retorna tudo de 'a' até 'm'   e tambem de 0 até 9

//Meta caracteres
// console.log(nome.match(/\d/ig)); //retorna apenas numerais
// console.log(nome.match(/\s/ig)); //retorna os espaços
// console.log(nome.match(/\bP/ig)); //retorna o digito q ele encontrou

//Contificadores
// console.log(nome.match(/o+|s+/sg)) // + : ele vai entender q faz parte tudo da mesma palavra
// console.log(nome.match(/no*/ig))
console.log(numeros);
console.log(numeros.match(/10/ig));
console.log(numeros.match(/10+/ig));
console.log(numeros.match(/10*/ig)); 
console.log(numeros.match(/10?/ig));
