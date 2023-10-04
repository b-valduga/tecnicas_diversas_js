//com o static eu não vou precisar instanciar a class pra poder utilizar ele. Vai ter o mesmo endereço de memória

class Cursos{
    static cursos = ['JavaScript', 'HTML', 'CSS', 'Arduino', 'Raspberry', 'C++', 'Python', 'Java', 'C#'];
    constructor(){}

    static getTodosCursos = () =>{ //método
        return this.cursos
    }

    static getCurso = (indice_curso) =>{
        return this.cursos[indice_curso];
    }

    static addCurso = (novo_curso) =>{
        this.cursos.push(novo_curso);
    }

    static apagarCursos = () =>{
        this.cursos = [];
    }
}

export default Cursos;