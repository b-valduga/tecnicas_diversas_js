
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

// export default getTodosCursos
export{cursos, getCurso}
