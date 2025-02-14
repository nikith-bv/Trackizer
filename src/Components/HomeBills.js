import { ScrollView, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import DateCard from './DateCard'

export default function HomeBills() {
  return (
    <ScrollView contentContainerStyle={styles.subDataContainer}>
        <View style={styles.subscriptionBox}>
            <View style={styles.subDataDirectionsLeft}>
                <DateCard month="Jun" date="25"/>
                <Text style={{color:'#ffffff', fontSize:22, fontWeight:'bold'}}>     Spotify</Text>
            </View>
            <View style={styles.subDataDirectionsRight}>
                <Text style={{color:'#ffffff', fontSize:22, fontWeight:'bold'}}>$5.99</Text>
            </View>
        </View>
        
        <View style={styles.subscriptionBox}>
            <View style={styles.subDataDirectionsLeft}>
            <DateCard month="Jun" date="25"/>
                <Text style={{color:'#ffffff', fontSize:22, fontWeight:'bold'}}>     Youtube Premium</Text>
            </View>
            <View style={styles.subDataDirectionsRight}>
                <Text style={{color:'#ffffff', fontSize:22, fontWeight:'bold'}}>$18.99</Text>
            </View>
        </View>
        
        <View style={styles.subscriptionBox}>
            <View style={styles.subDataDirectionsLeft}>
                <DateCard month="Jun" date="25"/>
                <Text style={{color:'#ffffff', fontSize:22, fontWeight:'bold'}}>     Microsoft OneDrive</Text>
            </View>
            <View style={styles.subDataDirectionsRight}>
                <Text style={{color:'#ffffff', fontSize:22, fontWeight:'bold'}}>$29.99</Text>
            </View>
        </View>
        
        <View style={styles.subscriptionBox}>
            <View style={styles.subDataDirectionsLeft}>
                <DateCard month="Jun" date="25"/>
                <Text style={{color:'#ffffff', fontSize:22, fontWeight:'bold'}}>     Netflix</Text>
            </View>
            <View style={styles.subDataDirectionsRight}>
                <Text style={{color:'#ffffff', fontSize:22, fontWeight:'bold'}}>$37.99</Text>
            </View>
        </View>
        
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    subDataContainer:{
        marginTop:15,
        paddingBottom:500,
        marginBottom:5
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
    subDataDirectionsLeft:{
        flex:2, //Occupies the complete Left part Container
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:10
    },
    subDataDirectionsRight:{
        flex:1, //Occupies the complete Right part of Container
        flexDirection:'row-reverse',
        paddingRight:18,
        
    },
    appLogos:{
        width:40,
        height:40
    },
})