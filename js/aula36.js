/*find: ele permite pesquisar os elementos de um array e ele retorna o elemento do array quando encontrar
ele retorna só o primeiro elemento do array
predicate: é a função q vai interar elemento por elemento do array.
*/

const p_array = document.querySelector('#array');
const txt_pesquisar = document.querySelector('#txt_pesquisar');
const btnPesquisar = document.querySelector('#btnPesquisar');
const resultado = document.querySelector('#resultado');

const elementos_array = ['html', 'css', 'javascript'];
p_array.innerHTML = "["+elementos_array+"]";

// const pesquisar = (elemento, indice) =>{

// }

// function pesquisar_2(e, i){

// }

btnPesquisar.addEventListener('click', (evt) =>{
    resultado.innerHTML = 'Valor não encontrado';
    const ret = elementos_array.find((elemento, indice) =>{
        if(elemento.toUpperCase() == txt_pesquisar.value.toUpperCase()){
            resultado.innerHTML = 'Valor encontrado ' + elemento + ' na posição ' + indice;
            return elemento;
        }
    })
})

