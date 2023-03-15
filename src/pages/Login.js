import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'
import {useHistory, useNavigate} from 'react-router-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {Entypo} from 'react-native-vector-icons'

const Login = ({navigation}) => {

    const[data, setData] = useState({
        email:"",
        password:""
    })
    const[token, setToken] = useState()
    const[showPassword, setShowPassword] = useState(true);

    // const navigate = useNavigate()

    // const handleChange = async(e) =>{
    //     setData({
    //         ...data, [e.target.name] : e.target.value
    //     })
    // }

    const submitData = async(e) =>{
        e.preventDefault();
        console.log(data)
        // console.log("clicked")
        const res = await axios.post ('http://ec2-15-206-136-105.ap-south-1.compute.amazonaws.com/api/v1/login', data)

         await AsyncStorage.setItem('token', res.data.authorisation.token)
        // console.log(data)

    

        console.log(res.data)

       

      if(res.data.status === "success"){
              navigation.navigate('Otp', {state:res.data})
      }
      setToken(res.data.state.authorisation.token)

    }

// console.log(data)


  return (
    <ScrollView showsVerticalScrollIndicator={false} >
    <View style={styles.container}>
    {/* <Image source={require('../../assets/images/Vector.png')} /> */}
     <Text style={styles.heading}>Sign in to <Text style={{color:'#12468A',fontSize:42}}>Finayo</Text></Text>
     {/* <View style={styles.inputContainer}>
      <TextInput placeholder='Full Name' style={styles.input}/>
    </View> */}
    <View style={{width:200, height:200, marginTop:20}} >
      <Image source={require('../../assets/slider_1.png')} style={{width:'100%', height:'100%', resizeMode:'contain'}} />
    </View>
    <View style={styles.inputContainer}>
      <TextInput placeholder='Email' style={styles.input}
      name="email"
       onChangeText={(text)=>setData({...data, email:text})}
      />
    </View>
    <View style={styles.inputContainer}>
      <TextInput placeholder='Password' style={styles.input}
        onChangeText={(text)=>setData({...data, password:text})}
        name="password"
        secureTextEntry={showPassword}
      />
      <TouchableOpacity onPress={()=>setShowPassword(!showPassword)}>
          {
            showPassword? <Entypo name='eye-with-line' size={28} /> : 
            <Entypo name='eye' size={28} />
          }
      </TouchableOpacity>
       
    </View>
    <TouchableOpacity style={styles.btn1}
     onPress={submitData}
    >
      <Text style={{color:'white', fontSize:22, fontWeight:'bold'}}>Sign in</Text>
    </TouchableOpacity>
    {/* <Text>Already have an account?
     <Text  style={styles.signup} 
     >  Sign In</Text>
     </Text> */}
  </View>
  </ScrollView>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems:'center',
        // justifyContent:'center',
        marginTop:50
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