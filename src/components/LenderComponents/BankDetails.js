import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { DataTable } from 'react-native-paper'

const BankDetails = ({data}) => {

    console.log(data)

  return (
    <View
    style={{
        flex:1,
        alignItems:'center',
        marginTop:10
     }}
    >
    <Text style={{fontSize:24, fontWeight:'600', color:'#F8981D', marginBottom:10}}>Bank Details</Text>

    <FlatList
    showsVerticalScrollIndicator={false}
     style={{flex:1, width:'100%'}}
    data={[data]}
    renderItem={({item})=>
    <View style={{ flex:1,alignItems:'center', width:'100%',}}>
    <DataTable>
     <DataTable.Row>
       <DataTable.Cell>Loan Ammount</DataTable.Cell>
       {/* <DataTable.Cell>{item.vehicle_type}</DataTable.Cell> */}
     </DataTable.Row>
     <DataTable.Row>
       <DataTable.Cell>Down Payment</DataTable.Cell>
       {/* <DataTable.Cell>{item.manufacturer_name}</DataTable.Cell> */}
     </DataTable.Row>
     <DataTable.Row>
       <DataTable.Cell>Lender Processing Fees</DataTable.Cell>
       {/* <DataTable.Cell>{item.processing_amount}</DataTable.Cell> */}
     </DataTable.Row>
     <DataTable.Row>
       <DataTable.Cell>Intrest</DataTable.Cell>
       {/* <DataTable.Cell>{item.interest}</DataTable.Cell> */}
     </DataTable.Row>
     <DataTable.Row>
       <DataTable.Cell>Emi</DataTable.Cell>
       {/* <DataTable.Cell>{item.emi}</DataTable.Cell> */}
     </DataTable.Row>
     <DataTable.Row>
       <DataTable.Cell>Tenure</DataTable.Cell>
       {/* <DataTable.Cell>{item.tenure}</DataTable.Cell> */}
     </DataTable.Row>
     <DataTable.Row>
       <DataTable.Cell>Total Paid Ammount</DataTable.Cell>
       {/* <DataTable.Cell>{item.battery_manufacturer_name}</DataTable.Cell> */}
     </DataTable.Row>
     <DataTable.Row>
       <DataTable.Cell>Battery Manufacturer Year</DataTable.Cell>
       {/* <DataTable.Cell>{item.battery_manufacturer_year}</DataTable.Cell> */}
     </DataTable.Row>
     <DataTable.Row>
       <DataTable.Cell>Lender Name</DataTable.Cell>
       {/* <DataTable.Cell>{item.battery_manufacturing_guarantee}</DataTable.Cell> */}
     </DataTable.Row>
     <DataTable.Row>
       <DataTable.Cell>Lender Civil</DataTable.Cell>
       {/* <DataTable.Cell>{item.guarantee_type}</DataTable.Cell> */}
     </DataTable.Row>
     <DataTable.Row>
       <DataTable.Cell>Branch Name </DataTable.Cell>
       {/* <DataTable.Cell>{item.branch_name}</DataTable.Cell> */}
     </DataTable.Row>
     <DataTable.Row>
       <DataTable.Cell>Branch Area </DataTable.Cell>
       {/* <DataTable.Cell>{item.branch_name}</DataTable.Cell> */}
     </DataTable.Row>
     <DataTable.Row>
       <DataTable.Cell>Branch Address </DataTable.Cell>
       {/* <DataTable.Cell>{item.branch_name}</DataTable.Cell> */}
     </DataTable.Row>
     <DataTable.Row>
       <DataTable.Cell>Date </DataTable.Cell>
       {/* <DataTable.Cell>{item.branch_name}</DataTable.Cell> */}
     </DataTable.Row>
    </DataTable>
    </View>
    }
  
   />

    </View>
  )
}

export default BankDetails

const styles = StyleSheet.create({})