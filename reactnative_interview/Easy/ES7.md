# ECMAScript 2016 (ES7)

### Exponentiation Operator:

* The exponentiation operator (**) in JavaScript is used to raise a number to a specified power. <br>It provides a concise way to perform exponentiation without having to use the Math.pow() method or other workarounds.

```javascript
const base = 2;
const exponent = 3;

const result = base ** exponent; // 2^3 = 8

console.log(result); // Output: 8

```

# ECMAScript 2017 (ES8)

* Async functions are special types of functions that allow you to work with asynchronous operations using a more synchronous-like syntax.<br> They return a promise, enabling the use of the await keyword to pause the execution of the function until a promise is resolved.

```javascript
// Basic async function example
async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return data;
}

// Using the async function
fetchData()
  .then(result => console.log(result))
  .catch(error => console.error(error));

```


### Function Trailing Comma:

* Function trailing commas, also known as trailing comma syntax, allow you to place a comma after the last parameter of a function declaration or function call. <br>This syntax is allowed in JavaScript and some other programming languages, and it can help improve code maintainability when adding, removing, or rearranging parameters.

```javascript
function printNames(firstName, lastName,) {
  console.log(`First Name: ${firstName}, Last Name: ${lastName}`);
}

printNames("Alice", "Johnson",);
printNames("Bob", "Smith");

```

# ECMAScript 2018 (ES9)

- Object spread syntax is a feature in JavaScript that allows you to create a shallow copy of an object with additional properties or overwrite existing properties.<br> It provides a concise way to manipulate objects while avoiding mutations to the original object.

```javascript
const person = { firstName: "Alice", age: 30 };

// Creating a new object with additional properties
const updatedPerson = { ...person, lastName: "Johnson", age: 31 };

console.log(updatedPerson);
// Output: { firstName: "Alice", age: 31, lastName: "Johnson" }

```


