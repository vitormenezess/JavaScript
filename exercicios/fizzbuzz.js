const resultado = fizzBuzz(false4);
console.log(resultado);

function fizzBuzz(entrada) {
  let resposta = "";
  if (typeof entrada != "number") {
    resposta = "Não é um número";
  } else {
    if (entrada % 3 === 0) {
      resposta = "Fizz";
    }
    if (entrada % 5 === 0) {
      resposta += "Buzz";
    } else {
      resposta = entrada;
    }
  }
  return resposta;
}
