const dc1 = document.getElementById('c1');
const dc2 = document.getElementById('c2');
const dc3 = document.getElementById('c3');
const dc4 = document.getElementById('c4');
const dc5 = document.getElementById('c5');
const dc6 = document.getElementById('c6');

const arrayElementos = [dc1, dc2, dc3, dc4, dc5, dc6]; //criei um array desses elementos

// for(i of arrayElementos){
//     i.innerHTML = 'Bill Gates';
// }

arrayElementos.map((e) =>{
    e.innerHTML = 'Bill Gates';
    console.log(e);
})


//MAP

// let valores = [2, 4, 6, 8, 10];

// let dobro = valores.map((valor) =>{
//     return valor * 2
// }) 
// console.log(dobro);

// let dobro = valores.map(function(valor){
//     return valor * 2
// })
// console.log(dobro);



// function dobrar(valor){
//     return valor * 2
// }

// let bradesco = valores.map(dobrar);
// console.log(bradesco);



// Rest/spread ...

// function total(...precos){
//     let total = 0;
//     precos.forEach(p => total += p);
//     return total;
// }

// console.log(total(23.44, 22, 3.45, 5.67).toFixed(2));

// console.log(total(23, 67));
// console.log(total(3, 6, 67));

// let frutas1 = ['Manga', 'Uva', 'Melancia'];
// let frutas2 = ['Abacata', 'Morango', 'Jaca'];

// let compras = [...frutas1, ...frutas2];
// console.log(compras);

// let alunos = ['Paula', 'Felipe', 'Fernanda'];
// let novo = 'Joana';

// // alunos.push(novo);
// // console.log(alunos);

// let todos = [...alunos, novo];
// console.log(todos);
