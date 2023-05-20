import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const AnnouncementComponent = ({ announcements = [
  'Important update regarding upcoming events',
  'New feature releases',
  'Reminder about the company-wide meeting',
] }) => {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Weekly Announcements</Text>
    <View style={styles.bulletContainer}>
      {announcements.map((announcement, index) => (
        <View key={index} style={styles.bulletPoint}>
          <AntDesign name="rightcircleo" size={14} color="#FF5E3A" />
          <Text style={styles.bulletText}>{announcement}</Text>
        </View>
      ))}
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2,
    elevation: 3,
    paddingHorizontal: 20,
    paddingVertical: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  bulletContainer: {
    marginLeft: 16,
  },
  bulletPoint: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  bulletText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#555',
  },
});

export default AnnouncementComponent;
