import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import Svg, { Path, Defs, LinearGradient, Stop, G, Circle } from "react-native-svg";
import * as d3 from "d3-shape";

const createArc = (startAngle, endAngle, radius) => {
  return d3
    .arc()
    .innerRadius(radius * 0.9) // Adjust thickness
    .outerRadius(radius)
    .startAngle(startAngle)
    .endAngle(endAngle)
    .cornerRadius(19)(); // Smooth edges
};

export default function BudgetScreen() {
  console.log(Math.PI)
  const radius = 105; // Background semi-circle size
  const strokeWidth = 1; // Arc thickness
  const dataValues = [20, 30, 50, 60]; // Example values (cyan, orange, purple, grey)
  const colors = ["#16E4A9", "#FF835D", "#9D71FF", "#5A5A5A"]; // Arc colors

  // Convert values to angles in the π (half-circle) range
  const total = dataValues.reduce((acc, val) => acc + val, 0);
  const angles = dataValues.map((val) => (val / total) * Math.PI);

  let startAngle = Math.PI; // Start at 180 degrees (leftmost)
  const arcs = angles.map((angle, index) => {
    const path = createArc(startAngle, startAngle + angle, radius);
    startAngle += angle; // Move to the next arc's start
    return { path, color: colors[index] };
  });


  return (
    <SafeAreaView style={styles.mainContainer}>
       <StatusBar style='light' />
        <Ionicons name="settings-outline" size={24} color="black" style={styles.vectorIcon}/>
        <Text style={styles.heading}>Spending & Budgets</Text>

        <View style={styles.container}>
          
          <Svg width={radius * 2 + strokeWidth} height={radius + strokeWidth+110}>
            <G transform={`translate(${radius + strokeWidth / 2},${radius})`}>
              {/* Background Semi-Circle */}
              <Path
                d={createArc(0, 1* Math.PI/2, radius)}
                fill="none"
                stroke="#ffffff" // Dark grey background
                strokeWidth={strokeWidth}
                strokeLinecap="round"
              />

              {/* Foreground Arcs (Cyan, Orange, Purple, Grey) 
              {arcs.map((arc, index) => (
                <Path
                  key={index}
                  d={arc.path}
                  fill="none"
                  stroke={arc.color}
                  strokeWidth={strokeWidth}
                  strokeLinecap="round"
                />
              ))}*/}
            </G>
          </Svg>
      </View>
        
    </SafeAreaView>
  )
}

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