//control flow

for(let i=1; i<=10; i++){
  //console.log("Run the task",i)
}

const employee = ['amit','sumit','raj','john']
for(let i=0; i<employee.length; i++){
  console.log('Emplyee-Name:', employee[i]);
}

console.log(employee[1])

// For loops
for(let i=0; i<=5; i++){// infinite loop in case we miss condition
  console.log('For loop:',i)
}

//while loop

let j=1
while(j<=5){
  console.log('while loop', j)
  j++ // without this statement we run into infinite loop
}

// Not used-because in real world there is no such condition run at least one time if the condion is false.
// Do-while loop

let k = 2
do{
  console.log('Run at Least one time:', k)
  k++
}while(k<=2) //condition false already


// Looping

// what if we don't know the initial value and how to increment
// feature: forEach

employee.forEach((element) => {
  console.log('Running ForEach =>>',element)
});

// what if we want to iteration inside object
// feature: forin loop

let car = {
  name: 'Honda',  // Properties
  color: 'red',
  model: "2022"
}

let x = ""
for (const key in car) {
  x = x + car[key]
  console.log(key)
}

console.log(x)


// for of looping


let nums = [2, 3, 4, 5, 6];

for (let key of nums) {
  console.log(key);
}

// Enhance Object literals
// Before ES6 after that
// computed properties

let person = {
  name: 'pawan',
  age: 26,
  job: 'dev',
  depart: 'mobile'
}

let benchmark = 'platnimum' // 

let company = {
  name: 'samsung',
  year: '2022',
  city: 'Banglore',
  person, // autosearch key assign there values
  feeds(){ // create function without writing function.
    console.log('supportive company')
  },
  [benchmark]: 'i need to change to see feature' // now it access the value of benchmark // computed property
}

console.log(company);