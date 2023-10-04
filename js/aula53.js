/*
Herança: Quando eu tenho uma classe q herda outra classe
*/

class Carro{ //Class Pai / BASE
    constructor(nome, portas){
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel = 0
        this.cor = undefined
    }

    ligar = function(){ //método
        this.ligado = true
    }

    desligar = function(){ //método
        this.ligado = false
    }

    setCor = function(cor){ //método
        this.cor = cor
    }
}

class Militar extends Carro{ //Classe filho
    constructor(nome, portas, blindagem, municao){
        super(nome, portas) //eu invoco aqui o constutor da classe pai
        this.blindagem = blindagem
        this.municao = municao
        this.setCor('Verde')
    }

    atirar = function(){ //método atirar
        if(this.municao > 0){
            this.municao -- //ele tira uma municao / diminui o valor da municao
        }
    }
}


const c1 = new Carro('Normal', 4)
c1.ligar()
c1.setCor('Preto')

const c2 = new Militar('lutador', 1, 100, 50)
//c2.setCor('Azul')
c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()

console.log(`Nome: ${c1.nome}`)
console.log(`Portas: ${c1.portas}`)
console.log(`Ligado: ${(c1.ligado ? 'Sim' : 'Não')}`)
console.log(`Velocidade: ${c1.vel}`)
console.log(`Cor: ${c1.cor}`)
console.log('-------------------')

console.log(`Nome: ${c2.nome}`)
console.log(`Portas: ${c2.portas}`)
console.log(`Ligado: ${(c2.ligado ? 'Sim' : 'Não')}`)
console.log(`Velocidade: ${c1.vel}`)
console.log(`Blindagem: ${c2.blindagem}`)
console.log(`Munição: ${c2.municao}`)
console.log(`Cor: ${c2.cor}`)
console.log('-------------------')

