let pagActual = 0;
let btnAnteriorTlfn = document.querySelector(".flecha-telefono-antes")
let btnDespuesTlfn = document.querySelector(".flecha-telefono-despues")

let btnAnteriorPc = document.querySelector(".flecha-pc-antes")
let btnDespuesPc = document.querySelector(".flecha-pc-despues")


function mostrarPag(index) {
  let pagTlfn = document.querySelectorAll('.pag-telefono');
  let pagPc = document.querySelectorAll(".pag-pc")
  
  if(index >= pagTlfn.length) pagActual = 0;
  if(index < 0) pagActual = pagTlfn.length - 1;
  for(let i = 0; i < pagTlfn.length; i++) {
    pagTlfn[i].classList.add("none");
    pagPc[i].classList.add("none");
  }

  pagTlfn[pagActual].classList.remove("none");
  pagTlfn[pagActual].setAttribute("className", "none");

  pagPc[pagActual].classList.remove("none");
  pagPc[pagActual].setAttribute("className", "none");

}

mostrarPag(pagActual);

btnAnteriorTlfn.addEventListener('click', ()=> {
  mostrarPag(--pagActual)
})

btnDespuesTlfn.addEventListener('click', ()=> {
  mostrarPag(++pagActual)
})

btnAnteriorPc.addEventListener('click', ()=> {
  mostrarPag(--pagActual)
})

btnDespuesPc.addEventListener('click', ()=> {
  mostrarPag(++pagActual)
})


setInterval(()=> {
  mostrarPag(++pagActual)
}, 10000)