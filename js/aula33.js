const caixa1 = document.querySelector('#caixa1');
const btn_c = [...document.querySelectorAll('.curso')];
const c1_2 = document.querySelector('#c1_2');
const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React', 'MySql', 'ReactNative'];

cursos.map((el, chave) =>{
    const novoElemento = document.createElement('div');
    novoElemento.innerHTML = el;
    
    const btn_lixeira = document.createElement('img');
    btn_lixeira.setAttribute('src', './imagens/icone_lixeira.png');
    btn_lixeira.setAttribute('class', 'btn_lixeira');
    btn_lixeira.addEventListener('click', (evt) =>{
        caixa1.removeChild(evt.target.parentNode);
    }) 
    novoElemento.setAttribute('id', 'c' + (chave + 1));
    novoElemento.setAttribute('class', 'curso c1');
    
    novoElemento.appendChild(btn_lixeira);
    caixa1.appendChild(novoElemento);
})

