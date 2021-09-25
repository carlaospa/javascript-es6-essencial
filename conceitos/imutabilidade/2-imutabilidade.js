const students = [
    {
        name: 'Carlos',
        grade: 7
    },
    {
        name: 'Gigante',
        grade: 4
    },
    {
        name: 'Luck',
        grade: 10
    }
];


function getApprovedStudents(studentsList){
    return studentsList.filter(student => student.grade >= 7);
}

console.log('Alunos aprovados');
console.log(getApprovedStudents(students));

console.log('\nLista de alunos:')
console.log(students);