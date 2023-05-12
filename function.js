// Functions

// when we assing value then called argument
// when we pass declaration then called parameter

function nameOFuction(name = 'defaultValue'){ // paramter
  console.log(`Nice to know your name ${name}`)
}

nameOFuction('Amit') // argument
nameOFuction() // argument

// function always have return value, wether we are return or not

// function passing as agument
// passing a function with no name is called anonumous function.

const func = function(){
  console.log('i am anonumous function')
}
func()

// Returning function
let ageCalulator = function(birthyear, currentYear = 2023){
  let age = currentYear - birthyear
  return age
}

let functionresult = ageCalulator(1997)
console.log(`Your age is ${functionresult}`)


// Function vs Method

// Method = when function inside any object then we call method.
// --> nothing but holding object property(key) value

let person = {

   ageCalulators:  function(birthyear=1997){

    let age = 2023 - birthyear
    return age
  }
}

console.log(`Current age is ${person.ageCalulators(1999)}`)



