import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Services from './src/pages/Services'
import LosPage from './src/pages/LosPage'
import NewLosComponent from './src/components/NewLosComponent'
import Login from './src/pages/Login'
import OtpPage from './src/pages/OtpPage'
import 'react-native-gesture-handler'
import DrawerComp from './src/components/NewLosComponent'


const Stack = createStackNavigator()

const IndexStack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Login' component={Login} options={{headerShown:false}}   />
            <Stack.Screen name='Otp' component={OtpPage} options={{headerShown:false}} />
            <Stack.Screen name = 'Services' component={Services} options={{headerShown:false}}  />
            <Stack.Screen name = 'LosPage' component={LosPage} options={{headerShown:false}} />
            {/* <Stack.Screen name = 'NewLosComp' component={NewLosComponent} options={{headerShown:false}} /> */}
            <Stack.Screen name ='Drawer' component={DrawerComp} options={{headerShown:false}} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default IndexStack

const styles = StyleSheet.create({

})