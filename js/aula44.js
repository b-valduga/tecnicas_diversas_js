/*
Cada elemento do map possui um conjunto de chave e valor. Os valores são referenciados pelas chaves 
//eu referencío a chave e ele me retorna o valor.
A chave pode ser qualquer tipo e valor pode ser qualquer tipo.
para adicionar mais elementos é so ir adicionando com o set
Eu não posso ter chaves iguais
método has: verifica se uma chave existe na coleção ou não
*/

const caixa = document.querySelector('#caixa');

let mapa = new Map() 

mapa.set('curso', 'Javascript') //chave: curso   valor: Javascript
mapa.set(10, 'CFB Cursos')
mapa.set('1', '100')
mapa.set('canal', 100)

mapa.delete('1') //estou deletando o elemento de chave 1s

console.log(mapa)

let pes = 'teste'
let res = ''
if(mapa.has(pes)){ //estou verificando se a chave existe
    res = 'A chave existe na coleção com o valor: ' + mapa.get(pes);
}else{
    res = 'A chave NÃO está na coleção'
}
res += '<br> O tamanho da coleção é ' + mapa.size
caixa.innerHTML = res;

mapa.forEach((el) =>{
    console.log(el);
})