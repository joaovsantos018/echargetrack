import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Form({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [messageResultLogin, setMessageResultLogin] = useState('Preencha o Email e a senha');

    const handleLogin = () => {
        if (email === '' || password === '') {
            setMessageResultLogin('Por favor, preencha todos os campos');
        } else if (email === 'echargetrack@gmail.com' && password === 'senha123') {
            setMessageResultLogin('Login bem-sucedido');
            // navegação ou lógica após login bem-sucedido
        } else {
            setMessageResultLogin('Falha ao realizar login');
        }
    };

    const togglePasswordVisibility = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Email</Text>
            <View style={styles.inputContainer}>
                <Ionicons name="person-circle-outline" size={24} color="black" style={styles.icon} />
                <TextInput
                    underlineColorAndroid="transparent"
                    placeholderTextColor={'#7B8794'}
                    style={styles.input}
                    placeholder='Digite seu e-mail'
                    keyboardType='email-address'
                    onChangeText={setEmail}
                    value={email}
                />
            </View>
            <Text style={styles.label}>Senha</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholderTextColor={'#7B8794'}
                    placeholder='Digite sua senha'
                    secureTextEntry={secureTextEntry}
                    onChangeText={setPassword}
                    value={password}
                />
                <TouchableOpacity onPress={togglePasswordVisibility}>
                    <Ionicons
                        name={secureTextEntry ? "eye-off" : "eye"}
                        size={24}
                        color="black"
                        style={styles.passwordIcon}
                    />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Fazer login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cadastro')}>
                <Text style={styles.buttonText}>Cadastrar-se</Text>
            </TouchableOpacity>
            <Text style={styles.message}>{messageResultLogin}</Text>
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