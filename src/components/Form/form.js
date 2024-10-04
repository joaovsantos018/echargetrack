import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, TextInput, Button } from 'react-native';

export default function Form({navigation, errorMessage }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [messageResultLogin, setMessageResultLogin] = useState('Preencha o Email e a senha');
    const [textButton, setTextButton] = useState('Fazer login');

    const handleLogin = () => {
        if (email === '' || password === '') {
            setMessageResultLogin('Por favor, preencha todos os campos');
            alert('Por favor, preencha todos os campos');
        } else if (email === 'echargetrack@gmail.com' && password === 'senha123') {
            setMessageResultLogin('Login bem-sucedido');
            alert('Login bem-sucedido');
        } else {
            setMessageResultLogin('Falha ao realizar login');
            alert('Falha ao realizar login');
        }
    };

    return (
        <View>
            <View>
                <Text>Email</Text>
                <TextInput 
                    placeholder='echargetrack@gmail.com'
                    keyboardType='default'
                    onChangeText={setEmail} 
                    value={email} 
                />
                <Text>Senha</Text>
                <TextInput 
                    placeholder='Digite sua senha'
                    secureTextEntry={true}
                    onChangeText={setPassword}
                    value={password}
                />
                <Button title={textButton} onPress={handleLogin} />
                <Button title='Cadastrar-se'
                onPress={() => navigation.navigate('Cadastro')} />
            </View>

            {/* Mensagem de resultado do login */}
            <Text>{messageResultLogin}</Text>
            
            {/* Mensagem de erro personalizada */}
            {errorMessage ? <Text style={{ color: 'red' }}>{errorMessage}</Text> : null}
        </View>
    );
}
