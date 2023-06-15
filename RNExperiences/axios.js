import { StyleSheet, Button, View } from 'react-native';
import React from 'react';
import axios from 'axios';

// axios.defaults.baseURL = 'https://fakestoreapi.com/';
// axios.defaults.headers.common['Content-Type'] = 'application/json';

axios.defaults.baseURL = 'https://fakestoreapi.com/';
axios.defaults.headers.common['Content-Type'] = 'application/json';

const apiCall = async ({
  url,
  params,
  method,
  onSuccess,
  onError,
  header
}) => {

  let defaultHeader = { 'Content-Type': 'application/json' }
  try {
    const response = await axios({
      url: url,
      method: method,
      headers: header || defaultHeader,
      data: params
    })
    onSuccess(response.data)
  } catch (error) {
    console.log('Error', error)
    onError(error)
  }
}


const Home = () => {

  const handleGetRequest = () => {
    apiCall({
      url: '/products',
      method: 'GET',
      onSuccess: (data) => {
        console.log('GET Request Successful', data);
      },
      onError: (error) => {
        console.log('GET Request Error', error);
      }
    });
  };

  const handlePostRequest = () => {
    apiCall({
      url: '/products',
      method: 'POST',
      params: { 
        title: 'test product',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic'
       },
      onSuccess: (data) => {
        console.log('POST Request Successful', data);
      },
      onError: (error) => {
        console.log('POST Request Error', error);
      }
    });
  };

  const handlePutRequest = () => {
    apiCall({
      url: '/products/1',
      method: 'PUT',
      params: {
        title: 'test product',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic'
      },
      onSuccess: (data) => {
        console.log('PUT Request Successful', data);
      },
      onError: (error) => {
        console.log('PUT Request Error', error);
      }
    })
  };

  const handleDeleteRequest = () => {
    apiCall({
      url: '/products/1',
      method: 'DELETE',
      onSuccess: (data) => {
        console.log('DELETE Request Successful', data);
      },
      onError: (error) => {
        console.log('DELETE Request Error', error);
      }
    });
  };

  return (
    <View>
      <Button title="Get Request" onPress={handleGetRequest} />
      <Button title="Post Request" onPress={handlePostRequest} />
      <Button title="Put Request" onPress={handlePutRequest} />
      <Button title="Delete Request" onPress={handleDeleteRequest} />
    </View>
  )
}

export default Home;
