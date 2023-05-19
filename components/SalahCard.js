import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SalahCard = ({ leftText='ooo', rightText='ppp'}) => {
  console.log('popopop')
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.leftContainer}>
          <Text style={styles.leftText}>{leftText}</Text>
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.rightText}>{rightText}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
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
