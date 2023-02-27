
const initialState = {
  name: 'pawan',
  age: 20,
  status: 'Native dev'
}

export default (state = initialState,action) => {
  if(action.type == 'UPDATE_AGE'){
    return {
      age: action.payload
    }
  }
  return state
}