// Home.js
import React from 'react'; // Verifique se o React está importado
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import NavBar from '../navBar/navbar';

export default function Home({ navigation }) {
    return (
        <View>
          <NavBar navigation={navigation} ></NavBar>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      navbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        backgroundColor: '#f8f8f8',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
      },
      navItem: {
        fontSize: 16,
        color: '#007AFF',
      },
    });