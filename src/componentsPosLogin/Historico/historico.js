import React, { useState } from 'react';
import { StyleSheet, View, Text, Modal, TouchableOpacity } from 'react-native';
import NavBar from '../navBar/navbar';

export default function HistoryScreen({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Text style={{ color: 'white', fontSize: 20, marginBottom: 10 }}>Adicionar novo evento</Text>
            </TouchableOpacity>

            {/* Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Adicionar novo evento</Text>
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.closeButtonText}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <Text style={styles.text}>Histórico</Text>
            <View style={styles.navBarContainer}>
                <NavBar navigation={navigation} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8A2BE2',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        color: 'white',
        marginTop: 20,
    },
    navBarContainer: {
        width: '100%',
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo com opacidade para destacar o modal
    },
    modalView: {
        width: 300,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    modalText: {
        fontSize: 18,
        marginBottom: 20,
    },
    closeButton: {
        backgroundColor: '#F1948A',
        borderRadius: 20,
        padding: 10,
        marginTop: 10,
    },
    closeButtonText: {
        color: 'white',
        fontSize: 20,
    },
});
