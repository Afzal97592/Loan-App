import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DataTable } from 'react-native-paper'

const Remarks = ({data}) => {
    console.log(data)
  return (
    <View>
        <DataTable>
     {
        data.map((item, i)=>{
            return(
                <View key={i}>
                    <DataTable.Row>
                <DataTable.Cell>{item.status}</DataTable.Cell>
                <DataTable.Cell>{item.remark}</DataTable.Cell>
                </DataTable.Row>
                </View>
            )
        })
     }
     </DataTable>
    </View>
  )
}

export default Remarks

const styles = StyleSheet.create({})