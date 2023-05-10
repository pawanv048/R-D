Synchronous vs Asynchronous programming: Synchronous programming means that code is executed one line at a time in a sequential manner.
Asynchronous programming, on the other hand, means that multiple tasks can be executed at the same time without waiting for the previous task to complete. 
In JavaScript, asynchronous programming is usually done using callbacks, promises, or async/await.

Promises: Promises are objects that represent the eventual completion or failure of an asynchronous operation and its resulting value. 
They allow you to write asynchronous code that looks and feels like synchronous code.
Promises have three states: pending, fulfilled, or rejected.

Error handling with promises: When a promise is rejected, 
you can handle the error using the .catch() method or by chaining a .
then() method with a second callback function that handles the error.

Async/await: Async/await is a newer syntax for working with promises. The async keyword is used to define an asynchronous function, which returns a promise. Inside the function, 
you can use the await keyword to wait for a promise to resolve before moving on to the next line of code. 
If the promise is rejected, an error is thrown, which you can handle using a try...catch block.

Exception handling: Exception handling is the process of handling runtime errors in your code.
In JavaScript, you can use a try...catch block to catch and handle errors. 
The try block contains the code that might throw an error, and the catch block contains the code that handles the error if it occurs. 
You can also use the finally block to run code that should be executed regardless of whether an error occurred.


// CALLBACK - related question


What is a callback in JavaScript?
How do you define and use a callback function in JavaScript?
What are the advantages of using callbacks in JavaScript?
What are the limitations of using callbacks in JavaScript?
What is a higher-order function and how is it related to callbacks?
What is the difference between a synchronous and asynchronous callback?
What is callback hell and how do you avoid it?
What is the role of a callback function in event-driven programming?
How does a Promise differ from a callback?
How do you handle errors in a callback-based function?


1. A callback is a function that is passed as an argument to another function and is executed after the first function has completed its operation.

2. To define a callback function in JavaScript, you can simply declare a function and pass it as an argument to another function. For example:

```
function myCallback() {
  console.log("Callback function called");
}

function myFunction(callback) {
  console.log("Do something");
  callback();
}

myFunction(myCallback);
```

3. Advantages of using callbacks in JavaScript include making code more modular and reusable, allowing for greater flexibility in program flow, and improving code performance by reducing blocking.

4. Limitations of using callbacks in JavaScript include issues with readability and maintainability, potential for callback hell, and difficulty in handling errors.

5. A higher-order function is a function that takes one or more functions as arguments, or returns a function as its result. It is related to callbacks because callbacks are often used as arguments in higher-order functions.

6. Synchronous callbacks are executed immediately, while asynchronous callbacks are scheduled to run later, typically when a certain event occurs or when a certain condition is met.

7. Callback hell refers to the situation where nested callbacks are used excessively, making code difficult to read and maintain. It can be avoided by using modular code, promises, or async/await syntax.

8. In event-driven programming, a callback function is used to handle events that are triggered by user actions or system events.

9. A Promise is an object that represents a value that may not be available yet, but will be resolved at some point in the future. It differs from a callback in that it provides a more structured and consistent way of handling asynchronous operations.

10. Error handling in a callback-based function can be achieved by passing an error object as the first argument to the callback function, or by wrapping the callback in a try-catch block.





------------------------------------------------

Definition:

State: State is a built-in object in React that represents the internal data of a component. It is mutable and can be changed within the component.
Props: Props (short for properties) are used to pass data from a parent component to its child component. Props are read-only and cannot be modified within the child component.
Data Flow:

State: State is local to a component and can only be accessed and modified within that component.
Props: Props are passed from a parent component to a child component, allowing data to flow downwards from parent to child.
Ownership:

State: Each component manages its own state, and changes to state within a component affect only that component and its children.
Props: Props are owned by the parent component and are passed down to child components. Child components cannot directly modify the props they receive.
Mutability:

State: State is mutable and can be updated using the setState() method. React will re-render the component and its children when state changes.
Props: Props are immutable and cannot be modified within a component. They are passed down from the parent and remain constant throughout the component's lifecycle.
Initialization:

State: State is initialized within the component using the constructor or useState hook.
Props: Props are passed from the parent component during the instantiation of the child component.
Usage:

State: State is typically used to store and manage data that can change within a component, such as user input, form values, or toggling a component's visibility.
Props: Props are used to pass data and configuration to child components, allowing parent components to control the behavior and appearance of their children.
Update Trigger:

State: State can be updated asynchronously based on user interactions, network responses, timers, or other events.
Props: Props are passed from the parent component and are not directly affected by events within the child component. Props are typically updated by the parent component.
Scope:

State: State is accessible only within the component where it is defined.
Props: Props are accessible within the component that receives them and can be accessed using the props keyword.
Dependency:

State: State changes can trigger re-renders within the component hierarchy.
Props: Props provide a way to pass data from a parent component to its child components, enabling data flow and reusability.
Default Values:

State: State can have default values assigned during initialization if no initial value is provided.
Props: Props can have default values specified in the parent component when not explicitly passed down.
