const body = document.body;

const estiloTopo = 
    "display: flex;"+
    "justify-content: space-between;"+
    "align-items: center;"+
    "background-color: #00f;"
const topo = document.createElement('div');
topo.setAttribute('id', 'topo');
topo.setAttribute('style', estiloTopo);
body.prepend(topo); //prepend: anexa no início

const estilo_img_logo = "width:200px";
const logo = 
    "<div id='logo' class='logo'>"+
        "<img src='./imagens/rick_morty.jpg' title='Rick and Morty' style='"+estilo_img_logo+"'>"+
    "<div/>"
topo.innerHTML += logo;

const login = 
    "<div id='login' class='login'>"+
        "<p id='matricula'>Matrícula:<span></span></p>"+
        "<p id='nome'>Nome:<span></span></p>"+
    "<div/>"
topo.innerHTML += login;
