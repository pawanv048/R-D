//All data types in js

/*
In JavaScript, primitive data types are data that are not objects and do not have methods.
These data types include numbers, strings, booleans, null, and undefined.
Non-primitive data types, on the other hand, are objects and include arrays, functions, and objects.
*/

// 7 data types
//1 Number - 1,2,22,2.3
var a = 2.3
// console.log(typeof(a));

//2 String - "i am not", 'i am not'
var a = "I am not"
// console.log(typeof(a))

//3 Boolean - true/false
var a = true
// console.log(typeof(a))

//4 Null - Null Intentionally absence of the value
var a = null
// console.log(a)

//5 Undefined variable declared but not initalize

//6. Symbol: A Symbol is a unique and immutable primitive value and may be used as the key of an Object property.
let sym = Symbol();
let sym1 = Symbol('foo');


//7. BigInt
// 9007199254740991n	

var b
// console.log(b)

// object - complex data structure

let user = {
  email: 'learning@code.gmail'
}
console.log(user.email)

var b = [1,2]
console.log(Array.isArray(b))
