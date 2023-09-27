//Filtering even numbers:

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6]


//Filtering strings longer than a certain length:
const words = ["apple", "banana", "cherry", "date", "elderberry"];
const longWords = words.filter(word => word.length > 5);
console.log(longWords); // Output: ["banana", "cherry", "elderberry"]


//Filtering objects based on a property value:
const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 },
  { name: "Monitor", price: 200 }
];

const affordableProducts = products.filter(product => product.price < 500);
console.log(affordableProducts);
// Output: [{ name: "Tablet", price: 300 }, { name: "Monitor", price: 200 }]


//Filtering elements based on their index in the array:

const elements = ["a", "b", "c", "d", "e"];
const filteredElements = elements.filter((element, index) => index % 2 === 0);
console.log(filteredElements); // Output: ["a", "c", "e"]


//*******************************//

//Finding the first even number in an array:

const numbers = [1, 3, 5, 4, 7, 8];
const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven); // Output: 4

//Finding the first element with a specific property value in an array of objects:

const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];

const person = people.find(person => person.name === "Bob");
console.log(person); // Output: { name: "Bob", age: 25 }

// Finding the first string that starts with a specific letter in an array of strings:

const words = ["apple", "banana", "cherry", "date", "elderberry"];
const startsWithC = words.find(word => word.startsWith("c"));
console.log(startsWithC); // Output: "cherry"

// Finding the first element that satisfies a custom condition:

const temperatures = [72, 68, 75, 80, 65];
const comfortableTemperature = temperatures.find(temp => temp > 70 && temp < 75);
console.log(comfortableTemperature); // Output: 72

// Finding the first element in an array that is greater than a certain value:

const values = [10, 20, 30, 40, 50];
const greaterThan25 = values.find(value => value > 25);
console.log(greaterThan25); // Output: 30
