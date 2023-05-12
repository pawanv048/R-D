let firstName = 'Amit'
let lastName = 'Kumar'
var detail1 = 'My name is Amit kumar'
var detail = '      My name is Amit kumar     '

console.log(firstName, lastName)
// Amit Kumar - console has property to seperate the elements
// String concatinate - with + operator, templete string ``

// Gettings String charater, string is nothing but array of character consider
// we can access the element by index number.
// if we try to access the character which is not present the js give undefined value. 

// console.log(firstName[0])

// Methods in String

console.log(firstName.toLowerCase())
console.log(firstName.toUpperCase())

// to access first occuring index first
console.log(firstName.indexOf('m'))

// trim is use to remove space
console.log(detail)
console.log(detail.trim())
console.log(firstName.includes('pawan'))
console.log(firstName.slice(0,2)) //exclude last index, it's create a copy and then change
console.log(detail1.split(' '))
console.log(detail1.split('a'))

// string are immutable
// lastName[0] = 'v'
// console.log(lastName)

// Number 
// Priority
// () >** > * / % > + -

// Loose Equality(==) and Strict Equality(===)
let age = 22
console.log(age == '22') // check only only value not type
console.log(age === '22') // check value as well as type