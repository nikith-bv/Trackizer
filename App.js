import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Linking, Image,TouchableOpacity } from 'react-native';
import LoginScreen from './src/Screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';

import EmailSignUpComponent from './src/Components/EmailSignUp';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EmailSignIn from './src/Components/EmailSignIn';
import HomeScreen from './src/Screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <HomeScreen/>
    
  );
}
