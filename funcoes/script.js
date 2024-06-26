// MAP

const list1 = [1, 2, 3, 4];
const list2 = [];
const nomes = ["MARIA", "JOAO", "ANABELA"];

function dobro(x) {
  return x * 2;
}

function triplo(x) {
  return x * 3;
}

const m1 = list1.map(dobro);
const m2 = list1.map(triplo);
const m3 = list1.map((x) => x * 4);

console.log(m1);
console.log(m2);
console.log(m3);

// FILTER

function par(x) {
  return x % 2 == 0;
}

const f1 = list1.filter(par);
const f2 = m1.filter((x) => x % 2 == 0);

console.log(f1);
console.log(f2);

// REDUCE

function soma(x, y) {
  return x + y;
}

function produto(x, y) {
  return x * y;
}

const r1 = list1.reduce(soma);
const r2 = list2.reduce(soma, 0);
const r3 = list1.reduce(produto, 1);

console.log(r1);
console.log(r2);
console.log(r3);

// SORT

function comparaPorTamanho(s1, s2) {
  return s1.length - s2.length;
}

const s1 = nomes.sort();
console.log(s1);

const s2 = nomes.sort(comparaPorTamanho);
console.log(s2);
