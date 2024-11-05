import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, TextInput } from 'react-native';
import NavBar from '../navBar/navbar';

export default function Home({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modeloCarro, setModeloCarro] = useState('');
  const [dataCarga, setDataCarga] = useState('');
  const [tipoCarga, setTipoCarga] = useState('');

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.buttonModal}>
        <Text style={styles.text}>NOVA CARGA</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Informações da carga</Text>
            <View style={styles.modalForm}>
              <Text style={styles.modalLabel}>Modelo do carro</Text>
              <TextInput style={styles.modalInput}
                placeholder='Ex: Byd Seal'
                keyboardType='default'
                onChangeText={setModeloCarro}
                value={modeloCarro}></TextInput>
              <Text style={styles.modalLabel}>Data da carga</Text>
              <TextInput style={styles.modalInput}
                placeholder='dd/MM/yyyy'
                keyboardType='default'
                onChangeText={setModeloCarro}
                value={modeloCarro}></TextInput>
              <Text style={styles.modalLabel}>Nível do carregador</Text>
              <TextInput style={styles.modalInput}
                placeholder='Nível 1, Nível 2, Nível 3'
                keyboardType='default'
                onChangeText={setModeloCarro}
                value={modeloCarro}></TextInput>
            </View>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  buttonModal: {
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 0,
    width: '70%',
    padding: 20,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
  },
  navBarContainer: {
    bottom: 0,
    position: 'absolute',
    width: '100%',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
