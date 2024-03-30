// Tamnaho do array
const valores = ["Maria", 37, false, 1.64];
const t1 = valores.length;
console.log("Teste lenght");
console.log(t1);

console.log(" ");
// Remover elementos
const nomes = ["Maria", "João", "Ana", "Marcos"];
const r1 = nomes.pop();
const r2 = nomes.shift();
console.log("Teste pop e shift");
console.log(r1);
console.log(r2);
console.log(nomes);

console.log(" ");
// Inserir elementos
const alturas = [1.65, 1.82, 1.7];
alturas.push(1.75);
alturas.unshift(1.58);
console.log("Teste push e unshift");
console.log(alturas);

console.log(" ");
// Inserir e remover geral
const letras = ["A", "B", "C", "D", "E", "F"];
letras.splice(2, 3, "x", "y");
console.log("Teste splice");
console.log(letras);

console.log(" ");
// Concatenar arrays
const meninas = ["Maria", "Ana"];
const meninos = ["João", "Marcos"];
const todos = meninas.concat(meninos);
console.log("Teste concat");
console.log(todos);

console.log(" ");
// Acesso e atribuição
const idades = [20, 30, 40, 50];
idades[1] = 35;
console.log("Teste acesso e atribuição");
console.log(idades);

console.log(" ");
// Percorrer array
const frutas = ["Banana", "Laranja", "Uva"];
console.log("Teste precorrer array");
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

console.log(" ");
// Percorrer array
console.log("Teste percorrer array com forEach");
frutas.forEach((item) => {
  console.log(item);
});
