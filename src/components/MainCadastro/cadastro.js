import React from 'react';
import {View, Text, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Title from '../Title/title';
import FormCadastro from '../formCadastro/formCadastro';


export default function Cadastro({ navigation }) {
    return (
        <View>
            <Title/>
            <FormCadastro navigation={navigation} />
        </View>
    );
}