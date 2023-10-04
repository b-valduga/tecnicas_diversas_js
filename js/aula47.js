/*
Orientação a objetos:
utilizando o operador new, eu crio uma classe q é a base, a instrução. Tudo irá contemplar naquele
objeto, desde métodos e propriedades. Aí depois, basta eu instanciar objetos dessa classe. Cada objeto
vai seguir tudo o que foi contruído na classe. Cada objeto é independente do outro objeto.
Método construtor: é o método q é automaticamente chamado quando eu instancio um novo objeto dessa
classe.
Se o parenteses do constructor não receber nenhum parametro, ao instanciar a classe, tambem não 
iremos passar nenhum parametro
Toda vez q eu utilizo o operador new, eu estou instanciando um novo objeto da classe 
O constructor automaticamente irá ser executado quando eu acionar o new
o new instancia nova classe e automaticamente executa o método constructor
*/ 

class Pessoa{
    constructor(pnome){
        this.nome = pnome;
    }
}

let p1 = new Pessoa('Bruno') //esse paranteses faz uma referencia direta ao parenteses do constructor da classe
let p2 = new Pessoa('José')
let p3 = new Pessoa('Maria')

console.log(p1.nome);
console.log(p2.nome);
console.log(p3.nome);