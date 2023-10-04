/*
Promise: Gera uma promessa. Vai entregar quando tiver pronto. Enquanto não tiver pronto, a aplicação
pode continuar a trabalhar.
*/

const numero = document.getElementById('numero');
const btn_promessa = document.getElementById('btn_promessa');

btn_promessa.addEventListener('click', (evt) =>{
    numero.innerHTML = 'Processando...';
    console.log(promessa());
        // .then((retorno) =>{ //se deu tudo certo ele coloca o resolve no retorno
        //     numero.innerHTML = retorno
        //     numero.classList.remove('erro');
        //     numero.classList.add('ok');
        // })
        
        // .catch((retorno) =>{ //se deu tudo errado ele coloca o reject no retorno
        //     numero.innerHTML = retorno
        //     numero.classList.add('erro');
        //     numero.classList.remove('ok');
        // })
})

const promessa = () =>{
    let p = new Promise((resolve, reject) =>{ //aqui eu to criando a minha promessa
        let resultado = true;
        let tempo = 3000;
        setTimeout(() =>{
            if(resultado){
                resolve('Deu tudo certo :D');
            numero.innerHTML = 'Deu tudo certo :D';
            numero.classList.remove('erro');
            numero.classList.add('ok');
            }else{
                reject('Deu tudo errado :(');
            numero.innerHTML = 'Deu tudo errado :('
            numero.classList.add('erro');
            numero.classList.remove('ok');
            }
        }, tempo)
    }) 
    return p;
}



numero.innerHTML = 'Esperando...';