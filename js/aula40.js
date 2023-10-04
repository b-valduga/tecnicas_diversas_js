/*
Coleções iteráveis: retorna um iterador
Arrays, strings, map, sets -> são coleções iteráveis
*/

const valores = [10, 8, 9, 2];
const it_valores = valores[Symbol.iterator](); //iterador de valores

const texto = 'Youtube';
const it_texto = texto[Symbol.iterator]();

console.log(texto);
console.log(it_texto.next());
console.log(it_texto.next());
console.log(it_texto.next());
console.log(it_texto.next());
console.log(it_texto.next());
console.log(it_texto.next());
console.log(it_texto.next());
console.log(it_texto.next());
