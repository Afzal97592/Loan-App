import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'


const Drawer = createDrawerNavigator()


const Home = () => {
    return(
  <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>Home</Text>
    </View>
    )
    
  }
  
  const Contact = () => {
  
    return(
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>Contact</Text>
    </View>
    )
  
  }
  
  const Profile = () => {
    return(
       
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <Text>Profile</Text>
      </View>
    )
    
  }
  

const Example = () => {
  return (
    
    <Drawer.Navigator>
      <Drawer.Screen name='Home' component={Home} />
      <Drawer.Screen name='Profile' component={Profile} />
      <Drawer.Screen name='Contact' component={Contact} />
    </Drawer.Navigator>

  )
}

export default Example

const styles = StyleSheet.create({})