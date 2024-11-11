import React from 'react'; 
import Icon from 'react-native-vector-icons/Ionicons';
import { View, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function NavBar({ navigation }) {
  const handleLogout = () => {
    Alert.alert(
      "Confirmar Logout",
      "Tem certeza que deseja deslogar?",
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Logout cancelado"),
          style: "cancel"
        },
        {
          text: "Sim",
          onPress: () => {
            // Aqui você pode adicionar lógica de logout, caso necessário, como limpar o token de autenticação
            navigation.navigate('Login'); // Navega para a página de login
          }
        }
      ]
    );
  };

  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={() => navigation.navigate('Historico')}>
        <Icon name="book" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Icon name="add" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogout}>
        <Ionicons name="exit" size={24} color="black" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

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
