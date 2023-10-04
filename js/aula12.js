// let n = 0;
// let max = 1000;

// while(n < max){
//     console.log('CFB Cursos ' + n);
//     if(n > 10){
//         break;
//     }
//     n++
// }

// console.log('Fim do programa');

let n = 0;
let max = 1000;
let pares = 0;

for(i = n; i < max; i++){
    if(i % 2 !== 0){
        continue; //não executa essa interação e passa para a próxima
    }
    pares++; //estou colocando os valores pares na variável pares
}

console.log('Quantidade de números pares: ' + pares);
console.log('Fim do programa')