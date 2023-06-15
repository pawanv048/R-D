State:
the term "state" refers to a JavaScript object that holds the entire state of the application. 
It represents the current state of the application that can be modified through actions dispatched to the Redux store.

Action: 
an "action" is a plain JavaScript object that represents an event or user interaction that triggers a change in the application state. 
It contains a type property that specifies the type of action being performed, and an optional payload that carries additional data related to the action.

Payload: 
"payload" refers to the optional data carried by an action object. It provides additional information about the action being performed,
such as the data that needs to be updated in the application state.

Redux: 
In Redux, a "store" is a JavaScript object that holds the entire state tree of the application.
It provides methods to update the state, dispatch actions, and register listeners to handle state changes.

Reducers: 
a "reducer" is a pure function that accepts the current state and an action object, 
and returns the new state of the application. 
It is responsible for handling the state changes triggered by actions dispatched to the Redux store.

provider: 
a "provider" is a component that allows the application to access the Redux store and its state.
It is typically placed at the root of the component tree and wraps the entire application, providing access to the store through its "store" prop.

Type: 
a "type" is a string constant that represents the type of action being performed. 
It is used by the reducer function to determine how to update the state based on the action that was dispatched.
