import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import {fetchName, updateStatus} from '../action';
import {updateAge, updateName, updateStatus} from '../reducer/userReducer';

function Profile() {

 const {name, age, status} = useSelector((state) => state);

  const dispatch = useDispatch();

  const changeAge = (age) => {
    // dispatch({type: 'UPDATE_AGE', payload: age})
    dispatch(updateAge(age))
  };

  const changeName = (name) => {
    //console.log(result);
    // by using 
    // dispatch(fetchName())
    dispatch(updateName(name))
  } 

  const changeStatus = (status) => {
    dispatch(updateStatus(status))
  }  

  return (
    <div>
      <h1>My name is {name}</h1>
      <h1>My name age {age}</h1>
      <h1>My desgination is  {status}</h1>
      <button onClick={() => changeAge(40)}>update age</button>
      <button onClick={() => changeName('Swetabh')}>update name</button>
      <button onClick={() => changeStatus('Dev Ops')}>update status</button>
    </div>
  )
}

export default Profile;