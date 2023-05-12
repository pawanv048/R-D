//ES6
// Arrow Function(ES6)


//special form of function expression.
/*
  It allows us to write function more faster because 
  no need to use function keyword.
  no need to use parenthesis() on single parameter
  no need of {} when you return single line of function(), no need of return as well
*/

let invitation = function (name) {
  console.log(`Welcome! ${name} in my home.`);
}

invitation('amit')

// with arrow function 

let invite = name => `Hey ${name} you are invited to my party.`
// console.log(invite('rohit'))

// if there is multi-line in you function then, we have to put return statement

let invited = (name) => {
  return `Hey ${name} you are invited to my party.`
}
console.log(invited('mohit'))


// Spread opeator(unpacking)

// Use cases of the spread operator include:

// Concatenating arrays or objects
// Copying arrays or objects
// Passing arguments to functions
// Creating new arrays or objects with some additional properties or elements

let bags = ['wild', 'craft', 'safari']

console.log(...bags) // wild craft safari

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];

var arr3 = [...arr1, ...arr2];

console.log(arr3); // Output: [1, 2, 3, 4, 5, 6]



var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [7, 8, 9];
var arr4 = [...arr1, ...arr2, ...arr3, 10];

console.log(arr4); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]



const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { e: 5, f: 6 };

const obj4 = { ...obj1, ...obj2, ...obj3, g: 7 };

console.log(obj4); // Output: { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7 }


// create a sallow copy using spread operator

/*
A shallow copy means that the new array (arr2) contains references to the same objects as the original array (arr1). 
This means that if an object in arr1 is modified, the same object in arr2 will also be modified.
*/

var arr1 = [{ a: 1 }, { b: 2 }];
var arr2 = [...arr1];

arr1[0].a = 3;

console.log(arr1); // Output: [{ a: 3 }, { b: 2 }]
console.log(arr2); // Output: [{ a: 3 }, { b: 2 }]

//Rest: 

// The REST parameter can also be used to create a new array 
// that contains some elements and some additional elements, like this:

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];

var arr3 = [...arr1, ...arr2, 7, 8, 9];

console.log(arr3); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]


function average(...numbers) {
  const sum = numbers.reduce((total, num) => total + num, 0);
  return sum / numbers.length;
}

console.log(average(1, 2, 3, 4, 5)); // Output: 3
console.log(average(10, 20, 30)); // Output: 20


//short-circuting

/*
Short-circuiting is a technique in JavaScript that uses logical operators (&& and ||)
to simplify code and improve performance. In short-circuiting, the second operand of a 
logical operator is only evaluated if the first operand doesn't determine the outcome of the expression.
*/


// Nullish coalescing operator:

/*
The nullish coalescing operator (??) is a new operator introduced in ES2020 
that provides a way to check for null or "undefined" values and provide a default value if necessary. 
It works by returning the first operand if it's not null or undefined, otherwise it returns the second operand.
*/
let user = 'amit'
const name = user.name ?? 'Anonymous';

console.log(name);
// const count = options.count ?? 10; // set a default value for count if it's not provided
// const price = product.price ?? 0; // set a default price of 0 if product.price is nullish
// const userRole = user.role ?? 'guest'; // set a default user role of 'guest' if user.role is nullish
