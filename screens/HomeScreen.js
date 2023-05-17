import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TouchableWithoutFeedback, Alert, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, Image, View, Button } from 'react-native';
import { myHijriDateFormat } from "../components/ArabicCalendar";

export default function HomeScreen() {
  const today = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
  const date = today.toLocaleDateString('en-US', options);

   // convert the date to Arabic calendar date using your preferred method
   const arabicDate = myHijriDateFormat(today)


   

  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>Hello!</Text> */}
      <SafeAreaView style={styles.dateContainer}>
        
        <Text style={styles.arabicDate}>{arabicDate}</Text>
        <Text style={styles.date}>{date}</Text>
      </SafeAreaView>
      <Button 
        color="orange"
        title ="Donations" 
        onPress={()=>{ Alert.alert("Donations","What would you like to donate for?", [
          {'text': "Zakaat", onPress:()=> {console.log('zakaat')}},
          {'text': "Sadqah", onPress:()=> {console.log('sadqah')}},
          {'text': "Masajid", onPress:()=> {console.log('Masajid')}}
        ])}}>
      </Button>
      <TouchableOpacity
        onPress={()=> {console.log('image tapped')}}
      >
      <Image blurRadius= {0} style={styles.logo} source={require("../assets/logo.png")}/>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 300,
    width: 300,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  dateContainer: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  date: {
    fontSize: 16,
    
    marginBottom: 5,
    color: '#666',
  },
  arabicDate: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
