import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Link } from "react-router-native";
import IndexStack from "../pages/StackNavigator/BorrowerIndexStack";
import CoApplicantIndexStack from "../pages/StackNavigator/CoApplicantIndexStack";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import {AntDesign} from 'react-native-vector-icons'
import 'react-native-gesture-handler'
import Example from "../../Example"
import AssetData from "./AssetsDataComp/AssetData";
import BankDetails from "./LenderComponents/BankDetails";
import { Image } from "react-native";
import LosDocuments from "./LosDocumentsComp/LosDocuments";
import CourierDetails from "./CourierComp/CourierDetails";
import GuranterIndex from "../pages/StackNavigator/GuranterIndex";
import Remarks from "./RemarksComp/Remarks";







// const TopTabs = createMaterialTopTabNavigator();


  
const NewLosComponent = ({route}) => {
 
  // const location = useLocation();
    const state = route.params.state
    console.log(state)
  

  // const  [apiData, setdata] = useState()
  // console.log(location);
  // console.log(JSON.parse(location?.state));
  // useEffect(() => {
  //   setdata(JSON.parse(location?.state))
  // }, [apiData.data[0]])

  // const data = location?.state

  // console.log(data?.data[0]?.borrowerKYC?.name);
  
//   const data = route.params.state
//  console.log(data)
  //  console.log(route.params.loanDetails)


  return (
    
  
 <View style={{ flex:1, width:'100%'}}>
         {/* <MyTopTabs state={state} /> */}
         {/* <Text>Afzal Ahmad</Text> */}
        {/* <DrawerComp /> */}
        <Example />

 </View>
  );
};

// export default NewLosComponent;

const Borrower = ({route}) =>{
  const navigationTo = useNavigation()

 const data = route.params.data

  const[kycActive, setKycActive] = useState(true)
  const[addActive, setAddActive] = useState(false)
  const[occActive, setOccActive] = useState(false)
//   // console.log(data?.data[0]?.borrowerKYC?.id);
// //  console.log(route.params.data.borrowerKYC)

 const borrowerKycData = () =>{
  navigationTo.navigate('KYC')
     setKycActive(true)
     setAddActive(false)
     setOccActive(false)
 }

 const borrowerAddressData = () =>{
  navigationTo.navigate('Address',{
     state: data.borrowerAddress
    })
  setAddActive(true)
  setKycActive(false)
  setOccActive(false)
 }

 const borrowerOccupetionData  = () =>{
  navigationTo.navigate('Occupetion',{
    state: data.borrowerOccupation
  })
    setAddActive(false)
    setKycActive(false)
    setOccActive(true)
 }


  return(
    <View style={{flex:1}}>
  <View style={styles.BorrorwerContainer}>
   <TouchableOpacity onPress={borrowerKycData}
     style={kycActive? styles.button : ''}
   >
    <Text style={styles.btnText} >Kyc</Text>
   </TouchableOpacity>
   <TouchableOpacity onPress={borrowerAddressData}
     style={addActive? styles.button : ''}
   >
    <Text style={styles.btnText} >Address</Text>
   </TouchableOpacity>
   <TouchableOpacity
    onPress={borrowerOccupetionData}
    style={occActive? styles.button : ''}
   >
    <Text style={styles.btnText} >Occupation</Text>
   </TouchableOpacity>
  
     
  </View>
  <IndexStack
   myState={data.borrowerKYC} 
   />
  </View>
  )
  
}
const CoApplicant = ({route}) =>{
  // console.log(route.params.data.data.coApplicantKYC)
  

  const data = route.params.data

  // console.log(data.coApplicantKYC.id)

  const KYCnavigation = useNavigation()


  const[kycActive, setKycActive] = useState(true)
  const[addActive, setAddActive] = useState(false)
  const[occActive, setOccActive] = useState(false)

  const  coApplicantKycData = () => {
    KYCnavigation.navigate('coApplicantKyc')
    setKycActive(true)
    setAddActive(false)
    setOccActive(false)
  }
 
 const coApplicantAddressData = () => {
  KYCnavigation.navigate('coApplicantAddress',{
    state: data.coApplicantAddress
  })
  setKycActive(false)
  setAddActive(true)
  setOccActive(false)
  }
 
  const coApplicantOccupetionData  = () => {
    KYCnavigation.navigate('coApplicantOccupation',{
      state: data.coApplicantOccupation
    })
    setKycActive(false)
    setAddActive(false)
    setOccActive(true)
  }

  return(
    <View style={{flex:1}}>
    <View style={styles.BorrorwerContainer}>
     <TouchableOpacity onPress={coApplicantKycData}
       style={kycActive? styles.button : ''}
     >
      <Text style={styles.btnText} >Kyc</Text>
     </TouchableOpacity>
     <TouchableOpacity onPress={coApplicantAddressData}
       style={addActive? styles.button : ''}
     >
      <Text style={styles.btnText} >Address</Text>
     </TouchableOpacity>
     <TouchableOpacity
      onPress={coApplicantOccupetionData}
      style={occActive? styles.button : ''}
     >
      <Text style={styles.btnText} >Occupation</Text>
     </TouchableOpacity>
    
    </View>
  <CoApplicantIndexStack 
  coApplicantState={
    data.coApplicantKYC
  } 
      />
  
    </View>
  )
}
const Guranter = () =>{

  const navigationTo = useNavigation()

//  const data = route.params.data

  const[kycActive, setKycActive] = useState(true)
  const[addActive, setAddActive] = useState(false)
  const[occActive, setOccActive] = useState(false)
//   // console.log(data?.data[0]?.borrowerKYC?.id);
// //  console.log(route.params.data.borrowerKYC)

 const GuranterKycData = () =>{
  navigationTo.navigate('GuranterKyc')
     setKycActive(true)
     setAddActive(false)
     setOccActive(false)
 }

 const GuranterAddressData = () =>{
  navigationTo.navigate('GuranterAddress')
  setAddActive(true)
  setKycActive(false)
  setOccActive(false)
 }

 const GuranterOccupetionData  = () =>{
  navigationTo.navigate('GuranterOccupation')
    setAddActive(false)
    setKycActive(false)
    setOccActive(true)
 }

  return(
    <View style={{flex:1}}>
  <View style={styles.BorrorwerContainer}>
   <TouchableOpacity onPress={GuranterKycData}
     style={kycActive? styles.button : ''}
   >
    <Text style={styles.btnText} >Kyc</Text>
   </TouchableOpacity>
   <TouchableOpacity onPress={GuranterAddressData}
     style={addActive? styles.button : ''}
   >
    <Text style={styles.btnText} >Address</Text>
   </TouchableOpacity>
   <TouchableOpacity
    onPress={GuranterOccupetionData}
    style={occActive? styles.button : ''}
   >
    <Text style={styles.btnText} >Occupation</Text>
   </TouchableOpacity>
  
     
  </View>
 <GuranterIndex />
  </View>
  )
}

const Assets = ({route}) =>{

  console.log(route.params.data.assetDetails)
  const data = route.params.data.assetDetails

  return(
    <View  style={{flex:1}}>
   <AssetData data= {data} />
    </View>
  )
}

const Lender  = ({route}) => {
  // console.log(route.params.data)

  const data = route.params.data 

  return(
    <View style={{flex:1}}>
     <BankDetails data = {data} />
    </View>
  )
}

const Documents = ({route}) => {

  // console.log(route.params.data)
   const data = route.params.data;

  return(
    <View style={{flex:1}}>
    
    <LosDocuments data = {data} />  
    </View>
  )
}

const Courier = () => {

  // // console.log(route.params.data)
  //  const data = route.params.data;

  return(
    <View style={{flex:1}}>
    
    <CourierDetails />
    </View>
  )
}

const Remark = ({route}) => {

  // // console.log(route.params.data)
   const data = route.params.data;

  return(
    <View style={{flex:1}}>
    
    <Remarks data={data} />
    </View>
  )
}

const Logo = () =>{
  <View>
    <Text>Logo</Text>
  </View>
}


const DrawerComp = ({route, navigation}) => {
 console.log(route.params.data)
 const data = route.params.data

  const Drawer = createDrawerNavigator();

  return(
   <>
   <TouchableOpacity style={{alignItems:'center', justifyContent:'center', marginBottom:-70, zIndex:5, marginTop:40, marginLeft:200, width:150, height:25,
  }}
   onPress={()=>{navigation.navigate('Login')}}
  >
   <Image source={require('../../assets/finayo-logo.png')}  style={{ marginTop:25, marginBottom:20,
   width:'100%', height:'100%', resizeMode:'contain'
  }}/>
   </TouchableOpacity>
  <Drawer.Navigator
  initialRouteName="Home"
    screenOptions={{
   drawerStyle:{
      width:200,
      // backgroundColor:'', 
    
   },
   drawerActiveBackgroundColor:'#F8981D', 
   drawerActiveTintColor:'#ffffff',
   drawerLabelStyle:{
    fontSize:17,
   },
     
   }}
  

 >
      <Drawer.Screen name="Borrower" component={Borrower}  Options={{tabBarLabel:"Borrower",}}
      initialParams={{data: data}}
      />
      <Drawer.Screen name="CoApplicant" component={CoApplicant}  Options={{tabBarLabel:"CoApplicant"}}
      initialParams={{data: data}}
      />
      <Drawer.Screen name="Guranter" component={Guranter}  Options={{tabBarLabel:"Guranter",}} />
      <Drawer.Screen name="Assets" component={Assets}  Options={{tabBarLabel:"Assets",}} 
      initialParams={{data:data}}
      />
      <Drawer.Screen name ='Lender' component={Lender}
       initialParams={{data:data.bank_details}}
      />
      <Drawer.Screen name="Documents" component={Documents}
       initialParams={{data:data.documents}}
      />
      <Drawer.Screen name='Courier Details' component={Courier} Options={{tabBarLabel:"Courier Details",}}  />
      <Drawer.Screen name="Remarks" component={Remark} Options={{tabBarLabel:"Courier Details",}}
       initialParams={{data:data.remarks}}
      />
 </Drawer.Navigator>
 </>
  )

}

export default DrawerComp;

const styles = StyleSheet.create({
  BorrorwerContainer:{
    // flex:1,
    // alignItems:'center',
    justifyContent:'space-around',
    flexDirection:'row',
    // marginTop:20,
    backgroundColor:'#F8981D',
    paddingTop:20,
  },
  button:{
    borderBottomWidth:3,
    borderBottomColor:'red',
    // backgroundColor:'black',
  //  paddingVertical:10
  },
  btnText:{
    fontSize:18,
    color:'#ffffff',
    fontWeight:'500',
    letterSpacing:1,
    paddingBottom:10
  }

});

// {
//   data.data.map((item, i)=>(
//     <>
//     <View key={item.borrowerKYC.id}>
//         <Text>{item.borrowerKYC.name}</Text>
//     </View>
//     </>
//   ))
// }

/*"{"success":true,"data":[
    {
        "loan_details":{
        "id":49,"borrower_kyc_id":131,"borrower_address_id":120,"borrower_occupation_id":109,"borrower_document_id":57,"coapplicant_kyc_id":98,"coapplicant_address_id":76,"coapplicant_occupation_id":87,"coapplicant_document_id":57,"courier_id":null,"asset_id":65,"lender_id":null,"user_id":2,"status":"NEW","created_at":"15-02-2023","reference_id":"76481380","guarantor_id":null,"guarantor_address_id":null,"guarantor_occupation_id":null},
        "borrowerKYC":{"id":131,"name":"Test Sarvesh","mobile":"9873940029","is_verified_mobile":null,"pan":"biepd1841h","is_verified_pan":true,"pan_message":"PAN details retrived successfully.","aadhar":"****1136","is_verified_aadhar":true,"asset_value":"180000","loan_amount":"130000","down_payment":"50000","dob_date":520128000,"father_name":"GK panday","gender":"Male","email":"KAMALAKANTADASH@GMAIL.COM","cibil":721,"postal":null,"state":null,"country":null,"avtar":null,"is_driving_licence_verified":null,"is_electricity_verified":null,"created_by":0,"created_at":"15-02-2023"},
        "borrowerAddress":{"id":120,"resident_type":"Owned","current_address":"Test Address","years_living":"6","permanent_address":"Test Address","family_members":5,"earning_members":3,"family_income":"25000","reference_one":"1. ABC\n2. XYZ","reference_two":"1. ABC\n2. XYZ","created_by":0,"created_at":"15-02-2023"},
        "borrowerOccupation":{"id":109,"occupation_type":"Self Employed Driver","current_occupation":"Auto Driving","driving_experience":"7","vehicle_type":"Rented","monthly_earning":"15000","expected_monthly_earning":"20000","extra_source_income":"0","source_income_area":"NA","total_income":"180000","current_city":"Noida","created_by":0,"created_at":"15-02-2023"},
        "coApplicantKYC":{"id":98,"name":"KAMALA KANTA DASH","mobile":"9873940029","is_verified_mobile":null,"pan":"biepd1841h","is_verified_pan":true,"pan_message":"PAN details retrived successfully.","aadhar":"333","is_verified_aadhar":true,"asset_value":"1","loan_amount":"1","down_payment":"1","dob_date":520128000,"fs_name":"kk Dash","gender":"Male","email":"KAMALAKANTADASH@GMAIL.COM","cibil":721,"postal":1,"state":"Delhi","country":"India","avtar":"Test","created_by":0,"created_at":"15-02-2023"},
        "coApplicantOccupation":{"id":87,"occupation_type":"Self Employed Driver","current_occupation":"Driving","driving_experience":null,"vehicle_type":null,"monthly_earning":"50000","expected_monthly_earning":"0","extra_source_income":null,"source_income_area":null,"total_income":null,"current_city":"Noida","created_by":0,"created_at":"15-02-2023"},
        "coApplicantAddress":{"id":76,"resident_type":"Owned","current_address":"Test co address","years_living":"7","permanent_address":"Test co address","family_members":3,"earning_members":1,"family_income":"60000","created_by":0,"created_at":"15-02-2023"},
        "assetDetails":{"id":65,"manufacturer_name":"CityLife","vehicle_type":"Ev-rickshaw (Passenger)","manufacturing_year":"2022","manufacturing_guarantee":"3 Years","chasis_no":"ery56","battery_no":"0","battery_type":"Lithium","battery_manufacturer_name":"Exide","battery_manufacturer_year":null,"battery_manufacturing_guarantee":"2021","guarantee_type":"Replaceable","created_at":"15-02-2023"},
        "documents":{"id":57,"aadhar_front":"1671732750032Screenshot (31).png","aahar_back":"1671732752139Screenshot (31).png","pan_doc":"1671732754311Screenshot (31).png","driving_license":"Test","per_address_proof":"Upload Here","res_address_proof":"Upload Here","vehicle_quotation":"1671732760610Screenshot (31).png","coAadhar_front":null,"coAahar_back":null,"coPan_doc":null,"coDriving_license":null,"coPerAddress_proof":null,"coResAddress_proof":null,"additional_doc":"1671732763082Screenshot (31).png","invoice":null,"performa":null,"down_payment_receipt":null,"insurance":null,"rto_tax_receipt":null,"dl_receipt":null,"documents_form":null,"created_by":1,"created_at":"15-02-2023","guarantor_aadhar_front":null,"guarantor_aadhar_back":null,"guarantor_driving_license":null,"guarantor_pan_doc":null,"guarantor_peraddress_proof":null,"guarantor_coresaddress_proof":null},
        "lender":[],
        "remarks":[{"user_id":2,"name":"Sarvesh","email":"sarvesh@gmail.com","mobile":"9211502441","role":"EXECUTIVE","remark_id":38,"remark":"Loan created successfully","created_at":"15-02-2023","status":"NEW"}],"courier_details":null,"bank_details":null}],"message":{"success":"Loan list for Executive","errors":""}}"*/








      //  {
        // "assetDetails": {"battery_manufacturer_name": "Exide", "battery_manufacturer_year": null, "battery_manufacturing_guarantee": "2022", "battery_no": "0", "battery_type": "Lead", "chasis_no": "12324RT", "created_at": "25-02-2023", "guarantee_type": "Replaceable", "id": 78, "manufacturer_name": "Citylife", "manufacturing_guarantee": "3 Years", "manufacturing_year": "2022", "vehicle_type": "Ev-rickshaw (Passenger)"},
        //  "bank_details": {"created_at": "25-02-2023", "created_by": 1, "emi": "15120", "id": 5, "interest": "12.2", "lender_id": 1, "loan_id": 72, "processing_amount": null, "tenure": 12},
          // "borrowerAddress": {"created_at": "25-02-2023", "created_by": 0, "current_address": "Sector 82, noida", "earning_members": 3, "family_income": "180000", "family_members": 5, "id": 158, "permanent_address": "Sector 82, noida", "reference_one": "1. kamal - 9873765678
// 2. Sagar - 9876543456", "reference_two": "1. kamal - 9873765678
// 2. Sagar - 9876543456", "resident_type": "Owned", "years_living": "2000"},
//  "borrowerKYC": {"aadhar": "********1136", "asset_value": "212000", "avtar": null, "cibil": 721, "country": null, "created_at": "25-02-2023", 
// "created_by": 0, "dob_date": 520128000, "down_payment": "42000", "email": "KAMALAKANTADASH@GMAIL.COM", "father_name": "GD dash", "gender": "Male", "id": 170, "is_driving_licence_verified": null, "is_electricity_verified": null, "is_verified_aadhar": true, "is_verified_mobile": null, "is_verified_pan": true, "loan_amount": "170000", "mobile": "9873940029", "name": "KAMALA KANTA DASH", "pan": "biepd1841H", "pan_message": "PAN details retrived successfully.", "postal": null, "state": null},
//  "borrowerOccupation": {"created_at": "25-02-2023", "created_by": 0, "current_city": "Noida", "current_occupation": "Auto Driving", "driving_experience": "3", "expected_monthly_earning": "20000", "extra_source_income": "10000", "id": 145, "monthly_earning": "15000", "occupation_type": "Self Employed Driver", "source_income_area": "bank interest", "total_income": "180000", "vehicle_type": "Rented"}, 
// "coApplicantAddress": {"created_at": "25-02-2023", "created_by": 0, "current_address": null, "earning_members": null, "family_income": null, "family_members": null, "id": 95, "permanent_address": null, "resident_type": null, "years_living": null}, "coApplicantKYC": {"aadhar": null, "asset_value": "1", "avtar": "Test", "cibil": null, "country": "India", "created_at": "25-02-2023", "created_by": 0, "dob_date": 1677305231, "down_payment": "1", "email": null, "fs_name": null, "gender": null, "id": 121, "is_verified_aadhar": null, "is_verified_mobile": null, "is_verified_pan": null, "loan_amount": "1", "mobile": null, "name": null, "pan": null, "pan_message": null, "postal": 1, "state": "Delhi"},
//  "coApplicantOccupation": {"created_at": "25-02-2023", "created_by": 0, "current_city": null, "current_occupation": null, "driving_experience": null, "expected_monthly_earning": "0", "extra_source_income": null, "id": 110, "monthly_earning": null, "occupation_type": null, "source_income_area": null, "total_income": null, "vehicle_type": null}, "courier_details": null, "documents": {"aadhar_front": "1677305120250Screenshot (31).png", "aahar_back": "1677305130392Screenshot (31).png", "additional_doc": "1677305173585Screenshot (31).png", "coAadhar_front": null, "coAahar_back": null, "coDriving_license": null, "coPan_doc": null, "coPerAddress_proof": null, "coResAddress_proof": null, "created_at": "25-02-2023", "created_by": 1, "dl_receipt": null, "documents_form": null, "down_payment_receipt": null, "driving_license": "Test", "guarantor_aadhar_back": null, "guarantor_aadhar_front": null, "guarantor_coresaddress_proof": null, "guarantor_driving_license": null, "guarantor_pan_doc": null, 
// "guarantor_peraddress_proof": null, "id": 84, "insurance": null, "invoice": null, "pan_doc": "1677305135910Screenshot (31).png", "per_address_proof": "Upload Here", "performa": null, "res_address_proof": "Upload Here", "rto_tax_receipt": null, "vehicle_quotation": "1677305161702Screenshot (31).png"}, "guarantorAddress": null, "guarantorKyc": null, "guarantorOccupation": null, "lender": {"address": "D-Block", "area": "GreenCity", "branch_name": "HDFC", "cibil": 460, "city": "Delhi", "email": "hdfc@gmail.com", "id": 1, "interest_rate": "12.2", "mobile": "9211502441", "name": "HDFC"},
//  "loan_details": {"asset_id": 78, "borrower_address_id": 158, "borrower_document_id": 84, "borrower_kyc_id": 170, "borrower_occupation_id": 145, "coapplicant_address_id": 95, "coapplicant_document_id": 84, "coapplicant_kyc_id": 121, "coapplicant_occupation_id": 110, "courier_id": null, "created_at": "25-02-2023", "guarantor_address_id": null, "guarantor_id": null, "guarantor_occupation_id": null, "id": 72, "lender_id": 1, "reference_id": "77305231", "status": "NEW", "user_id": 2},
  // "remarks": [{"created_at": "07-03-2023", "email": "sarvesh@gmail.com", "mobile": "9898338989", "name": "Sohail Sharmaeee", "remark": "Test assign to lender for approval.", "remark_id": 80, "role": "EXECUTIVE", "status": "NEW", "user_id": 2}, {"created_at": "28-02-2023", "email": "sarvesh@gmail.com", "mobile": "9898338989", "name": "Sohail Sharmaeee", "remark": "test Remarks", "remark_id": 69, "role": "EXECUTIVE", "status": "FI", "user_id": 2}, {"created_at": "25-02-2023", "email": "sarvesh@gmail.com", "mobile": "9898338989", "name": "Sohail Sharmaeee", "remark": "Loan assign to lender successfully", "remark_id": 64, "role": "EXECUTIVE", "status": "NEW", "user_id": 2}, {"created_at": "25-02-2023", "email": "sarvesh@gmail.com", "mobile": "9898338989", "name": "Sohail Sharmaeee", "remark": "Loan created successfully", "remark_id": 63, "role": "EXECUTIVE", "status": "CREDITCHECK", "user_id": 2}]}