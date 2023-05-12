var myname = 20
var myname = 30
//console.log(myname);
// re-decleard and re-assign is possible

let num = 20
num = 30
// console.log(num)
// Assinment of the value is possible
//let num = 30 //Cannot redeclare block-scoped variable 'num'

const value = 10;
console.log(value);
// neither re-declared nor assing with const 
// declarations must be initialized with const


// IN case of var
// No block{}, scope is create, can be re-declared
var count = 1
var age = 15
function sum(a,b){
  var count = 0; 
  return a+b;
}
if(age>18){
  var count = 2;
  console.log(count)
}

// in case of let 

// all block {} have seperate scope 
// only declare once in scope
let counter = 1
var age = 15
function sum(a,b){
  
  counter = 0; 
  return a+b;
}
if(age>18){
  //let count = 2; // SyntaxError: Identifier 'count' has already been declared
  //console.log(count)
}

// in case of const object and array you can change
const person = {}
person.name = 'amit'
console.log(person.name)

const cities = []
cities.push('Punjab')
console.log(cities)
