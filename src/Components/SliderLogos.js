import { StyleSheet, Text, View,FlatList,useWindowDimensions } from 'react-native'
import React from 'react'
import SliderItem from './SliderItem'
import Animated,{useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated'
import {scrollX} from './sharedValue'
import { SafeAreaView } from 'react-native-safe-area-context'

const SliderLogos = () => {

    const data_logos = [
        {
            title: "HBO Go",
            img: require('../../assets/HBOGO_Expanded.png')
        },
        {
            title: "One Drive",
            img: require('../../assets/OneDrive_Expanded.png')
        },
        {
            title: "Spotify",
            img: require('../../assets/Spotify_Expanded.png')
        }
    ]

    console.log(data_logos)
    const {width} = useWindowDimensions();
    const SIZE = width*0.7;

  return (
    // <View>
    //   <Animated.FlatList
    //   data={data_logos}
    //   renderItem={({item,index})=> (
    //   <SliderItem item={item} index={index} scrollX={scrollX}/>)}
    //   horizontal
    //   showsHorizontalScrollIndicator={false}
    //   decelerationRate={'fast'}
    //   snapToInterval={SIZE}
    //   pagingEnabled
    //   scrollEventThrottle={16}
    //   onScroll={onScrollHandler}
    //   bounces={false}
    //   />
    // </View>
    <SafeAreaView>
      <SliderItem info={data_logos}  />
      {/* Encloses all the data in info property */}
    </SafeAreaView>
  )
}

export default SliderLogos

const styles = StyleSheet.create({})