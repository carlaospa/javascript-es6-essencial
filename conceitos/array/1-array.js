const arr1 = [1, 2, 3];
console.log("arr1 -> " + arr1);

const arr2 = new Array(1, 2, 3);
console.log("arr2 -> " + arr2);

const arr3 = Array.of(1, 2, 3);
console.log("arr3 -> " + arr3);

const persons = Array.of("Carlos", "Américo", "Lúcia");
console.log("persons -> " + persons);

console.log(persons.push("Marluci"));
console.log("persons -> " + persons);

console.log(persons.pop());
console.log("persons -> " + persons);

const arr4 = [1,2,3,4,5];

arr4.forEach((value, index) =>{
    console.log(`${index}: ${value}`);
})

persons.forEach((person, index) => console.log(index, person));




