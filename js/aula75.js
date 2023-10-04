/*módulos: é uma maneira de reaproveitamento de código ou organização/distribuição de código
módulos: São arquivos .js
O módulo concentra pedaços de códigos JavaScript dentro dele. Eu posso reutilizar um módulo
em outros módulos.
A vantagem é criar um código em um arquivo e poder utilizar esse código desse arquivo em outro arquivo
Precisamos q a aplicação esteja rodando dentro de um servidor ou no live server do visual studio code
*/
import { cursos } from "./cursos.js"
import { carros } from "./cursos.js"

console.log(cursos);
console.log(carros);
