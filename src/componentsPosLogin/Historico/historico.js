import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, ActivityIndicator, Modal, TextInput, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import NavBar from '../navBar/navbar';

export default function HistoryScreen({ navigation }) {
    const [cargas, setCargas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [selectedCarga, setSelectedCarga] = useState(null);
    const [editCarga, setEditCarga] = useState(null);

    useEffect(() => {
        const fetchCargas = async () => {
            try {
                const response = await fetch('http://192.168.1.112:8080/api/allCharges');
                const data = await response.json();
                setCargas(data);
            } catch (error) {
                console.error('Erro ao buscar cargas:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCargas();
    }, []);

    const deleteCarga = async (idCarga) => {
        Alert.alert(
            "Confirmar exclusão",
            "Tem certeza que deseja excluir a carga do histórico?",
            [
                { text: "Cancelar", style: "cancel" },
                {
                    text: "Deletar",
                    onPress: async () => {
                        try {
                            await fetch(`http://192.168.1.112:8080/api/delete/id=${idCarga}`, {
                                method: 'DELETE',
                            });
                            setCargas(cargas.filter((carga) => carga.idCarga !== idCarga));
                            closeModal();
                        } catch (error) {
                            console.error('Erro ao deletar carga:', error);
                        }
                    }
                }
            ]
        );
    };

    const openModal = (carga) => {
        setSelectedCarga(carga);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setEditModalVisible(false);
        setSelectedCarga(null);
        setEditCarga(null);
    };

    const openEditModal = (carga) => {
        setSelectedCarga(carga);
        setEditCarga(carga);
        setEditModalVisible(true);
    };

    const handleEditSave = async () => {
        try {
            const response = await fetch(`http://192.168.1.112:8080/api/updateCharge/id=${editCarga.idCarga}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editCarga), 
            });

            if (response.ok) {
                const updatedCarga = await response.json();
                setCargas((prevCargas) =>
                    prevCargas.map((carga) =>
                        carga.idCarga === updatedCarga.idCarga ? updatedCarga : carga
                    )
                );
                closeModal();
            } else {
                alert('Erro ao editar carga');
            }
        } catch (error) {
            console.error('Erro ao salvar a carga:', error);
            alert('Erro ao salvar a carga');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Histórico de Cargas</Text>

            {loading ? (
                <ActivityIndicator size="large" color="#FFFFFF" style={styles.loading} />
            ) : (
                <FlatList
                    data={cargas}
                    keyExtractor={(item) => item.idCarga.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.itemContainer}>
                            <TouchableOpacity
                                style={styles.itemButton}
                                onPress={() => openModal(item)}
                            >
                                <Text style={styles.itemText}>
                                    {item.modeloCarro} - {item.dataCarga}
                                </Text>
                                <TouchableOpacity
                                    style={styles.deleteButton}
                                    onPress={() => deleteCarga(item.idCarga)}
                                >
                                    <Ionicons name="trash" style={styles.icon} />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.updateIcon}
                                    onPress={() => openEditModal(item)}
                                >
                                    <Ionicons name="pencil" style={styles.icon} />
                                </TouchableOpacity>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            )}

            {selectedCarga && (
                <Modal
                    visible={modalVisible}
                    animationType="slide"
                    onRequestClose={closeModal}
                    transparent={true}
                >
                    <KeyboardAvoidingView
                        style={styles.modalContainer}
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Ajusta o comportamento para iOS e Android
                    >
                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>Detalhes da Carga</Text>
                            <Text style={styles.modalText}>Modelo do Carro: {selectedCarga.modeloCarro}</Text>
                            <Text style={styles.modalText}>Data da Carga: {selectedCarga.dataCarga}</Text>
                            <Text style={styles.modalText}>Tempo de Carga: {selectedCarga.tempoCarga} minutos</Text>
                            <Text style={styles.modalText}>Nível do Carregador: {selectedCarga.nivelCarregador}</Text>
                            <Text style={styles.modalText}>Preço por KWh: R$ {selectedCarga.precoKWH.toFixed(2)}</Text>
                            <Text style={styles.modalText}>
                                Valor Total: R$ {((selectedCarga.tempoCarga / 60) * selectedCarga.precoKWH).toFixed(2)}
                            </Text>

                            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                                <Text style={styles.closeButtonText}>Fechar</Text>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>
                </Modal>
            )}

            {editCarga && (
                <Modal
                    visible={editModalVisible}
                    animationType="slide"
                    onRequestClose={closeModal}
                    transparent={true}
                >
                    <KeyboardAvoidingView
                        style={styles.modalContainer}
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Ajusta o comportamento para iOS e Android
                    >
                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>Editar Carga</Text>
                            <Text style={styles.textLabel}>Modelo do Carro</Text>
                            <TextInput
                                style={styles.modalTextInput}
                                value={editCarga.modeloCarro}
                                onChangeText={(text) => setEditCarga({ ...editCarga, modeloCarro: text })}
                                placeholder="Modelo do Carro"
                            />

                            <Text style={styles.textLabel}>Tempo de Carga (minutos)</Text>
                            <TextInput
                                style={styles.modalTextInput}
                                value={String(editCarga.tempoCarga)}
                                onChangeText={(text) => setEditCarga({ ...editCarga, tempoCarga: text })}
                                placeholder="Tempo de Carga (minutos)"
                            />

                            <Text style={styles.textLabel}>Nível do Carregador</Text>
                            <TextInput
                                style={styles.modalTextInput}
                                value={editCarga.nivelCarregador}
                                onChangeText={(text) => setEditCarga({ ...editCarga, nivelCarregador: text })}
                                placeholder="Nível do Carregador"
                            />

                            <Text style={styles.textLabel}>Data da Carga</Text>
                            <TextInput
                                style={styles.modalTextInput}
                                value={editCarga.dataCarga}
                                onChangeText={(text) => setEditCarga({ ...editCarga, dataCarga: text })}
                                placeholder="Data da Carga"
                            />

                            <Text style={styles.textLabel}>Preço por KWh</Text>
                            <TextInput
                                style={styles.modalTextInput}
                                value={String(editCarga.precoKWH)}
                                onChangeText={(text) => setEditCarga({ ...editCarga, precoKWH: text })}
                                placeholder="Preço por KWh"
                            />

                            <TouchableOpacity style={styles.saveButton} onPress={handleEditSave}>
                                <Text style={styles.saveButtonText}>Salvar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                                <Text style={styles.closeButtonText}>Cancelar</Text>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>
                </Modal>
            )}

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
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalTextInput: {
        width: '100%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingHorizontal: 10,
        fontSize: 16,
        color: '#333',
    },
    saveButton: {
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#32CD32',
        borderRadius: 5,
        alignItems: 'center',
    },
    saveButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    title: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    navBarContainer: {
        width: '100%',
    },
    itemContainer: {
        backgroundColor: '#FFFFFF',
        padding: 15,
        margin: 20,
        borderRadius: 10,
        marginBottom: 10,
    },
    itemButton: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: 10,
        backgroundColor: '#A6E856',
        borderRadius: 5,
    },
    icon: {
        fontSize: 15,
    },
    itemText: {
        fontSize: 16,
        color: '#333333',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#FFFFFF',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#333',
    },
    closeButton: {
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#FF6347',
        borderRadius: 5,
        alignItems: 'center',
    },
    deleteButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#FF6347',
        borderRadius: 5,
        alignItems: 'center',
    },
    updateIcon: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#75B1F0',
        borderRadius: 5,
        alignItems: 'center',
    },
    closeButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    textLabel: {
        fontSize: 15,
        color: '#555',
        marginBottom: 5,
    },
});

