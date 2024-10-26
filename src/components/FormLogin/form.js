import React, { useState } from 'react';
import { Alert, View, Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Form({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [messageResultLogin, setMessageResultLogin] = useState('Preencha o Email e a senha');

    const handleLogin = async () => {
        if (email === '' || password === '') {
            setMessageResultLogin('Por favor, preencha todos os campos');
        } else {
            try {
                const response = await fetch('http://192.168.1.214:8080/api/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email,
                        password,
                    }),
                });
    
                const data = await response.json();
                
                if (response.ok) {
                    Alert.alert('parabéns');
                    navigation.navigate('Home', { user: data.user });
                    setMessageResultLogin(data.message);
                } else {
                    Alert.alert('Email ou senha incorretos!', data.message);
                    setMessageResultLogin(data.message);
                }
            } catch (error) {
                console.error('Erro ao realizar login:', error);
                setMessageResultLogin('Falha ao realizar login');
            }
        }
    };
    
    const togglePasswordVisibility = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={100} // ajuste conforme necessário
        >
            <View style={styles.inner}>
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
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    inner: {
        padding: 24,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#b6ecb7',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    label: {
        color: 'black',
        marginBottom: 5,
        fontSize: 18,
        textAlign: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        width: '100%',
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
        width: '80%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4B0082',
        borderRadius: 8,
        marginVertical: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
});
