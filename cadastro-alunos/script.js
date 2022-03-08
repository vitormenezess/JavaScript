let nome = document.getElementById("txtnome");
let sexo = document.getElementsByName("txtsexo");
let nascimento = document.getElementById("txtdata");
let cpf = document.getElementById("txtcpf");
let curso = document.getElementById("cursos");

let resposta = document.getElementById("resposta");

function cadastrar() {
  if (sexo[0].checked) {
    resposta.style.background = "#00ffff5d";
  } else {
    resposta.style.background = "#ff008c5d";
  }
  resposta.innerHTML = `Nome: ${nome.value}<br>`;
  resposta.innerHTML += `sexo: ${
    sexo[0].checked ? "Masculino" : "Feminino"
  }<br>`;
  resposta.innerHTML += `Data de Nascimento: ${nascimento.value}<br>`;
  resposta.innerHTML += `Cpf: ${cpf.value}<br>`;
  resposta.innerHTML += `Curso: ${curso.options[curso.selectedIndex].text}`;
  nome.value = "";
  nascimento.value = "";
  cpf.value = "";
  curso.selectedIndex = 0
}
