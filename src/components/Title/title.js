// src/components/Title/title.js

import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Title() {
    return (
        <Text style={styles.title}>E-ChargeTrack</Text>
    );
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontFamily: 'HelveticaNeue-UltraLightItalic',
        fontSize: 32,
        color: '#2ecc71',
        paddingTop: 150,
        fontSize: 44,
        fontWeight: 'bold',
        color: '#82db85',
        marginBottom: -150, 
    },
});
