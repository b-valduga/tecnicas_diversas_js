// const soma = (...valores) =>{
//     const somar = val =>{ //somar recebe o parametro val
//         let res = 0;
//         for(i of val) //vai percorrer o array. cada valor do array veio pro i e soma com o valor de res
//         return res; //aqui ele retorna o valor de res q é 30
//     }
//     return somar(valores)//quando eu chamei a funcao somar eu passei pra ela o ...valores (10,5,15). O retorno de res veio para quem chamou a função
// }

// console.log(soma(10,5,15)); //10,5,15 vem do spread ...valores

// const soma = (...valores) =>{
//     const somar = val =>{
//         let res = 0;
//         for(i of val)
//         res += i;
//         return res;
//     }
//     return somar(valores);
// }
// console.log(soma(5,10,15));

const somar = val =>{
    let res = 0;
    for(i of val)
    res += i;
    return res;
}

const soma = (...valores) =>{
    return somar(valores)
}

//console.log(soma(8,20,7));
valor = [10,5,15];
console.log(soma(...valor));
