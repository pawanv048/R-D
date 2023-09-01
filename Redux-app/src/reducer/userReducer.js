import {createReducer, createSlice} from '@reduxjs/toolkit';

// import {updateStatus} from '../action';

const initialState = {
  name: 'pawan',
  age: 20,
  status: 'Native dev'
}

// preview way with redux to update state.
// export default (state = initialState,action) => {
//   if(action.type == 'UPDATE_AGE'){
//     return {
//       ...state,
//       age: action.payload
//     }
//   }
//   return state
// }



// previous approch with redux before createSlice

// export default createReducer(initialState, (builder) => {
//   builder.addCase('UPDATE_AGE',(state, action)=>{
//     state.age = action.payload
//   })
//   builder.addCase('UPDATE_NAME',(state, action)=>{
//     state.name = action.payload
//   })
//   // without hardcorded type
//   builder.addCase(updateStatus,(state, action)=>{
//     state.status = action.payload
//   })
// });




// imp: with createSlice we did't need action file action file on reducer file
const userReducer = createSlice({
  name: "person",
  initialState,
  reducers: {
      updateName(state, action){
        state.name = action.payload
      },
      updateAge(state,action){
        state.age = action.payload
      },
      updateStatus(state,action){
        state.status = action.payload
      }
  }
})


export const { updateName, updateAge, updateStatus } = userReducer.actions
export default userReducer.reducer