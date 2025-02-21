import { StyleSheet, Text, View,FlatList, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Dropdown } from 'react-native-element-dropdown';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar'
import { startOfMonth, endOfMonth, eachDayOfInterval, format, setMonth } from 'date-fns';

export default function CalendarScreen() {
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

    const [value, setValue] = useState("1");
    const [selectDate,setSelectDate] = useState(null)
    const currYear = new Date().getFullYear();
      const monthIndex = parseInt(value,10)-1;
      const date = new Date(currYear,monthIndex,15)
      const firstDayOfMonth = startOfMonth(date);
      const lastDayOfMonth = endOfMonth(date);
      
    // Get all days in the month
    const daysInMonth = eachDayOfInterval({ start: firstDayOfMonth, end: lastDayOfMonth });
    


  return (
    <SafeAreaView style={styles.main}>
      <StatusBar style='light'/>
      <View style={styles.container}>
        <Ionicons name="settings-outline" size={24} color="#53535d" style={styles.vectorIcon}/>
        <Text style={styles.heading}> Calendar </Text>
        <Text style={styles.BigHeading}> Subs {"\n"} Schedule</Text>
        <View style={{alignSelf:'flex-start',flexDirection:'row'}}>
            <Text style={{color:'#53535d',marginTop:27, marginLeft:21,lineHeight:22, fontSize:20,alignSelf:'flex-start'}}> 3 subscriptions for Today </Text>
            <Dropdown
                  style={styles.dropdown}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  iconStyle={styles.iconStyle}
                  data={data}
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
        </View>
        <View style={styles.daysContainer}>
                <FlatList
                style={styles.flat}
                data={daysInMonth}
                keyExtractor={(item) => item.toString()} // Unique key for each date
                horizontal // Enables horizontal scrolling
                showsHorizontalScrollIndicator={false} // Hides scrollbar
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.dates} onPress={()=>setSelectDate(item)}>
                      <Text style={{fontSize:32,color:'#ffffff',fontWeight:'bold',padding:4}}>{format(item, "dd")}</Text> 
                      <Text style={{fontSize:16,marginLeft:5,marginTop:3}}>{format(item, "eee")}</Text> 
                    </TouchableOpacity>
                )}
                />
        </View>
      </View>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  main:{
    flex:1,
    backgroundColor:'#1c1c23'
},
vectorIcon:{
  marginTop:2,
  marginLeft:290
},
container:{
    backgroundColor: '#282832',
    alignItems:'center',
    borderBottomLeftRadius:25,
    borderBottomRightRadius:25
},
heading:{
  fontSize:24,
  color:'#53535d',
  marginTop:-24,
  lineHeight:24
},
  BigHeading:{
    fontSize:54,
    fontWeight:'bold',
    marginTop:25,
    alignSelf:'flex-start', // Keeping the container in it's own state
    marginLeft:15,
    color:'#ffffff'
  },
  dropdown: {
    margin: 16,
    height: 40,
    width:80,
    marginLeft:50,
    backgroundColor:'#3e3e46',
    padding:10,
    paddingHorizontal:15,
    borderRadius:16,

  },
  daysContainer: {
    flexDirection: 'row',
    marginBottom:15
  },
  dates:{
    padding:5,
    marginHorizontal:10,
    width:48,
    height:103,
    borderRadius:16,
    borderWidth:1,
    
    
  },
  flat:{
    //backgroundColor:'#42424e'
  },

})