// AULA 1

// const ativar = document.querySelector(".ativar");

// function ativarAoClick() {
//   console.log("Clicou em:", ativar);
// }

// ativar.addEventListener("click", ativarAoClick);

// console.log(ativar);

// AULA 2

// const botao = document.querySelector(".botao");
// function mostrar() {
//   const texto = document.querySelector(".texto");
//   texto.classList.toggle("ativar");
// }
// botao.addEventListener("click", mostrar);

// function seguirMouse(event) {
//   const x = event.x;
//   const y = event.y;
//   const circulo = document.querySelector("#circulo");
//   circulo.style.top = y + "px";
//   circulo.style.left = x + "px";
// }
// window.addEventListener("mousemove", seguirMouse);

// Otimização
const circulo = document.querySelector("#circulo");

function seguirMouse(event) {
  circulo.style.top = event.y + "px";
  circulo.style.left = event.x + "px";
}
window.addEventListener("mousemove", seguirMouse);
