import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CoApplicantKyc from '../../components/CoApplicantComponents/CoApplicantKyc';
import CoAppicantAddress from '../../components/CoApplicantComponents/CoAppicantAddress';
import CoApplicantOccupation from '../../components/CoApplicantComponents/CoApplicantOccupation';


const Stack = createStackNavigator();


const CoApplicantIndexStack = ({coApplicantState}) => {
    console.log(coApplicantState)
  return (
   
     <Stack.Navigator
      initialRouteName='coApplicantKyc'
     >
        <Stack.Screen name = 'coApplicantKyc' component={CoApplicantKyc}
         initialParams={{data:coApplicantState}}
         options={{headerShown:false}}
        />
        <Stack.Screen name = 'coApplicantAddress' component={CoAppicantAddress} 
         options={{headerShown:false}}
        />
        <Stack.Screen name = 'coApplicantOccupation' component={CoApplicantOccupation} 
         options={{headerShown:false}}
        />
     </Stack.Navigator>
   
  )
}

export default CoApplicantIndexStack

const styles = StyleSheet.create({})