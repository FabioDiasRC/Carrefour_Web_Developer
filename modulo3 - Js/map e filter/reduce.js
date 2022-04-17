function somaNumeros(arr) {
  return arr.reduce(function (prev, current) {
    return prev + current;
  });
}

const arr = [1, 2, 3, 4, 5];
console.log(somaNumeros(arr));

const lista = [
  {
    name: "sabao",
    preco: 30,
  },
  {
    name: "cereal",
    preco: 10,
  },
  {
    name: "toalha",
    preco: 20,
  },
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
  return lista.reduce(function (prev, current) {
    return prev - current.preco;
  }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel,lista));
