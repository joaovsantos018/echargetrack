import React from 'react';
import { View, Text, TextInput } from 'react-native';

export default function Form() {
    return (
        <View>
            <View>
                <Text>Email</Text>
                <TextInput 
                placeholder='echargetrack@gmail.com'
                keyboardType='default'
                />
                <Text>Senha</Text>
                <TextInput 
                placeholder='Digite sua senha'
                secureTextEntry={true}
                />
            </View>
        </View>
    );
}