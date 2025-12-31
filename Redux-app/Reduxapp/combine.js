import axios from 'axios';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import { thunk } from 'redux-thunk';


const init = 'init'
const inc = 'account/increment'
const incByAmt = 'incrementByAmount'
const incBonus = 'bonus/increment'

const store = createStore(
    combineReducers({
        account: accountReducer,
        bonus: bonusReducer
    }), applyMiddleware(logger.default, thunk))


function accountReducer(state = { amount: 1 }, action) {

    switch (action.type) {
        case init:
            return { amount: action.payload }

        default:
            return state
    }
}

function bonusReducer(state = { point: 0 }, action) {
    switch (action.type) {
        case incBonus:
            return {point: state.point + 1}
        case incByAmt:
            if(action.payload>=100){
                return { point: state.point + 1 }
            }
               
        default:
            return state
    }
}

//Action creator

function getUser(id) {
    return async (dispatch) => {
        const { data } = await axios.get(`http://localhost:3000/account/${id}`)
        dispatch(initUser(data.amount))
    }
}

function initUser(value) {
    return { type: init, payload: value }
}

function incrememtByAmount(value){
    return {type: incByAmt, payload: value}
}

function incrememtBonus(value){
    return {type: incBonus}
}

setTimeout(() => {
    // store.dispatch(incrememtByAmount(200)) 
    store.dispatch(incrememtBonus()) 
}, 2000)


//action : type and payload, for ex: {type}