// * : pega tudo q está sendo exportado do módulo

//import {cursos as c} from './cursos02.js'
import  getTodosCursos  from './cursos02.js'; //default eu não preciso usar chaves. No default eu não consigo usar as
//import { getCurso as banana } from './cursos02.js';
import * as bradesco from "./cursos03.js";

console.log(bradesco.cursos);
console.log(bradesco.getCurso(1));
console.log(bradesco.default())