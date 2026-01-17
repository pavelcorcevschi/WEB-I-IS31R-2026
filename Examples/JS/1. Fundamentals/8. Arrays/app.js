const n1 = 1;
const n2 = 2
const n3 = 3;
const n4 = 4;
const n5 = 5;

const sum = n1 + n2 + n3 + n4 + n5;
console.log('Sum =', sum);

const numbers = [1, 2, 3, 4, 5, 'a', true];
console.log('Numbers =', numbers);
console.log('Sum of numbers =', numbers.reduce((acc, val) => acc + val, 0));


const person = [
    "Ion",
    "Creangă",
    "Stefan",
    1837,
    1889,
    "Romanian writer",
    "+373 22 123456",
    "ion.creanga@domain.md"
]

console.log('Person =', person);
console.log('Person died at age =', person[3] - person[2]);