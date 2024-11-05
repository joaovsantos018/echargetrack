// Home.js
import React from 'react'; // Verifique se o React está importado
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function NavBar({ navigation }) {
    return (
        <View style={styles.navbar}>
          <TouchableOpacity onPress={() => navigation.navigate('Historico')}>
          <Icon name="book" size={30} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name="add" size={30} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Meu Perfil')}>
          <Ionicons name="person-circle-outline" size={24} color="black" style={styles.icon} />
          </TouchableOpacity>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      navbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 20,
        backgroundColor: '#f8f8f8',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
      },
      navItem: {
        fontSize: 16,
        color: '#007AFF',
      },
    });