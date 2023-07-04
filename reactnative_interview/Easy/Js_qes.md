# Easy question related to javascript

## How arrow function is different from the normal function?

Arrow functions and normal functions in JavaScript have some differences in syntax.
+ Normal Function: Requires an explicit return statement to return a value.
+ Arrow Function: If the function body consists of a single expression, it is implicitly returned.

## What is spread operator in javascript?

spread operator is often used to manipulate and merge arrays or objects.
+ Copying an array
+ Merging arrays
+ Copying an object
+ Merging objects

## what is the difference between let var and const?

**Declaration and Initialization**

+ var: Variables declared with var are hoisted to the top of their scope and are initialized with the value undefined. 
This means you can access var variables before they are declared, but they will have the value undefined.
+ let: Variables declared with let are also hoisted to the top of their scope, but they are not initialized automatically.
They remain in the "temporal dead zone" until they are explicitly assigned a value, meaning you cannot access them before they are declared.
+ const: Variables declared with const are also hoisted but must be initialized with a value at the time of declaration. Once a value is assigned, it cannot be changed

**Block Scoping**

+ var: Variables declared with var have function scope or global scope if declared outside any function. 
This means they are accessible throughout the whole function where they are declared.

+ let and const: Variables declared with let and const have block scope.
  They are only accessible within the block they are declared in, such as inside loops, if statements, or function blocks.

**Reassignment**

+ var and let: Variables declared with var or let can be reassigned new values.
+ const: Variables declared with const cannot be reassigned once they are initialized.

## what is primitive and non primitive data type?



