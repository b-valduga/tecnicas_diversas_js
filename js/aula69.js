const url = document.getElementById('url');
const btn_url = document.getElementById('btn_url');

btn_url.addEventListener('click', (evt) =>{
    // window.location = 'https://www.google.com.br';
    // window.location.replace('https://www.google.com.br'); //replace: exclui a url corrente do histórico. Substitui a url
    // window.location.assign('https://www.google.com.br'); //assign: já o assign não remove do histórico. Ele volta para a url anterior
    // window.location.reload() //reload: recarrega a página
    // window.history.back();
    // window.history.forward(); //forward: move o histórico para frente
    // window.history.go(1); //go: vai para a próxima pagina do historico
    // console.log(window.history.length); //mostra o tamanho do histórico
    // console.log(url.value);
    // window.location = url.value;
})