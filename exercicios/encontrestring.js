const filme = {
  titulo: "Vinagadores",
  ano: 2018,
  diretor: "Robin",
  personagem: "Thor",
};
exibirPropriedades(filme);

function exibirPropriedades(obj) {
  for (const key in obj) {
    const element = obj[key];
    if (typeof element == "string") {
      console.log(key,':',element);
    }
  }
}
