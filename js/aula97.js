/*
fetch: função q permite trabalhar com leitura de arquivos. Permite trabalhar com consumos ou envio
de informações pra APIs.
Quando fazemos o consumo da API o método utilizado é o get. Eu não preciso passar essa informação
Quando queremos enviar dados para a API o método utilizado é o post.
*/

const p_temp = document.getElementById('p_temp');
const p_nivel = document.getElementById('p_nivel');
const p_press = document.getElementById('p_press');
const btn_texto = document.getElementById('btn_texto');
const obterDados = () =>{
    const endpoint = 'https://cfbcursos.brunovalduga.repl.co/';
    let res = fetch(endpoint) //o retorno do fetch é uma promisse. existe um method get nessa linha
    .then(res => res.json()) //converte o que está vindo em um json . O then vai receber o retorno do fetch
    .then(dados =>{ //a resposta já tratada convertida em json vai entrar em dados
        console.log(dados)
        p_temp.innerHTML = 'Temperatura: ' + dados.temperatura;
        p_nivel.innerHTML = 'Nível: ' + dados.nivel;
        p_press.innerHTML = 'Pressão: ' + dados.pressao;  
    })
}

// let intervalo = setInterval(obterDados, 3000)

let dados = { //objeto dados q vai receber os dados q eu quero gravar para passar para a API
    nome:'Bruno',
    canal:'CFBCursos',
    curso:'JavaScript'
}

let cabecalho = {
    method: "POST",
    body:JSON.stringify(dados) //vai pegar o objeto dados e converter em um JSON
}

const gravarDados = () =>{
    const endpoint = 'https://cfbcursos.brunovalduga.repl.co'; //endpoint da API q vai receber os dados
    fetch(endpoint,cabecalho)
    .then(res => res.json())
    .then(ret =>{
        console.log(ret)
    })
}

btn_texto.addEventListener('click', (evt) =>{
    gravarDados(); //vai chamar a API gravarDados
})  