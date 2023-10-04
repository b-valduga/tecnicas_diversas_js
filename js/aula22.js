/*
this nome é como se fosse uma variavel declarada para a função aluno q recebe o valor do parametro nome
*/
function aluno(nome, nota){
    this.nome = nome //this.nome faz referência ao parametro nome   this.nome é o atributo
    this.nota = nota

    this.dados_anonimo = function(){
        setTimeout(function(){
            console.log(this.nome);
            console.log(this.nota);
        },2000) //não funciona
    }

    this.dados_arrow = function(){
        setTimeout(() =>{
            console.log(this.nome);
            console.log(this.nota);
        },2000) //funciona por causa da arrow function
    }
}

const al1 = new aluno('Bruno', 100);
al1.dados_anonimo();
al1.dados_arrow();

