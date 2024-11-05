// HistoryScreen.js
import React from 'react';
import { StyleSheet, View, Text, Modal, TouchableOpacity } from 'react-native';
import NavBar from '../navBar/navbar';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>MEU PERFIL</Text>
      <View style={styles.navBarContainer}>
        <NavBar navigation={navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8A2BE2',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navBarContainer: {
    width: '100%'
  },
  text: { 
    fontSize: 20,
    color: 'white',
    marginTop: 20,
  }
})
