import { StyleSheet, Text, View, FlatList } from 'react-native'
import { DataTable } from 'react-native-paper'
import React from 'react'

const LosDocuments = ({data}) => {
 console.log(data)
  return (
    <View
    style={{
        flex:1,
        alignItems:'center',
        marginTop:10
     }}
    >
      <Text style={{fontSize:24, fontWeight:'600', color:'#F8981D', marginBottom:10}}>Documents</Text>


      <FlatList
    showsVerticalScrollIndicator={false}
     style={{flex:1, width:'100%'}}
    data={[data]}
    renderItem={({item})=>
    <View style={{ flex:1,alignItems:'center', width:'100%',}}>
    <DataTable>
     <DataTable.Row>
       <DataTable.Cell>Aadhar Front</DataTable.Cell>
       <DataTable.Cell>{item.aadhar_front}</DataTable.Cell>
     </DataTable.Row>
     <DataTable.Row>
       <DataTable.Cell>Aadhar Back</DataTable.Cell>
       <DataTable.Cell>{item.aahar_back}</DataTable.Cell>
     </DataTable.Row>
     <DataTable.Row>
       <DataTable.Cell>Pan Card</DataTable.Cell>
       <DataTable.Cell>{item.pan_doc}</DataTable.Cell>
     </DataTable.Row>
     <DataTable.Row>
       <DataTable.Cell>Parmanent Address Proof</DataTable.Cell>
       <DataTable.Cell>{item.per_address_proof}</DataTable.Cell>
     </DataTable.Row>
     <DataTable.Row>
       <DataTable.Cell>Resident Address Proof</DataTable.Cell>
       <DataTable.Cell>{item.res_address_proof}</DataTable.Cell>
     </DataTable.Row>
     <DataTable.Row>
       <DataTable.Cell>Vehicle Quotation</DataTable.Cell>
       <DataTable.Cell>{item.vehicle_quotation}</DataTable.Cell>
     </DataTable.Row>
     <DataTable.Row>
       <DataTable.Cell>Addidtional Doc</DataTable.Cell>
       <DataTable.Cell>{item.additional_doc}</DataTable.Cell>
     </DataTable.Row>
    
    </DataTable>
    </View>
    }
  
   />

    </View>
  )
}

export default LosDocuments

const styles = StyleSheet.create({})