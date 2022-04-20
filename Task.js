// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// const Task = (props) => {

//   return (
//     <View style={styles.item}>
//       <View style={styles.itemLeft}>
//         <View style={styles.square}></View>
//         <Text style={styles.itemText}>{props.text}</Text>
//       </View>
//       <View style={styles.circular}></View>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   item: {
//     backgroundColor: '#FFF',
//     padding: 15,
//     borderRadius: 10,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   itemLeft: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     flexWrap: 'wrap'
//   },
//   square: {
//     width: 24,
//     height: 24,
//     backgroundColor: '#55BCF6',
//     opacity: 0.4,
//     borderRadius: 5,
//     marginRight: 15,
//   },
//   itemText: {
//     maxWidth: '80%',
//   },
//   circular: {
//     width: 12,
//     height: 12,
//     borderColor: '#55BCF6',
//     borderWidth: 2,
//     borderRadius: 5,
//   },
// });

// export default Task;


import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}

export default Task;

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        marginRight: 15,
        borderRadius: 5,
    },
    itemText: {
        maxWidth: '80%'
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
    }

})