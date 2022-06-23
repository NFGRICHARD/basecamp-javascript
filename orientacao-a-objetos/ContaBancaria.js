/*Nesta atividade, vamos testar os conceitos de Orientação a Objetos simulando a criação de diversos tipos de contas bancárias e operações disponíveis em cada uma.

ok Crie a classe ContaBancaria, que possui os parâmetros agencia, numero, tipo e saldo;
ok Dentro de ContaBancaria, construa o getter e o setter de saldo;
od Dentro de ContaBancaria, crie os métodos sacar e depositar;
ok Crie uma classe-filha chamada ContaCorrente que herda todos esses parâmetros e ainda possua o parâmetro  cartaoCredito;
ok Ainda em ContaCorrente, construa o getter e o setter de cartaoCredito;
ok Ainda em ContaCorrente, faça com que o tipo seja 'conta corrente' por padrão;
ok Crie uma classe-filha chamada ContaPoupanca que herda todos os parâmetros de ContaBancaria;
ok Crie uma classe-filha chamada ContaUniversitaria que herda todos os parâmetros de ContaBancaria;
okFaça com que o método saque de ContaUniversitaria apenas seja capaz de sacar valores menores que 500 reais.*/

class ContaBancaria {
    constructor (agencia, numero, tipo){
        this.agencia = agencia
        this.numero = numero
        this.tipo = tipo
        this._saldo = 0   
    }
    set saldo(saldoDaConta){
        this._saldo = saldoDaConta
    }
    get saldo(){
        return this._saldo
    }
    sacar(valorDeSaque){
        if(valorDeSaque > this._saldo){
            return  'Saldo insuficiente'
        }
        this._saldo = this._saldo - valorDeSaque
        return this._saldo
    }
    deposito(deposito){
        this._saldo = this._saldo - deposito
        return this._saldo
    }

}

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero)
        this.tipo = 'Conta corrente'
        this.cartaoCredito = cartaoCredito
    }
    set cartaoCredito(valor){
        this._cartaoCredito = valor
    }
    get cartaoCredito(){
        return this._cartaoCredito
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero)
        this.tipo = 'Conta Poupaca'
    }

}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero, tipo){
        super(agencia, numero, tipo)
    }
    sacar(sacarDeConta){
        if(sacarDeConta > 500){
            return 'Operação negada!'
        }
        this._saldo = this._saldo - sacarDeConta
        return this._saldo
    }
}
