import { Cxmsg } from "./cxmsg2";

const callback_ok = () =>{}

    // this.cor = config.cor;
    // this.tipo = config.tipo;
    // this.textos = config.textos
    // this.comando_sn = ()=>{config.comando_sn()};

const callback_naook = () =>{
    const config = {
        cor:"#800",
        tipo:'OK',
        textos:null,
        comando_sn: null,
        }
        Cxmsg.mostrar(config, "Erro", "Login não efetuado! Usuário ou senha incorretos.");
}

Login.login(callback_ok,callback_naook);