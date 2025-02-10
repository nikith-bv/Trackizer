import { StyleSheet, Text, View,Image, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import * as Progress from 'react-native-progress'
import { AnimatedCircularProgress } from 'react-native-circular-progress';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
    <AnimatedCircularProgress
        size={280}
        width={7}
        fill={85}
        style={styles.tracker}
        rotation={225}
        tintColor="#FF7966"
        arcSweepAngle={270}
        lineCap='round'
        tintTransparency={true}
        backgroundColor='rgba(131,131,156,0.4)'
        dashedBackground={{width:2,gap:2}}
        onAnimationComplete={() => console.log('onAnimationComplete')}
         />
  <Image source={require('../../assets/logo.png')} style={styles.logo}/>
        <StatusBar style='auto'/>
        <Text style={styles.amount}>$1,235</Text>
        <Text style={styles.text}>This month bills</Text>
        <TouchableOpacity style={styles.roundButton} onPress={()=>alert("Button Pressed")}>
                <Text style={styles.budgetText} >See your budget</Text>
        </TouchableOpacity>
        
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#353542',
        
        alignItems:'center',
        },
    logo:{
            width:127,
            height:20,
            marginTop:-210,
            alignItems:'center'
    },
    tracker:{
        marginTop:69,

    },
    amount:{
        color:'#ffffff',
        fontSize:60,
        marginTop:17,
        fontWeight:'heavy'

    },
    text:{
        color:'#83839C',
        marginTop:12,
        fontSize:16
    },
    roundButton:{
        width:120,
        height:32,
        borderRadius:16,
        backgroundColor:'rgba(255,255,255,0.1)',
        alignItems:'center',
        justifyContent:'center',
        marginTop:35
    },
    budgetText:{
        color:'#ffffff',
        fontSize:17
        
    }
    
})