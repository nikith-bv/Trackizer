import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

export default function Register({navigate}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.button, {backgroundColor:'#000000',marginTop:225}]} onPress={()=>{alert('Button Pressed!!')}}>
    <Text style={{color:'#ffffff',fontSize: 18,fontWeight: 'bold',}}>Sign up with Apple</Text>
  </TouchableOpacity>

  <TouchableOpacity style={[styles.button,{backgroundColor:'#ffffff',marginTop:20}]} onPress={()=>{alert('Button Pressed')}}>
    <Text style={{color:'#000000',fontSize:18, fontWeight:'bold'}}>Sign up with Google</Text>
  </TouchableOpacity>

  <TouchableOpacity style={[styles.button,{backgroundColor:'#1771E6',marginTop:20}]} onPress={()=>{alert('Button Pressed')}}>
    <Text style={{color:'#ffffff',fontSize:18, fontWeight:'bold'}}>Sign up with Facebook</Text>
  </TouchableOpacity>

  <Text style={{color:'#ffffff',marginTop:45,fontSize:20}}>or</Text>

  <TouchableOpacity style={[styles.button,{backgroundColor:'#323239',marginTop:45}]} onPress={()=>navigate("EmailSignUp")}>
    <Text style={{color:'#ffffff',fontSize:18, fontWeight:'bold'}}>Sign up with E-mail</Text>
  </TouchableOpacity>

  <Text style={{color:'#ffffff',marginTop:25,paddingHorizontal:25,alignContent:'center',fontSize:16}}>By registering, you agree to our Terms of Use. Learn how we collect, use and share your data.</Text>

    </View>
  )
}

const styles = StyleSheet.create({
   container:{
    flex:1,
    width:'100%',
    //backgroundColor:"#1771E6",
    alignItems:'center',
    justifyContent:'center',
    marginTop:5
   },
  button:{
      width:327,
      height:48,
      borderRadius:999,
      paddingHorizontal:24,
      paddingVertical:12,
      alignItems:'center',
      justifyContent:'center'
  }})


