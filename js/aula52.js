/*Objetos Literais: Todos apontam para o mesmo lugar. Todos atualizam para o mesmo objeto
Se eu criar vários objetos da mesma classe, todos vão apontar para o mesmo endereço de memória
*/

const Pessoa = {
    nome: 'Bruno', //propriedade nome para o objeto pessoa com o nome Bruno
    idade,
    getNome: function(){
        return this.nome
    },
    getIdade: function(){
        return this.idade
    },
    setNome: function(nome){
        this.nome = nome
    },
    setIdade: function(idade){
        this.idade = idade
    }
}
const p2 = Pessoa
const p3 = Pessoa

p3.nome = 'João'
p2['nome'] = 'Maria'
Pessoa.setNome('Lucas')

console.log(Pessoa.nome);
console.log(p2.getNome());
console.log(p3.nome);