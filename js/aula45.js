/*
set: não permite entradas duplicadas no array
*/ 

const caixa = document.querySelector('#caixa');

let musicas = new Set(['musica1', 'musica boa', 'musica10']);

musicas.add('musica muito legal');
musicas.add('musica1');
musicas.add('musica1');
musicas.add('musica10');

musicas.delete('musica1');
//musicas.clear();

console.log(musicas)

// musicas.forEach((el) =>{
//     caixa.innerHTML += el + '<br>';
// })

for(let i of musicas){
    caixa.innerHTML += i + '<br>';
}