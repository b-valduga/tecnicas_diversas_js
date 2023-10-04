/*
Quando fazemos export como default eu não preciso colocar as chaves
*/

//import getTodosCursos,{cursos} from './cursos02.js';
import {cursos} from './cursos02.js'
import  getTodosCursos  from './cursos02.js'; //default eu não preciso usar chaves
import { getCurso } from './cursos02.js';

console.log(cursos);

console.log(getTodosCursos());

console.log(getCurso(0));
