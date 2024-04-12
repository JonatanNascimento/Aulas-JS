const funcionarios = [
  {
    nome: "Maria Silva",
    valorHora: 80.0,
    horasTrabalhadas: 20,
    terceirizado: true,
  },
  {
    nome: "João Rocha",
    valorHora: 60.0,
    horasTrabalhadas: 25,
    terceirizado: false,
  },
  {
    nome: "Tiago James",
    valorHora: 80.0,
    horasTrabalhadas: 10,
    terceirizado: true,
  },
  {
    nome: "Ana Carla",
    valorHora: 70.0,
    horasTrabalhadas: 40,
    terceirizado: true,
  },
  {
    nome: "Pedro Paulo",
    valorHora: 50.0,
    horasTrabalhadas: 25,
    terceirizado: false,
  },
];

function funcionariosTerceirizados(funcionario) {
  return funcionario.terceirizado;
}

const fun = funcionarios.filter(funcionariosTerceirizados);

function custoTotal(funcionarios) {
  let total = 0;
  for (let i = 0; i < funcionarios.length; i++) {
    const subTotal =
      funcionarios[i].valorHora * funcionarios[i].horasTrabalhadas;
    total += subTotal;
  }
  return total;
}

console.log(`Custo total dos funcionários terceirizados: R$${custoTotal(fun)}`);
