/*
Objetos literais: é uma forma de definir um tipo dinâmico. Um tipo personalizado. 
*/ 

const objetos = document.getElementById('objetos');

const computador = { //objeto
    cpu: "i9",
    ram: "64gb",
    hd: "2tb",
    info:function(){ //método
        console.log(`CPU:${this.cpu}`)
        console.log(`RAM:${this.ram}`)
        console.log(`HD:${this.hd}`)
    }
}

// computador['monitor'] = '22pol';
// computador.placaVideo = 'rtx';

console.log(computador['monitor']);

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

