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
