console.log(verificarVelocidade(50));

function verificarVelocidade(n,) {
  if (typeof n == "number") {
    if (n <= 70) return "velocidade OK!";
    else {
      let pontos = n - 70;
      pontos /= 5;
      if (pontos <= 12) {
        return `você perdeu ${Math.floor(pontos)} pontos na carteira`;
      } else {
        return `Carteira Suspensa`;
      }
    }
  } else {
    return "valor inválido";
  }
}
