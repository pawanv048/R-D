# JavaScript Syntax Transformers

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

