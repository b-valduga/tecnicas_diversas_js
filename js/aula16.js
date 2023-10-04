/*Parâmetros rest utilizando o spread -> é uma forma de passagem de parametros onde eu
não preciso especificar a qtd de parametos q eu quero enviar para a função
*/

// function soma(...valores){ //usando o spread q transforma em parametro rest. Array
//     let tam = valores.length;
//     let res = 0; //para guardar a soma
//     for(let i = 0; i < tam; i++){
//         res += valores[i];
//     }

//     return res; // mostra a quantidade de parametros
// }

// console.log(soma(10, 5, 2, 8));

function soma(...valores){
    let res = 0;
    for(let i of valores){
        res += i;
    }
    return res;
}

console.log(soma(10, 5, 2, 8, 15));