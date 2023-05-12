
let hotel = {
  "name": "Example Hotel",
  "street": "123 Example St",
  "city": "Exampleville",
  "state": "EX",
  "zip": "12345",
  "country": "Exampleland"

}

// Array destructuring

var items = [2, 3, 5, 6]

// assing variable

// const x = items[0]
// const y = items[1]
// const z = items[2]
// const d = items[3]
// console.log(x,y,z,d)

// with de-strucutre

let [a, b, c, e] = items

let [l, ,m,n] = items // want to skip then we have to write // 2 5 6

// swaping with de-structure


console.log(l,m,n)

let arr = [1, 2];

[arr[0], arr[1]] = [arr[1], arr[0]];

console.log(arr); // Output: [2, 1]


// De-structuring of nested array

const nestedArray = [1, 2, [3, 4]];

const [first, second, [third, fourth]] = nestedArray;

console.log(first);  // Output: 1
console.log(second); // Output: 2
console.log(third);  // Output: 3
console.log(fourth); // Output: 4



// Desturcturing of nested object

const nestedObject = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zip: '12345'
  }
};

const { name, age, address: { street, city, state, zip } } = nestedObject;

console.log(name);    // Output: "John"
console.log(age);     // Output: 30
console.log(street);  // Output: "123 Main St"
console.log(city);    // Output: "Anytown"
console.log(state);   // Output: "CA"
console.log(zip);     // Output: "12345"
