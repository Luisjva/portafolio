let btnTelefono = document.querySelector(".vistas__telefono");
let btnPc = document.querySelector(".vistas__pc");
let sliderTelefono = document.querySelector(".slider-contenedor-telefono");
let sliderPc = document.querySelector(".slider-contenedor-pc")
let sliderContenedor = document.querySelector(".slider-contenedor")

btnPc.addEventListener("click", ()=> {
  btnPc.disabled = true;
  btnTelefono.disabled = false;
  btnTelefono.classList.remove("vista-btn--activo");
  btnPc.classList.add("vista-btn--activo");
  sliderTelefono.classList.add("slider-contenedor--cerrado");
  sliderContenedor.classList.add("slider-contenedor--pc");
  sliderPc.classList.remove("slider-contenedor--cerrado");
})

btnTelefono.addEventListener("click", ()=> {
  btnTelefono.disabled = true;
  btnPc.disabled = false;
  btnPc.classList.remove("vista-btn--activo");
  btnTelefono.classList.add("vista-btn--activo");
  sliderTelefono.classList.remove("slider-contenedor--cerrado");
  sliderContenedor.classList.remove("slider-contenedor--pc");
  sliderPc.classList.add("slider-contenedor--cerrado")
})