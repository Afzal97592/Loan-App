import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import NewKycPage from '../../components/BorrowerComponents/NewKycPage';
import NewAddresPage from '../../components/BorrowerComponents/NewAddresPage';
import NewOccupationPage from '../../components/BorrowerComponents/NewOccupationPage';

const Stack = createStackNavigator();

const IndexStack = ({myState}) => {
  return (
    <Stack.Navigator
     initialRouteName='KYC'
    >
      <Stack.Screen name='KYC' component={NewKycPage} options={{headerShown:false}}
       initialParams={{data:myState}}
      />
      <Stack.Screen name ='Address' component={NewAddresPage} 
       options={{headerShown:false}}
      />
      <Stack.Screen name='Occupetion' component={NewOccupationPage}
      options={{headerShown:false}} />
    </Stack.Navigator>
  )
}

export default IndexStack

const styles = StyleSheet.create({})