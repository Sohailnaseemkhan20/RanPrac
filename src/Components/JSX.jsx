import {Button, View, Text } from 'react-native'
import React from 'react'

// in thus component we are using normal variable name and when 
// we click on button it will change the value of name to 'Naseem' and it will not re-render
//  the component with new value of name because we are not using useState hook and it
//  will change the value of name in console but it will not change the value of
//  name in component and it will not re-render the component with new value of 
// name in the UI Screen.

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