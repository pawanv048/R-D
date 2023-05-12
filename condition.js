//if,else if

const budget = 6000

if(budget>10000){
  console.log('You can servive in mohali')
}else if(budget> 5000){
  console.log('you can enjoy little bit')
}else{
  console.log(`You can't survive in mohali`)
}

// nested if

let num = 25

if(num>22){
  console.log('run the statement')
  if(num> 26){
    console.log('run the stement inside')
  }
}

//Break and continue

for(let i=0; i<=5; i++){
  if(i===2){
    continue
  }
  console.log('Numbers:', i)
}

for(let i=0; i<=5; i++){
  if(i===2){
    break
  }
  console.log('Numbers:', i)
}

// ternary operator

let age = 19
let rupee = 100
let result = age > 18 ? rupee > 100 ? 'access' : 'less money' :`can't access` 
// console.log(result)

let cage = 17

switch(cage){
  case 15:
  case 16:
  case 17:
    result = 'This ages are not allwed to watch'
    break // switch case is drow that is why we use break statement
  default: 
    result= 'Allow'
}

console.log(result)

// Truthy and falsely values
//Truthy value
//true
//"anystring"
//[] , {}
//"0"

//falsely values
//false
//0
//undefined
//null
//""
