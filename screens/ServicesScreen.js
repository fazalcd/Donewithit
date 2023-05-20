import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native';

export default function ServicesScreen() {
  return (
    <View style = {styles.container}>
        <Text>Services</Text>
        <Button title='click me' onPress ={()=>{}}/>
        {/* <SalahCard/> */}
      {/* <Button 
        color="orange"
        title ="Donations" 
        onPress={()=>{ Alert.alert("Donations","What would you like to donate for?", [
          {'text': "Zakaat", onPress:()=> {console.log('zakaat')}},
          {'text': "Sadqah", onPress:()=> {console.log('sadqah')}},
          {'text': "Masajid", onPress:()=> {console.log('Masajid')}}
        ])}}>
      </Button> */}
      {/* <TouchableOpacity
        onPress={()=> {console.log('image tapped')}}
      >
      <Image blurRadius= {0} style={styles.logo} source={require("../assets/logo.png")}/>
      </TouchableOpacity>
      <StatusBar style="auto" /> */}
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