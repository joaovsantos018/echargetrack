import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function FormCadastro({ navigation, errorMessage }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nome, setNome] = useState('');
    const [celular, setCelular] = useState('');
    const [textButton, setTextButton] = useState('Fazer Cadastro');
    const [tipoUsuario, setTipoUsuario] = useState('Fornecedor');

    const handleSubmit = () => {
        Alert.alert(`Nome: ${nome}\nEmail: ${email}\nCelular: ${celular}\nTipo de Usuário: ${tipoUsuario}`)
    };

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder='echargetrack@gmail.com'
                    keyboardType='default'
                    onChangeText={setEmail}
                    value={email}
                />
                <Text style={styles.label}>Senha</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Digite sua senha'
                    secureTextEntry={true}
                    onChangeText={setPassword}
                    value={password}
                />
                <Text style={styles.label}>Nome</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Digite seu nome completo'
                    onChangeText={setNome}
                    value={nome}
                />
                <Text style={styles.label}>Telefone/Celular</Text>
                <TextInput
                    style={styles.input}
                    placeholder='(xx) xxxxx-xxxx'
                    onChangeText={setCelular}
                    value={celular}
                />
                <Text style={styles.label}>Tipo de Usuário</Text>
                <Picker
                    selectedValue={tipoUsuario}
                    onValueChange={(itemValue) => setTipoUsuario(itemValue)}
                >
                    <Picker.Item label="Fornecedor" value="Fornecedor" />
                    <Picker.Item label="Instalador" value="Instalador" />
                </Picker>

                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>{textButton}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.buttonText}>Voltar para a página de login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#b6ecb7',
    },
    label: {
        color: '#4B0082',
        marginBottom: 5,
        fontSize: 18,
        textAlign: 'center',
    },

    input: {
        height: 40,
        width: 350,
        backgroundColor: '#FFF',
        paddingLeft: 10,
        borderRadius: 8,
        fontSize: 18,
        borderColor: '#4B0082',
        borderWidth: 1,
        marginBottom: 10,
    },
    button: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4B0082',
        borderRadius: 8,
        marginVertical: 15, // Aumente a margem vertical
    },
    
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
});
