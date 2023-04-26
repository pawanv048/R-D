import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import axios from "axios";
import thunk from "redux-thunk";

// action creator name
const init = 'account/init'
const inc = 'account/increment'
const dec = 'account/decrement'
const incByAmt = 'account/incrementByAmount'
const incBonus = 'bonus/increment'




// store
const store = createStore(
  combineReducers({
    account: accountReducer,
    bonus: bonusReducer
  }),
  applyMiddleware(logger.default, thunk.default)
);

//reducer
function accountReducer(state = { amount: 10 }, action) {

  switch (action.type) {
    case init:
      //coming from api
      return { amount: action.payload }
    case inc:
      return { amount: state.amount + 10 }
    case dec:
      return { amount: state.amount - 10 }
    case incByAmt:
      return { amount: state.amount + action.payload }
    default:
      return state
  }
};

function bonusReducer(state = { point: 0 }, action) {
  switch (action.type) {
    case incBonus:
      return { point: state.point + 1 }
    case incByAmt:
      if (action.payload >= 100)
        return { point: state.point + 1 }
    default:
      return state
  }
}

//Async user


// Action creater

function increment() {
  return { type: inc }
}
function getUser(id) {
  return async (dispatch, getState) => {
    const { data } = await axios.get(`http://localhost:3000/accounts/${id}`)
    dispatch(initUser(data.amount))
  }
}

function initUser(value) {
  return { type: init, payload: value }
}

function incrementByAmount(value) {
  return { type: incByAmt, payload: value }
}
function incrementBonus() {
  return { type: incBonus }
}
//console.log(store.getState())

setTimeout(() => {
  store.dispatch(incrementBonus())
}, 2000)


//