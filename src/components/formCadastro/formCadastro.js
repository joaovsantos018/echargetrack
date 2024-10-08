import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, TextInput, Button } from 'react-native';

export default function FormCadastro({navigation, errorMessage }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nome, setNome] = useState('');
    const [celular, setCelular] = useState('');
    const [textButton, setTextButton] = useState('Fazer Cadastro');

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
                <Text>Nome</Text>
                <TextInput 
                    placeholder='Digite seu nome completo'
                    onChangeText={setNome}
                    value={nome}
                />
                <Text>Telefone/Celular</Text>
                <TextInput 
                    placeholder='(xx) xxxxx-xxxx'
                    onChangeText={setCelular}
                    value={celular}
                />
                <Button title={textButton} onPress={handleLogin} />
                <Button title='Voltar para a página de login'
                onPress={() => navigation.navigate('Login')} />
            </View>
        </View>
    );
}
