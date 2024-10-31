import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ImageBackground } from 'react-native';

const DetallesPantalla = ({ route }) => {
  const { item } = route.params;

  return (
    <ImageBackground 
      source={require('../assets/file(2).jpg')} // Cambia esto por tu imagen de fondo preferida
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        <Image source={item.image} style={styles.image} />
        
        {/* Contenedor para el título, calificación y descripción adicional */}
        <View style={styles.textContainer}>
          <Text style={styles.titulo}>{item.titulo}</Text>
          <Text style={styles.calificacion}>Calificación: {item.calificacion}</Text>
          {/* Descripción adicional */}
          <Text style={styles.descripcionAdicional} > {item.texto}      
          </Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente para el contenedor principal
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  textContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fondo blanco semitransparente
    padding: 15,
    borderRadius: 15,
    alignItems: 'center', // Centrar el contenido
    marginTop: 10,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  calificacion: {
    fontSize: 18,
    color: '#2c3e50',
    marginTop: 10,
    textAlign: 'center',
  },
  descripcionAdicional: {
    fontSize: 14,
    color: '#888',
    marginTop: 15,
    textAlign: 'center',
  },
});

export default DetallesPantalla;
