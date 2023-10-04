/*
Eu posso criar métodos ou atributos com a palavra static.
Quando eu crio um static eu consigo invocar sem instanciar a classe. Todos os objetos da classe
vão conseguir ler o mesmo valor
Quando eu defino um membro como static eu to dizendo q esse membro pertence a classe, e não
as instancias da classe.
*/

class Npc{
    static alerta = false
    constructor(energia){
        this.energia = energia
    }

    info = function(){
        console.log(`Energia: ${this.energia}`);
        console.log(`Alerta: ${Npc.alerta ? 'Sim' : 'Não'}`);
        console.log('--------------');
    }

    static alertar = function(){ //essa função é da classe, e não da instancia
        Npc.alerta = true;
    }
}

const npc1 = new Npc(100);
const npc2 = new Npc(80);
const npc3 = new Npc(30);

Npc.alertar();


npc1.info();
npc2.info();
npc3.info();