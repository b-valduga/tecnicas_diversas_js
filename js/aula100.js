import { Cxmsg } from "./cxmsg.js";
const config = {
    cor: "#080"
}
Cxmsg.config(config);

const timer = document.querySelector('#timer');
const btn_iniciar = document.querySelector('#btn_iniciar');
const btn_parcial = document.querySelector('#btn_parcial');
const btn_parar = document.querySelector('#btn_parar');
const btn_zerar = document.querySelector('#btn_zerar');
const parciaisregistradas = document.querySelector('#parciaisregistradas');

let intervalo = null
let tmpini = null;


const contador = () =>{
    const tmpatual = Date.now();
    let cont = tmpatual - tmpini; // a diferença aqui é em milisegundos
    let seg = ((tmpatual - tmpini) / 1000); //obtem o valor em segundos. Math.floor: arredonda
    timer.innerHTML = converter(seg); //vai receber o retorno da função converter recebendo o seg

}

const converter = (seg) =>{
    let hora = Math.floor(seg / 3600); //3600 é a quantidade de segundos em 1 hora
    let resto = seg % 3600;
    let minuto = Math.floor(resto / 60); //cada hora tem 60 minutos
    let segundo = Math.floor(resto % 60); //cada minuto tem 60 segundos
    let tempoformatado = (hora < 10 ? '0' + hora : hora) + ':' + (minuto < 10 ? '0' + minuto : minuto) + ':' + (segundo < 10 ? '0' + segundo : segundo);

    return tempoformatado;
}


btn_iniciar.addEventListener('click', (evt) =>{
    tmpini = Date.now(); //aqui eu pego o timestamp inicial, quando entrar na aplicação. Date.now() vai retornar um numero de milisegundos desde 01/01/1970. Esse número é o timestamp. Só vai atribuir o timestamp quando eu clicar no botao iniciar
    intervalo = setInterval(contador, 1000); //o intervalo recebe a contagem somente quando eu clicar no botão
})

btn_parcial.addEventListener('click', (evt) =>{
    let parcial = "<div>" + timer.innerHTML + '</div>';
    parciaisregistradas.innerHTML += parcial;
})

btn_parar.addEventListener('click', (evt) =>{
    clearInterval(intervalo);
})

btn_zerar.addEventListener('click', (evt) =>{
    tmpini = Date.now();
    timer.innerHTML = '00:00:00';
    clearInterval(intervalo);
    parciaisregistradas.innerHTML = '';
    Cxmsg.mostrar('Cronometro', 'O Cronometro foi zerado');
})