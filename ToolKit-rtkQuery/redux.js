import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useAddNewPostMutation, useDeletePostMutation, useGetDataByIdQuery, useGetDataQuery } from '../services/GetApiCall'

const Redux = () => {

  const { data, isError, isFetching, isLoading, isSuccess } = useGetDataQuery();
  const res = useGetDataByIdQuery(1);


  // console.log('product', data);
  // console.log('mydata =>',isError);
  // console.log('Loading:', isLoading);
  // console.log('Success:', isSuccess);
  // console.log('Fetching:', isFetching);
  // console.log('response:', JSON.stringify(res));

  // response: {"status":"rejected","endpointName":"getDataById","requestId":"Vkhs-t1J5CgT-xAYReJ43","originalArgs":1,"startedTimeStamp":1684404181151,"error":{"status":"PARSING_ERROR","originalStatus":404,"data":"<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot GET /Product/1</pre>\n</body>\n</html>\n","error":"SyntaxError: JSON Parse error: Unrecognized token '<'"},"isUninitialized":false,"isLoading":false,"isSuccess":false,"isError":true,"isFetching":false}

  // addNewPost is the function,
  const [addPost] = useAddNewPostMutation();
  const [deleteData] = useDeletePostMutation();

  const deletepost = async() => {
    const res = await deleteData('6')
    console.log(res)
  }


  //{"data": {"category": "jewelery", "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.", "id": 6, "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg", "price": 168, "rating": {"count": 70, "rate": 3.9}, "title": "Solid Gold Petite Micropave "}}
  
  const addNewPost = async () => {
    const response = await addPost({
      title: 'test product',
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic'
    })
    console.log('post:', response);
  }
  return (
    <View>
      <Text>redux toolkit</Text>
      <Button title='post' onPress={() => addNewPost()}/>
      <Button title='delete' onPress={() => deletepost()}/>
    </View>
  )
}

export default Redux

const styles = StyleSheet.create({})