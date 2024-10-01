import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, ImageBackground } from 'react-native';

const FeedPantalla = ({ navigation }) => {
  const items = [
    {
      id: 1,
      titulo: "Título 1",
      descripcion: "Descripción   1",
      calificacion: "★★★★☆",
      image: require('../assets/esd.jpg'),
    },
    {
      id: 2,
      titulo: "Título 2",
      descripcion: "Descripción  ",
      calificacion: "★★★★★",
      image: require('../assets/esd.jpg'),
    },
    {
      id: 3,
      titulo: "Título d 3",
      descripcion: "Descripción del ítem 3",
      calificacion: "★★★☆☆",
      image: require('../assets/esd.jpg'),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground 
        source={require('../assets/file(2).jpg')} // Cambia esto por tu fondo preferido
        style={styles.background}
      >
        <View style={styles.overlay}>
          <ScrollView style={styles.scrollView}>
            {items.map(item => (
              <TouchableOpacity 
                key={item.id} 
                style={styles.card} 
                onPress={() => navigation.navigate('DetallesPantalla', { item })}
              >
                <Image source={item.image} style={styles.image} />
                <View style={styles.textContainer}>
                  <Text style={styles.titulo}>{item.titulo}</Text>
                  <Text style={styles.descripcion}>{item.descripcion}</Text>
                  <Text style={styles.calificacion}>Calificación: {item.calificacion}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Capa semitransparente
    padding: 10,
  },
  scrollView: {
    width: '100%',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Fondo semitransparente blanco
    marginBottom: 15,
    padding: 15,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 5,
    elevation: 4, // Sombra en Android
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  descripcion: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  calificacion: {
    fontSize: 14,
    color: '#2c3e50',
    marginTop: 10,
  },
});

export default FeedPantalla;
