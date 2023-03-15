import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-native";
import { SelectList } from "react-native-dropdown-select-list";
import { FontAwesome } from "react-native-vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { DataTable } from "react-native-paper";
import {AntDesign} from 'react-native-vector-icons';
import { useNavigation } from "@react-navigation/native";


const LosPage = ({navigation,route}) => {
  const [status, setStatus] = useState('NEW');
  // const [data, setdata] = useState([route.params.state])
  // console.log(route.params.state)
  // console.log(typeof(status))
  // console.log(route)


  // const navigation = useNavigation();
  // console.log(navigation)

  //  API Data
  const [Data, setData] = useState([]);
  // const navigate = useNavigate();

  // const LosType = ["CREDITCHECK", "FI", "NEW", "APPROVED", "REJECTED"];

  const LosType = [
    {key:'1',value:'CREDITCHECK'},
    {key:'2',value:'FI'},
    {key:'3',value:'NEW'},
    {key:'4',value:'APPROVED'},
    {key:'5',value:'REJECTED'},
  ];


  //  const selectStatus = (e) =>{
  //          setStatus(e.target.value)
  //  }
  // console.log(typeof status);

 
 const getData =  async() => {

 var token = await AsyncStorage.getItem('token')
//  console.log(typeof(token))

  var config = {
    method: "get",
    url: `http://ec2-15-206-136-105.ap-south-1.compute.amazonaws.com/api/v1/loans/executive?status=${status}`,
    headers: {
      Authorization:`Bearer ${token}`
    }
  };

  axios(config)
    .then(function (response) {
      // console.log(response.data.data);
      setData(response.data.data);
    })
    .catch(function (error) {
      console.log(error);
    });
 }

  useEffect(() => {
     
    getData();

  }, [status]);

      
     

 
  // console.log(Data);
  // console.log(status);
  const LosDataSubmit = (loanDetails) => {
   
    // navigate("/los/newlos", {state:loanDetails});
      // console.log(status)
     navigation.navigate('Drawer',
      {data:'loanDetails'}
       )

  };

  return (
    
    <View style={styles.container}>
     
       {/* <TouchableOpacity onPress={() =>navigation.goBack()} >
        <AntDesign name='arrowleft' size={28} />
      </TouchableOpacity> */}
      {/* <View style={styles.textContainer}>
        <Text style={styles.textHeading}>Select your LoS type</Text>
      </View> */}
      <SelectList
        setSelected={(val) => setStatus(val)}
        data={LosType}
        save="value"
        defaultOption={ {key:'3',value:'NEW'}}
        arrowicon={
          <FontAwesome name="chevron-down" size={18} color={"black"} />
        }
        boxStyles={{
          width: 250,
          backgroundColor: "white",
          elevation: 5,
          marginBottom: 15,
        }}
        dropdownTextStyles={{ fontSize: 20 }}
        dropdownItemStyles={{ backgroundColor: "white", elevation: 5 }}
        searchPlaceholder="Select LoS"
      />
      {/* <TouchableOpacity style={styles.btn} onPress={LosDataSubmit}>
        <Text style={{ color: "white", fontSize: 22, fontWeight: "bold" }}>
          Submit Los
        </Text>
      </TouchableOpacity> */}
      <ScrollView style={{ width:'100%'}}>
       
       <DataTable 
        style={{flex:1,width:'100%', marginTop:20, marginLeft:10}}
       >
       

      {
        Data.length>0 && Data.map((item,i)=>{
          // console.log(item)
           return(
              <DataTable.Row key={i}>
                <DataTable.Cell>
                  <Text onPress={
                    // ()=>LosDataSubmit(item)
                    // // navigation.navigate('NewLosComp')
                    ()=>navigation.navigate('Drawer', {data:item})
                    
                  }
                    
                  >{item.borrowerKYC.name}</Text>
                  
                  </DataTable.Cell>
                <DataTable.Cell>{item.borrowerKYC.asset_value}</DataTable.Cell>
                {/* <DataTable.Cell>{item.borrowerKYC.down_payment}</DataTable.Cell> */}
                <DataTable.Cell>{item.borrowerKYC.created_at}</DataTable.Cell>
              </DataTable.Row>
           )
           
})

      }
      
       </DataTable>
      
       </ScrollView>
    </View>
    
  );
};

export default LosPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    marginTop: 80,
    alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#F5F5F5",
  },
  textContainer: {
    marginBottom: 30,
  },
  textHeading: {
    fontSize: 34,
    fontWeight: "500",
  },
  btn: {
    backgroundColor: "#F8981D",
    paddingHorizontal: 90,
    paddingVertical: 7,
    marginTop: 25,
    borderRadius: 8,
    marginBottom: 10,
  },
});















// const getData = async()=>{
        //     await axios.get(`http://ec2-15-206-136-105.ap-south-1.compute.amazonaws.com/api/v1/loans/executive?staus=${status}`,{
        //         headers:{
        //             token:'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJod…mNyJ9.u-plCcExDjg_XBK8yhU5Q0t3zmHuAKfOhUQPZfcy-p0'
        //         }
        //     }).then((res)=>{
        //         console.log(res)
        //     })
             
        //     setData(res.data)
        // }
        // getData();
