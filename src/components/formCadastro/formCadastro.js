import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

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
        <View >
            <View>
                <Text >Email</Text>
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

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        flex: 1,
        padding: 20,
        marginTop: 250,
        justifyContent: 'center',
        alignItems: 'center', // Centraliza os itens horizontalmente
        backgroundColor: '#b6ecb7',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5, // Para Android
    },
    label: {
        color: 'black',
        marginBottom: 5,
        fontSize: 18,
        textAlign: 'center', // Centraliza o texto
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        marginVertical: 10,
        width: '100%', // Para garantir que o contêiner ocupe toda a largura
        alignItems: 'center', // Centraliza os ícones e os campos
    },
    input: {
        height: 50,
        backgroundColor: '#FFF',
        paddingLeft: 40,
        borderRadius: 8,
        fontSize: 18,
        borderColor: '#E4E7EB',
        borderWidth: 1,
        flex: 1,
    },
    icon: {
        position: 'absolute',
        left: 10,
        zIndex: 10,
        color: 'black',
    },
    passwordIcon: {
        position: 'absolute',
        right: 10,
        zIndex: 10,
        bottom: -12,
        color: 'black',
    },
    message: {
        color: 'black',
        textAlign: 'center',
        marginVertical: 10,
    },
    button: {
        height: 40,
        width: '80%', // Define a largura dos botões
        borderWidth: 1,
        borderColor: 'purple',
        backgroundColor: 'white',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    buttonText: {
        color: 'purple',
        fontSize: 18,
    },
});
