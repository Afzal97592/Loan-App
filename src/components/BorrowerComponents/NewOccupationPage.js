import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { DataTable } from 'react-native-paper'

const NewOccupationPage = ({route}) => {
  console.log(route.params.state)

  const data = route.params.state
  // console.log(data.id)

  return (
    <View
     style={{
        flex:1,
        alignItems:'center',
        marginTop:20
     }}
    >
      <FlatList
      style={{flex:1, width:'100%', padding:0,}}
     data={[data]}
     renderItem={({item})=>
     <View style={{ flex:1,alignItems:'center', width:'100%',}}>
     <DataTable>
      <DataTable.Row>
        <DataTable.Cell>Occupation Type</DataTable.Cell>
        <DataTable.Cell>{item.occupation_type}</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Current Occupation</DataTable.Cell>
        <DataTable.Cell>{item.current_occupation}</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Driving Experience</DataTable.Cell>
        <DataTable.Cell>{item.driving_experience}</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Vehicle Type</DataTable.Cell>
        <DataTable.Cell>{item.vehicle_type}</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Current City</DataTable.Cell>
        <DataTable.Cell>{item.current_city}</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Total Income</DataTable.Cell>
        <DataTable.Cell>{item.total_income}</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Monthly Income</DataTable.Cell>
        <DataTable.Cell>{item.monthly_earning}</DataTable.Cell>
      </DataTable.Row> 
     </DataTable>
     </View>
     } 
    // {/* //  keyExtractor={item.id} */}

    />

    </View>
  )
}

export default NewOccupationPage

const styles = StyleSheet.create({})