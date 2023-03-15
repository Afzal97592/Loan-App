import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-native'

const OtpPage = ({navigation, route}) => {
    // const location = useLocation();
    // console.log(location);
    

    const data = route.params.state
    console.log(data)

    const[otp, setOtp] = useState();
    // const navigate = useNavigate();

    const verifyUser = () => {
      if(otp === data.authorisation.otp){
      navigation.navigate('Services')
      }else{
        Alert.alert("not a valid Otp")
      }

      console.log(typeof(data.authorisation.otp))
      console.log(typeof(parseInt(otp)))

    }

  return (
    <ScrollView showsVerticalScrollIndicator={false} >
    <View style={styles.container}>
    {/* <Image source={require('../../assets/images/Vector.png')} /> */}
     <Text style={styles.heading}>Verify your <Text style={{color:'#12468A',fontSize:42}}>otp</Text></Text>
     {/* <View style={styles.inputContainer}>
      <TextInput placeholder='Full
       Name' style={styles.input}/>
    </View> */}

           <View style={{width:150, height:150, alignItems:'center', justifyContent:'center'}}>
            <Image source={require('../../assets/OtpSent.png')} style={{width:'100%', height:'100%', marginLeft:40, marginTop:60, marginBottom:30}}/>
           </View>

     <Text style={{color:'black', fontSize:22, fontWeight:'bold', marginTop:30}}>Your otp is {data.authorisation.otp}</Text>
    <View style={styles.inputContainer}>
      <TextInput placeholder='Otp' style={styles.input}
       name="otp"
       defaultValue={data.authorisation.otp}
       onChangeText={(text)=>setOtp(parseInt(text))}
       keyboardType="numeric"
      />
    </View>
    
    <TouchableOpacity style={styles.btn1}
     onPress={verifyUser}
    >
      <Text style={{color:'white', fontSize:22, fontWeight:'bold'}}>Verify otp</Text>
    </TouchableOpacity>
    {/* <Text>Already have an account?
     <Text  style={styles.signup} 
     >  Sign In</Text>
     </Text>  */}
  </View>
  </ScrollView>
  )
}

export default OtpPage

const styles = StyleSheet.create({
  container:{
    flex:1,
    width:'100%',
    alignItems:'center',
    // justifyContent:'center'
    marginTop:80
  },
  heading:{
        fontSize:38,
        color:'black',
        textAlign:'center',
        marginVertical:10,
  },
  inputContainer:{
    flexDirection:'row',
    width:'80%',
    marginVertical:10,
    backgroundColor:'white',
    paddingHorizontal:10,
    paddingVertical:10,
    alignSelf:'center',
    elevation:10,
  },
  input:{
    fontSize:18,
    marginLeft:10,
    width:'80%'
},
btn1:{
  backgroundColor:'#F8981D',
        paddingHorizontal:90,
        paddingVertical:7,
        marginTop:25,
        borderRadius:8,
        marginBottom:10
},
signup:{
  color:'#009AE0',
  fontWeight:'bold',
  fontSize:16,
}
})