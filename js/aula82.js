const nome = Symbol('nome');
const numero = Symbol('número');
const corUniforme = Symbol('cor de uniforme');

const Jogador = {
    nome: 'j1'

}

Jogador[numero] = 10, //aqui é com = pq ele n está dentro do objeto literal
Jogador[corUniforme] = 'amarelo'

for(p in Jogador){
    console.log(p)
}

console.log(Jogador);
console.log(Jogador.nome);
console.log(Jogador[numero]);
console.log(Jogador[corUniforme]);

