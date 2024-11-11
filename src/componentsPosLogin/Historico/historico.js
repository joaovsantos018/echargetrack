import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, ActivityIndicator, Modal, Alert } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import NavBar from '../navBar/navbar';


export default function HistoryScreen({ navigation }) {
    const [cargas, setCargas] = useState([]);
    const [loading, setLoading] = useState(true); 
    const [modalVisible, setModalVisible] = useState(false); 
    const [selectedCarga, setSelectedCarga] = useState(null); 

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
                {
                    text: "Cancelar",
                    style: "cancel"
                },
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
        setSelectedCarga(null);
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
                                    onPress={() => deleteCarga(item.idCarga)} // Passando o idCarga para a função
                                >
                                    <Ionicons name="trash" style={styles.icon} />
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
                    <View style={styles.modalContainer}>
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
                    </View>
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
        top:10,
    
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
        justifyContent:'space-between',
        alignItems: 'center',
        width:'100%',
        padding: 10,
        backgroundColor: '#A6E856',
        borderRadius: 5,
        alignItems: 'center',
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
    },
    modalText: {
        fontSize: 16,
        color: '#333333',
        marginBottom: 10,
    },
    closeButton: {
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#FF6347',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    deleteButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#FF6347',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    closeButtonText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
    },
});
