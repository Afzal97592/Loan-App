import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { DataTable } from 'react-native-paper'

const AssetData = ({data}) => {
    // console.log(data.battery_manufacturer_name)
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
       <DataTable.Cell>Vehicle Type</DataTable.Cell>
       <DataTable.Cell>{item.vehicle_type}</DataTable.Cell>
     </DataTable.Row>
     <DataTable.Row>
       <DataTable.Cell>Manufacturer Name</DataTable.Cell>
       <DataTable.Cell>{item.manufacturer_name}</DataTable.Cell>
     </DataTable.Row>
     <DataTable.Row>
       <DataTable.Cell>Manufacturering Year</DataTable.Cell>
       <DataTable.Cell>{item.manufacturing_year}</DataTable.Cell>
     </DataTable.Row>
     <DataTable.Row>
       <DataTable.Cell>Manufacturing Guarantee</DataTable.Cell>
       <DataTable.Cell>{item.manufacturing_guarantee}</DataTable.Cell>
     </DataTable.Row>
     <DataTable.Row>
       <DataTable.Cell>Chasis No</DataTable.Cell>
       <DataTable.Cell>{item.chasis_no}</DataTable.Cell>
     </DataTable.Row>
     <DataTable.Row>
       <DataTable.Cell>Battery Type</DataTable.Cell>
       {/* <DataTable.Cell>{item.battery_type}</DataTable.Cell> */}
     </DataTable.Row>
     <DataTable.Row>
       <DataTable.Cell>Battery Manufacturer Name</DataTable.Cell>
       <DataTable.Cell>{item.battery_manufacturer_name}</DataTable.Cell>
     </DataTable.Row>
     <DataTable.Row>
       <DataTable.Cell>Battery Manufacturer Year</DataTable.Cell>
       <DataTable.Cell>{item.battery_manufacturer_year}</DataTable.Cell>
     </DataTable.Row>
     <DataTable.Row>
       <DataTable.Cell>Battery Manufacturing Guarantee</DataTable.Cell>
       <DataTable.Cell>{item.battery_manufacturing_guarantee}</DataTable.Cell>
     </DataTable.Row>
     <DataTable.Row>
       <DataTable.Cell>Type Of Guarantee</DataTable.Cell>
       <DataTable.Cell>{item.guarantee_type}</DataTable.Cell>
     </DataTable.Row>
    </DataTable>
    </View>
    }
  
   />
    </View>
  )
}

export default AssetData

const styles = StyleSheet.create({})