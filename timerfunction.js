// set Timeout and Set interval

// Set Timeout - Run only one time after interval of time

// set interval - run function repeatealy, start after run time

function greeting(name){
  console.log(`welcome ${name} to my family`)
}

setTimeout(greeting, 1000, 'rahul' )
// ERR_INVALID_ARG_TYPE]: The "callback" argument must be of type function. Received undefined


setTimeout(function greeting(name) {
  console.log(`welcome ${name} to my family`)
}, 2000 ); // 2000ms = 2sec

setInterval(function greeting(name) {
  console.log(`welcome ${name} to my family`)
}, 2000,'pawan' ); // 2000ms = 2sec

/*
repeart
welcome pawan to my family
welcome pawan to my family
welcome pawan to my family
welcome pawan to my family
*/