//array
// Concept: Mutating means array retun the refrence value. means array return 
// array method don't make copy of the original array it change the original array.
// Non-Mutating - working with copy array, not change original value of array

//concat(): Returns a new array that is the result of concatenating two or more arrays
// Not-Mutating method
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log('concate arry =>',arr3); // [1, 2, 3, 4, 5, 6]
console.log('original array =>', arr1+","+arr2) // original array => 1,2,3,4,5,6

// copyWithin(): Copies part of an array to another location within the same array.
// copyWithin(target, start, end)
var arr = [1, 2, 3, 4, 5];
arr.copyWithin(1, 3, 4);
console.log(arr); // [1, 4, 3, 4, 5]

//entries(): Returns an iterator object that contains the key/value pairs for each index in the array.
var arr = [1, 2, 3];
const entries = arr.entries();
console.log([...entries]); // [[0, 1], [1, 2], [2, 3]]

//every(): Returns true if every element in the array passes the provided function.
var arr = [1, 2, 3, 4];
const isGreaterThanZero = (num) => num > 0;
console.log(arr.every(isGreaterThanZero)); // true

// fill(): Fills all the elements of an array from a start index to an end index with a static value.
var arr = [1, 2, 3];
arr.fill(0, 1, 2);
console.log(arr); // [1, 0, 3]

//filter(): Returns a new array containing all elements that pass the provided function.
var arr = [1, 2, 3, 4, 5];
var isEven = (num) => num % 2 === 0;
const evenNumbers = arr.filter(isEven);
console.log(evenNumbers); // [2, 4]

// find(): Returns the value of the first element in the array that satisfies the provided function.

var arr = [1, 3, 4, 5];
var isEven = (num) => num % 2 === 0;
const firstEvenNumber = arr.find(isEven);
console.log(firstEvenNumber); // 4

//findIndex(): Returns the index of the first element in the array that satisfies the provided function.
// execute for each element of the array.
// in case match don't contain array element then return -1
var arr = [1, 2, 3, 4, 5];
var isEven = (num) => num % 2 === 0;
const firstEvenNumberIndex = arr.findIndex(isEven);
console.log('findIndex =>',firstEvenNumberIndex); // 1, findIndex => -1 in case of array not contain matching element [1, 5, 3, 7, 5]

//flat()  HOF: Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
var arr = [1, [2, [3, [4]]]];
const flattenedArray = arr.flat(2);
console.log("flattenedArray:", flattenedArray); //[ 1, 2, 3, [ 4 ] ] only one level it can flat the array
// 2-decided the depth of the array

//flatMap()  HOF: Returns a new array formed by applying a function to each element of the original array, then flattening the result by one level.
var arr = [1, 2, 3];
const multiplyByTwoAndThree = (num) => [num * 2, num * 3];
const mappedArray = arr.flatMap(multiplyByTwoAndThree);
console.log("mappedArray =>" ,mappedArray); // mappedArray => [ 2, 3, 4, 6, 6, 9 ]


// Sorting Array:
// Mutating array means change the original array,returns a reference to the same array.

var month = ["March", "Jan", "Feb", "April"]

console.log('show month=>',month.sort(compareFn))

function compareFn(a,b){
  if(a<b){
    return -1
  }
  if(a>b){
    return 1
  }
  // a must be equal to b
  return 0
}

console.log('original array=>', month)

// Reverse (Mutate method.)

var letter = ["a","b","c","d","e"]

var reverse = letter.reverse()
console.log("reverse =>", reverse) // reverse => [ 'e', 'd', 'c', 'b', 'a' ]
console.log("original array =>", letter) // original array => [ 'e', 'd', 'c', 'b', 'a' ]

// Join method
// Non-mutable array

var num = [1,2,3,4]

console.log('Join array =>', num.join('-')) // 1-2-3-4
console.log("original array =>", num) // original array => [ 1, 2, 3, 4 ]


// Slice: 
// Non-Mutate
// use to extract the part of the array
// Array.Slice(startIndex, lastIndex, exclude)
// Return new array of extract element

var numb = [3,5,7,9,2]

let extractedArrayf = numb.slice(2) // if pass one argu then search for first goes till the end

let extractedArray = numb.slice(2,3)

console.log('Slice array =>', extractedArray) // [ 7 ]
console.log('Original array =>', numb)

// splice: 
// use to add the new element
// Array.splice(index, deletedvalue, valuetobeAdded)
// Run deleted item 
// mutating array

var numb = [3,5,7,9,2]

let update = numb.splice(1,2,1)

console.log('splice array =>', update) // [ 5, 7 ]
console.log('Original array =>', numb) // [ 3, 1, 9, 2 ]

// at:
// take index and return value
// useful: getting last element of the array

var numbr = [3,5,7,9,2]

console.log(numbr[2]) // 7
console.log(numbr.at(2)) // 7

console.log(numbr[numbr.length-1]) //2
console.log(numbr.at(-1)) //2
// at also works with strings


// some method: 
/*
  some method return "true" if any element satifed condition
  it iterate each element
*/

let result = numbr.some((score) => {
  let newScore = score > 5
  return newScore
})

console.log(result) // true

// every method: 
/*
  some method return "true" if any element satifed condition
  it iterate each element
*/

 result = numbr.every((score) => {
  let newScore = score > 5
  return newScore
})

console.log('every result =>',result) // false


// Chanining method:
// Mutating method
var digitnum = [2,3,2,5,5,4]

// var results = digitnum.splice(0,3) // [ 2, 3, 2 ]
// var results = digitnum.splice(0,3).slice(2,1,7) // []
var results = digitnum.splice(0,3).slice(2,1,7).push(8,4)
console.log('result:',results, digitnum)

// word.gx().fx().hx()
