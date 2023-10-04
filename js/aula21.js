// const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React'];
// cursos.map((el, i) =>{
//     console.log('Curso:' + el + ' - Posição do curso: ' + i);
// });

// const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React'];
// let c = cursos.map((el, i) =>{
//     return el
// });

// console.log(c);

// const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React'];
// let c = cursos.map((el, i) =>{
//     return el
// });

// console.log(c);

// let el = document.getElementsByTagName('div')
// el = [...el]
// console.log(el);
// el.map((e, i) =>{
//     e.innerHTML = 'Steve Jobs';
// });

// const el = document.getElementsByTagName('div');
// const val = Array.prototype.map.call(el, ({innerHTML}) =>innerHTML);
// console.log(val);

// const converterInt = (e) => parseInt(e)
// let num = ['1', '2', '3', '4', '5'].map(converterInt)
// console.log(num);

const converterInt = (e) => parseInt(e)
const dobrar = (e) => e * 2;
let num = ['1', '2', '3', '4', '5'].map(dobrar);
console.log(num);
   

