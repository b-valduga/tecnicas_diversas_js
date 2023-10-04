const teclasNum = [...document.querySelectorAll('.num')];
const teclasOp = [...document.querySelectorAll('.op')];
const teclaRes = document.querySelector('.res');
const display = document.querySelector('.display');
const ton = document.getElementById('ton');
const tlimpar = document.getElementById('tlimpar');
const tigual = document.getElementById('tigual');
const tcpy = document.getElementById('tcpy');
const teste = document.getElementById('teste');
const calc_aba = document.getElementById('calc_aba');
const calc = document.getElementById('calc');
const img_aba_calc = document.getElementById('img_aba_calc');

let sinal = false;
let decimal = false;

teclasNum.forEach((el) =>{
    el.addEventListener('click', (evt) =>{ //quando eu clicar eu preciso adcc esse valor no display
        sinal = false;
        if(evt.target.innerHTML == ','){
            if(!decimal){
                decimal = true;
                if(display.innerHTML == '0'){
                    display.innerHTML = '0,';
                }else{
                    display.innerHTML += evt.target.innerHTML;
                }
            }       
        }else{
            if(display.innerHTML == '0'){
                display.innerHTML = '';
            }
            display.innerHTML += evt.target.innerHTML;
        }
        
    })
})

teclasOp.forEach((el) =>{
    el.addEventListener('click', (evt) =>{
        if(!sinal){
            sinal = true
            if(display.innerHTML == '0'){
                display.innerHTML = '';
            }
            if(evt.target.innerHTML == 'x'){
                display.innerHTML += '*';
            }else{
                display.innerHTML += evt.target.innerHTML;
            }    
        }
        
    })
})

tlimpar.addEventListener('click', (evt) =>{
    sinal = false;
    decimal = false;
    display.innerHTML = '0';
})

tigual.addEventListener('click', (evt) =>{
    sinal = false;
    decimal = false;
    const res = eval(display.innerHTML) //eval: ele avalia a expressão q ele recebeu como parâmetro de entrada e realiza essa expressão
    display.innerHTML = res; //pego o conteudo do res e jogo no display
})

tcpy.addEventListener('click', (evt) =>{ 
    navigator.clipboard.writeText(display.innerHTML); //clipboard: área de transferencia. writeText: copiar e mandar para a area de transferencia
    // teste.select();
    // teste.setSelectionRange(0, 99999); //Mobile
    // navigator.clipboard.writeText(teste.value);
})

calc_aba.addEventListener('click', (evt) =>{
    calc.classList.toggle('calc_exibir')
    if(calc.classList.contains('calc_exibir')){
        img_aba_calc.setAttribute('src', 'seta_esquerda.svg')
    }else{
        img_aba_calc.setAttribute('src', 'seta_direita.svg')
    }
})