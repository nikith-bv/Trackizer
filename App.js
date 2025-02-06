import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Linking, Image,TouchableOpacity } from 'react-native';
import Register from './src/Components/Register';
import EmailSignUp from './src/Components/EmailSignUp';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.image}/>
      <StatusBar style="auto" />
      <EmailSignUp/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#1C1C23',
    alignItems: 'center', //aj a-> j down
    //justifyContent: 'center', //aj, a-> j down
  },
  
  image:{
    alignItems:'center',
    width:146,
    height:24,
    marginTop: 68
  },
  button:{
      width:327,
      height:48,
      borderRadius:999,
      paddingHorizontal:24,
      paddingVertical:12,
      alignItems:'center',
      justifyContent:'center'
  }
});
