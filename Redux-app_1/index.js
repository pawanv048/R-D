import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import axios from "axios";
import thunk from "redux-thunk";

// action creator name
const init = 'account/init';
const inc = 'account/increment';
const dec = 'account/decrement';
const incByAmt = 'account/incrementByAmount';
const incBonus = 'bonus/increment';
const getUserAccPending = 'account/getUser/Pending';
const getUserAccFulfiled = 'account/getUser/Fulfil';
const getUserAccRejected = 'account/getUser/rejected';




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
    // case init:
    //   //coming from api
    //   return { amount: action.payload }
    case getUserAccPending: 
      return { ...state, pending: true }
    case getUserAccFulfiled: 
      return { amount: action.payload, pending: false }
    case getUserAccRejected: 
      return {...state, error: action.error, pending: false}
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
function getUserAccount(id) {
  return async (dispatch, getState) => {
    try {
      dispatch(getUserAccountPending())
      const { data } = await axios.get(`http://localhost:3000/accounts/${id}`)
      dispatch(getUserAccountFulfiled(data.amount))
    } catch (error) {
      console.log(getUserAccountRejected(error.message));
    }
  }
}

function getUserAccountPending() {
  return { type: getUserAccPending }
}
function getUserAccountFulfiled(value) {
  return { type: getUserAccFulfiled, payload: value }
}
function getUserAccountRejected(error) {
  return { type: getUserAccRejected, error: error }
}
function incrementByAmount(value) {
  return { type: incByAmt, payload: value }
}
function incrementBonus() {
  return { type: incBonus }
}
//console.log(store.getState())

setTimeout(() => {
  store.dispatch(getUserAccount(2))
}, 2000)


//