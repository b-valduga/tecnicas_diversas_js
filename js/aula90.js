let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];

let [a, b, c, ...d] = numeros; //operador rest: ...    ele espalha o resto e vai colocar no d
console.log(a);
console.log(b);
console.log(c);
console.log(d);

let obj = {nome: 'Bruno', canal: 'CFBCursos', curso: 'JavaScript'};

let {nome, canal} = obj;
console.log(nome);
console.log(canal);

const cores = () =>{
    return ['verde', 'amarelo', 'azul', 'branco'];
}

let[c1, c2, , c3] = cores(); // é como se naquele ponto não tivesse variável
console.log(c1);
console.log(c2);
console.log(c3);

let texto = 'Curso de JavaScript';

let [p1, p2, p3] = texto.split(' '); //o split vai quebrar o texto no espaço e retorna um array com 3 posições
console.log(p1);
console.log(p2);
console.log(p3);





