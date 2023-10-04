const VALOR_PADRAO = 0;
let valor = 0;

function add(v){
    valor+= v;
}

console.log(valor);
add(10);
console.log(valor);
add(5);
console.log(valor);


// const VALOR_PADRAO = 0;

// function soma(n1=VALOR_PADRAO, n2=VALOR_PADRAO){
//     let res
//     res = n1 + n2;
//     return res;
// }

// let resultado_soma = soma(5);
// console.log(resultado_soma);