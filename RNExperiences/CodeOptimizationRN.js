import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useMemo, useState } from 'react';


const App = () => {
 const [count, setCount] = useState(0);


//These functions won't be re-created on every render, which is useful if they're passed as props to child components.
 const increment = useCallback(() => {
  setCount((prevCount) => prevCount + 1);
 });

 const decrement = useCallback(() => {
  setCount((prevCount) => prevCount - 1);
}, []);

//This avoids recalculating whether the count is even or odd on every render.
const isEven = useMemo(() => {
  console.log('Calculating if count is even...');
  return count % 2 === 0;
},[count])

 useEffect(() => {
  console.log('useEffect running...')
 }, [count]);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{`Count: ${count}`}</Text>
      <Text>{`Count is ${isEven ? 'Even' : 'Odd'}`}</Text>
      <Button title="Increment" onPress={increment} />
      <Button title="Decrement" onPress={decrement} />
      {/* <Button title='count' onPress={() => }/> */}
    </View>
  )
}

export default App

const styles = StyleSheet.create({})
