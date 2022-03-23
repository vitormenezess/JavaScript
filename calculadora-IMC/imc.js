function calcular() {
  const altura = document.getElementById("altura").value;
  const peso = document.getElementById("peso").value;
  let resultado = document.querySelector(".resultado");
  if (altura != '' && peso != '') {
    let imc = peso / (altura * altura);
    resultado.innerHTML = `Seu IMC é: ${imc.toFixed(1)}`;    
  }else{
    resultado.textContent = 'Preencha os campos corretamente!!!'
  }

}
