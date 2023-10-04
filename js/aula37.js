/*every: procura equivalencias no array. Todos os elementos tem q ter equivalencia com a minha pesquisa
//every: compara todos os elementos e vai me retornar true quando todos os elementos estiverem em
conformidade com a minha regra. Se um dos elementos não estiver em conformidade ele retorna false
*/
const p_array = document.querySelector('#array');
const btnVerificar = document.querySelector('#btnVerificar');
const resultado = document.querySelector('#resultado');

const elementos_array = [21, 25, 19, 20, 18, 18, 22];
p_array.innerHTML = "["+elementos_array+"]";

btnVerificar.addEventListener('click', (evt) =>{
    const ret = elementos_array.every((elemento, posicao) =>{
        if(elemento < 18){
            resultado.innerHTML = 'Array não conforme na posição ' + posicao;
        }
        return elemento >= 18;
    })
    if(ret){
        resultado.innerHTML = 'OK';
    }
    //console.log(ret);
})