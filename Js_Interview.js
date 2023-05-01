//revers word ex- hello world, to olleh dlrow

let str = "hello world";
let reversed = str.split(" ").map(word => word.split("").reverse().join("")).join(" ");
console.log(reversed); // output: "olleh dlrow"

//str.split(" ") => ["hello", "world"]
//"hello".split("") => ["h", "e", "l", "l", "o"]
//["h", "e", "l", "l", "o"].reverse() => ["o", "l", "l", "e", "h"]
//["o", "l", "l", "e", "h"].join("") => "olleh"
//["olleh", "dlrow"].join(" ") => "olleh dlrow"


//count maximum number of charater

function findMaxChar(str) {
  let charMap = {};
  let maxChar = '';
  let maxCount = 0;

  for (let char of str) {
    if (char === ' ') continue;
    charMap[char] = charMap[char] ? charMap[char] + 1 : 1;
    console.log(charMap[char])
    if (charMap[char] > maxCount) {
      maxChar = char;
      maxCount = charMap[char];
    }
  }

  return maxChar;
}

let str = "My mmmmm is pawan verma";  // declare a string variable
let maxChar = findMaxChar(str);  // call the findMaxChar function with the input string
console.log(`The character "${maxChar}" has the maximum frequency in the string "${str}".`);


// other solutions***
function findMaxChar(str) {
  const charMap = str.split('')
    .filter(char => char !== ' ')
    .reduce((map, char) => {
      map[char] = (map[char] || 0) + 1;
      return map;
    }, {});

  const [maxChar, maxCount] = Object.entries(charMap)
    .reduce(([char, count], [currentChar, currentCount]) =>
      currentCount > count ? [currentChar, currentCount] : [char, count],
      ['', 0]
    );

  return maxChar;
}


let str = "My name is pawan verma";
let maxChar = findMaxChar(str);
console.log(`The character "${maxChar}" has the maximum frequency in the string "${str}".`);



// other solution
function findMaxChar(str) {
  let charMap = {};
  let maxChar = '';
  let maxCount = 0;


//find odd number in array which is missing

const numbers = [5,7,9,11,15,17];

const maxNumber = Math.max(...numbers);
console.log(maxNumber) // last element of array 17
const minNumber = Math.min(...numbers);
console.log(minNumber) // 5
let sumOfNumbers = 0;
for (let i = minNumber; i <= maxNumber; i += 2) {
    //console.log(numbers.includes(i))
  if (!numbers.includes(i)) {
    console.log(sumOfNumbers += i);
  }
}

console.log(`The missing odd number is ${sumOfNumbers}.`);


// other solution

const number = [5,7,9,11,15,17];

for(let i=0; i< number.length; i++){
    let curr = number[i];
    let next = curr + 2;
    if(number[i + 1] === next ) continue
    else{
        console.log(next)
        return
    }
}


  for (let char of str) {
    if (char === ' ') {
      continue; // skip space characters
    }
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > maxCount) {
      maxChar = char;
      maxCount = charMap[char];
    }
  }

  return maxChar;
}

let str = "My name is pawan verma";
let maxChar = findMaxChar(str);
console.log(`The character "${maxChar}" has the maximum frequency in the string "${str}".`);

