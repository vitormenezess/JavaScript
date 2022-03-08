console.log(somar(10));

function somar(limite) {
  let total = 0;
  for (let index = 3; index <= limite; index += 3) {
    total += index;
  }
  for (let index = 5; index <= limite; index += 5) {
    total += index;
  }
  return total;
}
