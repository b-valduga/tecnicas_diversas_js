// /*Função geradora: ela tem o seu retorno adiado até o momento q precisamos do retorno
// A função geradora eu posso ir retornando coisas ao longo da execução. Eu chamo a função, ela
// retorna uma coisa, eu chamo ela de novo e ela pode retornar outra coisa pq quem tem o controle
// da execução da função é a própria função.
// A primeira vez q chamamos a função geradora ela retorna um interator (interador) para termos o
// retorno dessa função
// Quando ela encontra um yield (ponto de parada) ela retorna o conteúdo
// são o pilar da programação assíncrona
// yield: ponto de parada
// */

// function* cores(){
//     yield 'Vermelho'
//     yield 'Verde'
//     yield 'Azul'
// }

// const itc = cores(); //aqui a função retorna um interador
// console.log(itc.next().value); //a primeira execução ele retorna o vermelho e para no yield
// console.log(itc.next().value); //a segunda execução ele retorna o verde e para no yield
// console.log(itc.next().value); //a terceira execução ele retorna o azul e para no yield

// function* perguntas(){
//     const nome = yield 'Qual seu nome?';
//     const esporte = yield 'Qual seu esporte favorito?';
//     return "Seu nome é " + nome + ', seu esporte favorito é ' + esporte;
// }

// const itp = perguntas();
// console.log(itp.next().value);
// console.log(itp.next('Bruno').value);
// console.log(itp.next('Natação').value);

function* contador(){
    let i = 0;
    while(true){ //aqui é um loop infinito
        yield i++ 
        if(i > 5){
            break
        }
    }
}

// const itc = contador();
// for(let i = 0; i < 10; i++){
//     console.log(itc.next().value); //ele aqui retorna 0 pq estou usando pós incremento i++
// }

const itc = contador();
for(let i of itc){
    console.log(i);
}