import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

//actions
const inc = 'increment'
const dec = 'decrement'
const incByAmt = 'incrememtByAmount'

const store = createStore(reducer, applyMiddleware(logger.default))


function reducer(state={amount:1}, action){
    if(action.type === inc) {
        return {amount: state.amount+1}
    }

    if (action.type === dec){
        return {amount: state.amount-1}
    }
    if (action.type === incByAmt){
        return {amount: state.amount + action.payload}
    }

    return state
}

//Action creator

function increment() {
    return {type : inc}
}
function decrement() {
    return {type : dec}
}
function incrememtByAmount(value) { 
    return {type : incByAmt, payload: value}
}



setInterval(() => {
    store.dispatch(incrememtByAmount(4))
}, 2000)