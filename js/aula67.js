const olhos = [...document.getElementsByClassName('olho')];

let posx_mouse = 0;
let posy_mouse = 0;

window.addEventListener('mousemove', (evt) =>{
    posx_mouse = evt.clientX; //retorna a posição x do mouse
    posy_mouse = evt.clientY; //retorna a posição y do mouse

    const rot = Math.atan2(posy_mouse, posx_mouse) * 180 / Math.PI; //converte radiano para graus

    olhos.forEach((o) =>{
        o.style.transform = "rotate("+rot+"deg)";
    })
})  

// olhos[0].style.transform = "rotate("+90+"deg)"
