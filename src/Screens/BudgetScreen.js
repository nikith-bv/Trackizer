import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import Svg, { Path, Defs, LinearGradient, Stop, G, Circle } from "react-native-svg";
import ProgressBar from 'react-native-progress-bar-horizontal';

const BudgetScreen = () => {
  const radius = 105; // Radius of the semi-circle
  const strokeWidth = 4; // Thickness of the arc
  const cx = 150; // X-center of the SVG
  const cy = 150; // Y-center of the SVG
  const startAngle = Math.PI; // Start from π (leftmost point)
  const EndAngle = 0; // Start from π (leftmost point)
  const arc1Angle = 15*Math.PI/180; // 20 degrees in radians
  const arc2Angle = 35*Math.PI/180; // 35 degrees in radians
  const arc3Angle = 60*Math.PI/180; // 35 degrees in radians

  const polarToCartesian = (angle) => ({
    x: cx + radius * Math.cos(angle ),
    y: cy + radius * Math.sin(angle ),
  });

  const semiCircleStart = polarToCartesian(startAngle)
  const semiCircleEnd = polarToCartesian(EndAngle)
  const arc1Start = polarToCartesian(startAngle); // Leftmost point
  const arc1End = polarToCartesian(startAngle + arc1Angle); // End of first arc
  const arc2Start = polarToCartesian(startAngle + arc1Angle+0.22); // End of first arc
  const arc2End = polarToCartesian(startAngle + arc1Angle + arc2Angle+0.22); // End of second arc
  const arc3Start = polarToCartesian(startAngle + arc1Angle+ arc2Angle+0.42); // End of first arc
  const arc3End = polarToCartesian(startAngle + arc1Angle + arc2Angle+ arc3Angle+0.42); // End of second arc


  return (
    <SafeAreaView style={styles.mainContainer}>
       <Ionicons name="settings-outline" size={24} color="#4f4e62" style={styles.vectorIcon}/>
       <Text style={styles.heading}> Spending & Budgets </Text>
       <StatusBar style='light'/>
      <Svg width={cx * 2} height={cy+10}>
         {/*Draw the Grey Semi-Circle */}
         
        <Path
          d={`
            M ${semiCircleStart.x},${semiCircleStart.y} 
            A ${radius},${radius} 0 0 1 ${semiCircleEnd.x},${semiCircleEnd.y}
          `}
          stroke="#4f4e62"
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round" // Smooth edges
        />

        <Path
          d={`
            M ${arc1Start.x},${arc1Start.y} 
            A ${radius},${radius} 0 0 1 ${arc1End.x},${arc1End.y}
          `}
          stroke="cyan"
          strokeWidth={16}
          fill="none"
          strokeLinecap="round"
        />

        <Path
          d={`
            M ${arc2Start.x},${arc2Start.y} 
            A ${radius},${radius} 0 0 1 ${arc2End.x},${arc2End.y}
          `}
          stroke="#ff8460"
          strokeWidth={16}
          fill="none"
          strokeLinecap="round"
        />

        <Path
          d={`
            M ${arc3Start.x},${arc3Start.y} 
            A ${radius},${radius} 0 0 1 ${arc3End.x},${arc3End.y}
          `}
          stroke="#ad7bff"
          strokeWidth={16}
          fill="none"
          strokeLinecap="round"
        />
        
      </Svg>
      <Text style={styles.amount}>$829</Text>
      <Text style={styles.subtext}>of $2,000 budget</Text>

      <View style={styles.textbox}>
            <Text style={styles.textBoxData}> Your Budgets are on track 👍</Text>
      </View>

      <View style={[styles.CategoriesContainer,{marginTop:20}]}>
        <View style={styles.HorizontalContainer}>
          <View style={styles.CategoriesData1}>
            <Image source={require('../../assets/CarTrans.png')}/>
          </View>
          <View style={styles.CategoriesData2}>
            <Text style={{fontSize:20, color:'#ffffff'}}>Auto & Transport</Text>
            <Text style={{fontSize:16, color:'#53535d'}}> $375 left to spend </Text>
          </View>
          <View style={styles.CategoriesData3}>
          <Text style={{fontSize:20, color:'#ffffff'}}>$25.99</Text>
          <Text style={{fontSize:16, color:'#53535d'}}> of $400 </Text>
          </View>
        </View>
        <View style={styles.progressbar}>
          <ProgressBar
            progress={0.3}
            fillColor="cyan"
            unfilledColor="#4e4e61"
            height={4}
            duration={100}
            borderWidth={0}
            width={278}/>
          </View>
      </View>

      <View style={[styles.CategoriesContainer,{marginTop:10}]}>
        <View style={styles.HorizontalContainer}>
          <View style={styles.CategoriesData1}>
            <Image source={require('../../assets/Entertainment.png')}/>
          </View>
          <View style={styles.CategoriesData2}>
            <Text style={{fontSize:20, color:'#ffffff'}}>Auto & Transport</Text>
            <Text style={{fontSize:16, color:'#53535d'}}> $375 left to spend </Text>
          </View>
          <View style={styles.CategoriesData3}>
          <Text style={{fontSize:20, color:'#ffffff'}}>$25.99</Text>
          <Text style={{fontSize:16, color:'#53535d'}}> of $400 </Text>
          </View>
        </View>
        <View style={styles.progressbar}>
          <ProgressBar
            progress={0.5}
            fillColor="#ff8460"
            unfilledColor="#4e4e61"
            height={4}
            duration={100}
            borderWidth={0}
            width={278}/>
          </View>
      </View>

      <View style={[styles.CategoriesContainer,{marginTop:10}]}>
        <View style={styles.HorizontalContainer}>
          <View style={styles.CategoriesData1}>
            <Image source={require('../../assets/CarTrans.png')}/>
          </View>
          <View style={styles.CategoriesData2}>
            <Text style={{fontSize:20, color:'#ffffff'}}>Auto & Transport</Text>
            <Text style={{fontSize:16, color:'#53535d'}}> $375 left to spend </Text>
          </View>
          <View style={styles.CategoriesData3}>
          <Text style={{fontSize:20, color:'#ffffff'}}>$25.99</Text>
          <Text style={{fontSize:16, color:'#53535d'}}> of $400 </Text>
          </View>
        </View>
        <View style={styles.progressbar}>
          <ProgressBar
            progress={0.7}
            fillColor="#ad7bff"
            unfilledColor="#4e4e61"
            height={4}
            duration={100}
            borderWidth={0}
            width={278}/>
          </View>
      </View>

      <View style={[styles.CategoriesContainer,{marginTop:10, flexDirection:'row', backgroundColor:null, borderStyle:'dashed'}]}>
        <Text style={{fontSize:20, color:'#53535d',lineHeight:20 }}> Add new category    </Text>
        <Image source={require('../../assets/Vector_Add.png')} style={{tintColor:'#53535d'}}/>
      </View>
    </SafeAreaView>
  );
};

export default BudgetScreen;



const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor:'#1c1c23',
    alignItems:'center',
  },
  vectorIcon:{
      marginTop:2,
      marginLeft:290
  },
  heading:{
    fontSize:24,
    color:'#4f4e62',
    marginTop:-24,
    lineHeight:24
  },
  amount: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    marginTop:-56
  },
  subtext: {
    fontSize: 18,
    color: "#4f4e62",
    marginTop:7
  },
  textbox:{
    width:326,
    height:60,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,
    borderColor:"#4e4e61",
    color:'#ffffff',
    marginTop:35,
    borderRadius:16,
    backgroundColor:'#26262f'

  },
  textBoxData:{
    fontSize:20,
    lineHeight:24,
    color:'#ffffff',
   
  },
  CategoriesContainer:{
    width:328,
    height:84,
    alignItems:'center',
    justifyContent:'center',  
    borderWidth:1,
    borderColor:"#4e4e61",
    borderRadius:16,
    backgroundColor:'#26262f',
  },
  HorizontalContainer:{
    flexDirection:'row',
    top:7
  },
  CategoriesData1:{
    flex:1,
    //backgroundColor:'#ad7bff',
    justifyContent:'center',
    alignItems:'center'
  },
  CategoriesData2:{
    flex:2,
    //backgroundColor:'#ffffff',
    justifyContent:'center'
    
  },
  CategoriesData3:{
    flex:1,
    alignItems:'center'
  },
  progressbar:{
    marginTop:19,
  }
})