import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DataTable } from 'react-native-paper'

const NewKycPage = ({route}) => {
  console.log(route.params.data)
  const data = route.params.data
  // console.log(data.id)
  
  return (
    <>
    <View
     style={{
        flex:1,
        alignItems:'center',
        marginTop:20,
     }}
    >
      <FlatList
      style={{flex:1, width:'100%'}}
     data={[data]}
     renderItem={({item})=>
     <View style={{ flex:1,alignItems:'center', width:'100%',}}>
     <DataTable>
      <DataTable.Row>
        <DataTable.Cell>Pan</DataTable.Cell>
        <DataTable.Cell>{item.pan}</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Aadhar</DataTable.Cell>
        <DataTable.Cell>{item.aadhar}</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>DOB</DataTable.Cell>
        <DataTable.Cell>{item.dob_date}</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Father's Name</DataTable.Cell>
        <DataTable.Cell>{item.father_name}</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Gender</DataTable.Cell>
        <DataTable.Cell>{item.gender}</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Email</DataTable.Cell>
        <DataTable.Cell>{item.email}</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Cibil</DataTable.Cell>
        <DataTable.Cell>{item.cibil}</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Postal</DataTable.Cell>
        <DataTable.Cell>{item.postal}</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>State</DataTable.Cell>
        <DataTable.Cell>{item.state}</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Country</DataTable.Cell>
        <DataTable.Cell>{item.country}</DataTable.Cell>
      </DataTable.Row>
     </DataTable>
     </View>
     }
    

    />

    </View>
    
    </>
  )
}

export default NewKycPage

const styles = StyleSheet.create({})