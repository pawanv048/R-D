### REACT NATIVE BASIC

**Props**
 props (short for properties) are a mechanism for passing data from a parent component to a child component.
 1. Passing Props:
 ```
 ParentComponent.js
import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const data = 'Hello from parent!';
  return <ChildComponent message={data} />;
};

export default ParentComponent;

```
 2. Accessing Props:
```
// ChildComponent.js
import React from 'react';
import { Text } from 'react-native';

const ChildComponent = (props) => {
  return <Text>{props.message}</Text>;
};

export default ChildComponent;

```
 3. Dynamic Props: Props are not limited to static values; you can also pass dynamic values or functions

```
// ParentComponent.js
import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const dynamicData = 'Dynamic prop!';
  const dynamicFunction = () => alert('Button pressed!');
  return (
    <>
      <ChildComponent message={dynamicData} onPress={dynamicFunction} />
    </>
  );
};

export default ParentComponent;

// ChildComponent.js
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const ChildComponent = (props) => {
  return (
    <>
      <Text>{props.message}</Text>
      <TouchableOpacity onPress={props.onPress}>
        <Text>Press me</Text>
      </TouchableOpacity>
    </>
  );
};

export default ChildComponent;

```
 4. Default Props: You can also specify default values for props in case they are not provided
```
// ChildComponent.js
import React from 'react';
import { Text } from 'react-native';

const ChildComponent = (props) => {
  return <Text>{props.message || 'Default Message'}</Text>;
};

export default ChildComponent;

```


**States**

In React Native, state is the data that a component can modify and re-render based on its value. It's a mutable property, meaning it can be changed over time, and it's private to the component itself. This means that other components cannot directly access or modify the state of another component.

State is a key concept in React Native because it allows you to manage the data within a component and keep it in sync with the UI. This is important for creating dynamic and interactive applications.

Here are some common examples of where state might be used in React Native:

User input: When a user enters text into an input field, you can store that text in state and then use it to render the current value of the input.
Toggles and switches: You can use state to toggle a switch or checkbox on or off, and then update the UI accordingly.
Counts: You can use state to keep track of a count, such as the number of items in a shopping cart, and then render the updated count.
