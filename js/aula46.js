const caixa = document.querySelector('#caixa');

const carros = ['Polo','Golf', 'T-Cross', 'HRV'];
const curso = 'Javascript';
const canal = 'CFB Cursos';

let ul = `<ul>`
carros.map((el) =>{
    ul += `<li>${el}</li>`
})
ul += `</ul>`

caixa.innerHTML = ul;

