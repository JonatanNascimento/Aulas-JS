const dados = document
  .getElementById("dados")
  .innerHTML.split("\n")
  .map((x) => Number(x));

const N = dados;
for (let i = 1; i <= 10; i++) {
  const item = i * N;
  console.log(`${N} x ${i} = ${item}`);
}
