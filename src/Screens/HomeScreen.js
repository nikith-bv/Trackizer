import { StyleSheet, Text, View,Image, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <Ionicons name="settings-outline" size={24} color="black" style={styles.vectorIcon}/>
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

        <View style={styles.horizontalSquares}>
            <View style={styles.squares}>
                <Text style={styles.squareText}>Active Subs</Text>
                <Text style={styles.squareVal}>12</Text>
            </View>
            <View style={styles.squares}>
                <Text style={styles.squareText}>Highest Subs</Text>
                <Text style={styles.squareVal}>$ 19.99</Text>
            </View>
            <View style={styles.squares}>
                <Text style={styles.squareText}>Lowest Subs</Text>
                <Text style={styles.squareVal}>$ 5.99</Text>
            </View>
        </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#353542',
        marginBottom:340,
        alignItems:'center',
        borderBottomLeftRadius:25,
        borderBottomRightRadius:25
        },
        horizontalSquares:{
            flexDirection:'row',
            marginTop:25
        },
        squares:{
            height:68,
            width:102,
            alignItems:'center',
            justifyContent:'center',
            borderRadius:16,
            backgroundColor:'rgba(78,78,97,0.2)',
            borderWidth:1.5,
            borderColor:'rgba(131,131,156,0.4)',
            marginHorizontal:5

            
        },
    logo:{
            width:127,
            height:20,
            marginTop:-210,
            alignItems:'center'
    },
    tracker:{
        marginTop:-9,

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
        height:38,
        borderRadius:16,
        backgroundColor:'rgba(255,255,255,0.1)',
        alignItems:'center',
        justifyContent:'center',
        marginTop:35,
    },
    budgetText:{
        color:'#ffffff',
        fontSize:17
        
    },
    squareText:{
        color:'#83839C',
        fontSize:17,
    },
    squareVal:{
        fontSize:20,
        marginTop:4,
        color:'#ffffff'
    },
    vectorIcon:{
        marginTop:52,
        marginLeft:290
    }
    
})