import { View, Text } from 'react-native'
import React from 'react'
import JSX from './src/Components/JSX'
import UseStateHook from './src/Components/UseStateHook'

// in this file we are importing JSX and UseStateHook components and we are rendering them in the 
// App component and we are also rendering a Text component to welcome the user to RanPrac.

const App = () => {
  return (
    <View>
      <Text>Hi, Welcome to RanPrac</Text>
      <JSX />
      <UseStateHook />
    </View>
    
  )
  }

export default App