class Pessoa{
    constructor(name){
        this.name = name;
    }
}

class PessoaFisica extends Pessoa{
    constructor(name, cpf){
        super(name);
        this.cpf = cpf;
    }
}

const pessoa = new PessoaFisica("Carlos Alberto", "07011154758");
console.log(pessoa);