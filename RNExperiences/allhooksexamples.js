import React, { useState, useEffect, useContext, useReducer, useLayoutEffect } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFocusEffect } from '@react-navigation/native';

// Context Creation
const AppContext = React.createContext();

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function HomeScreen({ navigation }) {
  const [name, setName] = useState(''); // useState example
  const { globalState, setGlobalState } = useContext(AppContext); // useContext example

  useEffect(() => {
    console.log('HomeScreen mounted');
    return () => console.log('HomeScreen unmounted');
  }, []); // useEffect example

  useLayoutEffect(() => {
    navigation.setOptions({
      title: name ? `Hello, ${name}` : 'Home Screen',
    });
  }, [name]); // useLayoutEffect example

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Global Counter: {globalState.count}</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen() {
  const [localCounter, setLocalCounter] = useState(0); // useState example
  const { globalState, dispatch } = useContext(AppContext); // useContext and useReducer example

  useFocusEffect(
    React.useCallback(() => {
      console.log('DetailsScreen is focused');
      return () => console.log('DetailsScreen is unfocused');
    }, [])
  ); // useFocusEffect example

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Local Counter: {localCounter}</Text>
      <Button title="Increase Local" onPress={() => setLocalCounter(localCounter + 1)} />
      <Text style={styles.title}>Global Counter: {globalState.count}</Text>
      <Button title="Increase Global" onPress={() => dispatch({ type: 'increment' })} />
      <Button title="Decrease Global" onPress={() => dispatch({ type: 'decrement' })} />
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  const [globalState, dispatch] = useReducer(reducer, { count: 0 }); // useReducer example
  const value = { globalState, dispatch };

  return (
    <AppContext.Provider value={value}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 20,
    marginBottom: 16,
  }
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});
