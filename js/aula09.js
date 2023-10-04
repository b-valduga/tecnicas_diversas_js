const objs = document.getElementsByTagName('div');

for(n of objs){ //vai retornar os elementos q eu tenho na minha coleção
    console.log(n.innerHTML = 'Steve Jobs');
}


for(n in objs){ //vai retornar a posição dos elementos dentro da coleção
    //console.log(objs[n].innerHTML);
}

let num = [10, 20, 30, 40, 50];

for(let i = 0; i < num.length; i++){
    console.log(num[i]);
}



// for(n in num){ //retorna as posições 
//     console.log(num[n]); //da coleção num eu vou imprimir os elementos da posição (índice) n
// }


// for(n of num){ //retorna diretamente os elementos dentro da coleção
//     console.log(n);
// }



// for(let i = 0; i < num.length; i++){
//     console.log(num[i]); //da coleção num eu vou imprimir os elementos da posição i
// }