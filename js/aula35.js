const caixaCursos = document.querySelector('#caixaCursos');
const btn_c = [...document.querySelectorAll('.curso')];
const c1_2 = document.querySelector('#c1_2');
const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React', 'MySQL', 'ReactNative'];
const btnCursoSelecionado = document.getElementById('btnCursoSelecionado');
const btnRemoverCurso = document.getElementById('btnRemoverCurso');
const btnAdicionarNovoCursoAntes = document.getElementById('btnAdicionarNovoCursoAntes');
const btnAdicionarNovoCursoDepois = document.getElementById('btnAdicionarNovoCursoDepois');
const nomeCurso = document.getElementById('nomeCurso');

let indice = 0; //essa variavel vai me dar a posição do elemento. Para n ter Ids repetidos

// ------------------------------- //

const tirarSelecao = () =>{
    const cursosSelecionados = [...document.querySelectorAll('.selecionado')];
    cursosSelecionados.map((el) =>{
        el.classList.remove('selecionado');
    })
}

const criarNovoCurso = (curso) =>{
    const novoElemento = document.createElement('div');
    novoElemento.setAttribute('id', 'c' + indice)
    novoElemento.setAttribute('class', 'curso c1' );
    novoElemento.innerHTML = curso;
    novoElemento.addEventListener('click', (evt) =>{
        tirarSelecao();
        evt.target.classList.toggle('selecionado') //toggle: aparece e esconde um elemento
    })
    
    return novoElemento
}

// ------------------------------- //

cursos.map((el, chave) =>{
    
    const novoElemento = criarNovoCurso(el)
    caixaCursos.appendChild(novoElemento);
    indice++; //toda vez q for criado criarNovoCurso, é necessário atualizar a posição do índice
})

// ------------------------------- //

const CursoSelecionado = () =>{
    const cursosSelecionados = [...document.querySelectorAll('.selecionado')];
    return cursosSelecionados[0]; 
}

// ------------------------------- //

btnCursoSelecionado.addEventListener('click', (evt) =>{
    try{
        alert('Curso selecionado: ' + CursoSelecionado().innerHTML);
    }catch(ex){
        alert('Selecione um curso');
    }
})

// ------------------------------- //

btnRemoverCurso.addEventListener('click', (evt) =>{
    const cs = CursoSelecionado();
    if(cs !== undefined){
        cs.remove();
    }else{
        alert('Selecione um curso');
    }
})

btnAdicionarNovoCursoAntes.addEventListener('click', () =>{
    try{
        if(nomeCurso.value !== ''){
            const novoCurso = criarNovoCurso(nomeCurso.value);
            caixaCursos.insertBefore(novoCurso, CursoSelecionado());
        }else{
            alert('Digite o nome do curso')
        }
        
    }catch(ex){
        alert('Selecione um curso')
    }
})

btnAdicionarNovoCursoDepois.addEventListener('click', (evt) =>{
    try{
        if(nomeCurso.value !== ''){
            const novoCurso = criarNovoCurso(nomeCurso.value);
            caixaCursos.insertBefore(novoCurso, CursoSelecionado().nextSibling);
        }else{
            alert('Digite o nome do curso')
        }
        
    }catch(ex){
        alert('Selecione um curso')
    }
})



// parentNode
// childNodes[nodenumber]
// firstChild
// lastChild
// nextSibling
// previousSibling