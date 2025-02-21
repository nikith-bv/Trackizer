import React, { useState } from 'react';
import { StyleSheet,View,Text,TouchableOpacity,FlatList } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { startOfMonth, endOfMonth, eachDayOfInterval, format, setMonth } from 'date-fns';


const data = [
  { month: 'Jan', val:'1'},
  { month: 'feb', val:'2'},
  { month: 'Mar', val:'3'},
  { month: 'Apr', val:'4'},
  { month: 'May', val:'5'},
  { month: 'Jun', val:'6'},
  { month: 'Jul', val:'7'},
  { month: 'Aug', val:'8'},
  { month: 'Sep', val:'9'},
  { month: 'Oct', val:'10'},
  { month: 'Nov', val:'11'},
  { month: 'Dec', val:'12'},
];

const DropdownComponent = () => {
  const [value, setValue] = useState("1");
  const currYear = new Date().getFullYear();
  const monthIndex = parseInt(value,10)-1;
  const date = new Date(currYear,monthIndex,15)
  const firstDayOfMonth = startOfMonth(date);
  const lastDayOfMonth = endOfMonth(date);
  
// Get all days in the month
const daysInMonth = eachDayOfInterval({ start: firstDayOfMonth, end: lastDayOfMonth });

//console.log(daysInMonth.map(d => d.toISOString())); 

  return (
    <View>
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={data}
      search
      maxHeight={300}
      labelField="month" 
      //Looks for which key in your data arr should be displayed as options
      //In the above it checks for month key in the array and displays it in the dropdown list.
      valueField='val'
      placeholder="Select item"
      searchPlaceholder="Search..."
      value={value} //Initial
      //Only for the dropdown to remember that it's presence.
      onChange={item => {
        setValue(item.val)
        //setCurrentMonth(prevMonth=>new Date(prevMonth.get));
      }}
      //The component calls the onChange function and passes the selected item as an argument.
      //The arrow function item => { setValue(item.value); } receives item.
      
    />
    <View style={styles.daysContainer}>
        <FlatList
        style={styles.flat}
        data={daysInMonth}
        keyExtractor={(item) => item.toString()} // Unique key for each date
        horizontal // Enables horizontal scrolling
        showsHorizontalScrollIndicator={false} // Hides scrollbar
        renderItem={({ item }) => (
            <View style={styles.dates}>
            <Text style={styles.text}>{format(item, "d")}</Text> 
            </View>
        )}
        />
    </View>
    <Text>{value}</Text>
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  dropdown: {
    marginTop:100,
    margin: 16,
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  dates:{
    padding:5,
    marginHorizontal:10,
    
  },
  flat:{
    backgroundColor:'#42424e'
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  day: {
  
  },
  text: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal:5,
  },
  daysContainer: {
    flexDirection: 'row',
  },
  day: {
    width: '14.28%', // 7 days in a row
    alignItems: 'center',
    padding: 10,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});