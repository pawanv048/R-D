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

```
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
