import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import GurantorKyc from '../../components/GurantorComponetns/GurantorKyc'
import GurantorAddress from '../../components/GurantorComponetns/GurantorAddress'
import GuranterOccupation from '../../components/GurantorComponetns/GuranterOccupation'

const Stack = createStackNavigator()

const GuranterIndex = () => {
  return (
   <Stack.Navigator
    initialRouteName='GuranterKyc'
   >
    <Stack.Screen name='GuranterKyc' component={GurantorKyc} options={{headerShown:false}} />
    <Stack.Screen name='GuranterAddress' component={GurantorAddress} options={{headerShown:false}} />
    <Stack.Screen name='GuranterOccupation' component={GuranterOccupation} options={{headerShown:false}} />
   </Stack.Navigator>
  )
}

export default GuranterIndex

const styles = StyleSheet.create({})