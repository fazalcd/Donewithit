import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native';

export default function SettingsScreen() {
  return (
    <View style = {styles.container}>
        <Text>Settings</Text>
        <Button title='click me' onPress ={()=>{}}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });