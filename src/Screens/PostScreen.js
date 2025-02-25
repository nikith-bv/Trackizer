import { StyleSheet, Text,Image, View,useWindowDimensions,TouchableOpacity } from 'react-native'
import React,{useState, useRef} from 'react'
import { StatusBar } from 'expo-status-bar'
import Animated, { Extrapolation, interpolate,useSharedValue,useAnimatedScrollHandler, useAnimatedStyle,useDerivedValue, runOnJS } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons';
// import SliderItem from '../Components/SliderItem';

export default function PostScreen() {
  const data_logos = [
    {
        title: "HBO Go",
        img: require('../../assets/HBOGO_Expanded.png'),
        price: 7.99
    },
    {
        title: "One Drive",
        img: require('../../assets/OneDrive_Expanded.png'),
        price: 12.5
    },
    {
        title: "Spotify",
        img: require('../../assets/Spotify_Expanded.png'),
        price:3.99
    }
]

    const [selectedPrice, setSelectedPrice] = useState(data_logos[0].price); // Store selected price
    const {width} = useWindowDimensions();
    const SIZE = width*0.55;  
    const [newData] = useState([{key:'spacer-left'}, ...data_logos ,{key:'spacer-right'}])
    const SPACER = (width - SIZE)/2
    const x = useSharedValue(0)
    const prevIndex = useRef(null);
    const lastPrice = useRef(null);
    const onScroll = useAnimatedScrollHandler({
      onScroll: event => {
        x.value = event.contentOffset.x
      }
    })
  
    useDerivedValue(() => {
      const index = Math.round(x.value / SIZE);
      if (prevIndex.current !== index) {
        prevIndex.current = index;
        if (lastPrice.current !== data_logos[index]?.price) {
          lastPrice.current = data_logos[index]?.price;
          runOnJS(setSelectedPrice)(data_logos[index]?.price || data_logos[0].price);
        }}
    }, []);

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
    <SafeAreaView style={styles.main}>
      <StatusBar backgroundColor='#282832' style='light'/>
        <View style={styles.container}>
          <Ionicons name="chevron-back" size={24} color="#53535d" style={styles.vectorIcon}/>
          <Text style={styles.heading}> New </Text>
          <Text style = {styles.BigHeading}> Add new </Text>
          
          <Text style = {[styles.BigHeading,{marginTop:0}]}> Subscription </Text>
          <View style={{height:220, marginTop:60}}>
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
          </View>
        </View>

        <View style={{alignItems:'center'}}>
          <Text style={{marginTop:20,color:'#666680',fontSize:16}}>Description</Text>
          
          <View style={{height:48, width:317,borderWidth:1,borderRadius:16,marginTop:5,borderColor:'#353542'}}></View>

          <View style={styles.valueChanger}>
            <Text style={{fontSize:16, color:'#83839c',lineHeight:16}}>Monthly Price</Text>
            <Text style={styles.valueText1}> ${selectedPrice}</Text>
            <View
              style={{
                borderWidth:1,
                width:162,
                backgroundColor:'#ffffff',
                marginTop:10
              }}
            />
          </View>

          <TouchableOpacity style={[styles.button,{backgroundColor:'#ff7966'}]} onPress={()=>alert("Button Pressed")}>
                    <Text style={[styles.buttonText,{color:'#ffffff'}]}>Add this platform</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  main:{
    flex:1,
    backgroundColor:'#1c1c23',

},
container:{
  backgroundColor:'#282832',
  alignItems:'center',
  justifyContent:'center',
  borderBottomLeftRadius:25,
  borderBottomRightRadius:25,


},
heading:{
  fontSize:24,
  color:'#53535d',
  marginTop:-24,
  lineHeight:24
},
vectorIcon:{
  marginTop:2,
  marginLeft:24,
  alignSelf:'flex-start'
},
BigHeading:{
  marginTop:40,
  fontSize:44,
  fontWeight:'bold',
  color:'#ffffff'
},
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
  marginTop: 19, // Adds spacing between image and text
  fontSize: 20, 
  fontWeight: 'bold',
  color: '#fff',
},
valueChanger:{
  color:'#83839c',
  marginTop:45,
  alignItems:'center'
},
valueText1:{
  color:'#fff',
  fontSize:36,
  marginTop:9
},
button:{
  marginTop:35,
  width:324,
  height:48,
  borderRadius:999,
  alignItems:'center',
  justifyContent:'center',
  lineHeight:48,
  shadowColor: '#ffffff',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.8,
  shadowRadius: 2,
  elevation: 5,
},
buttonText:{
  fontWeight:'bold',
  fontSize:20,
  lineHeight:20
}
})