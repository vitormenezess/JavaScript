function verificar() {
  var data = new Date();
  var ano = data.getFullYear();

  var nasc = document.querySelector("input#nascimento");
  var sexo = document.getElementsByName("radsex");
  var res = document.querySelector("div#res");

  if (nasc.value.length == 0 || nasc.value > ano) {
    alert("[ERRO] verifique os dados e tente novamente!");
  } else {
    var genero = "";
    var idade = ano - nasc.value;

    //DINAMICAMENTE
    var img = document.createElement("img");
    img.setAttribute("id", "foto");

    //pelo HTML
    //var img = document.getElementById("imagem");

    if (sexo[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        img.setAttribute("src", "imagens/menino10.jpg");
        //img.src = "imagens/menino10.jpg";
      } else if (idade >= 10 && idade < 20) {
        img.setAttribute("src", "imagens/menino18.jpg");
        //img.src = "imagens/menino18.jpg";
      } else {
        img.setAttribute("src", "imagens/adulto.jpg");
      }
    } else if (sexo[1].checked) {
      genero = "Mulher";
      if(idade >= 0 && idade < 10) {
        img.setAttribute("src", "imagens/menina10.jpg");
      } else if (idade >= 10 && idade < 20) {
        img.setAttribute("src", "imagens/menina18.jpg");
      } else {
        img.setAttribute("src", "imagens/adulta.jpg");
      }
    }
    res.style.textAlingn = "center";
    res.innerHTML = `Detectamos ${genero} com idade: ${idade}<br>`;
    res.append(img);
  }
}
