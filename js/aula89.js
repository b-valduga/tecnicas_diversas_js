/*
Desestruturação: é uma expressão q permite extrair dados de um objeto ou de um array e associar esses
dados a variáveis destintas.
*/ 

let numeros = () =>{
    return [10, 20, 30, 40]
}

let [a, b, c, d] = numeros();

console.log(a);
console.log(b);
console.log(c);
console.log(d);

// let a = 10;
// let b = 20;

// [a, b] = [b, a];

// console.log(a);
// console.log(b);

// let a, b, c, d;

// [a, b = 0, c = 0, d = 0] = [10];

// let numeros = [10, 20, 30, 40];

// let [a, b, c, d] = numeros;

// let a, b, c, d;

// ({a, b, c, d} = {a:'verde', b:'amarelo', c:'azul', d:'branco'});

// [a, b, c, d] = ['verde', 'amarelo', 'azul', 'branco'];  
// [a, b, c, d] = [10, 20, 30, 40];

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);