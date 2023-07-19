# Questions related to Concenpt of RN,JS,RD and others.

## What is virtual Dom in React-native?

React Native virtual DOM representation of the native UI components that are used to render the application
means that the React Native virtual DOM is not a direct representation of the DOM,
but it is still used to improve performance by only updating the native UI components that need to be updated.

 Native virtual DOM is implemented using a technique called diffing.

React Native virtual DOM uses **diffing** to compare the **current state** of the virtual DOM to 
the **previous state** of the virtual DOM and __determine the changes that need__ to be made to the native UI components.

## What is thread?

thread is a __single sequential__ flow of control within a program.
**sequential means that the instructions in a program are executed one after the other**

React Native is a single-threaded framework, which means that there is only one thread that is responsible for executing the application code.

React Native framework itself does not use multiple threads. 
However, the __native modules__ that are used by React Native can use multiple threads. 
This is because the native modules are responsible for interacting with the underlying operating system,
and the operating system may use multiple threads to handle different tasks.

**Native module** is a piece of code that is written in a native language, such as Objective-C, Java,
or Swift. Native modules allow React Native applications to access native APIs, such as the camera, the accelerometer, or the file system.

## React Native threads

* __UI thread__ (often called main): This is the only thread that can manipulate host views.
Host views are the native views that are used to render React Native components.
The UI thread is responsible for rendering the UI and handling user input.

+ __JavaScript thread__ (also called main thread): This is where React's render phase is executed.
The render phase is the process of updating the UI in response to changes in the application state.
The JavaScript thread is also responsible for executing other JavaScript code in the application,
such as code that is used to handle user input or make network requests.

- __Background thread__ (also called worker thread): This thread is dedicated to layout.
 Layout is the process of determining the size and position of the host views in the UI.
 The background thread is responsible for performing layout calculations that are not related to the main thread.
 This can help to improve the performance of the UI by freeing up the main thread to handle other tasks.

***The React Native framework uses a technique called fibers to allow the UI thread to handle multiple tasks concurrently.
__Fiber__ are lightweight threads that are created and destroyed on demand. 
The UI thread can switch between fibers very quickly, which allows it to handle multiple tasks without blocking the rendering of the UI***


## What is Fiber in React Native?

"Fiber" refers to the internal architecture.
introduced in React version 16.0. 
React Fiber is a reimplementation of the core algorithm used by React to efficiently update the user interface (UI) in response to changes in application state.

__features and benefits of React Fiber include__

**Incremental Rendering**
Fiber enables rendering in smaller units called "fibers." 
It allows React to work on a portion of the UI tree at a time, 
allowing for more frequent interruption and prioritization of tasks.

**Prioritization and Scheduling**
Fiber introduces the concept of priority levels, 
allowing developers to assign different priority levels to different parts of the UI. 
This helps ensure that high-priority updates (e.g., user interactions) are processed quickly, enhancing perceived performance.

**Error Boundary and Error Handling**
Fiber improves error handling by introducing Error Boundaries,
which are React components that catch and handle errors during rendering. 
This prevents the entire application from crashing due to a single error.

**Concurrent Mode**
Fiber paves the way for Concurrent Mode, an upcoming feature that allows for more responsive user interfaces by performing rendering work in small chunks over multiple frames,
without blocking the "main thread"(UI thread where javascript code running).

## what is the difference between promises and async await?

Promises and async/await are both asynchronous programming

**Promises**

Promises are objects that represent the eventual completion or failure of an asynchronous operation.
means that a promise can be in one of three states(pending, reject, resolve)

They have three states: pending, resolved, and rejected.
You can attach callbacks to promises to handle the different states.
Promises can be chained together to create complex asynchronous workflows.

For example, let's say you want to fetch a user from the server. You could use a callback to do this:

function fetchUser(id) {
  return fetch(`/api/users/${id}`).then(response => response.json());
}

const user = fetchUser(1234);

user.then(user => {
  // Do something with the user.
});

user.catch(error => {
  // Handle the error.
});

For example, let's say you want to fetch a user from the server, then fetch the user's profile data. You could chain together two promises to do this:

const userPromise = fetchUser(1234);
const profileDataPromise = userPromise.then(user => fetch(`/api/users/${user.id}/profile`));

profileDataPromise.then(profileData => {
  // Do something with the profile data.
});

**Async/Await**

Async/await is a syntax sugar for promises that makes it easier to write asynchronous code that looks more synchronous.
You can use the await keyword to suspend the execution of an async function until a promise is resolved or rejected.
Async/await also provides a way to handle errors gracefully.





