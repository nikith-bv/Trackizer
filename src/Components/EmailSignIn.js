import { StyleSheet, Text, TextInput, View,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import Checkbox from 'expo-checkbox';

export default function EmailSignIn({navigate}) {
    
    const [isChecked, setChecked] = useState(false)

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
          <Text style={[styles.textStyle,{marginTop:150}]}>Login</Text>
          <TextInput style={[styles.textInput,{marginTop:5}]} placeholder='Enter Your Email' placeholderTextColor={"#666680"} keyboardType='email-address' autoCapitalize='none'></TextInput>
          <Text style={[styles.textStyle,{marginTop:18}]}>Password</Text>
          <TextInput style={[styles.textInput,{marginTop:5}]} placeholder='Enter Your Password' placeholderTextColor={"#666680"} keyboardType='email-address' autoCapitalize='none' secureTextEntry={true}></TextInput>
          
          <View style={[styles.row,{marginTop:13}]}>
            <Checkbox style={{borderRadius:8, height:24, width:24}}value={isChecked} onValueChange={setChecked}/>
            <Text style={{marginLeft:5,fontSize:18,color:'#666680'}}>Remember Me</Text>
            <Text style={{marginLeft:110,fontSize:18, color:'#666680'}}>Forgot Password</Text>
            
          </View>
          </View>

      <View style={styles.cont2}>
        <TouchableOpacity style={[styles.button,{backgroundColor:'#ff7966'}]} onPress={()=>alert("Button Pressed")}>
          <Text style={[styles.text,{color:'#ffffff'}]}>Sign In</Text>
        </TouchableOpacity>

        <Text style={{fontSize:20,marginTop:125, color:'#ffffff'}}>Don't have an account?</Text>

        <TouchableOpacity style={[styles.button,{backgroundColor:'#323239', marginTop:15}]} onPress={()=>navigate("EmailSignUp")}>
          <Text style={[styles.text,{color:'#ffffff'}]}>Sign Up</Text>
        </TouchableOpacity>
      </View>

    </View>
   
  )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        width: '100%',
        //backgroundColor:'#1771E6'
    },
    container:{
       // backgroundColor:'rgba(255, 0, 0, 0.3)',
        alignItems:'flex-start',
        justifyContent: 'center',
        padding:18
    },
    textStyle:{
      fontSize:18,
      color:'#666680',
      fontWeight:'bold'
    },
    textInput:{
      borderColor:'#666680',
      height:48,
      width: 326,
      borderWidth:1,
      borderRadius:16,
    },
    button:{
      width:324,
      height:48,
      borderRadius:999,
      alignItems:'center',
      justifyContent:'center'
    },
    cont2:{
      flex:1,
      marginTop:32,
      //backgroundColor:'#ffffff',
      alignItems:'center',
      justifyContent:'flex-start'
    },
    text:{
      fontWeight:'bold',
      fontSize:20
    },
    row:{
        flexDirection:'row',
        alignItems:'center'
    }

})