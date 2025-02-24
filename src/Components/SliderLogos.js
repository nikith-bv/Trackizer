import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import SliderItem from './SliderItem'
import Animated,{useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated'
import {scrollX} from './sharedValue'

const SliderLogos = () => {

    const data_logos = [
        {
            title: "HBO Go",
            img: require('../../assets/HBOGo_Logo.png')
        },
        {
            title: "One Drive",
            img: require('../../assets/OneDriveLogo.png')
        },
        {
            title: "Spotify",
            img: require('../../assets/Spotify_Logo.png')
        },
    ]

    scrollX.value = useSharedValue(0);
    const onScrollHandler = useAnimatedScrollHandler({
      onScroll:(e)=>{
        scrollX.value = e.contentOffset.x;
      }
    })

  return (
    <View>
      <Animated.FlatList
      data={data_logos}
      renderItem={({item,index})=> (<SliderItem item={item} index={index} scrollX={scrollX}/>)}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      onScroll={onScrollHandler}
      />
    </View>
  )
}

export default SliderLogos

const styles = StyleSheet.create({})