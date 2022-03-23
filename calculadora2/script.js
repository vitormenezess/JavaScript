const resultado = document.querySelector(".result");
const confirmar = document.getElementById(".igual");

function insert(valor) {
  resultado.innerHTML += valor;
}
function clean() {
  resultado.innerHTML = " ";
}
function backspace() {
  if (resultado.textContent) {
    let result = document.querySelector(".result").innerHTML;
    resultado.innerHTML = result.substring(0, result.length - 1);
  }
}
function confirm() {
    if(resultado.textContent != 'Erro'){
        document.querySelector('.result').innerHTML = eval(resultado.innerHTML)
    }
    
}
