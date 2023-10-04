// const c1 = document.getElementById('c1');
//const c1 = document.querySelector('#c1');



// const cursos = [...document.querySelectorAll('.curso')];

// cursos.map((el) =>{
//     el.addEventListener('click', (evt) =>{
//         const el = evt.target;
//         el.classList.add('destaque');
//         console.log(el.innerHTML + ' foi clicado');
//     })
// })


const livro = [...document.querySelectorAll('.curso')];

livro.map((el) =>{
    el.addEventListener('click', (evt) =>{
       const caneta = evt.target;
       caneta.classList.add('destaque');
       console.log(caneta.innerHTML + ' foi clicado');
    })  
})











// const msg = () =>{
//     alert('Olaaa');
// }

// c1.addEventListener('click', () =>{
//     alert('Olaa')
// })

// c1.addEventListener('click', () =>{
//     msg()
// });


// c1.addEventListener('click', (evt) =>{
//     const el = evt.target
//     el.classList.add('destaque');
// })

