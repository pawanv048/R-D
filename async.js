// Asynchronous Javascript // Ajax

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
