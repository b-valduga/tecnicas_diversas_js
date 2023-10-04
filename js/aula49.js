//get: devolve o valor de um atributo
//set: coloca o valor em um atributo
//Precisa fazer um get e um set para cada um dos atributos
/*
Para fazer acesso aos atributos, utilizamos o this
this: o objeto q fazer acesso a esse método, imprima o nome dele

Em JavaScript tudo é publico, não tem o conceito de encapsulamento
O que queremos é q os atributos de uma classe não sejam manipulados diretamente fora da classe,
para isso criamos métodos chamados get e set
Para manipular os atributos fora da classe, fazemos acesso a os métodos get e set ao invés de acessar
diretamente os atributos
utilizamos os métodos get e set para manipular os atributos

objeto: é uma coleção dinamica de chave e valor
*/ 
class Carro{
    constructor(pnome, ptipo){ //pnome, ptipo: são os parametros
        this.nome = pnome; //this.nome: é o atributo
        if(ptipo == 1){
            this.tipo = 'Esportivo'
            this.velmax = 300
            this.velmin = 20
        }else if(ptipo == 2){
            this.tipo = 'Utilitário'
            this.velmax = 100
            this.velmin = 25
        }else if(ptipo == 3){
            this.tipo = 'Passeio'
            this.velmax = 160
            this.velmin = 50
        }else{
            this.tipo = 'Militar'
            this.velmax = 180
            this.velmin = 8
        }
    }

    getNome(){
        return this.nome
    }

    getTipo(){
        return this.tipo
    }

    getVelMax(){
        return this.velmax
    }

    getVelMin(){
        return this.velmin
    }

    setNome(nome){
        this.nome = nome
    }

    setTipo(tipo){
        this.tipo = tipo
    }

    setVelMax(velmax){
        this.velmax = velmax
    }

    setVelMin(velmin){
        this.velmin = velmin
    }

    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log(`V.Max: ${this.velmax} `)
        console.log(`V.Min: ${this.velmin} `)
        console.log('---------------')
    }
}

let c1 = new Carro('Golf GTI', 1)
let c2 = new Carro('Honda Civic', 2)
let c3 = new Carro('BMW', 3)
let c4 = new Carro('Mercedes', 4)

// c4.info()
// c2.info()

c1.setNome('Ferrari')
c1.setVelMax(450)

console.log(c1.getNome())
console.log(c1.getVelMax())

let pessoas = []

const btn_add = document.querySelector('#btn_add');
const res = document.querySelector('.res');
