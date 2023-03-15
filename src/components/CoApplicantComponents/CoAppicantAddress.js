import { StyleSheet, Text, View, FlatList } from 'react-native'
import { DataTable } from 'react-native-paper';
import React from 'react'

const CoAppicantAddress = ({route}) => {

  // console.log(route.params.state.id)

  const data = route.params.state;

  return (
    <View
    style={{
       flex:1,
       alignItems:'center',
       marginTop:20
    }}
   >
     <FlatList
     style={{flex:1, width:'100%'}}
    data={[data]}
    renderItem={({item})=>
    <View style={{ flex:1,alignItems:'center', width:'100%',}}>
    <DataTable>
     <DataTable.Row>
       <DataTable.Cell>Resident Type</DataTable.Cell>
       <DataTable.Cell>{item.resident_type}</DataTable.Cell>
     </DataTable.Row>
     <DataTable.Row>
       <DataTable.Cell>Current Address</DataTable.Cell>
       <DataTable.Cell>{item.current_address}</DataTable.Cell>
     </DataTable.Row>
     <DataTable.Row>
       <DataTable.Cell>Parmanent Address</DataTable.Cell>
       <DataTable.Cell>{item.permanent_address}</DataTable.Cell>
     </DataTable.Row>
     <DataTable.Row>
       <DataTable.Cell>Years Of Liveing</DataTable.Cell>
       <DataTable.Cell>{item.years_living}</DataTable.Cell>
     </DataTable.Row>
     <DataTable.Row>
       <DataTable.Cell>Family members</DataTable.Cell>
       <DataTable.Cell>{item.family_members}</DataTable.Cell>
     </DataTable.Row>
     <DataTable.Row>
       <DataTable.Cell>Family Income</DataTable.Cell>
       <DataTable.Cell>{item.family_income}</DataTable.Cell>
     </DataTable.Row>
     <DataTable.Row>
       <DataTable.Cell>Earning Members</DataTable.Cell>
       <DataTable.Cell>{item.earning_members}</DataTable.Cell>
     </DataTable.Row> 
    </DataTable>
    </View>
    }
  

   />

   </View>
  )
}

export default CoAppicantAddress

const styles = StyleSheet.create({})