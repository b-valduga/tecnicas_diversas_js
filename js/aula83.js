let nome = new String('bruno de amorim valduga');
let nome2 = new String('bruno de amorim valduga');
let nome3 = new String(nome.toUpperCase());
let canal = new String('CFBCursos');

console.log(nome);
console.log(typeof(nome));

console.log(nome.charAt(0)); //mostra o caracterer da posição do índice
console.log(nome.charAt(1));

console.log(nome.charCodeAt(0)) //tem q indicar a posição e ele retorna o código do caracterer

console.log(nome = nome.concat(canal)); //dessa forma eu altero definitivo o nome da string
//console.log(nome.concat(canal)); //retorna a string concatenada

console.log(nome.indexOf('a')); //indexOf retorna a posição (da primeira) da letra da string

console.log(nome.indexOf('x')); //se o indexOf não encontrar ele retorna -1

console.log(nome.lastIndexOf('a')); //indexOf retorna a posição (da última) da letra da string


console.log(nome.localeCompare(nome2));

console.log(nome.replace('bruno', 'teste')); //replace substitui nesse caso bruno por teste

console.log(nome.search('valduga'));

let sobrenome = nome.slice(9, 15); //slice faz um corte na string vc coloca o inicio e o final do corte
console.log(sobrenome);

let arr_nome = nome.split(' '); //split: retorna um array do ponto indicado como divisão. ele faz um recorte e retorna um array
console.log(arr_nome);

let parte = nome.substring(0, 5)
console.log(parte);

let parte2 = nome.substr(9, 6); //primeiro número é o início, e o ultimo é o tamanho
console.log(parte2);

nome = nome.toUpperCase();
// console.log(nome.toUpperCase());
console.log(nome);
console.log(nome3);
console.log(nome3.toLocaleLowerCase());
console.log(nome3.toLocaleUpperCase());

console.log(nome.valueOf());

let num = 10;
num = num.toString();
console.log(typeof(num));




