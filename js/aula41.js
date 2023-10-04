/*Array: é uma coleção de variáveis. Ao invés de eu criar variáveis separadas, eu crio um
array e nesse array eu vou adicionando valores da maneira q eu quiser.
matriz: quando eu tenho um array dentro de outro array
push: adiciona elementos no final do array
unshift: adciona elementos no começo do array
shift: retira o primeiro elemento do array
pop: retira o último elemento do array
*/
const caixa = document.querySelector('#caixa');

let cores = ['azul', 'verde', 'vermelho', ['claro', 'escuro', 'médio']];

let cursos = ['HTML', 'CSS', 'Javascript', cores];

//cursos[0] = 2023;

// cursos.push('C++');
// cursos.unshift('react'); //unshift: adciona elementos no começo do array
// cursos.shift(); //shift: retira o primeiro elemento do array
// cursos.push('python'); //push: adiciona elementos no final do array
// cursos.pop(); //pop: retira o último elemento do array

console.log(cursos[3][3][2]); //o primeiro índice é do array cores e o segundo é o q tem dentro dele

cursos.map((el) =>{ //para cada elemento (el) q o map percorrer eu crio um elemento p, digo q o innerHTML do p irá ser o el e organizo a árvore dom com o appendChild
    let p = document.createElement('p');
    p.innerHTML = el
    caixa.appendChild(p);
})
