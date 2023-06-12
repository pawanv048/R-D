import React, {
  useState,
  useEffect,
  useContext,
  useReducer,
  useLayoutEffect,
  useMemo,
  useCallback,
  useRef,
} from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';
const ColorContext = React.createContext();

const initialState = { counter: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { counter: state.counter + 1 };
    case 'decrement':
      return { counter: state.counter - 1 };
    default:
      throw new Error();
  }
}

// Components


function ColoredComponent() {
  const color = useContext(ColorContext);
  const [textColor, setTextColor] = useState('black');

  useLayoutEffect(() => {
    setTextColor(color);
  }, [color]);

  return (
    <Text style={[styles.text, { color: textColor }]}>Colored Component</Text>
  );
}

export default function App() {
  const inputRef = useRef(null);
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [color, setColor] = useState('black');

  useLayoutEffect(() => {
    console.log('useLayoutEffect: Before DOM mutation');
    return () => {
      console.log('useLayoutEffect: After DOM mutation');
    };
  }, [count]);

  useEffect(() => {
    console.log('useEffect: After render');
    return () => {
      console.log('useEffect: Before unmount');
    };
  }, [count]);


    const doubleCount = useMemo(() => {
    console.log('Calculating doubleCount...');
    return count * 2;
  }, [count]);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const onBtnPress = () => inputRef.current.focus();

  return (
    <View style={styles.container}>
      <Text>Your count value: {count}</Text>
      <Button title="Press me" onPress={() => setCount(count + 1)} />
      // Reducer
      <Text> Count: {state.counter} </Text>
      <View style={{ marginVertical: 10 }}>
        <Button title="+" onPress={() => dispatch({ type: 'increment' })} />
      </View>
      <Button title="-" onPress={() => dispatch({ type: 'decrement' })} />
      // Handle side effects
      <ColorContext.Provider value={color}>
        <ColoredComponent />
      </ColorContext.Provider>
      <Button
        title="Change Color"
        onPress={() => setColor(color === 'black' ? 'red' : 'black')}
      />
      <View style={{marginVertical: 20}}>
        <TextInput 
        ref={inputRef}
        style={{
          height: 50,
          borderWidth: 1,
          borderColor: 'red',
          marginVertical: 5,
          paddingLeft: 15
        }}/>
        <Button title="Refresh" onPress={onBtnPress}/>
      </View>

      <Text>Count: {count}</Text>
      <Text>Double Count: {doubleCount}</Text>
      <Button title="Increment" onPress={increment} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: '500',
  },
});
