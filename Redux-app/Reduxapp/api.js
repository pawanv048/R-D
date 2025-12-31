import axios from 'axios';
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {thunk} from 'redux-thunk';

const init = 'init'


const store = createStore(reducer, applyMiddleware(logger.default, thunk))


function reducer(state={amount: 1}, action){

    switch(action.type){
        case init:
            return {amount: action.payload}
       
        default:
            return state 
    }
}

//Action creator

 function getUser(id) {
    return async(dispatch) => {
        const {data} = await axios.get(`http://localhost:3000/account/${id}`)
        console.log("data=>", data)
        console.log("amount=>", data.amount)
        dispatch(initUser(data.amount)) 
    }
}

function initUser(value){
    return {type: init, payload: value}
}


setTimeout(() => {
    store.dispatch(getUser(1)) 
}, 2000)


