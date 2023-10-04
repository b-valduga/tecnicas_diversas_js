/*some: ele vai retornar true quando pelo menos um dos valores do array coinscidir com q eu estiver
pesquisando. Se somente 1 equivaler já é o suficiente
*/

const p_array = document.querySelector('#array');
const btnVerificar = document.querySelector('#btnVerificar');
const resultado = document.querySelector('#resultado');

const elementos_array = [16, 12, 20, 10, 17, 15, 13, 11, 18];
p_array.innerHTML = "["+elementos_array+"]";

btnVerificar.addEventListener('click', (evt) =>{
    const ret = elementos_array.some((elemento, posicao) =>{
        if(elemento < 18){
            resultado.innerHTML = 'Array não conforme na posição ' + posicao;
        }
        return elemento >= 18
    })
    if(ret){
        resultado.innerHTML = 'OK';
    }
})