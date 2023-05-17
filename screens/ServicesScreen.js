import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native';

export default function ServicesScreen() {
  return (
    <View style = {styles.container}>
        <Text>Services</Text>
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