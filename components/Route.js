import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import Device from 'expo-device';
import * as Location from 'expo-location';
import { masajidDetails } from '../Data/salahDetails';

export default function Route() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const [departureTime, setDepartureTime] = useState(null);
  const [arrivalTime, setArrivalTime] = useState(null);
  const [drivingTime, setDrivingTime] = useState(null);


  useEffect(() => {
    (async () => {
      if (Platform.OS === 'android' && !Device.isDevice) {
        setErrorMsg(
          'Oops, this will not work on Snack in an Android Emulator. Try it on your device!'
        );
        return;
      }
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
console.log('popopo')
      if(location){
        console.log(location)
        const lat = location.coords.latitude.toFixed(5)
        const long = location.coords.longitude.toFixed(5)
        calculateDrivingTime(lat, long)
      }
    })();
  }, []);

  const calculateDrivingTime = (lat, long) => {
    // const origin = `${currentLocation.latitude},${currentLocation.longitude}`;
    // const destinationString = `${destination.latitude},${destination.longitude}`;
    const apiKey = 'hsMUyI3GbYkzlc5MA8S7qBGyDArPPtpo';
    const destinationLatitude = masajidDetails.bentonville.latitude
    const destinationLongitude = masajidDetails.bentonville.longitude

    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.tomtom.com/routing/1/calculateRoute/${lat}%2C${long}%3A${destinationLatitude}%2C${destinationLongitude}/json?key=${apiKey}`
        );
        const data = await response.json();
        if(data){
          // const arrival = data.routes[0].summary.arrivalTime.getMinutes()
          // const departure = data.routes[0].summary.departureTime.getMinutes()
          // const timeDistance = arrival - departure
          // console.log(')))))))))))', timeDistance)
          
          const driveTimeInSeconds = data.routes[0].summary.travelTimeInSeconds
          const driveTimeInMinutes = driveTimeInSeconds/60

          const roundUpMinutes = Math.ceil(driveTimeInMinutes)
          console.log('===========================', roundUpMinutes)
          setDrivingTime(roundUpMinutes)

        }
        console.log(data); // Use the response data as per your requirements
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
    
    // fetch(
    //   `https://api.tomtom.com/routing/1/calculateRoute/${lat}%2C${long}%3A${destinationLatitude}%2C${destinationLongitude}/json?key=${apiKey}`
    // )
    //   .then(response => response.json())
    //   .then(data => {
    //     debugger
    //     if (data.routes && data.routes.length > 0) {
    //       const drivingTimeInSeconds =
    //         data.routes[0].legs[0].duration.value;
    //       const drivingTimeInMinutes = Math.ceil(
    //         drivingTimeInSeconds / 60
    //       );
    //       setDrivingTime(drivingTimeInMinutes);
    //     }
    //   })
    //   .catch(error => {
    //     console.warn('Error calculating driving time:', error);
    //   });
  };

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
  },
});
