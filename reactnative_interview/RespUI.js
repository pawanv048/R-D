import { StyleSheet, Text, View, Pressable , TextInput} from 'react-native'
import React, {useRef, useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'



// Pratice responsive ui
const RespUI = () => {

  const input = useRef()
  const [fontSize, setFontSize] = useState(14)
  function updateInput(){
    input.current.focus();
    input.current.setNativeProps({
      style: {
        fontSize: 12,
        color: 'blue'
      }
    });
  }

  
  return (
    // flex divide in equal ratio,
    <View style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'red', flexDirection: 'row'}}>
        <View style={{flex: 1, backgroundColor: 'black', margin: 10}}></View>
        <View style={{flex: 1, backgroundColor: 'orange', margin: 10}}></View>
        <View style={{flex: 1, backgroundColor: 'grey', margin: 10}}></View>
      </View>
      <View style={{flex: 1, backgroundColor: 'green'}}>
        <Pressable
          onPress={updateInput}
          //onPressIn={() => console.warn('press in')}
           //onPressOut={() => console.warn('press out')}
          //  onLongPress={() => console.warn('long press')}
           //by default 500 millisec 
           delayLongPress={1000}
          style={{
            backgroundColor: 'skyblue',
            padding: 10,
            margin: 10,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text>submit</Text>
        </Pressable>

        <TextInput 
          ref={input}
          placeholder='Enter name'
          placeholderTextColor={'red'}
          style={{
            width: '90%',
            height: 50,
            borderWidth: 1,
            borderColor: 'blue',
            marginLeft: 15,
            paddingLeft: 10,
            marginVertical: 10
          }}
        />
        <TextInput 
          placeholder='enter password'
          placeholderTextColor={'red'}
          style={{
            width: '90%',
            height: 50,
            borderWidth: 1,
            borderColor: 'blue',
            marginLeft: 15,
            paddingLeft: 10
          }}
        />
      </View>
      <View style={{flex: 1, backgroundColor: 'blue'}}></View>
    </View>
  )
}

export default RespUI

const styles = StyleSheet.create({

})