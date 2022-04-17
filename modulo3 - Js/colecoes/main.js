//criar a funcao getAdmin, que recebe um map e disponibiliza apenas os usuarios administradores
function getAdmins(map) {
  let admins = [];
  //aplicar o for em [key, value] faz o loop interar em ambos os valores de cada entrada, depois aplicar o if para comparação das 'values'
  for ([key, value] of map) {
    if (value === "Admin") {
      admins.push(key);
    }
  }
  return admins;
}

const usuarios = new Map();

usuarios.set("luiz", "Admin");
usuarios.set("aaaaa", "Admin");
usuarios.set("bbbbb", "user");
usuarios.set("cccccccc", "Admin");

console.log(getAdmins(usuarios));


//retirar os valores repetidos do set
const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5]
function valoresUnicos (arr) {
  const mySet = new Set(arr)
  //deve-se aplicar o spreed operator para retorno do array da forma correta (inteligente)
  return [...mySet]
}
console.log(valoresUnicos(meuArray))