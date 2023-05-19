import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToMyCart } from '../newredux/MyCartSlice';

const Home = ({navigation}) => {

  const myProducts = useSelector((state) => state.product); // Access the 'product' slice from the store
  const myCartItem = useSelector((state) => state.cart); // Access the 'product' slice from the store
  const dispatch = useDispatch();
  // console.log('addedproduct:', myCartItem);

  const getTotal = () => {
    let total = 0;
    myCartItem.map((item) => {
      total = total + item.qty + item.price
    })
    return total
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={s.container}>
        <Text style={s.headtxt}>Redux Toolkit</Text>
      </View>
      <FlatList
        data={myProducts}
        contentContainerStyle={{ margin: 20 }}
        
        renderItem={({ item, index }) => {
          return (
            <View style={s.subcontainer}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  marginTop: 10,
                  marginLeft: 20
                }}>
                <Image
                  source={{ uri: item.image }}
                  style={{
                    width: 80,
                    height: 80,
                    //margin: 10,
                    borderRadius: 10
                  }}
                />
                <View style={{ marginHorizontal: 15 }}>
                  <Text>{item.name}</Text>
                  <Text>{item.brand}</Text>
                  <Text style={{ color: 'green' }}>{'$' + item.price}</Text>
                  <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                      style={s.cart}
                      onPress={() => dispatch(addProductToMyCart(item))}
                    >
                      <Text style={s.cartxt}>Add To Cart</Text>
                    </TouchableOpacity>
                    {item.qty > 0 ? (
                      <TouchableOpacity style={s.cart}>
                        <Text style={s.cartxt}> + </Text>
                      </TouchableOpacity>
                    ) : null}

                    {item.qty > 0 ? (
                      <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text> 0 </Text>
                      </TouchableOpacity>
                    ) : null}
                    {item.qty > 0 ? (
                      <TouchableOpacity style={s.cart}>
                        <Text style={s.cartxt}> - </Text>
                      </TouchableOpacity>
                    ) : null}
                  </View>
                </View>

              </View>
            </View>
          )
        }}
      />

      <View
        style={{
          width: '100%',
          height: 100,
          backgroundColor: 'white',
          position: 'absolute',
          bottom: 0,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly'
        }}>
        <View style={{
          width: '50%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: 'grey'
          }}>{`Added items (${myCartItem.length})`}</Text>
          <Text style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: 'grey'
          }}>{`Total : ${getTotal()}`}</Text>
        </View>
        <TouchableOpacity
        onPress={() => navigation.navigate('MyCart')}
          style={{
            //width: '70%',
            height: 45,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 15,
            backgroundColor: 'green'  
          }}
        >
          <Text style={{color: 'white'}}>View Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Home

const s = StyleSheet.create({
  container: {
    //flex: 1,
    padding: 20,
    backgroundColor: 'white',
    width: '100%',
    height: 60,
    marginBottom: 10
  },
  headtxt: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  subcontainer: {
    //margin: 30,
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 5,
    width: '100%',
    height: 120,
  },
  cart: {
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 5,
    marginHorizontal: 4,
    marginTop: 5
  },
  cartxt: {
    color: 'white',
    fontSize: 15,
    fontWeight: '400'
  }
})