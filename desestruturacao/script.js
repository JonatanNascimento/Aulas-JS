const obj = {
  id: 53,
  date: "2021-10-20",
  items: [
    {
      description: "Celular",
      price: 1499.99,
      quantity: 1,
    },
    {
      description: "Mouse",
      price: 100.0,
      quantity: 2,
    },
  ],
  client: {
    name: "Maria Red",
    email: "maria@gmail.com",
    active: true,
  },
};

const { id, items } = obj;

console.log(id);
console.log(items);

function subTotal({ price, quantity }) {
  return price * quantity;
}
console.log(subTotal(obj.items[1]));

function total({ items }) {
  let soma = 0;
  for (let i = 0; i < items.length; i++) {
    soma = soma + subTotal(items[i]);
  }
  return soma;
}

console.log(total(obj));
