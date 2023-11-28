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
