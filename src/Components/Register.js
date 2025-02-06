import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const Register = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.button, {backgroundColor:'#000000',marginTop:305}]} onPress={()=>{alert('Button Pressed!!')}}>
    <Text style={{color:'#ffffff',fontSize: 18,fontWeight: 'bold',}}>Sign up with Apple</Text>
  </TouchableOpacity>

  <TouchableOpacity style={[styles.button,{backgroundColor:'#ffffff',marginTop:15}]} onPress={()=>{alert('Button Pressed')}}>
    <Text style={{color:'#000000',fontSize:18, fontWeight:'bold'}}>Sign up with Google</Text>
  </TouchableOpacity>

  <TouchableOpacity style={[styles.button,{backgroundColor:'#1771E6',marginTop:15}]} onPress={()=>{alert('Button Pressed')}}>
    <Text style={{color:'#ffffff',fontSize:18, fontWeight:'bold'}}>Sign up with Facebook</Text>
  </TouchableOpacity>

  <Text style={{color:'#ffffff',marginTop:35,fontSize:20}}>or</Text>

  <TouchableOpacity style={[styles.button,{backgroundColor:'#323239',marginTop:35}]} onPress={()=>{alert('Button Pressed')}}>
    <Text style={{color:'#ffffff',fontSize:18, fontWeight:'bold'}}>Sign up with E-mail</Text>
  </TouchableOpacity>

  <Text style={{color:'#ffffff',marginTop:25}}>By registering, you agree to our Terms of Use. Learn how we collect, use and share your data.</Text>

    </View>
  )
}

const styles = StyleSheet.create({
   container:{
    flex:1,
    width:'100%',
    backgroundColor:"#1771E6",
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

export default Register
