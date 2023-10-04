//Prototype: vai servir para quando eu precisar adicionar uma propriedade ou um método a um objeto

const Nave = function(energia){ //classe com uma função construtora
    this.energia = energia;
    this.disparos = 3;
}

const n1 = new Nave(100); //objeto da classe Nave

Nave.prototype.vidas = 3;
Nave.prototype.disparar = function(){
    if(this.disparos > 0){
        this.disparos --
    }
}

n1.disparar();
n1.disparar();
n1.disparar();
n1.disparar();
n1.disparar();

console.log(Nave);
console.log(n1);
console.log(n1.disparos);