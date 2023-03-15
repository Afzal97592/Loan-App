import { StyleSheet, Text, View, FlatList } from 'react-native'
import { DataTable } from 'react-native-paper'
import React from 'react'

const GurantorKyc = () => {
    const data = data
  return (
    <View
     style={{
        flex:1,
        // width:'100%',
        // backgroundColor:'black',
        alignItems:'center',
        marginTop:20,
     }}
    >
      <FlatList
      style={{flex:1, width:'100%'}}
     data={[data]}
     renderItem={({item})=>
     <View style={{ flex:1, alignItems:'center', width:'100%',}}>
     <DataTable>
      <DataTable.Row>
        <DataTable.Cell>Pan</DataTable.Cell>
        {/* <DataTable.Cell>{item.pan}</DataTable.Cell> */}
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Aadhar</DataTable.Cell>
        {/* <DataTable.Cell>{item.aadhar}</DataTable.Cell> */}
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>DOB</DataTable.Cell>
        {/* <DataTable.Cell>{item.dob_date}</DataTable.Cell> */}
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Father's Name</DataTable.Cell>
        {/* <DataTable.Cell>{item.father_name}</DataTable.Cell> */}
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Gender</DataTable.Cell>
        {/* <DataTable.Cell>{item.gender}</DataTable.Cell> */}
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Email</DataTable.Cell>
        {/* <DataTable.Cell>{item.email}</DataTable.Cell> */}
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Cibil</DataTable.Cell>
        {/* <DataTable.Cell>{item.cibil}</DataTable.Cell> */}
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Postal</DataTable.Cell>
        {/* <DataTable.Cell>{item.postal}</DataTable.Cell> */}
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>State</DataTable.Cell>
        {/* <DataTable.Cell>{item.state}</DataTable.Cell> */}
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Country</DataTable.Cell>
        {/* <DataTable.Cell>{item.country}</DataTable.Cell> */}
      </DataTable.Row>
     </DataTable>
     </View>
     }
    

    />

    </View>
  )
}

export default GurantorKyc

const styles = StyleSheet.create({})