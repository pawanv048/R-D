import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Profile() {

 const {name, age, status} = useSelector((state) => {
    return state
  });

  const dispatch = useDispatch();

  const updateAge = (age) => {
    dispatch({type: 'UPDATE_AGE', payload: age})
  };

  return (
    <div>
      <h1>My name is {name}</h1>
      <h1>My name age {age}</h1>
      <h1>My desgination is  {status}</h1>
      <button onClick={() => updateAge(40)}>update age</button>
    </div>
  )
}

export default Profile;