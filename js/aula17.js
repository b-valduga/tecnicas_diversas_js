/*Funções anonimas: são funções q n possuem um nome associado ao seu conteúdo
são chamadas em tempo de execução. Ela só vai ser criada no momento da execução
eu preciso associar essa função a uma variável
*/

// const livro = function(...valores){
//     let res = 0; //guardar o resultado
//     for(i of valores){
//         res+= i;
//     }
//     return res;
// }

// console.log(livro(10,5,8,14));

// const livro = function(...valores){
//     let res = 0; //guardar o resultado
//     for(let i of valores){
//         res += i;
//     }
//     return res;
// }

// console.log(livro(10,5,8,9));

//const livro = new Function("v1", "v2", "v3", "return v1 + v2 + v3"); //Função constructor anônima

//console.log(livro(10, 5, 15));
// na função constructor tem q passar os parâmetros e o corpo da função
// na função constructor sempre o último parâmetro vai ser o corpo da função

const livro = new Function('v1', 'v2', 'v3', 'return v1 + v2 + v3'); //constructor anônima
console.log(livro(8,12,3));
