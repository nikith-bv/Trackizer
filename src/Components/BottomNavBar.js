import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Tabs} from "expo-router";
import { Ionicons } from '@expo/vector-icons';

//Design the bottom nav bar and then link the component to the screen


export default function BottomNavBar() {
  return (
    
      <SafeAreaView>
        <Tabs screenOptions={{
            headerShown:false,
            tabBarShowLabel:false,
            tabBarStyle:{
                position:'absolute',
                bottom:27,
                left:16,
                right:16,
                height:72,
                elevation:0,
                backgroundColor:'white',
                borderRadius:16,
                alignItems:'center',
                justifyContent:'center',
            }

            
        }}>

            <Tabs.Screen
                name = "Home"
                options={{
                    tabBarIcon:({focused})=>(
                        <View style={{alignItems:'center', paddingTop:10}}>
                            <Ionicons
                                name={focused ? "home":"home-outline"}
                                color={focused ? "#f02a4b" : "gray"}
                                size={24}
                            />

                        </View>
                    )
                }}

            />
            </Tabs>
        </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    SafeAreaView:{
        flex:1,
        backgroundColor:'#cccccc'

    }
})