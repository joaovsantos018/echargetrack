import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import NavBar from '../navBar/navbar';

export default function Home({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modeloCarro, setModeloCarro] = useState('');
  const [dataCarga, setDataCarga] = useState('');
  const [tipoCarga, setTipoCarga] = useState('');
  const [tempoCarga, setTempoCarga] = useState('');
  const [precoKWh, setPrecoKWh] = useState('');

  const pricePerKWh = {
    'Nível 1': 0.50, 
    'Nível 2': 1.00, 
    'Nível 3': 2.80, 
  };
  
  const handleTipoCargaChange = (tipo) => {
    setTipoCarga(tipo);
    if (tipo) {
      setPrecoKWh(`R$ ${pricePerKWh[tipo].toFixed(2)}`);
    } else {
      setPrecoKWh('');
    }
  };

  const requestSave = () => {
    setModalVisible(false);
  };

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
              <TextInput
                style={styles.modalInput}
                placeholder="Ex: Byd Seal"
                keyboardType="default"
                onChangeText={setModeloCarro}
                value={modeloCarro}
              />

              <Text style={styles.modalLabel}>Data da carga</Text>
              <TextInput
                style={styles.modalInput}
                placeholder="dd/MM/yyyy"
                keyboardType="default"
                onChangeText={setDataCarga}
                value={dataCarga}
              />

              <Text style={styles.modalLabel}>Tempo de carga (Minutos)</Text>
              <TextInput
                style={styles.modalInput}
                placeholder="120"
                keyboardType="numeric"
                onChangeText={setTempoCarga}
                value={tempoCarga}
              />

              <Text style={styles.modalLabel}>Nível do carregador</Text>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={tipoCarga}
                  onValueChange={handleTipoCargaChange}
                  style={styles.picker}
                >
                  <Picker.Item label="Selecione o nível de carga" value="" />
                  <Picker.Item label="Nível 1" value="Nível 1" />
                  <Picker.Item label="Nível 2" value="Nível 2" />
                  <Picker.Item label="Nível 3" value="Nível 3" />
                </Picker>
              </View>

              <Text style={styles.modalLabel}>Preço kWh</Text>
              <TextInput
                style={styles.modalInput}
                placeholder="Preço kWh"
                keyboardType="numeric"
                editable={false}
                value={precoKWh}
              />
            </View>

            <View style={styles.buttons}>
              <TouchableOpacity
                style={styles.saveButton}
                onPress={requestSave}
              >
                <Text style={styles.saveButtonText}>Salvar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.closeButtonText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
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
    width: 350,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 25,
    marginBottom: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  saveButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
    marginRight: 5,
  },
  closeButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
    marginLeft: 5,
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  modalLabel: {
    fontSize: 20,
    marginBottom: 10,
    color: 'black',
  },
  modalInput: {
    width: 250,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  pickerContainer: {
    width: 250,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  picker: {
    width: '100%',
  },
});
