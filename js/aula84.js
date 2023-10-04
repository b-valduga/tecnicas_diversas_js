let nome = new String('bruno de amorim valduga');

// console.log(nome.startsWith('b'));

// console.log(nome.endsWith('valduga'));

// console.log(nome.includes('de'));

nome = nome.repeat(4); //quantas vezes eu quero repetir a string

//console.log(nome);

console.log(nome.valueOf());

console.log(nome.charCodeAt(0)); //retorna o código de cada letra indicado pela posição do índice
console.log(nome.charCodeAt(1));
console.log(nome.charCodeAt(2));
console.log(nome.charCodeAt(3));
console.log(nome.charCodeAt(4));

console.log(String.fromCodePoint(98)); //faz o contrário. Retorna a partir do código o caracterer do respectivo código

console.log(String.fromCodePoint(98,114,117,110,111)); //posso fazer tudo junto

let nome_ts = 'Bruno';

console.log(`Nome: ${nome_ts}`);