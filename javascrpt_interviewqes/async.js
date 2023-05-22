// Asynchronous Javascript // Ajax


Sure!

Asynchronous: In JavaScript, asynchronous operations allow you to perform tasks without blocking the execution of other code. 
They typically involve functions that take a callback function or return a promise.
Asynchronous operations allow for non-blocking I/O, network requests, timers, and more.

Synchronous: Synchronous operations, on the other hand, block the execution of other code until they complete. 
They are executed one after another in a sequential manner. 
Synchronous operations can cause delays and make the application unresponsive if they take too long to complete.

Promises: Promises are a way to handle asynchronous operations in JavaScript. 
They represent the eventual completion (or failure) of an asynchronous operation and allow you to chain multiple asynchronous operations together. 
Promises have two states: "pending" and either "fulfilled" (resolved) or "rejected" (error).

Promises provide a cleaner and more structured way to handle asynchronous code compared to callbacks.
They allow you to attach success and error handlers to handle the result of an asynchronous operation.

In summary, asynchronous operations allow for non-blocking execution of code, synchronous operations block the execution until they complete, 
and promises provide a structured way to handle asynchronous operations and their results.
console.log('Before setTimeout');




setTimeout(() => {
  console.log('Inside setTimeout');
}, 1000);

console.log('After setTimeout');


async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchData();


// to prevent from call back hall we can use promesis

const delay = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Delayed ${time} milliseconds`);
    }, time);
  });
};

delay(1000)
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
