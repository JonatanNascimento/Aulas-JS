const dados = document
  .getElementById("dados")
  .innerHTML.split("\n")
  .map((x) => Number(x));

console.log(dados);

let soma = 0;
let count = 0;

for (let i = 0; i < dados.length; i++) {
  if (dados[i] > 0) {
    soma = soma + dados[i];
    count = count + 1;
  }
}

if (soma === 0) {
  console.log("IMPOSSIVEL CALCULAR");
} else {
  const media = soma / count;
  console.log(`MEDIA = ${media.toFixed(2)}`);
}
