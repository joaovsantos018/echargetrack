import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Form({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secureTextEntry, setSecureTextEntry] = useState(true);
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

    const togglePasswordVisibility = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    return (
        <View style={styles.container}>
            <View>
                <Text>Email</Text>
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
                <Text>Senha</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
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
                <Button title={textButton} onPress={handleLogin} />
                <Button title='Cadastrar-se'
                    onPress={() => navigation.navigate('Cadastro')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        marginVertical: 10,
    },
    input: {
        height: 50,
        backgroundColor: '#FFF',
        paddingLeft: 40, // Espaço para o ícone de e-mail
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
        color: '#7B8794'
    },
    passwordIcon: {
        position: 'absolute',
        right: 10,
        zIndex: 10,
        color: '#7B8794'
    }
});
