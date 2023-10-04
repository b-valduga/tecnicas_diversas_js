/*
Symbol: a função symbol retorna um objeto do tipo symbol q tem um identificador único. Podemos utilizar
para identificar propriedades dentro de classes ou quando eu precisar gerar o identificador único de 
algum elemento dentro do JavaScript. Ele sempre vai retornar um elemento do tipo symbol q tem 
um identificador único. Não podemos utilizar esse valor de retorno do symbol no DOM pq ele não gera 
uma string, ele gera um identificador interno. Só iremos utilizar dentro do código, a não ser q ele
esteja associado a propriedades de classes ou membros de funções.
*/

const s1 = Symbol(); //objeto do tipo Symbol
const s2 = Symbol();
const s3 = Symbol.for('bruno'); //permite criar um identificador no registro global para esse Symbol. o valor do registrador global é 'bruno'
const s4 = Symbol.for('canal'); //o valor do registrador global é 'canal'

console.log(s1);
console.log(s2);

console.log(s3 === s4);

console.log(typeof(s1));

console.log(Symbol.keyFor(s3)); // KeyFor retorna o symbol apenas de quem tem o registrador global
console.log(Symbol.keyFor(s4));
// console.log(Symbol.keyFor(s5)); // retorna um erro pois não existe s5
console.log(Symbol.keyFor(s1)); //undefined, pois não tem o registrador global