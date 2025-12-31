import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';


const store = createStore(reducer, applyMiddleware(logger.default))


function reducer(state={amount:1}, action){ 
    if(action.type === 'increment') {
        return {amount: state.amount+1}
    }
    return state
}

//global state

console.log(store.getState())

//dispatch trigger the event and reducer is the listner, action 

store.dispatch({type: 'increment'})      

console.log(store.getState())       


// check logger

setInterval(() => {                      
    store.dispatch({type: 'increment'})
}, 2000)