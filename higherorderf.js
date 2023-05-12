// passing function as a argument higher order function.(Higher-order-function)
// if function return somthing and execute him self then, it's called hof


// feature:
// other function can be argument(callback)
// other function can be inner return value(closure)

let upperCase = function(str){
  return str.toUpperCase();
}

let lowerCase = function(str){
  return str.toLowerCase()
}

let transformation = function(str, fun){
  return fun(str)
}

// console.log(transformation("world", lowerCase))

// function returning another function

let complement = function(msg){
  return function(name){
    console.log(`${name} ${msg}`)
    return true
  }
}
console.log(complement("you are a nice guy!")) //[Function (anonymous)]
console.log(complement("you are a nice guy!")('pawan'))

//2nd method

let complemented = complement("you are a nice guy man!")
console.log(complemented('pawan'))


// Immeditely invoked function expression IIFE
// Execute only once


// function(){ // Error: Identifier expected.
//   console.log(`this function is not execute never again`)
// }

// Now this is experssion with the help of IIFE.
// (function(){
//   console.log('hello')
// })()
// use to initalize library


// Map Method:
// Non-Mutating

var salaries = [2000,3000,4000,5000]

var newSalaries = salaries.map((salarie) => {
    let incrementAmount = salarie/2
    return salarie + incrementAmount
})

console.log(`After 50% your salaries will be `, newSalaries)
// Length of the new array will be same as original array.

// Filter Mehtod:

var higherSalaries = salaries.filter((salarie) => {
  let highsalary = salarie > 3000
  return highsalary
})

console.log(higherSalaries) // [ 4000, 5000 ]
// Length of the new array may or may not be the original array.



// Reduce Method:
// -run for each element of the array.
// Array.reduce(function(accumalator, currentValue), initalValue)
// return single value

// sum of all the element of the array

var digit = [5,8,7,1,9]

var reducedArray = digit.reduce((total,currentValue) => {
  return total + currentValue
},10)

console.log(reducedArray) // 30, with inital value=10, result 40
console.log(digit)

// find Method:

// It return the first element we are looking for..

var digits = [1,4,2,5,1,1]

var findValue = digits.find((item) => {
   let newItem = item === 1
   return newItem
})

console.log(findValue)

