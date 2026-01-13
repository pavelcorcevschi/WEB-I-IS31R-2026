const numbers = [1, 2, 3, -5, 4, 5, 100, -13, 3.14, 2.71];

let sumUsingFor = 0;
for (let i = 0; i < numbers.length; i++) {
    sumUsingFor += numbers[i];
}

const sum = numbers.reduce((sum, currentValue) => sum + currentValue, 0);

let multiplyUsingFor = 1;
for (let i = 0; i < numbers.length; i++) {
    multiplyUsingFor *= numbers[i];
}
console.log('multiplyUsingFor =', multiplyUsingFor);

const multiply = numbers.reduce((product, currentValue) => product * currentValue, 1);

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] < 0) {
        console.log('Found negative number:', numbers[i]);
    }
}

const negativeNumbers = numbers.filter(number => number < 0);
console.log('negativeNumbers =', negativeNumbers);


for(let i = 0; i < numbers.length; i++) {
    const squared = numbers[i] * numbers[i];
    console.log('squared =', squared);
}

const squaredNumbers = numbers.map(number => number * number);
console.log('squaredNumbers =', squaredNumbers);

const monthlyTemperaturesCelsius = [0, 2, 5, 10, 15, 20, 25, 24, 20, 15, 10, 5];
const summerTemperaturesCelsius = monthlyTemperaturesCelsius.slice(5, 8);
console.log('summerTemperaturesCelsius =', summerTemperaturesCelsius);

const salaries = [3000, 4000, 5000, 6000, 7000];
console.log('Original salaries =', salaries);

const updatedSalaries = salaries.splice(2, 1, 1111, 2222, 3333);
console.log('Updated salaries =', salaries);

const fisrtArray = [1, 2, 3];
const secondArray = [4, 5, 6];
const combinedArray = fisrtArray.concat(secondArray);
console.log('combinedArray =', combinedArray);

const sentence = "Hello world! Welcome to JavaScript array methods.";
const words = sentence.split(" ");
const reversedWords = words.reverse();
const reversedSentence = reversedWords.join("_");
console.log('reversedSentence =', reversedSentence);






