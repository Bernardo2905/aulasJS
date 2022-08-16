// const hora = 12;

// if (hora < 12) {
//   document.getElementById("title").innerHTML = "Bom dia"
//   console.log("Bom Dia");
// } else if (hora > 12 && hora < 18) {
//   document.getElementById("title").innerHTML = "Boa Tarde"
//   console.log("Boa Tarde");
// } else if (hora == 12) {
//   document.getElementById("title").innerHTML = "Bom Almoço"
//   console.log("Bom Almoço");
// }


function azul() {
  limpar();
  document.getElementById("title").classList.add("blue");
}

function verde() {
  limpar();
  document.getElementById("title").classList.add("green");
}

function vermelho() {
  limpar();
  document.getElementById("title").classList.add("red");
}

function limpar() {
  document.getElementById("title").classList.remove("blue");
  document.getElementById("title").classList.remove("green");
  document.getElementById("title").classList.remove("red");
}

function phone(e) {
  document.getElementById("phone").style.display = "block";
  e.style.display = "none";
}