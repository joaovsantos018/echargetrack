// src/components/Main/main.js

import React from 'react';
import { View, StyleSheet } from 'react-native';
import Form from '../FormLogin/form';

export default function Main({ navigation }) {
    return (
        <View style={styles.container}>
            <Form navigation={navigation} />
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

