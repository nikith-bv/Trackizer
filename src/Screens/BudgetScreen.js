import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import Svg, { Path, Defs, LinearGradient, Stop, G, Circle } from "react-native-svg";
import * as d3 from "d3-shape";

const BudgetScreen = () => {
  const radius = 100; // Radius of the semi-circle
  const strokeWidth = 4; // Thickness of the arc
  const cx = 150; // X-center of the SVG
  const cy = 150; // Y-center of the SVG
  const startAngle = Math.PI; // Start from π (leftmost point)
  const EndAngle = 0; // Start from π (leftmost point)
  const arc1Angle = 20*Math.PI/180; // 20 degrees in radians
  const arc2Angle = 35*Math.PI/180; // 35 degrees in radians

  const polarToCartesian = (angle) => ({
    x: cx + radius * Math.cos(angle ),
    y: cy + radius * Math.sin(angle ),
  });

  const semiCircleStart = polarToCartesian(startAngle)
  const semiCircleEnd = polarToCartesian(EndAngle)
  const arc1Start = polarToCartesian(startAngle); // Leftmost point
  const arc1End = polarToCartesian(startAngle + arc1Angle); // End of first arc
  const arc2Start = polarToCartesian(startAngle + arc1Angle+0.19); // End of first arc
  const arc2End = polarToCartesian(startAngle + arc1Angle + arc2Angle+0.19); // End of second arc
  const arc3Start = polarToCartesian(startAngle + arc1Angle+0.19); // End of first arc
  const arc3End = polarToCartesian(startAngle + arc1Angle + arc2Angle+0.19); // End of second arc


  return (
    <View style={styles.container}>
      <Svg width={cx * 2} height={cy+150}>
        {/* Draw the Grey Semi-Circle */}
        <Path
          d={`
            M ${semiCircleStart.x},${semiCircleStart.y} 
            A ${radius},${radius} 0 0 1 ${semiCircleEnd.x},${semiCircleEnd.y}
          `}
          stroke="grey"
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round" // Smooth edges
        />

        {/* First Arc (20°) */}
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

        {/* First Arc (20°) */}
        <Path
          d={`
            M ${arc2Start.x},${arc2Start.y} 
            A ${radius},${radius} 0 0 1 ${arc2End.x},${arc2End.y}
          `}
          stroke="black"
          strokeWidth={16}
          fill="none"
          strokeLinecap="round"
        />
        
      </Svg>
    </View>
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
    color:'#53535D',
    marginTop:-24
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    position: "absolute",
    alignItems: "center",
    top: "40%",
  },
  amount: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
  },
  subtext: {
    fontSize: 16,
    color: "rgba(255,255,255,0.5)",
  },
})