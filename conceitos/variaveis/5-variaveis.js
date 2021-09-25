const name = 'Carlos';

// Não podemos alterar o valor
//name = 'Carlos';

const user ={
    name: 'Carlos'
};

// Mas se for um objeto, podemos trocar suas propriedades
user.name = 'Outro nome';

//Não podemos fazer o objeto "apontar" para outro lugar
//user ={
//    name: 'Guilherme'
//};

const persons = ['Carlos', 'Américo', 'Vera'];

//Podemos adicionar novos itens
persons.push('Carla');

//Podemos remover algum item
persons.shift();

//Podemos alterar diretamente
persons[1] = 'Vera';

console.log('\nArray após as alterações: ', persons);

