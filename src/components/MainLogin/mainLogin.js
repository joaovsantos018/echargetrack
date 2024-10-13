// src/components/Main/main.js

import React from 'react';
import { View, StyleSheet } from 'react-native';
import Form from '../FormLogin/form';
import Title from '../Title/title';

export default function Main({ navigation }) {
    return (
        <View style={styles.container}>
            <Title />
            <Form navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#8A2BE2', // Cor de fundo roxa
    },
});
