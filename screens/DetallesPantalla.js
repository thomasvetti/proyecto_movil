import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const DetallesPantalla = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.titulo}>{item.titulo}</Text>
      <Text style={styles.descripcion}>{item.descripcion}</Text>
      <Text style={styles.calificacion}>Rating: {item.calificacion}</Text>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    color: '#666',
    textAlign: 'center',
  },
  rating: {
    marginTop: 20,
    fontSize: 18,
    color: '#2c3e50',
  },
});

export default DetallesPantalla;
