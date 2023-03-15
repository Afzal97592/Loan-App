import { StyleSheet, Text, View,FlatList } from 'react-native'
import { DataTable } from 'react-native-paper'
import React from 'react'

const CourierDetails = () => {
  const data = data;
  return (
    <View
    style={{
        flex:1,
        alignItems:'center',
        marginTop:10
     }}
    >
    <Text style={{fontSize:24, fontWeight:'600', color:'#F8981D', marginBottom:10}}>Courier Details</Text>

    <FlatList
    showsVerticalScrollIndicator={false}
     style={{flex:1, width:'100%'}}
    data={[data]}
    renderItem={({item})=>
    <View style={{ flex:1,alignItems:'center', width:'100%',}}>
    <DataTable>
     <DataTable.Row>
       <DataTable.Cell>Courier Name</DataTable.Cell>
       {/* <DataTable.Cell>{item.vehicle_type}</DataTable.Cell> */}
     </DataTable.Row>
     <DataTable.Row>
       <DataTable.Cell>AWB Number</DataTable.Cell>
       {/* <DataTable.Cell>{item.manufacturer_name}</DataTable.Cell> */}
     </DataTable.Row>
     <DataTable.Row>
       <DataTable.Cell>Courier Date</DataTable.Cell>
       {/* <DataTable.Cell>{item.processing_amount}</DataTable.Cell> */}
     </DataTable.Row>
     <DataTable.Row>
       <DataTable.Cell>Executive Details</DataTable.Cell>
       {/* <DataTable.Cell>{item.interest}</DataTable.Cell> */}
     </DataTable.Row>
     <DataTable.Row>
       <DataTable.Cell>Executive Name</DataTable.Cell>
       {/* <DataTable.Cell>{item.emi}</DataTable.Cell> */}
     </DataTable.Row>
     <DataTable.Row>
       <DataTable.Cell>Executive Email</DataTable.Cell>
       {/* <DataTable.Cell>{item.tenure}</DataTable.Cell> */}
     </DataTable.Row>
     <DataTable.Row>
       <DataTable.Cell>Executive Mobile</DataTable.Cell>
       {/* <DataTable.Cell>{item.battery_manufacturer_name}</DataTable.Cell> */}
     </DataTable.Row>
    </DataTable>
    </View>
    }
  
   />

    </View>
  )
}

export default CourierDetails

const styles = StyleSheet.create({})