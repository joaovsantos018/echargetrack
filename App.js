import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './src/components/MainLogin/mainLogin';
import Cadastro from './src/components/MainCadastro/cadastro';
import Home from './src/componentsPosLogin/novoCarregamento/novaCarga'; 
import HistoryScreen from './src/componentsPosLogin/Historico/historico';
import ProfileScreen from './src/componentsPosLogin/Perfil/perfil';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Main}  options={{ headerShown: false }}/>
        <Stack.Screen name="Cadastro" component={Cadastro}  options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={Home}  options={{ headerShown: false }}/>
        <Stack.Screen name="Historico" component={HistoryScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="Meu Perfil" component={ProfileScreen}  options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

