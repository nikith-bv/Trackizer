import { StyleSheet, Text, View,Image, Button, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {

    const [activeTab, setActiveTab] =useState('subscriptions')

  return (

    <SafeAreaView style={styles.main} edges={["left", "right", "bottom"]}>
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

        <View style={styles.subData}>

            <View style={styles.toggleContainer}>
                <TouchableOpacity style={[styles.toggleButton, activeTab==='subscriptions' && styles.activeButton]} 
                    onPress={()=>setActiveTab("subscriptions")}>
                    <Text style={[styles.inActiveButtonText, activeTab==='subscriptions'&& styles.activeText]}>Your Subscriptions</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.toggleButton, activeTab==="Bills" && styles.activeButton]} 
                    onPress={()=> setActiveTab("Bills")}>
                    <Text style={[styles.inActiveButtonText, activeTab==='Bills'&& styles.activeText]}>Upcoming Bills</Text>
                </TouchableOpacity>
            </View>

            
                {activeTab==="subscriptions" ?(
                <ScrollView contentContainerStyle={styles.SubDataContainer}>
                    <View style={styles.subscriptionBox}>
                        <View style={styles.subDataDirectionsLeft}>
                            <Image source={require("../../assets/Spotify_Logo.png")} style={styles.appLogos}/>
                            <Text style={{color:'#ffffff', fontSize:22, fontWeight:'bold'}}>     Spotify</Text>
                        </View>
                        <View style={styles.subDataDirectionsRight}>
                            <Text style={{color:'#ffffff', fontSize:22, fontWeight:'bold'}}>$5.99</Text>
                        </View>
                    </View>

                    <View style={styles.subscriptionBox}>
                        <View style={styles.subDataDirectionsLeft}>
                            <Image source={require("../../assets/Spotify_Logo.png")} style={styles.appLogos}/>
                            <Text style={{color:'#ffffff', fontSize:22, fontWeight:'bold'}}>     Spotify</Text>
                        </View>
                        <View style={styles.subDataDirectionsRight}>
                            <Text style={{color:'#ffffff', fontSize:22, fontWeight:'bold'}}>$5.99</Text>
                        </View>
                    </View>

                    <View style={styles.subscriptionBox}>
                        <View style={styles.subDataDirectionsLeft}>
                            <Image source={require("../../assets/Spotify_Logo.png")} style={styles.appLogos}/>
                            <Text style={{color:'#ffffff', fontSize:22, fontWeight:'bold'}}>     Spotify</Text>
                        </View>
                        <View style={styles.subDataDirectionsRight}>
                            <Text style={{color:'#ffffff', fontSize:22, fontWeight:'bold'}}>$5.99</Text>
                        </View>
                    </View>

                    <View style={styles.subscriptionBox}>
                        <View style={styles.subDataDirectionsLeft}>
                            <Image source={require("../../assets/Spotify_Logo.png")} style={styles.appLogos}/>
                            <Text style={{color:'#ffffff', fontSize:22, fontWeight:'bold'}}>     Spotify</Text>
                        </View>
                        <View style={styles.subDataDirectionsRight}>
                            <Text style={{color:'#ffffff', fontSize:22, fontWeight:'bold'}}>$5.99</Text>
                        </View>
                    </View>

                </ScrollView>
                ):(
                    <View style={styles.SubDataContainer}>
                        <View style={styles.subscriptionBox}>
                            <Image source={require("../../assets/Netflix_Logo.png")}/>
                            <Text> Spotify</Text>
                            <Text>$5.99</Text>
                        </View>
                    </View>
                )
            }
                
            
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:'#1c1c23'
    },
    container:{
        backgroundColor: '#282832',
        alignItems:'center',

        borderBottomLeftRadius:25,
        borderBottomRightRadius:25
        },
    subData:{
        alignItems:'center',
        justifyContent:'center'
    },
    horizontalSquares:{
        flexDirection:'row',
        marginTop:25,
        marginBottom:25
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
        marginTop:-19,

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
    },
    toggleContainer:{
        flexDirection:'row',
        width:318,
        height:55,
        backgroundColor:'#0E0E12',
        borderRadius:16,
        marginTop:15,
        alignItems:'center',
        justifyContent:'center'
    },
    toggleButton: {
        flex:1,
        alignItems:'center',
        margin:7,
        paddingVertical:12,
        borderRadius: 15,
        //backgroundColor:'#ffffff'
        
      },
      activeButton:{
            backgroundColor:'#19191E'
      },
      inActiveButtonText:{
            fontSize:16,
            color:'#A2A2B5'
      },
      activeText:{
            color:'#ffffff'
      },
      subscriptionBox:{
        width:318,
        height: 68,
        borderWidth:2,
        borderColor:'#353542',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:16,
        marginBottom:10
      },
    appLogos:{
        width:40,
        height:40
    },
    SubDataContainer:{
        marginTop:15,
        paddingBottom:50,
        
    },
    subDataDirectionsLeft:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        padding:10
    },
    subDataDirectionsRight:{
        flex:1,
        flexDirection:'row-reverse',
        paddingRight:15,
        marginRight:10,
        alignItems:'center'
    }
    
})