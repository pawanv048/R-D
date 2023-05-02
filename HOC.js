
import React from 'react';
import { View } from 'react-native';

const withBorder = (WrappedComponent) => {
  return (props) => {
    return (
      <View style={{ borderWidth: 1, borderColor: 'black' }}>
        <WrappedComponent {...props} />
      </View>
    );
  }
}

const MyComponent = () => {
  return (
    <View style={{ padding: 20 }}>
      <Text>Hello, world!</Text>
    </View>
  );
}

export default withBorder(MyComponent);
