import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Alert, Image, StyleSheet, SafeAreaView, ImageBackground, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importa el ícono que prefieras
import { agregarComentario } from '../util/comentarioService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { db } from '../util/firebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';

const DetallesPantalla = ({ route }) => {
  const { item } = route.params;
  const [comentario, setComentario] = useState('');
  const [usuario, setUsuario] = useState(null);
  const [comentarios, setComentarios] = useState([]);

  useEffect(() => {
    const obtenerUsuario = async () => {
      const email = await AsyncStorage.getItem('userEmail');
      setUsuario(email);
    };

    obtenerUsuario();
    obtenerComentarios();
  }, []);

  const obtenerComentarios = async () => {
    try {
      const comentariosQuery = query(
        collection(db, 'comentarios'),
        where('itemId', '==', item.id)
      );
      const querySnapshot = await getDocs(comentariosQuery);
      const comentariosData = querySnapshot.docs.map(doc => doc.data());
      setComentarios(comentariosData);
    } catch (error) {
      console.error('Error al obtener comentarios:', error);
    }
  };

  async function handleAgregarComentario() {
    if (!usuario) {
      Alert.alert('Error', 'Debes estar registrado para comentar.');
      return;
    }

    const response = await agregarComentario(item.id, usuario, comentario);
    if (response.success) {
      Alert.alert('Éxito', response.message);
      setComentario('');
      obtenerComentarios();
    } else {
      Alert.alert('Error', response.message);
    }
  }

return (
  <ImageBackground 
    source={require('../assets/file(2).jpg')}
    style={styles.background}
  >
    <SafeAreaView style={styles.container}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.titulo}>{item.titulo}</Text>
        <Text style={styles.calificacion}>Calificación: {item.calificacion}</Text>
        <Text style={styles.descripcionAdicional}>{item.texto}</Text>
      </View>
      
      <View style={styles.comentariosContainer}>
        <Text style={styles.comentariosTitulo}>Comentarios:</Text>
        <FlatList
          data={comentarios}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.comentario}>
              <Text style={styles.comentarioUsuario}>{item.usuario}:</Text>
              <Text style={styles.comentarioTexto}>{item.comentario}</Text>
            </View>
          )}
          ListEmptyComponent={<Text style={styles.noComentarios}>No hay comentarios aún.</Text>}
        />

        {/* Mueve el TextInput y el botón aquí */}
        <View style={styles.inputRow}>
          <TextInput
            style={styles.comentarioInput}
            placeholder="Escribe tu comentario aquí"
            value={comentario}
            onChangeText={setComentario}
          />
          <TouchableOpacity onPress={handleAgregarComentario} style={styles.iconButton}>
            <Icon name="paper-plane" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  </ImageBackground>
);

};

const styles = StyleSheet.create({
  background: { flex: 1, resizeMode: 'cover' },
  container: { flex: 1, padding: 20, backgroundColor: 'rgba(0, 0, 0, 0.5)' },
  image: { width: '100%', height: 200, borderRadius: 10, marginBottom: 20 },
  textContainer: { backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: 15, borderRadius: 15, alignItems: 'center', marginTop: 10 },
  titulo: { fontSize: 24, fontWeight: 'bold', color: '#333', textAlign: 'center' },
  calificacion: { fontSize: 18, color: '#2c3e50', marginTop: 10, textAlign: 'center' },
  descripcionAdicional: { fontSize: 14, color: '#888', marginTop: 15, textAlign: 'center' },
  comentarioInput: {
    flex: 1,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    color: 'black',
    
    
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10, // Espacio entre los comentarios y el input
  },
  iconButton: {
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
    padding: 10,
  },
  
  comentariosContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 15,
    borderRadius: 10,
    marginVertical: 20,
    width: '90%',
    alignSelf: 'center',
  },
  comentario: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  comentariosTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  comentarioUsuario: { fontWeight: 'bold', color: '#333' },
  comentarioTexto: { color: '#555' },
  noComentarios: { textAlign: 'center', color: '#888', marginVertical: 20 }
});

export default DetallesPantalla;
