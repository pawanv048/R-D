//Hosting

test = 10;
var test;
// in case of var hosting possible only with var
console.log(`tesing number ${test}`)


// in case of var hosting possible
// not with let or const
//Cannot access 'tested' before initialization

// tested = 20;
// let tested;
//console.log(`tesing number ${test}`)

// hosting with function javascript interpretes


talk()
function talk(){
  console.log('hey!!!')
}


// Interview question: Hosting is not possible with arrow function and function expression

testing() // Cannot access 'testing' before initialization

// Arrow function

// const testing = () => {
//   console.log('Arrow function')
// }


// function expression
const testing = function tesing() {
  console.log('Arrow function')
}