import {Button, View, Text, } from 'react-native'
import { useState } from 'react'


// with this useSttate hook we can change the value of name and it will re-render the component with new value of name
// when we click on button it will change the value of name to 'Naseem Durani' and it will re-render the component with new value of name
// and most impportantly it will not change the value of name to 'Naseem Durani' in console because we are using useState hook and it will not change the value of name in console but it will change the value of name in component and it will re-render the component with new value of name in the UI Screen.

const UseStateHook = () => {
      const [name, setName] = useState('Sohail');

  return (
    <View>
      <Text style={{ fontSize: 20 }}>{name}</Text>
       <Button title="Press" onPress={() => setName('Naseem Durani')} />
    </View>
  )
}

export default UseStateHook