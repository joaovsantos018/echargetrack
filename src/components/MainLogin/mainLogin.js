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
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 20,
    },
});
