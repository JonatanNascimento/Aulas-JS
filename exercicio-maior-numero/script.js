const dados = document
  .getElementById("dados")
  .innerHTML.split("\n")
  .map((x) => Number(x));

let maior = dados[1];
for (let i = 1; i < dados.length; i++) {
  if (dados[i] > maior) {
    maior = dados[i];
  }
}
console.log(maior);
