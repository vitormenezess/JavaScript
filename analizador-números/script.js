let numero = document.getElementById("txtnum");
let sel = document.getElementById("sel");
let res = document.getElementById("res");
let valores = [];

function adicionar() {
  if (isNumber(numero.value) && !inlista(numero.value, valores)) {
    valores.push(Number(numero.value));
    let item = document.createElement("option");
    item.text = `Valor ${numero.value} adicionado`;
    sel.appendChild(item);
    res.innerHTML = ''
  } else {
    alert("valor invalido ou já adicionado.");
  }
  numero.value = ''
  numero.focus()
}
function finalizar() {
  if (valores.length == 0) {
    alert("você precisa adicionar valores");
  } else {
    res.innerHTML = `Ao todo você cadastrou: ${valores.length} números<br>`;
    res.innerHTML += `O maoir valor cadastrado foi: ${vMaior(valores)}<br>`;
    res.innerHTML += `O menor valor cadastrado foi: ${Math.min.apply(
      null,
      valores
    )}<br>`;
    res.innerHTML += `A soma dos valores cadastrados foi: ${somar(
      valores
    )}<br>`;
    res.innerHTML += `A media dos valores cadastrados foi: ${
      somar(valores) / valores.length
    }<br>`;
  }
}
function vMaior(l) {
  let maior = l[0];
  for (let index = 0; index < l.length; index++) {
    if (l[index] > maior) {
      maior = l[index];
    }
  }
  return maior;
}
function somar(l) {
  let soma = 0;
  for (let index = 0; index < l.length; index++) {
    soma += l[index];
  }
  return soma;
}

function isNumber(n) {
  if (Number(n) >= 1 && Number(n <= 100)) {
    return true;
  } else {
    return false;
  }
}
function inlista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}
