/*
Promise: Gera uma promessa. Vai entregar quando tiver pronto. Enquanto não tiver pronto, a aplicação
pode continuar a trabalhar.
*/

const numero = document.getElementById('numero');

let promise = new Promise((resolve, reject) =>{ //aqui eu to criando a minha promessa
    let resultado = true;
    let tempo = 3000;
    setTimeout(() =>{
        if(resultado){
            resolve('Deu tudo certo');
        }else{
            reject('Deu tudo errado');
        }
    }, tempo)
}) 

promise.then((retorno) =>{ //se deu tudo certo ele coloca o resolve no retorno
    numero.innerHTML = retorno
    numero.classList.remove('erro');
    numero.classList.add('ok');
});

promise.catch((retorno) =>{ //se deu tudo errado ele coloca o reject no retorno
    numero.innerHTML = retorno
    numero.classList.add('erro');
    numero.classList.remove('ok');
});

numero.innerHTML = 'Processando';