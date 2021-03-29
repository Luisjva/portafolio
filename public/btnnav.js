let navBtn = document.querySelector(".nav__btn");
let navBtn1 = document.querySelector(".nav__btn__1");
let navBtn2 = document.querySelector(".nav__btn__2");
let navBtn3 = document.querySelector(".nav__btn__3");
let navPages = document.querySelector(".nav__pages");

function clickBtnNav() {
  navBtn1.classList.toggle("nav__btn__1__x");
  navBtn2.classList.toggle("nav__btn__2__x");
  navBtn3.classList.toggle("nav__btn__3__x");
  navPages.classList.toggle("pages-none")
}
navBtn.addEventListener('click', clickBtnNav);