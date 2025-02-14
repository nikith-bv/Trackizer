import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function DateCard(props) {
  return (
    <View style={styles.container} >
      <Text style={{fontSize:16,color:'#A2A2B5'}}>{props.month}</Text>
      <Text style={{fontSize:22, marginTop:-4, color:'#A2A2B5',fontWeight:'bold'}}>{props.date}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#353542',
        alignItems:'center',
        justifyContent:'center',
        height:45,
        width:45,
        borderRadius:16,
        
    }
})