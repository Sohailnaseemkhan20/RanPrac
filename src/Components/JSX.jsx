import {Button, View, Text } from 'react-native'
import React from 'react'



const JSX = () => {
 let name = 'Sohail'
  
  const getName = () => {
     name = 'Naseem'
    console.warn('Name' , name)
  };


  return (
    <View>
      
        <Text style={{ fontSize: 20 }}>My name is {name}</Text>
        <Button title="Press" onPress={getName} />
        
        
    </View>
  )
}

export default JSX