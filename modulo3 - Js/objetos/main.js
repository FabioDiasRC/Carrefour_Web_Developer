class ContaBancaria {
  constructor(agencia, numero, tipo) {
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this.saldo = 0
  }

  get saldo() {
    return this._saldo;
  }

  set saldo(value) {
    this._saldo = value;
  }

  sacar(value) {
    if (value > this._saldo) {
      return "operação negada, saldo insuficiente";
    }
    this._saldo = this._saldo - value;
    return this._saldo;
  }

  depositar(value) {
    this._saldo = this._saldo + value;
    return this._saldo;
  }
}

class ContaCorrente extends ContaBancaria {
  constructor(agencia, numero, cartaoCredito) {
    super(agencia, numero); //seta as propriedades da classe pai
    this.tipo = "corrente";
    this.cartaoCredito = cartaoCredito;
  }

  get cartaoCredito() {
    return this._cartaoCredito;
  }

  set cartaoCredito(value) {
    this._cartaoCredito = value;
  }
}

class ContaPoupanca extends ContaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero); //seta as propriedades da classe pai
    this.tipo = "poupanca";
  }
}

class ContaUniversitaria extends ContaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero); //seta as propriedades da classe pai
    this.tipo = "universitaria";
  }

  sacar(value) {
    if (valor > 500) {
      return "operação negada";
    }
    this._saldo = this_saldo - value;
  }
}

ContaBancaria.saldo = 5;
console.log(ContaBancaria.saldo);
