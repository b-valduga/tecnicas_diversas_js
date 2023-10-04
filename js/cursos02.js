/*
Eu só posso usar o export default uma única vez
O export default facilita para indicar qual q é a função padrão q estamos fazendo o export no projeto
*/

const cursos = ['JavaScript', 'HTML', 'CSS', 'Arduino', 'Raspberry', 'C++', 'Python', 'Java', 'C#'];

// const getTodosCursos = () =>{
//     return cursos;
// }

export default function getTodosCursos(){
    return cursos;
}

function getCurso(indice_curso){
    return cursos[indice_curso]
}

export{cursos, getCurso}

//export default getTodosCursos //eu não preciso usar chaves quando é default

