// Introduction to object in javascript
// object are nothing but a key value pair,
// each object element is nothing a property

let car = {
  name: 'Honda',  // Properties
  color: 'red',
  model: "2022"
}

// console.log(car)

// Access javascript object Properties
// we can access the properites of car through . and [] operator

console.log(car.name)
console.log(car["model"])

// we can also access with new var
let properitesName = "color"

console.log(car[properitesName]) // computed property 'means we can change this colors'
console.log(car.properitesName) // undefined, it always search for propety, properties are nothing but a string.
console.log(car["properitesName"])

// Though this we can only read the properties not change it.



// Modify


car.color = 'black'
console.log('Change car color Property =>',car.color)

car["color"]= 'black'
console.log('Change car color Property through bracket =>',car.color) //black


// Deleting object

let obj = {
  prop1: 'value1',
  prop2: 'value2'
}

console.log(obj.prop1) // value1

let returnValue = delete obj.prop1

console.log('deleting object properties => ',obj.prop1, returnValue)  // undefined true


// Object inside array

let blacklist = [
  {userName: 'amit', reason: 'spam'},
  {userName: 'rohit', reason: 'abusive content'},
  {userName: 'mohit', reason: 'copyright'}
]

console.log(blacklist)

for(let i=0; i<blacklist.length; i++){
  console.log(`${blacklist[i].userName} Block due to reason ${blacklist[i].reason}`)
}

