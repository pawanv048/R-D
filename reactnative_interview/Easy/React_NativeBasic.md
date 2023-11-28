### REACT NATIVE BASIC

**Props**
 props (short for properties) are a mechanism for passing data from a parent component to a child component.
 1. Passing Props:
 ```
// ParentComponent.js
import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const data = 'Hello from parent!';
  return <ChildComponent message={data} />;
};

export default ParentComponent;

```
 3. Accessing Props
 4. Dynamic Props: Props are not limited to static values; you can also pass dynamic values or functions
 5. Default Props: You can also specify default values for props in case they are not provided
 ```

```
