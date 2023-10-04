class Cxmsg{
    static cor = '#888';
    static destino = null; //o destino é o body
    static divmsg = null;

    static config = (config) =>{
        this.cor = config.cor
    } 

    static mostrar = (titulo, texto) =>{ //método 
        this.destino = document.body
        this.titulo = titulo;
        this.texto = texto;
        this.divmsg = document.createElement('div');
        const estilo_divmsg = //área toda da msg geral
            "display: flex;"+
            "justify-content: center;"+
            "align-items: center;"+
            "position: absolute;"+ //eu quero pocisionar no 0px 0px
            "top: 0px;"+
            "left: 0px;"+
            "width: 100%;"+
            "height: 100vh;"+ //toda área da janela
            "background-color: rgba(0,0,0,0.7);" //opacidade de 70%
        this.divmsg.setAttribute('id', "divmsg");
        this.divmsg.setAttribute('style', estilo_divmsg);
        this.destino.prepend(this.divmsg); //prepend será adcc no topo

        const estilo_areaCxmsg = 
        "display: flex;"+
        "justify-content: flex-start;"+ //começa no início
        "align-items: flex-start;"+
        "flex-direction: column;"+
        "width: 300px;"
        const areaCxmsg = document.createElement('div');
        areaCxmsg.setAttribute('style', estilo_areaCxmsg);
        this.divmsg.appendChild(areaCxmsg);

        const estilo_tituloCxmsg = 
        "display: flex;"+
        "justify-content: flex-start;"+
        "align-items: center;"+
        "width: 100%;"+
        "background-color:"+this.cor+";"+
        "color: #fff;"+
        "padding: 5px;"+
        "border-radius: 5px 5px 0px 0px"
        const tituloCxmsg = document.createElement('div');
        tituloCxmsg.setAttribute('style', estilo_tituloCxmsg);
        tituloCxmsg.innerHTML = this.titulo;
        areaCxmsg.appendChild(tituloCxmsg);

        const estilo_corpoCxmsg = 
        "display: flex;"+
        "justify-content: flex-start;"+
        "align-items: center;"+
        "width: 100%;"+
        "background-color: #eee;"+
        "color: #000;"+
        "padding: 30px 5px;"
        const corpoCxmsg = document.createElement('div');
        corpoCxmsg.setAttribute('style', estilo_corpoCxmsg);
        corpoCxmsg.innerHTML = this.texto;
        areaCxmsg.appendChild(corpoCxmsg);

        const estilo_rodapeCxmsg = 
            "display: flex;"+
            "justify-content: space-around;"+
            "align-items: center;"+
            "width: 100%;"+
            "background-color:#ccc;"+
            "color:#000;"+
            "padding: 5px;"+
            "border-radius: 0px 0px 5px 5px"

        const rodapeCxmsg = document.createElement('div');
        rodapeCxmsg.setAttribute('style', estilo_rodapeCxmsg);
        areaCxmsg.appendChild(rodapeCxmsg);

        const estilo_botaoCxmsg = 
        "background-color:"+this.cor+";"+
        "color: #fff;"+
        "padding: 10px 50px;"+
        "border-radius: 5px;"+
        "cursor: pointer;"+
        "text-transform: uppercase;"
        const btn_ok = document.createElement('button');
        btn_ok.setAttribute('style',estilo_botaoCxmsg);
        btn_ok.innerHTML = 'OK';
        btn_ok.addEventListener('click', (evt) =>{
            this.ocultar()
        })
        rodapeCxmsg.appendChild(btn_ok);
    }   

    static ocultar = () =>{ //método
        this.divmsg.remove();
    }
}

export {Cxmsg}