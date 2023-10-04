/*
Objetos literais: é uma forma de definir um tipo dinâmico. Um tipo personalizado. 
*/ 

const objetos = document.getElementById('objetos');

const computador = { //objeto que irá servir como base
    cpu: "",
    ram: "",
    hd: "",
    info:function(){ //método
        console.log(`CPU:${this.cpu}`)
        console.log(`RAM:${this.ram}`)
        console.log(`HD:${this.hd}`)
    }
}

 computador['monitor'] = '22pol';
 computador.placaVideo = 'rtx';
 delete(computador.hd);

const c1 = Object.assign({},computador) //vai clonar o objeto computador
console.log(computador);
c1.info();

const c2 = Object.create(computador); //estou criando um objeto do tipo computador
c2.cpu = 'i9';
c2.ram = '32gb';
c2.hd = '2tb';
c2.info();

const o1 = {obj1: '1'};
const o2 = {obj2: '2'};
const o3 = {obj3: '3'};
const o4 = Object.assign(o1, o2, o3); //vai mesclar, juntar os outras objetos

console.log(o4);

const computadores = [ //é um array q tem dentro objetos
    {
        cpu: 'i9',
        ram: '64gb',
        hd: '2tb'
    },
    {
        cpu: 'i7',
        ram: '32gb',
        hd: '2tb'
    },
    {
        cpu: 'i5',
        ram: '16gb',
        hd: '1tb'
    }
]

computadores.forEach((c) =>{
    // console.log(c); //imprimo todos os objetos q estão dentro do array computadores
    const div = document.createElement('div');
    div.innerHTML = c.cpu + '<br>' + c.ram + '<br>' + c.hd;
    div.setAttribute('class', 'computador');
    objetos.appendChild(div);
})

//computador.info();

//console.log(computadores);
//console.log(computador);

// objetos.innerHTML = computador.cpu + ' - ' + computador.ram + ' - ' +  computador.hd;

//objetos.innerHTML = JSON.stringify(computador);
//objetos.innerHTML = JSON.stringify(computadores)