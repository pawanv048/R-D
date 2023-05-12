import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import commonStyle from '../commonStyle'
import { TextInput } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-async-storage/async-storage'



const Home = () => {

  const [name, setName] = useState('')
  const [email, setemail] = useState('')
  const [password, setPassword] = useState('')
  const [display, setDisplay] = useState(false)


  // function changeName() {
  //   setName('sumit')
  // }


  /**very very impotant***/
  // when state is update this function call always
  // to prevent from multi-rendering we can use empty array, so this will call only when component is mount
  // useEffect is works as ComponentDidMount when it's assign to []
  useEffect(() => {
    console.warn('component mount')
  }, [])


  // useEffect is works as ComponentDidUpdate when it's assign to [anydependce]
  // it called only when "password" is getting updated depends on password
  useEffect(() => {
    console.warn('component update')
  }, [password])

  function resetForm() {
    setDisplay(false)
    setName('')
    setemail('')
    setPassword('')
  }

  const storeData = async() =>{
    await AsyncStorage.setItem('useName', 'pawan')
  }

  const getData = async() =>{
    const name = await AsyncStorage.getItem('useName')
    setName(name)
  }

  const removeData = async() =>{
    await AsyncStorage.removeItem('useName')
  }

  let age = 30
  return (
    <View>
      <Text>{age}</Text>
      {/* <Button title='Name' onPress={changeName} /> */}



      <TextInput
        value={name}
        style={styles.input}
        onChangeText={text => setName(text)}
        placeholder='Enter Name'
      />
      <TextInput
        value={email}
        style={styles.input}
        onChangeText={(text) => setemail(text)}
        placeholder='Enter email'
      />
      <TextInput
        value={password}
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        placeholder='Enter Password'
      />

      <View>
        <Button title='clear' onPress={resetForm} />
      </View>

      <View>
        <Button title='submit' onPress={() => setDisplay(true)} />
      </View>

      {display ? (
        <View>
          <Text>Entered Name: {name}</Text>
          <Text>Entered email: {email}</Text>
          <Text>Entered password: {password}</Text>
        </View>
      ) : null}


      <User age={age} info={{ name, email }} />

      <Text style={{textAlign: 'center'}}>AsyncStorage value: {name}</Text>
      <Button title='SetData' onPress={storeData}/>
      <Button title='GetData' onPress={getData}/>
      <Button title='Remove' onPress={removeData}/>
    </View>
  )
}

const User = (props) => {

  const [show, setShow] = useState(false)
  // how to pass props and Bind with use effect hook
  // this is use as a componetDidUpdate 
  useEffect(() => {
    console.warn('run when name is update')
  }, [props.info.name])

  useEffect(() => {
    console.warn('run when email is update')
  }, [props.info.email])

  // console.warn(props.info)
  return (
    <>
      <View>
        <Text>child component: 20</Text>
        <Text style={commonStyle.textBox}>Hello Dev</Text>
      </View>

      <View>
        <Text> Show/Hide component</Text>
        <Button title='toggleButton' onPress={() => setShow(!show)} />

        {/* if you write only show bydefault show is true always no matter what */}
        {/*Need of life cycle when it's unmount*/}
        {
          show ? <SubUser /> : null
        }
      </View>
    </>
  )
}


function SubUser({navigation}) {


// very important concept.
{/*Need of life cycle when it's unmount*/}
{/*use => timer function running on the background so it is called every time, it cause batter storage issue 
  so to prevent from that we need to clean up when component get unmounted.

*/}

// All timer function running on the background.
// so, always stored in varible and clean up this intervals
// not consuming memory 

let timer = setInterval(() => {
  console.warn('Timmer function call')
}, 2000);

  useEffect(() => {
    // return () => {console.warn('running when component is unmounted')}
    return () => clearInterval(timer)
  },[])

  return (
    <View>
      <Text style={{
        fontSize: 20, color: 'green'
      }}>SUB USER COMPONENT</Text>
      
    </View>
  )
}





export default Home

const styles = StyleSheet.create({
  input: {
    margin: 20,
    height: 50,
    borderWidth: 1,
    paddingLeft: 5
  }
})