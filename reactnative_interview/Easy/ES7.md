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

### Object Spread:

- Object spread syntax is a feature in JavaScript that allows you to create a shallow copy of an object with additional properties or overwrite existing properties.<br> It provides a concise way to manipulate objects while avoiding mutations to the original object.

```javascript
const person = { firstName: "Alice", age: 30 };

// Creating a new object with additional properties
const updatedPerson = { ...person, lastName: "Johnson", age: 31 };

console.log(updatedPerson);
// Output: { firstName: "Alice", age: 31, lastName: "Johnson" }

```

# ECMAScript 2019 (ES10)

### Optional Catch Binding:

- It allows you to omit the parameter in a catch block, making it more concise when you don't need to access the caught error object. <br>This feature enhances code readability and reduces unnecessary variable declarations.

```javascript
try {
  // code that might throw an error
} catch (error) {
  console.error("An error occurred:", error);
}

```

* Throwing Custom Error Objects:

```
function divide(x, y) {
  if (y === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return x / y;
}

try {
  const result = divide(10, 0);
  console.log(result);
} catch (error) {
  console.error("An error occurred:", error.message);
}

```

# ECMAScript 2020 (ES11):


### Dynamic imports:

- Dynamic imports in JavaScript allow you to load modules or scripts asynchronously on-demand, rather than including them at the beginning of your code.  <br>This feature is especially useful for optimizing performance by loading only the code that's needed, reducing initial loading times.

```javascript
// Dynamically importing a module
import('./math.js')
  .then(mathModule => {
    console.log(mathModule.add(5, 3)); // Output: 8
  })
  .catch(error => {
    console.error("Error loading module:", error);
  });

async function loadModule() {
  try {
    const mathModule = await import('./math.js');
    console.log(mathModule.add(5, 3)); // Output: 8
  } catch (error) {
    console.error("Error loading module:", error);
  }
}

loadModule();

or

const package = await import('package'); package.function()

```

### Nullish Coalescing Operator: (??)

```javascript
const foo = object.foo ?? 'default';
```

### Optional Chaining: (?)

```javascript
const name = obj.user?.name;
```


__Array.from()__

* The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object

```
console.log(Array.from('foo'));
// Expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], (x) => x + x));
// Expected output: Array [2, 4, 6]

```

__setTimeout and clearTimeout__

* setTimeout: Schedules a function to be executed after a specified delay (in milliseconds).
* clearTimeout: Cancels a previously scheduled timeout.


```javascript
const timeoutId = setTimeout(() => {
  console.log("Timeout complete");
}, 1000);

clearTimeout(timeoutId); // Cancel the timeout

```

**setInterval and clearInterval**

* setInterval: Repeatedly schedules a function to be executed at a fixed time interval.
* clearInterval: Cancels a previously scheduled interval.

```javascript
const intervalId = setInterval(() => {
  console.log("Interval fired");
}, 1000);

clearInterval(intervalId); // Cancel the interval

```

**setImmediate and clearImmediate:**

* setImmediate: Schedules a function to be executed immediately after the current event loop iteration completes.
* clearImmediate: Cancels a previously scheduled immediate callback.


```javascript
const immediateId = setImmediate(() => {
  console.log("Immediate callback");
});

clearImmediate(immediateId); // Cancel the immediate callback

```

**requestAnimationFrame and cancelAnimationFrame**

* requestAnimationFrame: Schedules a function to be executed before the browser performs the next repaint.
* cancelAnimationFrame: Cancels a previously scheduled animation frame callback.

```
const animationFrameId = requestAnimationFrame(() => {
  console.log("AnimationFrame callback");
});

cancelAnimationFrame(animationFrameId); // Cancel the animation frame callback

```


# Hosting:

* Hoisting in JavaScript means that functions and variables can be used before they are declared.

```
console.log(myVariable); // undefined
var myVariable = 10;

greet(); // "Hello, world!"
function greet() {
  console.log("Hello, world!");
}


const greet = function() {
  console.log("Hello, world!");
};

greet(); // "Hello, world!"

```
