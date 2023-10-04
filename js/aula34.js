//const filtroMaior18 = (valor, indice, array) =>{ //o filter passa o valor, a posição do valor e o array. Não há necessidade de trabalhar com todos esses parametros
// const filtroMaior18 = (valor) =>{
//     if(valor >= 18){
//         return valor;
//     }
// }

// const idades = [15, 21, 30, 17, 18, 44, 12, 50];
// const maior = idades.filter(filtroMaior18);

// console.log(idades);
// console.log(maior);

const idades = [15, 21, 30, 17, 18, 44, 12, 50];

const maior = idades.filter((valor) =>{
    if(valor >= 18){
        return valor;
    }
})

const menor = idades.filter((valor) =>{
    if(valor < 18){
        return valor
    }
})
console.log(idades);
console.log(maior);
console.log(menor);