// "object/array" how "refrence " are pass to the variable

let arr = ['1','2','3','4']

let refarr = arr

refarr[4] = '5'

console.log('Original array', arr); //Original array [ '1', '2', '3', '4', '5' ]

console.log('Copy array', refarr); // Copy array [ '1', '2', '3', '4', '5' ]

//Note: Original array is also change


// we want to make copy of array and pass it as a value

console.log("***************")

let getValue = [...arr]

getValue[4] = '6'

console.log('Original with spread array', arr);  // Original with spread array [ '1', '2', '3', '4', '5' ]
console.log('Copy with spread array', getValue); // Copy with spread array [ '1', '2', '3', '4', '6' ]