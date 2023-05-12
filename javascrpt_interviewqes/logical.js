//Logical operator

// AND && OR|| NOT !

let password = 'qwerty'

if(password.length > 5 && password.includes('@')){
  console.log('you have strong password')
}else{
  console.log('change your password')
}

// NOT ! generally for change true to false and false to true

let state = false

if(!state){
  console.log('your status is =', state)
}

//Priority
//Not
//AND then OR from left to right

//Example
let result = true && true || false && !false
//statement execute
true && true || false && true
true || false && true
true && true
true

console.log(result)


//variable and block scope

// let scope = 50 //global scope
if(true){
  var scope = 60 // that is why we are not using scope
  
}

console.log(scope)