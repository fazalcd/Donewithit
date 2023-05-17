import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TouchableWithoutFeedback, Alert, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, Image, View, Button } from 'react-native';
import { myHijriDateFormat } from "./components/ArabicCalendar";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen
 from './screens/HomeScreen';
 import DonateScreen from './screens/DonateScreen';
 import ServicesScreen from './screens/ServicesScreen';
 import SettingsScreen from './screens/SettingsScreen';


const Tab = createBottomTabNavigator()

export default function App() {

  return (
    <NavigationContainer>
    <Tab.Navigator
      // initialRouteName="Home"
    >
      <Tab.Screen
      name = 'Home'
      component={HomeScreen}
     />
     <Tab.Screen
      name = 'Services'
      component={ServicesScreen}
     />
      <Tab.Screen
      name = 'Donate'
      component={DonateScreen}
     />
      <Tab.Screen
      name = 'Settings'
      component={SettingsScreen}
     />
    </Tab.Navigator>
    
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});
