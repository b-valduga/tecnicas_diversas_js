const palco = document.getElementById('palco');
const num_objetos = document.getElementById('num_objetos');
const txt_qtde = document.getElementById('txt_qtde');
const btn_add = document.getElementById('btn_add');
const btn_remover = document.getElementById('btn_remover');

let larguraPalco = palco.offsetWidth //para pegar a largura do palco. Sempre q for alterado o tamanho, eu obtenho o novo tamanho, pois o palco é dinâmico
let alturaPalco = palco.offsetHeight //para pegar a altura do palco. Sempre q for alterado o tamanho, eu obtenho o novo tamanho, pois o palco é dinâmico
let bolas = [] //nesse array eu vou adcc os objetos bolas. Sempre q eu criar uma nova bolinha, eu vou instanciar o objeto e colocar esse objeto dentro do array bolas
let numBola = 0

class Bola{
    constructor(arrayBolas, palco){
        this.tam = Math.floor(Math.random()* 15) + 10; //tamanho da bolinha: de 10 a 24
        this.r = Math.floor(Math.random()* 255); //cor da bolinha
        this.g = Math.floor(Math.random()* 255); //cor da bolinha
        this.b = Math.floor(Math.random()* 255); //cor da bolinha
        this.px = Math.floor(Math.random() * (larguraPalco - this.tam)); //posição da bolinha
        this.py = Math.floor(Math.random() * (alturaPalco - this.tam)); //posição da bolinha
        this.velx = Math.floor(Math.random() * 2) + 0.5; //vel minima de 0.5 e máxima de proximo a 2.5
        this.vely = Math.floor(Math.random() * 2) + 0.5;
        this.dirx = (Math.random() * 10) > 5 ? 1 : -1; //se o numero for maior q 5 ele retorna a direçao 1, se não ele retorna a direção -1
        this.diry = (Math.random() * 10) > 5 ? 1 : -1;
        this.palco = palco;
        this.arrayBolas = arrayBolas;
        this.id = Date.now() +'_'+Math.floor(Math.random() * 100000000000000);
        this.desenhar();
        this.controle = setInterval(this.controlar, 10);
        this.eu = document.getElementById(this.id); //vai relacionar a bolinha q foi instanciada no DOM com esse objeto q esta instanciado no array bolas
        numBola++;
        num_objetos.innerHTML = numBola;

    }

    minhaPos = () =>{
        return this.arrayBolas.indexOf(this) //indexOf: encontra um valor dentro do array. Ele retorna a posição this dentro do objeto Bolas
    }

    remover = () =>{
        clearInterval(this.controle)
        bolas = bolas.filter((b) =>{
            if(b.id!=this.id){
                return b;
            }
        })
        this.eu.remove();
        numBola--
        num_objetos.innerHTML = numBola;
    }

    desenhar = () =>{
        const div = document.createElement('div');
        div.setAttribute('id', this.id);
        div.setAttribute('class', 'bola');
        div.setAttribute('style', `left:${this.px}px;top:${this.py}px;width:${this.tam}px;height:${this.tam}px;background-color:rgb(${this.r},${this.g},${this.b})`);
        this.palco.appendChild(div);
    }

    controle_bordas = () =>{
        if(this.px + this.tam >= larguraPalco){
            this.dirx = -1;
        }else if(this.px <= 0){
            this.dirx = 1;
        }
        if(this.py + this.tam >= alturaPalco){
            this.diry = -1;
        }else if(this.py <= 0){
            this.diry = 1;
        }
    }

    controlar = () =>{ 
        this.controle_bordas()
        this.px += this.dirx * this.velx;
        this.py += this.diry * this.vely;
        this.eu.setAttribute('style', `left:${this.px}px;top:${this.py}px;width:${this.tam}px;height:${this.tam}px;background-color:rgb(${this.r},${this.g},${this.b})`);
        if((this.px > larguraPalco)||(this.py > alturaPalco)){
            this.remover();
        }
    }
}

window.addEventListener('resize', (evt) =>{ //resize: quando for redimensionada a tela vai ser disparado um evento
    larguraPalco = palco.offsetWidth //irá me dar a nova largura quando for redimensionado
    alturaPalco = palco.offsetHeight //irá me dar a nova altura quando for redimensionado
    
})

btn_add.addEventListener('click', (evt) =>{
    const qtde = txt_qtde.value; //eu preciso obter a quantidade
    for(let i = 0; i < qtde; i++){ //um loop para adcc um número de bolinhas
        bolas.push(new Bola(bolas, palco))
    }
})

btn_remover.addEventListener('click', (evt) =>{
    bolas.map((b) =>{ //do map ele vai passar elemento por elemento q tiver no array bolas
        b.remover();
    })
})
