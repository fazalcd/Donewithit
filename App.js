import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TouchableWithoutFeedback, Alert, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, Image, View, Button } from 'react-native';
import { myHijriDateFormat } from "./components/ArabicCalendar";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FaMosque } from 'react-icons/fa';
import { FontAwesome5, Feather, MaterialIcons } from 'react-native-vector-icons';



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
     screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
      // initialRouteName="Home"
    >
      <Tab.Screen
      name = 'Home'
      component={HomeScreen}
      options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
        <FontAwesome5 name="mosque" color={color} size={size} />
      )
        }}
     />
     <Tab.Screen
      name = 'Services'
      component={ServicesScreen}
      options={{
          tabBarLabel: 'Services',
          tabBarIcon: ({ color, size }) => (
        <FontAwesome5 name="hands-helping" color={color} size={size} />
      )
        }}
     />
      <Tab.Screen
      name = 'Donate'
      component={DonateScreen}
      options={{
          tabBarLabel: 'Donate',
          tabBarIcon: ({ color, size }) => (
        <FontAwesome5 name="gift" color={color} size={size} />
      )
        }}
     />
      <Tab.Screen
      name = 'Settings'
      component={SettingsScreen}
      options={{
          tabBarLabel: 'Contact',
          tabBarIcon: ({ color, size }) => (
        <MaterialIcons name="contact-page" color={color} size={size} />
      )
        }}
     />
    </Tab.Navigator>
    
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});
