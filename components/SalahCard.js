import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';


const SalahCard = ({ leftText='ooo', rightText='ppp'}) => {
  let SunCalc = require('suncalc');
  let times = SunCalc.getTimes(new Date(), 36.37, -94.21);

  let sunsetHour = times.sunset.getHours();
  let sunsetMinutes = times.sunset.getMinutes();

  if(sunsetMinutes > 55) {
  
    sunsetMinutes = sunsetMinutes + 5 - 60
    sunsetHour = sunsetHour + 1
  } else {
    sunsetMinutes = sunsetMinutes + 5
  }

  const sunsetStr = sunsetHour + ':' + sunsetMinutes
  
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.leftContainer}>
          <Text style={styles.leftText}>{leftText}</Text>
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.rightText}>{leftText == 'Maghrib'? sunsetStr : rightText}</Text>        
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 1
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    backgroundColor:'lavenderblush',
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
    width:'95%'
  },
  leftContainer: {
    flex: 1,
    marginRight: 8,
  },
  rightContainer: {
    flex: 1,
    marginLeft: 8,
    alignItems: 'flex-end',
  },
  leftText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  rightText: {
    fontSize: 16,
  },
});

export default SalahCard;
