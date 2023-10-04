/*
Session storage: quando fechamos o browser as informações são perdidas.
Local storage: quando fechamos o browser as informações são guardadas da página que estamos trabalhando.
setItem: método usado para definir a chave
getItem: método usado para obter o valor da chave. Sempre retorna uma string ou um null
propriedade: não precisa colocar o parênteses

Em sessionStorage quando eu fechar o browser os dados são perdidos
*/ 

const f_texto = document.querySelector('#f_texto');
const p_texto = document.querySelector('#p_texto');
const btn_texto = document.querySelector('#btn_texto');

btn_texto.addEventListener('click', (evt) =>{

})

let num = 10;
let curso = 'JavaScript';
// window.localStorage.setItem('numero', num);
// localStorage.setItem('nome', 'Bruno') //chave 'nome' com o valor 'Bruno' 
// localStorage.setItem('canal', 'CFB Cursos'); //setItem: método usado para definir a chave
// localStorage.setItem('curso', curso); //chave curso com o valor da constante curso
// alert(localStorage.length);
// alert(localStorage.getItem(localStorage.key(0)));//mostra a chave da sua respectiva posição
// alert(localStorage.getItem('nome')); //getItem: método usado para obter o valor da chave. Sempre retorna uma string ou um null
// alert(localStorage.getItem('canal'));
// alert(localStorage.getItem('curso'));
 localStorage.clear(); //limpa as chaves locais

sessionStorage.setItem('nome', 'Bruno');
sessionStorage.setItem('canal', 'CFB Cursos');
sessionStorage.setItem('curso', curso);