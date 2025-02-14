import { SafeAreaView, StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import HomeScreen from '../Screens/HomeScreen';
import BudgetScreen from '../Screens/BudgetScreen';
import CalendarScreen from '../Screens/CalendarScreen';
import CreditCardsScreen from '../Screens/CreditCardsScreen';
import PostScreen from '../Screens/PostScreen';

const Tabs = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress})=>(
    <TouchableOpacity
        style={{
            top:-25,
            

        }}
        onPress={onPress}>
        <View style={{
            width:58,
            height:58,
            borderRadius: 35,
            backgroundColor:'#ff7966',
            alignItems:'center',
            justifyContent:'center'
        }}>
            {children}
        </View>
    </TouchableOpacity>
)

export default function BottomNavBar() {
  return (

    <NavigationContainer>
        <Tabs.Navigator screenOptions={{
            headerShown:false, 
            tabBarShowLabel:false,
            tabBarStyle:{
                position:'absolute',
                bottom:7,
                marginRight:15,
                marginLeft:15,
                alignItems:'center',
                justifyContent:'center',
                height:55,
                elevation:5,
                backgroundColor:'#3e3e4d',
                borderRadius:16,
                borderWidth:1,
                borderColor:'#4c4c5d',
                shadowColor: "#1c1c23",
                shadowOffset: { width: 0, height: 10 },
                shadowOpacity: 0.25,
                shadowRadius: 10,
            }
        }} initialRouteName='Home'>
            <Tabs.Screen name="Home" 
                options={{
                    tabBarIcon:({focused})=>(
                        <View style={{alignItems:'center', justifyContent:'center', top:7}}>
                            <Image
                                source={require('../../assets/Home.png')}
                                resizeMode='contain'
                                style={{
                                    width:18,
                                    height:18,
                                    tintColor: focused ?'#ffffff' :'#a2a2b5'
                                }}
                                />
                        </View>
                            
                    )
                }} 
                component={HomeScreen}
            />
            <Tabs.Screen name="Budget" 
                options={{
                    tabBarIcon:({focused})=>(
                        <View style={{alignItems:'center', justifyContent:'center', top:7}}>
                            <Image
                                source={require('../../assets/Budgets.png')}
                                resizeMode='contain'
                                style={{
                                    width:18,
                                    height:18,
                                    tintColor: focused ?'#ffffff' :'#a2a2b5'
                                }}
                                />
                        </View>
                            
                    )
                }} 
                component={BudgetScreen}/>

            <Tabs.Screen name="Post" component={PostScreen}
                options={{
                    tabBarIcon:({focused})=>(
                        <View style={{alignItems:'center',justifyContent:'center'}}>
                            <Image
                        source={require('../../assets/Vector.png')}
                        resizeMode='contain'
                        style={{
                            width:22,
                            height:22,
                            tintColor:'#ffffff'
                        }}
                        />
                        </View>
                    ),
                    tabBarButton:(props)=>(
                        <CustomTabBarButton {...props}/>
                    )
                }}
                />


            <Tabs.Screen name="Calendar" 
            
            options={{
                tabBarIcon:({focused})=>(
                    <View style={{alignItems:'center', justifyContent:'center', top:7}}>
                        <Image
                            source={require('../../assets/Calendar.png')}
                            resizeMode='contain'
                            style={{
                                width:18,
                                height:18,
                                tintColor: focused ?'#ffffff' :'#a2a2b5'
                            }}
                            />
                    </View>
                        
                )
            }} 
            component={CalendarScreen}/>
            <Tabs.Screen name="Credit" 
            options={{
                tabBarIcon:({focused})=>(
                    <View style={{alignItems:'center', justifyContent:'center', top:7}}>
                        <Image
                            source={require('../../assets/Credit Cards.png')}
                            resizeMode='contain'
                            style={{
                                width:18,
                                height:18,
                                tintColor: focused ?'#ffffff' :'#a2a2b5'
                            }}
                            />
                    </View>
                        
                )
            }} 
            component={CreditCardsScreen}/>
        </Tabs.Navigator>
    </NavigationContainer>
    
  )
}

const styles = StyleSheet.create({})