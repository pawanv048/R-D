/*

React-Hooks introduce with React Version 16.8

EX:- It is used with functional componets, not work in Class

Why Hooks? 

Reason Problem with classes:

1. Understanding how this keyword work in Javascript, 
2. Remember to bind handler in class components 
(Event handlers can be used to handle and verify user input, user actions, and browser actions: 
Things that should be done every time a page loads. Things that should be done when the page is closed. 
Action that should be performed when a user clicks a button.)
(bind handler: We need to bind these methods to the component instance using)
3. Class don't minify very well and make hot reloading very unrelible.


Reason: with avance High Order Function

1. There is no particular way to reuse stateful component logic.
2. HOC and render props pattern do address this problem.
3. Make the Code harder to follow
4. There is need to a share stateful logic in better way.

Reason: Components

Creating Componets for complex secnarios such as data fetching and subscribing to events.
Related code is not Orgainsed in one place.

EX: Data Fetching: In componentDidMount and componentDidUpdate
EX: Event listeners: In componentDidMount and componentWillUnMount
Because stateful logic: Cannot break component into smaller ones.

*/


/************RULES OF HOOKS**************/

/*
    "Only call hooks with top level"
    Don't Call hooks inside loop, condition and nested functions

    "Only call hooks form React Functions"
    'Call them form within React Funcional Component and not just any regular javascript function.'
*/


/*****************React-summery {useState_Hooks}**********************/

/*
    1) useState hooks let us add state to functional components.
    2) In classes, the state is always an object.
    3) With the useState hook, the state don't have to be object, it can be anything(bool, array, strings, etc.)
    4) The useState hooks return array with 2 element.
    5) The first element is the current/initial/default value of the state, and the second element is
    a state setter function.
    *6) New State value depends on the previous state value? you can pass a function to the setter function 
    7) When dealing with object or arrays, always make sure spread your state variable and then call the setter 
        function
*/


/*****************React-summery {useState_Context}**********************/

/*
    context provide a way pass data through the component tree
    with having to pass props down manually at every level. 
*/

/*****************React-Context**********************/

/*
    Context provide a way to pass data through the component tree
    without having to pass props down manually at every level.
*/


/*****************React-Callback**********************/

/*
    What?

    useCallback is a hook that will return a memorized version of the call back function
    that only changes if one of the dependies has changed

    why? 

    it is useful when passing call back to optimized children  component that rely on reference equality
    to prevent unnecessary renders.
*/


/*****************React-useReducer**********************/

/*
    1. useReducer is a hook that is used for state management in React.
    2. useReducer is related to reducer function.
    3. useReducer(reducer, initialState)
    4. reducer(currentState, action)
    5. useReducer return a pair of values. [newState, Dispatch]
        newState = reduce(currentState, action)
        useReducer(Reducer, initialState)

    on the other hand JavaScript Reducer ->  reducer method return a single value
    singleValue = reduce(accumlator, itemValue)
    array.reduce(reducer,initialValue)
*/