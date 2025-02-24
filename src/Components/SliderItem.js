import { StyleSheet, Text,View, Image, Dimensions } from 'react-native'
import React from 'react'
import Animated, { Extrapolation, interpolate, useAnimatedStyle } from 'react-native-reanimated';
import {scrollX} from './sharedValue'

const {width} = Dimensions.get('screen'); 
const SliderItem = ({item,index, scrollX}) => {
  const rnAnimatedStyle = useAnimatedStyle(()=>{
    return{
      transform:[
        {
          translateX:interpolate(
            scrollX.value,
            [(index-1)*width,index*width,(index+1)*width],
            [-width*0.25,0,width*0.25],
            Extrapolation.CLAMP
          )
        },
        {
          scale:interpolate(
            scrollX.value,
            [(index-1) *width, index*width,(index+1)*width],
            [0.9,1,0.9],
            Extrapolation.CLAMP
          )
        }
      ]
    }
  })
  return (
    <Animated.View style={[styles.itemContainer, rnAnimatedStyle]}>
      <Image source={item.img} style={{width:50, height:50}}/>
      <Text>{item.title}</Text>
    </Animated.View>
  )
}

export default SliderItem

const styles = StyleSheet.create({
    itemContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:100,
        width:width,
        gap:15
    }
})