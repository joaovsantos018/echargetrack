import React from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import FormCadastro from '../formCadastro/formCadastro';
import Title from '../Title/title';

export default function Cadastro({ navigation }) {
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={90} // Ajuste conforme necessário
        >
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Title />
                <FormCadastro navigation={navigation} />
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8A2BE2', // Cor de fundo roxa
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 20,
    },
});
