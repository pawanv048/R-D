# JavaScript Syntax Transformers(ES6)

### Arrow function:

- An arrow function is a shorthand syntax for creating functions in JavaScript.
It uses the => syntax and automatically binds the this value,
making it especially useful in cases where you want to preserve the outer context.


```javascript
// Traditional function expression
const multiply = function(x, y) {
    return x * y;
};

// Arrow function equivalent
const multiplyArrow = (x, y) => x * y;

console.log(multiply(2, 3));          // Output: 6
console.log(multiplyArrow(2, 3));     // Output: 6
```


### Block scoping:

- Block scoping restricts the visibility and accessibility of variables to the block in which they are defined.
  This is in contrast to variables defined with var, which have function or global scope.

```javascript
// Using let inside a loop for block scoping
for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i); // Outputs 0, 1, 2 (due to block scope)
    }, 100);
}

// With var, the output would be 3, 3, 3 (due to function scope)
for (var j = 0; j < 3; j++) {
    setTimeout(() => {
        console.log(j);
    }, 100);
}
```


### Call spread: 

- Call spread involves using the spread operator (...) to unpack the elements of an array or properties of an object,
 and then passing those unpacked values as separate arguments to a function.

```javascript
// Using call spread with an array
const numbers = [2, 4, 6, 8];
const maxNumber = Math.max(...numbers); // Equivalent to Math.max(2, 4, 6, 8)
console.log(maxNumber); // Output: 8

// Using call spread with function arguments
function displayInfo(name, age) {
    console.log(`Name: ${name}, Age: ${age}`);
}

const person = ['Alice', 30];
displayInfo(...person); // Equivalent to displayInfo('Alice', 30)

```
- Spread with objects (Shallow copy):
- You can also use spread to create a shallow copy of an object or combine properties from multiple objects into a new object.

```javascript
// Using spread to create a shallow copy of an object
const originalObj = { a: 1, b: 2 };
const copyObj = { ...originalObj };

// Combining properties from multiple objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3 };
const combinedObj = { ...obj1, ...obj2 }; // { a: 1, b: 2, c: 3 }
```
