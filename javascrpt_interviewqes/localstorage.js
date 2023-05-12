// Store data in localStorage
//(method) Storage.setItem(key: string, value: string): void
// localStorage.setItem('username', 'John');
// localStorage.setItem('age', 30);

// Retrieve data from localStorage
//(method) Storage.getItem(key: string): string | null
//Returns the current value associated with the given key, or null if the given key does not exist.


// const username = localStorage.getItem('username');
// const age = localStorage.getItem('age');

// Log the retrieved data to the console
// console.log(`Username: ${username}`);
// console.log(`Age: ${age}`);

/// ultimately in local storage data store in string form

let cars = [
  {name: 'honda', model: '2022'},
  {name: 'suzuki', model: '2021'}
]

console.log(typeof cars)
console.log(JSON.stringify(cars))
// [{"name":"honda","model":"2022"},{"name":"suzuki","model":"2021"}]


// Store an object in localStorage
const user = {
  name: 'John Doe',
  age: 30,
  email: 'john.doe@example.com'
};

localStorage.setItem('user', JSON.stringify(user));

// Retrieve the object from localStorage and parse it back to a JavaScript object
const storedUser = JSON.parse(localStorage.getItem('user'));

// Log the parsed object to the console
console.log(storedUser);




/*
Async storage is a mechanism in JavaScript used to store data asynchronously.
It is commonly used in mobile app development with React Native,
but can also be used in other contexts where asynchronous storage is needed.

Async storage allows you to store and retrieve key-value pairs of data in a way that does not block the main thread of your application.
This is important because blocking the main thread can cause your application to become unresponsive or slow.
*/

import AsyncStorage from '@react-native-async-storage/async-storage';

// Store data
const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    // Error saving data
  }
};

// Retrieve data
const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // Data found
    }
  } catch (error) {
    // Error retrieving data
  }
};
