import { StyleSheet, Text,View, Image, Dimensions,useWindowDimensions, FlatList } from 'react-native'
import React, { useState } from 'react'
import Animated, { Extrapolation, interpolate,useSharedValue,useAnimatedScrollHandler, useAnimatedStyle } from 'react-native-reanimated';
import {scrollX} from './sharedValue'




const SliderItem = ({info}) => {
  //Props is just an object, It has the data in it enclosed in info property
  //Want to directly extract the data then use the {info}=> destructes the array and extracts the info data as o/p.
  const {width} = useWindowDimensions();
  const SIZE = width*0.55;  
  const [newData] = useState([{key:'spacer-left'}, ...info ,{key:'spacer-right'}])
  const SPACER = (width - SIZE)/2
  const x = useSharedValue(0)
  const onScroll = useAnimatedScrollHandler({
    onScroll: event => {
      x.value = event.contentOffset.x
    }
  })
 
  
  const AnimatedItem =({item,index,x})=>{
    const rnAnimatedStyle = useAnimatedStyle(()=>{
      const scale = interpolate(
        x.value,
        [(index-2)*SIZE,(index-1)*SIZE,(index)*SIZE],
        [0.7,1,0.7]
      )
      return{
        transform:[{scale}]
      }
    })
    if(!item.img) {
      return <View style={{width:SPACER}} key={index}/>;
    }
    return(
    <View style={{width:SIZE}} key={index}>
      <Animated.View style={[styles.imageContainer, rnAnimatedStyle]}>
        <Image source={item.img} style={styles.image}/>
        <Text style={styles.text}>{item.title}</Text>
      </Animated.View>
    </View>
  )
  }

  return (
    <Animated.FlatList
    data={newData}
    renderItem={({item,index})=> <AnimatedItem item={item} index={index} x={x}/>}
    horizontal
    showsHorizontalScrollIndicator={false}
    bounces={false}
    scrollEventThrottle={16}
    snapToInterval={SIZE}
    decelerationRate={'fast'}
    onScroll={onScroll}
    />
  )
}

export default SliderItem

const styles = StyleSheet.create({
    imageContainer:{ 
      overflow:'hidden',
      alignItems:'center',
      justifyContent:'center',
      },
    image:{
      width:"70%", 
      height:undefined, 
      resizeMode:"contain",
      aspectRatio:1
    },
    text: {
      marginTop: 5, // Adds spacing between image and text
      fontSize: 16, 
      fontWeight: 'bold',
      color: '#333',
    }
})