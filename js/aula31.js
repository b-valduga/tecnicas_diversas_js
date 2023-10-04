const caixa1 = document.querySelector('#caixa1');
const btn_c = [...document.querySelectorAll('.curso')];

//console.log(document.getRootNode()) //gotRootNode é um método, então por isso vai parenteses ()

console.log(btn_c[0].getRootNode()); //gotRootNode é um método, então por isso vai parenteses ()
console.log(btn_c[0].ownerDocument); //ownerDocument é uma propriedade, por isso n vai parenteses ()

// console.log(caixa1.firstElementChild) //children é uma propriedade, por isso ele n precisa do parenteses ()
// console.log(caixa1.lastElementChild)
// console.log(caixa1.children)





//root node: nó raíz